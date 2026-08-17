/*
  MEMBRES DE L'ÉQUIPE HÉKA
  -------------------------
  Ce fichier contient tous les membres affichés sur la page Équipe.

  HOW TO ADD A MEMBER:
  1. Copiez un bloc { ... }, ci-dessous.
  2. Collez-le à la fin de la liste (avant le crochet ] final).
  3. Remplissez les informations :
     - id        : identifiant unique sans espaces (ex: "prenom-nom")
     - name      : nom complet affiché
     - role      : titre du poste
     - program   : programme d'études
     - project   : "podi", "bira", ou null si aucun projet spécifique
     - group     : "direction" | "administration" | "podi" | "bira" | "other"
     - photo     : chemin vers la photo (ex: "/images/team/prenom-nom.jpg")
                   Laissez "" pour afficher les initiales automatiquement.
     - linkedin  : URL LinkedIn complète ou ""
     - email     : adresse courriel ou ""
  4. Placez la photo dans public/images/team/
  5. Sauvegardez le fichier.

  Les membres sont regroupés automatiquement par la propriété "group".
*/

import type { TeamMember } from '../types/content'

export const team: TeamMember[] = [
  // ── Direction ──────────────────────────────────────────────────────────
  {
    id: 'president',
    name: 'Phi-Dan Nguyen',
    role: 'Présidence',
    program: 'Génie logiciel',
    project: null,
    group: 'direction',
    photo: '',
    linkedin: '',
    email: 'president@heka.polymtl.ca',
  },
  {
    id: 'vp-tresorerie',
    name: 'Monika ',
    role: 'Vice-présidence finances',
    program: 'Génie informatique',
    project: null,
    group: 'direction',
    photo: '',
    linkedin: '',
    email: 'tresorerie@heka.polymtl.ca',
  },
  {
    id: 'vp-organisation-logistique',
    name: 'Alexandria Nguyen',
    role: 'Vice-présidence organisation et logistique',
    program: 'Matrise en ergonomie',
    project: null,
    group: 'direction',
    photo: '',
    linkedin: '',
    email: '',
  },
  {
    id: 'vp-competitions',
    name: 'Maya',
    role: 'Vice-présidence compétitions',
    program: 'Génie mécanique',
    project: null,
    group: 'direction',
    photo: '',
    linkedin: '',
    email: '',
  },
  {
    id: 'vp-commandites',
    name: 'Rayan',
    role: 'Vice-présidence commandites',
    program: 'Génie logiciel',
    project: null,
    group: 'direction',
    photo: '',
    linkedin: '',
    email: '',
  },

  // ── Équipe PODI ────────────────────────────────────────────────────────
  {
    id: 'directeur-podi',
    name: 'Directeur·rice PODI',
    role: 'Direction de projet',
    program: 'Génie mécanique',
    project: 'podi',
    group: 'podi',
    photo: '',
    linkedin: '',
    email: '',
  },
  {
    id: 'chef-mecanique-podi',
    name: 'Chef mécanique — PODI',
    role: 'Responsable mécanique',
    program: 'Génie mécanique',
    project: 'podi',
    group: 'podi',
    photo: '',
    linkedin: '',
    email: '',
  },
  {
    id: 'chef-conception-podi',
    name: 'Chef conception — PODI',
    role: 'Responsable conception',
    program: 'Génie industriel',
    project: 'podi',
    group: 'podi',
    photo: '',
    linkedin: '',
    email: '',
  },

  // ── Équipe BIRA ────────────────────────────────────────────────────────
  {
    id: 'directeur-bira',
    name: 'Directeur·rice BIRA',
    role: 'Direction de projet',
    program: 'Génie logiciel',
    project: 'bira',
    group: 'bira',
    photo: '',
    linkedin: '',
    email: '',
  },
  {
    id: 'chef-ia-bira',
    name: 'Chef IA — BIRA',
    role: 'Responsable intelligence artificielle',
    program: 'IA / Génie logiciel',
    project: 'bira',
    group: 'bira',
    photo: '',
    linkedin: '',
    email: '',
  },
  {
    id: 'chef-electronique-bira',
    name: 'Chef électronique — BIRA',
    role: 'Responsable électronique',
    program: 'Génie électrique',
    project: 'bira',
    group: 'bira',
    photo: '',
    linkedin: '',
    email: '',
  },
]
