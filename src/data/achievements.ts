/*
  RÉALISATIONS DE HÉKA
  ---------------------
  Ce fichier contient toutes les réalisations : compétitions, prix, événements, etc.

  HOW TO ADD AN ACHIEVEMENT:
  1. Copiez un bloc { ... }, ci-dessous.
  2. Collez-le au bon endroit dans la liste (ordre chronologique décroissant).
  3. Remplissez les informations :
     - id          : identifiant unique sans espaces (ex: "ace-2027")
     - date        : année ou date ISO (ex: "2027" ou "2027-05-15")
     - type        : "competition" | "award" | "event" | "conference" | "media" | "milestone"
     - title       : titre de la réalisation
     - project     : "podi", "bira", ou null si aucun projet spécifique
     - status      : "completed" | "upcoming" | "cancelled"
     - location    : lieu (facultatif)
     - description : texte explicatif
     - result      : résultat obtenu (ex: "1re place") — facultatif
     - image       : chemin vers une image ou "" (ex: "/images/achievements/ace-2027.jpg")
     - link        : lien externe ou ""
  4. Sauvegardez le fichier.

  Les réalisations sont triées automatiquement du plus récent au plus ancien.
  Les filtres s'adaptent automatiquement aux types présents dans la liste.
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
