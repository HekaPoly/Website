import type { IncomingMessage, ServerResponse } from 'node:http';

type ApiRequest = IncomingMessage & { body?: unknown };
type ApiResponse = ServerResponse & {
    status: (code: number) => ApiResponse;
    json: (body: unknown) => void;
};

type FormPayload = {
    formType?: unknown;
    name?: unknown;
    org?: unknown;
    email?: unknown;
    type?: unknown;
    message?: unknown;
    programme?: unknown;
    annee?: unknown;
    projet?: unknown;
    competences?: unknown;
    motivation?: unknown;
    sujet?: unknown;
};

type FormType = 'partnership' | 'recruitment' | 'general';

const defaultRecipients: Record<FormType, string> = {
    partnership: 'partenariats@heka.polymtl.ca',
    recruitment: 'heka@astp.polymtl.ca',
    general: 'heka@astp.polymtl.ca',
};

const subjects: Record<FormType, string> = {
    partnership: 'Nouvelle demande de partenariat',
    recruitment: 'Nouvelle candidature',
    general: 'Nouveau message de contact',
};

const confirmationSubjects: Record<FormType, string> = {
    partnership: 'Votre demande de partenariat a bien été reçue',
    recruitment: 'Votre candidature a bien été reçue',
    general: 'Votre message a bien été reçu',
};

const confirmationDescriptions: Record<FormType, string> = {
    partnership: 'votre demande de partenariat',
    recruitment: 'votre candidature',
    general: 'votre message',
};

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getBody(body: unknown): FormPayload {
    if (typeof body === 'string') {
        try {
            return JSON.parse(body) as FormPayload;
        } catch {
            return {};
        }
    }

    return body && typeof body === 'object' ? (body as FormPayload) : {};
}

async function sendEmail(payload: { to: string; subject: string; text: string; reply_to?: string }) {
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL,
            ...payload,
        }),
    });

    if (!response.ok) {
        const details = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(details?.message || `Resend returned ${response.status}`);
    }
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Méthode non autorisée.' });
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
        return res.status(500).json({ error: "Le service d'envoi n'est pas configuré." });
    }

    const body = getBody(req.body);
    const formType: FormType =
        body.formType === 'recruitment' || body.formType === 'general' ? body.formType : 'partnership';
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const org = typeof body.org === 'string' ? body.org.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const type = typeof body.type === 'string' ? body.type.trim() : '';

    if (!name || !email || !isValidEmail(email)) {
        return res.status(400).json({ error: 'Veuillez remplir les champs obligatoires correctement.' });
    }

    if (formType === 'partnership' && (!org || !type)) {
        return res.status(400).json({ error: 'Veuillez remplir les champs obligatoires correctement.' });
    }

    const details = Object.entries(body)
        .filter(([key, value]) => key !== 'formType' && typeof value === 'string' && value.trim())
        .map(([key, value]) => `${key}: ${(value as string).trim()}`)
        .join('\n');

    try {
        const recipient =
            process.env.RESEND_TEST_RECIPIENT ||
            (process.env.RESEND_FROM_EMAIL === 'onboarding@resend.dev' && process.env.PARTNERSHIP_RECIPIENT) ||
            (formType === 'partnership' && process.env.PARTNERSHIP_RECIPIENT) ||
            defaultRecipients[formType];

        await sendEmail({
            to: recipient,
            subject: `${subjects[formType]}${formType === 'partnership' && org ? ` - ${org}` : ` - ${name}`}`,
            text: details,
            reply_to: email,
        });

        await sendEmail({
            to: email,
            subject: confirmationSubjects[formType],
            text: `Bonjour ${name},\n\nNous avons bien reçu ${confirmationDescriptions[formType]} pour Héka. Notre équipe vous répondra dans les meilleurs délais.\n\nCordialement,\nHéka`,
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Form email failed', error);
        const message = error instanceof Error ? error.message : '';
        const isSenderConfigurationError = /domain|sender|from|not authorized|forbidden/i.test(message);
        const isSandboxRecipientError = /only send|recipient|test mode|onboarding@resend.dev/i.test(message);

        return res.status(502).json({
            error: isSandboxRecipientError
                ? "En mode test Resend, utilisez l'adresse e-mail de votre compte Resend comme destinataire."
                : isSenderConfigurationError
                ? "L'adresse d'envoi Resend n'est pas autorisée. Vérifiez le domaine dans Resend."
                : "Votre demande n'a pas pu être envoyée. Veuillez réessayer.",
        });
    }
}