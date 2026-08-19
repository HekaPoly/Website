/*
  HÉKA PARTNERS
  --------------------
  This file contains the list of partners.

  HOW TO ADD A PARTNER:
  1. Copy a { ​​... } block from below.
  2. Paste it at the end of the list (before the closing bracket ]).
  3. Fill in the information within the quotation marks.
  4. Place the logo in: public/images/partners/partner-name.svg
  5. Save the file.

  Available categories: "platinum" | "gold" | "silver" | "bronze"

  If the logo is not yet available, leave logo: "" — the name will be displayed instead.
*/

import type { Partner } from '../types/content';

export const partners: Partner[] = [
    {
        id: 'polytechnique-montreal',
        name: 'Polytechnique Montréal',
        logo: 'public/images/partners/logo-exception-noir2x.png',
        website: 'https://polymtl.ca/',
        category: 'Platinum',
        description: 'Description courte du partenariat.',
    },
    {
        id: 'polyfab',
        name: 'Polyfab',
        logo: '',
        website: 'https://polyfab.polymtl.ca/',
        category: 'Platinum',
        description: 'Description courte du partenariat.',
    },
    {
        id: 'ferique',
        name: 'Férique',
        logo: '',
        website: 'https://www.ferique.com/',
        category: 'Gold',
        description: 'Description courte du partenariat.',
    },
    {
        id: 'aep',
        name: 'Association des étudiants de Polytechnique',
        logo: 'public/images/partners/logoAEP-1-edited.webp',
        website: 'https://www.aep.polymtl.ca/',
        category: 'Gold',
        description: 'Description courte du partenariat.',
    },
    {
        id: 'revau',
        name: 'ReVau',
        logo: 'public/images/partners/logo-revau-noir.png',
        website: 'https://www.revau.com/',
        category: 'Gold',
        description: 'Description courte du partenariat.',
    },
    {
        id: 'innovative-vehicle-institute',
        name: 'Innovative Vehicle Institute',
        logo: 'public/images/partners/institut-du-vehicule-innovant.jpg',
        website: 'https://www.ivisolutions.ca/',
        category: 'Silver',
        description: 'Description courte du partenariat.',
    },
    {
        id: 'transmedtech',
        name: 'Institut TransMedTech',
        logo: 'public/images/partners/transmedtech.webp',
        website: 'https://transmedtech.org/',
        category: 'Bronze',
        description: 'Partenaire de Héka dans le domaine des technologies médicales.',
    },

    {
        id: 'kenesto',
        name: 'Kenesto',
        logo: 'public/images/partners/logoKenesto-1-edited.webp',
        website: 'https://www.kenesto.com/',
        category: 'Bronze',
        description: 'Partenaire offrant des outils de gestion et de collaboration pour les fichiers d’ingénierie.',
    },

    {
        id: 'solidworks',
        name: 'SOLIDWORKS',
        logo: 'public/images/partners/SolidWorks_Logo.svg.png',
        website: 'https://www.solidworks.com/',
        category: 'Bronze',
        description: 'Partenaire logiciel pour la conception et la modélisation 3D.',
    },

    {
        id: 'mab-robotics',
        name: 'MAB Robotics',
        logo: '',
        website: 'https://www.mabrobotics.com/',
        category: 'Bronze',
        description: 'Partenaire spécialisé en robotique et en automatisation.',
    },
    {
        id: 'cubemars',
        name: 'CubeMars',
        logo: '',
        website: 'https://cubemars.com/',
        category: 'Bronze',
        description: 'Partenaire spécialisé en robotique et en exploration spatiale.',
    }
];

export const PARTNERSHIP_REASONS : { title: string; desc: string }[] = [
    {
        title: 'Soutenir la formation',
        desc: "Permettre à des étudiants talentueux d'acquérir une expérience pratique sur des problèmes industriels réels.",
    },
    {
        title: 'Accéder à une relève qualifiée',
        desc: "Rencontrer des étudiants multidisciplinaires avant qu'ils terminent leurs études.",
    },
    {
        title: "Contribuer à l'innovation",
        desc: "Participer activement au développement de technologies d'assistance à fort potentiel.",
    },
    {
        title: "Offrir de l'expertise",
        desc: 'Partager vos connaissances techniques avec des équipes motivées et rigoureuses.',
    },
    {
        title: 'Fournir du matériel',
        desc: 'Soutenir concrètement nos projets avec les ressources nécessaires à la fabrication et aux tests.',
    },
];
