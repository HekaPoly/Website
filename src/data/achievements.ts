/*
  HÉKA ACHIEVEMENTS
  ---------------------
  This file contains all achievements: competitions, awards, events, etc.

  HOW TO ADD AN ACHIEVEMENT:
  1. Copy a { ​​... } block from below.
  2. Paste it in the correct place in the list (reverse chronological order).
  3. Fill in the information:
     - id          : unique identifier without spaces (e.g., "ace-2027")
     - date        : year or ISO date (e.g., "2027" or "2027-05-15")
     - type        : "competition" | "award" | "event" | "conference" | "media" | "milestone"
     - title       : title of the achievement
     - project     : "podi", "bira", or null if no specific project
     - status      : "completed" | "upcoming" | "cancelled"
     - location    : location (optional)
     - description : explanatory text
     - result      : result achieved (e.g., "1st place") — optional
     - image       : path to an image or "" (e.g., "/images/achievements/ace-2027.jpg")
     - link        : external link or ""
  4. Save the file.

  Achievements are automatically sorted from newest to oldest.
  Filters automatically adapt to the types present in the list.
*/

import type { Achievement } from '../types/content';


export const achievements: Achievement[] = [
    {
        id: 'ace-2026',
        date: '2026',
        type: 'competition',
        title: '1re place — Applied Collegiate Exoskeleton Competition (ACE)',
        project: 'podi',
        status: 'completed',
        location: 'Hamilton, Ontario',
        description:
            "PODI remporte la première place de l'Applied Collegiate Exoskeleton Competition à Hamilton, en Ontario, une compétition internationale où des équipes étudiantes conçoivent et présentent des exosquelettes fonctionnels.",
        result: '1re place',
        image: '',
        link: '',
    },
    {
        id: 'ace-2025',
        date: '2025',
        type: 'competition',
        title: '2e place — Applied Collegiate Exoskeleton Competition (ACE)',
        project: 'podi',
        status: 'completed',
        location: 'Ann Arbor, Michigan',
        description:
            "PODI décroche la deuxième place de l'Applied Collegiate Exoskeleton Competition à Ann Arbor, au Michigan. La compétition met à l'épreuve la conception et les performances d'exosquelettes développés par des équipes étudiantes.",
        result: '2e place',
        image: '',
        link: '',
    },
    {
        id: 'anges-du-genie-2025',
        date: '2025',
        type: 'award',
        title: 'Prix Anges du génie — Technologies de la santé et alimentaires',
        project: 'podi',
        status: 'completed',
        location: '',
        description:
            "PODI remporte le prix Anges du génie dans la catégorie Technologies de la santé et alimentaires. Remis par FÉRIQUE, ce prix souligne la créativité, l'expertise et la contribution positive du projet à la société, avec une bourse de 5 000 $.",
        result: 'Lauréat',
        image: '',
        link: '',
    },
    {
        id: 'biodesign-synergy-2023',
        date: '2023',
        type: 'award',
        title: 'Interdisciplinary Synergy Award — BioDesign Synergy',
        project: null,
        status: 'completed',
        location: '',
        description:
            "Héka reçoit le prix Interdisciplinary Synergy de BioDesign Synergy, une initiative réunissant notamment des étudiants de McGill et de l'Université de Calgary autour de l'innovation biomédicale et de la collaboration interdisciplinaire.",
        result: 'Lauréat',
        image: '',
        link: '',
    },
    {
        id: 'societe-technique-annee-2023',
        date: '2022–2023',
        type: 'award',
        title: "Société technique de l'année — AEP",
        project: null,
        status: 'completed',
        location: '',
        description:
            "Héka est nommée Société technique de l'année lors du Gala de l'implication de l'Association étudiante de Polytechnique, soulignant son engagement et sa contribution à la communauté étudiante.",
        result: 'Lauréat',
        image: '',
        link: '',
    },
    {
        id: 'cqi-design-innovateur-2020',
        date: '2020',
        type: 'competition',
        title: "3e place — Design innovateur, Compétition québécoise d'ingénierie",
        project: null,
        status: 'completed',
        location: '',
        description:
            "Héka obtient la troisième place dans la catégorie Design innovateur de la Compétition québécoise d'ingénierie (CQI), qui met en valeur des solutions d'ingénierie étudiantes innovantes et leur qualité de conception.",
        result: '3e place',
        image: '',
        link: '',
    },
    {
        id: 'forces-avenir-2019',
        date: '2019',
        type: 'award',
        title: 'Finaliste — Forces AVENIR Santé',
        project: null,
        status: 'completed',
        location: '',
        description:
            'Le projet de douche automatisée pour les résidents en CHSLD est finaliste dans la catégorie AVENIR Santé de Forces AVENIR, qui reconnaît les projets étudiants ayant un impact positif sur la santé et la société.',
        result: 'Finaliste',
        image: '',
        link: '',
    },
    {
        id: 'cqi-design-innovateur-2016',
        date: '2016',
        type: 'competition',
        title: "2e place — Design innovateur, Compétition québécoise d'ingénierie",
        project: null,
        status: 'completed',
        location: '',
        description:
            "L'équipe obtient la deuxième place dans la catégorie Design innovateur de la Compétition québécoise d'ingénierie, récompensant la créativité et la qualité d'une solution d'ingénierie développée par des étudiants.",
        result: '2e place',
        image: '',
        link: '',
    },
    {
        id: 'cqi-sensibilisation-2016',
        date: '2016',
        type: 'award',
        title: 'Prix Sensibilisation aux problèmes sociaux — CQI',
        project: null,
        status: 'completed',
        location: '',
        description:
            "Dans le cadre de la Compétition québécoise d'ingénierie, l'équipe reçoit une distinction soulignant sa prise en compte des enjeux sociaux et l'utilisation de l'ingénierie pour répondre à des besoins humains et collectifs.",
        result: 'Lauréat',
        image: '',
        link: '',
    },
];
