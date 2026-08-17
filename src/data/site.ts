/*
  FICHIER DE CONFIGURATION GÉNÉRAL DU SITE HÉKA
  ------------------------------------------------
  Ce fichier contient les informations générales de l'organisation.
  Modifiez les valeurs entre guillemets pour mettre à jour le site.

  HOW TO EDIT:
  1. Trouvez la propriété à modifier.
  2. Changez le texte entre guillemets.
  3. Sauvegardez le fichier.

  Ne modifiez pas les noms des propriétés (avant les deux-points).
*/

import type { SiteConfiguration } from '../types/content';

export const site: SiteConfiguration = {
    name: 'Héka',
    organization: 'Polytechnique Montréal',

    tagline: "L'ingénierie au service de la santé.",

    description:
        'Héka est une société technique de Polytechnique Montréal qui réunit des étudiants de différentes disciplines afin de concevoir des solutions technologiques répondant à des enjeux concrets en santé, en assistance humaine et en sécurité physique.',

    email: 'heka@astp.polymtl.ca',
    emailRecruitment: 'heka@astp.polymtl.ca',
    emailPartnership: 'partenariats@heka.polymtl.ca',

    address: 'Polytechnique Montréal\n2900 Boul. Édouard-Montpetit\nMontréal, QC H3T 1J4',

    socialMedia: {
        instagram: 'https://www.instagram.com/heka.polymtl/',
        linkedin: 'https://www.linkedin.com/company/haka-polymtl/',
        facebook: 'https://www.facebook.com/HekaPolymtl/',
        linktree:
            'https://linktr.ee/heka.poly?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAac3KfBAUqxJgEbD2Cf9Jo0hvENhI9jwXzNNRtx6Xo3_hGJfn8qW7s3cFuz7lg_aem_P7CFymtCXTdBFRvCy7zNew',
        youtube: 'https://www.youtube.com/@hekapolymtl',
    },

    mission: [
        {
            title: 'Concevoir',
            description:
                "Développer des solutions d'ingénierie adaptées à des besoins humains réels, en suivant une démarche rigoureuse du problème jusqu'au prototype.",
        },
        {
            title: 'Former',
            description:
                "Permettre aux étudiants d'acquérir une expérience pratique, technique et multidisciplinaire qui complète leur formation académique.",
        },
        {
            title: 'Sensibiliser',
            description:
                'Faire connaître les enjeux biomédicaux auprès des ingénieurs, des étudiants et de la communauté de Polytechnique Montréal.',
        },
    ],

    statistics: [
        { value: '30+', label: 'Membres actifs' },
        { value: '5', label: 'Disciplines représentées' },
        { value: '2', label: 'Projets actifs' },
        { value: '3+', label: 'Prototypes réalisés' },
    ],

    processSteps: [
        { label: 'Comprendre un besoin réel', image: '' },
        { label: 'Effectuer la recherche' },
        { label: 'Définir les exigences' },
        { label: 'Concevoir une solution' },
        { label: 'Prototyper' },
        { label: 'Tester et améliorer' },
        { label: 'Présenter & valider' },
    ],

    values: [
        {
            title: 'Impact humain',
            desc: "Chaque décision de conception part d'un besoin réel. Nous développons des technologies qui améliorent concrètement la vie des personnes.",
        },
        {
            title: 'Collaboration',
            desc: 'La diversité des disciplines est notre force. Nos équipes réunissent des géniuses mécaniques, logiciels, électriques et des spécialistes en ergonomie.',
        },
        {
            title: 'Rigueur',
            desc: "Nous suivons une démarche d'ingénierie structurée, de la définition du problème jusqu'à la validation du prototype.",
        },
        {
            title: 'Innovation responsable',
            desc: "Nous développons des technologies ambitieuses sans promettre ce que nous n'avons pas encore démontré.",
        },
        {
            title: 'Accessibilité',
            desc: 'Nos solutions doivent être utilisables dans des contextes réels, par des personnes réelles, dans des conditions réelles.',
        },
    ],

    recruitmentBenefits: [
        { label: 'Expérience pratique sur des prototypes fonctionnels' },
        { label: 'Collaboration avec des étudiants de toutes les disciplines' },
        { label: 'Participation à des compétitions interuniversitaires' },
        { label: 'Réseautage avec des partenaires industriels' },
        { label: 'Responsabilités réelles dès la première année' },
    ],
};
