/*
  CONFIGURATION DES FORMULAIRES
  ------------------------------
  Ce fichier configure les formulaires de recrutement et de contact.

  HOW TO EDIT:
  - Modifiez les listes d'options (programmes, années, projets, sujets)
    pour qu'elles correspondent à la réalité actuelle de Héka.
  - Modifiez title et description pour changer le texte introductif.
  - Modifiez submitLabel pour changer le texte du bouton d'envoi.

  Les champs de formulaire (type text, email, select, textarea) sont définis ici.
  L'ordre des fields[] détermine l'ordre d'affichage dans le formulaire.
*/

import type { FormConfiguration } from '../types/content';

// ─── Options partagées ────────────────────────────────────────────────────────

const PROGRAMMES = [
    'Génie mécanique',
    'Génie logiciel',
    'Génie électrique',
    'Génie industriel',
    'Génie informatique',
    'Génie chimique',
    'Génie physique',
    'Autre',
];

const ANNEES = ['1re année', '2e année', '3e année', '4e année', 'Maîtrise', 'Doctorat'];

const PROJETS_SECTIONS = [
    'PODI — Exosquelette',
    'BIRA — Bras robotique',
    'Exécutif / Administration',
    'Communications',
    'Financement',
    'Je ne sais pas encore',
];

const SUJETS_CONTACT = ['Collaboration', 'Partenariat', 'Compétition', 'Événement', 'Média', 'Question générale'];

const TYPES_COLLABORATION = [
    'Commandite financière',
    'Don de matériel',
    'Expertise technique',
    'Mentorat',
    'Collaboration de recherche',
    'Événement ou conférence',
    'Autre',
];

// ─── Formulaire de recrutement ────────────────────────────────────────────────

export const recruitmentForm: FormConfiguration = {
    title: 'Rejoindre Héka',
    description:
        'Vous souhaitez rejoindre PODI, BIRA ou contribuer à Héka? Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.',
    submitLabel: 'Soumettre ma candidature',
    fields: [
        {
            id: 'name',
            label: 'Nom',
            type: 'text',
            required: true,
            placeholder: 'Prénom Nom',
        },
        {
            id: 'email',
            label: 'Courriel',
            type: 'email',
            required: true,
            placeholder: 'prenom.nom@etud.polymtl.ca',
        },
        {
            id: 'programme',
            label: "Programme d'études",
            type: 'select',
            required: true,
            options: PROGRAMMES.map((p) => ({ value: p, label: p })),
        },
        {
            id: 'annee',
            label: "Année d'études",
            type: 'select',
            required: true,
            options: ANNEES.map((a) => ({ value: a, label: a })),
        },
        {
            id: 'projet',
            label: "Projet ou section d'intérêt",
            type: 'select',
            required: false,
            options: PROJETS_SECTIONS.map((p) => ({ value: p, label: p })),
        },
        {
            id: 'competences',
            label: 'Compétences ou expériences pertinentes',
            type: 'textarea',
            required: false,
            placeholder: 'Logiciels maîtrisés, projets antérieurs, langages de programmation…',
            rows: 2,
        },
        {
            id: 'motivation',
            label: 'Motivation',
            type: 'textarea',
            required: true,
            placeholder: 'Pourquoi souhaitez-vous rejoindre Héka?',
            rows: 3,
        },
    ],
};

// ─── Formulaire de contact général ────────────────────────────────────────────

export const contactForm: FormConfiguration = {
    title: 'Nous joindre',
    description: 'Pour toute question, demande de compétition, couverture médiatique ou contact général.',
    submitLabel: 'Envoyer le message',
    fields: [
        {
            id: 'name',
            label: 'Nom',
            type: 'text',
            required: true,
            placeholder: 'Prénom Nom',
        },
        {
            id: 'org',
            label: 'Organisation',
            type: 'text',
            required: false,
            placeholder: 'Facultatif',
        },
        {
            id: 'email',
            label: 'Adresse courriel',
            type: 'email',
            required: true,
            placeholder: 'courriel@exemple.com',
        },
        {
            id: 'sujet',
            label: 'Sujet',
            type: 'select',
            required: true,
            options: SUJETS_CONTACT.map((s) => ({ value: s, label: s })),
        },
        {
            id: 'message',
            label: 'Message',
            type: 'textarea',
            required: true,
            placeholder: 'Votre message…',
            rows: 5,
        },
    ],
};

// ─── Formulaire de partenariat ────────────────────────────────────────────────

export const partnershipForm: FormConfiguration = {
    title: 'Devenir partenaire',
    description: 'Vous souhaitez soutenir Héka ou collaborer avec nos équipes? Décrivez-nous votre intérêt.',
    submitLabel: 'Envoyer la demande',
    fields: [
        {
            id: 'name',
            label: 'Nom',
            type: 'text',
            required: true,
            placeholder: 'Prénom Nom',
        },
        {
            id: 'org',
            label: 'Organisation',
            type: 'text',
            required: true,
            placeholder: "Nom de l'organisation",
        },
        {
            id: 'email',
            label: 'Adresse courriel',
            type: 'email',
            required: true,
            placeholder: 'courriel@organisation.ca',
        },
        {
            id: 'type',
            label: 'Type de collaboration',
            type: 'select',
            required: true,
            options: TYPES_COLLABORATION.map((t) => ({ value: t, label: t })),
        },
        {
            id: 'message',
            label: 'Message',
            type: 'textarea',
            required: false,
            placeholder: 'Décrivez votre intérêt ou votre proposition de collaboration…',
            rows: 4,
        },
    ],
};
