/*
  HÉKA TEAM MEMBERS
  -------------------------
  This file contains all members displayed on the Team page.

  HOW TO ADD A MEMBER:
  1. Copy a { ​​... } block below.
  2. Paste it at the end of the list (before the final ] bracket).
  3. Fill in the information:
     - id        : unique identifier without spaces (e.g., "firstname-lastname")
     - name      : full name to display
     - role      : job title
     - program   : study program
     - project   : "podi", "bira", or null if no specific project
     - group     : "direction" | "administration" | "podi" | "bira" | "other"
     - photo     : path to the photo (e.g., "/images/team/firstname-lastname.jpg")
                   Leave as "" to display initials automatically.
     - linkedin  : full LinkedIn URL or ""
     - email     : email address or ""
  4. Place the photo in public/images/team/
  5. Save the file.

  Members are automatically grouped by the "group" property.
*/

import type { TeamMember } from '../types/content';

export const team: TeamMember[] = [
    // ── Direction ──────────────────────────────────────────────────────────
    {
        id: 'directeur-general',
        name: 'Phi-Dan Nguyen',
        role: 'Directeur général',
        program: 'Génie logiciel',
        project: null,
        group: ['direction'],
        photo: 'public/images/team/members/CLUB-1.jpg',
        linkedin: 'https://www.linkedin.com/in/phi-dan-nguyen',
        message:
            'Salut! Je suis Phi-Dan, le directeur général d’Héka. Je suis passionné par la technologie et l’innovation, et je suis ravi de diriger une équipe aussi talentueuse. N’hésitez pas à me contacter pour toute question ou collaboration!',
        email: 'president@heka.polymtl.ca',
    },
    {
        id: 'vp-tresorerie',
        name: 'Monika Luksza',
        role: 'Vice-présidence finances',
        program: 'Génie informatique',
        project: null,
        group: ['direction'],
        photo: 'images/team/members/CLUB-35.jpg',
        linkedin: '',
        email: 'tresorerie@heka.polymtl.ca',
    },
    {
        id: 'vp-organisation-logistique',
        name: 'Alexandria Nguyen',
        role: 'Vice-présidence organisation et logistique',
        program: 'Matrise en ergothérapie',
        project: null,
        group: ['direction'],
        photo: 'images/team/members/CLUB-28.jpg',
        linkedin: '',
        email: 'marketing@heka.polymtl.ca',
    },
    {
        id: 'vp-competitions',
        name: 'Maya Khaoua',
        role: 'Vice-présidence compétitions',
        program: 'Génie mécanique',
        project: null,
        group: ['direction'],
        photo: 'images/team/members/CLUB-26.jpg',
        linkedin: '',
        email: '',
    },
    {
        id: 'vp-partenariats',
        name: 'Rayan Ajakane',
        role: 'Vice-présidence partenariats',
        program: 'médecine',
        project: null,
        group: ['direction'],
        photo: 'images/team/members/CLUB-33.jpg',
        linkedin: '',
        email: 'partenariats@heka.polymtl.ca',
    },

    // ── Équipe PODI ────────────────────────────────────────────────────────
    {
        id: 'directeur-podi',
        name: 'Marco Pontrelli',
        role: 'Directeur de projet',
        program: 'Génie biomédical',
        project: 'podi',
        group: ['podi', 'direction'],
        photo: 'images/team/members/CLUB-36.jpg',
        linkedin: '',
        email: 'direction-technique@heka.polymtl.ca',
    },
    {
        id: 'cs-electromecanique-podi',
        name: 'Anabelle Farand',
        role: 'CS Électromécanique',
        program: '',
        project: 'podi',
        group: ['podi'],
        photo: 'images/team/members/CLUB-24.jpg',
        linkedin: '',
        email: '',
    },
    {
        id: 'cs-controle-podi',
        name: 'Haya Theodori',
        role: 'CS Contrôle',
        program: 'génie biomédical',
        project: 'podi',
        group: ['podi'],
        photo: 'public/images/team/members/CLUB-22.jpg',
        linkedin: '',
        email: '',
    },
    {
        id: 'cs-pcb-podi',
        name: 'Vladislav Savciuc',
        role: 'CS PCB',
        program: '',
        project: 'podi',
        group: ['podi'],
        photo: 'images/team/members/CLUB-4.jpg',
        linkedin: '',
        email: '',
    },
    {
        id: 'cs-biomecanique-podi',
        name: 'Marc-Antoine Pilon',
        role: 'CS Biomécanique',
        program: '',
        project: 'podi',
        group: ['podi'],
        photo: 'images/team/members/CLUB-38.jpg',
        linkedin: '',
        email: '',
    },
    {
        id: 'cs-structure-podi',
        name: 'Mathias De Billy',
        role: 'CS Structure',
        program: '',
        project: 'podi',
        group: ['podi'],
        photo: 'images/team/members/CLUB-13.jpg',
        linkedin: '',
        email: '',
    },

    // ── Équipe BIRA ────────────────────────────────────────────────────────
    {
        id: 'directeur-bira',
        name: 'Nicolas Petrule',
        role: 'Directeur de projet',
        program: 'Génie biomédical',
        project: 'bira',
        group: ['bira', 'direction'],
        photo: 'images/team/members/CLUB-2.jpg',
        linkedin: '',
        email: '',
    },

    {
        id: 'cs-robotique-bira',
        name: 'Matthias Benoist',
        role: 'CS Robotique',
        program: '',
        project: 'bira',
        group: ['bira'],
        photo: '',
        linkedin: '',
        email: '',
    },
    {
        id: 'cs-pince-bira',
        name: 'Cai Jie',
        role: 'CS Pince',
        program: '',
        project: 'bira',
        group: ['bira'],
        photo: '',
        linkedin: '',
        email: '',
    },
    {
        id: 'cs-pcb-bira',
        name: 'Dali Lourdjane',
        role: 'CS PCB',
        program: '',
        project: 'bira',
        group: ['bira'],
        photo: '',
        linkedin: '',
        email: '',
    },
    {
        id: 'cs-ia-bira',
        name: 'Abdellah Ryad Bellit',
        role: 'CS IA',
        program: '',
        project: 'bira',
        group: ['bira'],
        photo: '',
        linkedin: '',
        email: '',
    },
];
