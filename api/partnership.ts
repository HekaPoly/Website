import type { IncomingMessage, ServerResponse } from 'node:http';

type ApiRequest = IncomingMessage & { body?: unknown };
type ApiResponse = ServerResponse & {
    status: (code: number) => ApiResponse;
    json: (body: unknown) => void;
};

type PartnershipForm = {
    name?: unknown;
    org?: unknown;
    email?: unknown;
    type?: unknown;
    message?: unknown;
};

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getBody(body: unknown): PartnershipForm {
    if (typeof body === 'string') {
        try {
            return JSON.parse(body) as PartnershipForm;
        } catch {
            return {};
        }
    }

    return body && typeof body === 'object' ? (body as PartnershipForm) : {};
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
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const org = typeof body.org === 'string' ? body.org.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const type = typeof body.type === 'string' ? body.type.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !org || !email || !type || !isValidEmail(email)) {
        return res.status(400).json({ error: 'Veuillez remplir les champs obligatoires correctement.' });
    }

    const details = [
        `Nom: ${name}`,
        `Organisation: ${org}`,
        `Courriel: ${email}`,
        `Type de collaboration: ${type}`,
        '',
        'Message:',
        message || '(Aucun message fourni)',
    ].join('\n');

    try {
        const recipient = process.env.PARTNERSHIP_RECIPIENT || 'partenariats@heka.polymtl.ca';

        await sendEmail({
            to: recipient,
            subject: `Nouvelle demande de partenariat - ${org}`,
            text: details,
            reply_to: email,
        });

        await sendEmail({
            to: email,
            subject: 'Votre demande de partenariat a bien été reçue',
            text: `Bonjour ${name},\n\nNous avons bien reçu votre demande de partenariat pour Héka. Notre équipe vous répondra dans les meilleurs délais.\n\nCordialement,\nHéka`,
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Partnership email failed', error);
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