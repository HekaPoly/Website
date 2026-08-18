/*
  PROJETS DE HÉKA
  ----------------
  Ce fichier contient tous les projets actifs de Héka.

  HOW TO ADD A PROJECT:
  1. Copiez le bloc complet d'un projet existant (de { jusqu'à },).
  2. Collez-le à la fin de la liste (avant le crochet ] final).
  3. Modifiez toutes les valeurs entre guillemets.
  4. Changez le "slug" — c'est l'identifiant unique du projet (ex: "mon-projet").
     Le projet sera accessible via la navigation interne automatiquement.
  5. Choisissez un "theme" : "podi" (rouge), "bira" (bleu) ou "default" (bleu Héka).
  6. Sauvegardez le fichier.

  CHAMPS OBLIGATOIRES : slug, name, category, challenge, title, shortDescription, status, theme,
                        disciplines, problem, objective, currentWork, nextSteps, images.

  CHAMPS OPTIONNELS (contenu enrichi de la page détail) :
    problemBody, problemStats, solutionTitle, solutionBody, solutionNote,
    technicalObjectives, roadmap, architecture.
*/

import type { Project } from '../types/content';

export const currentProjects: Project[] = [
    // ─────────────────────────────────────────────────────────────────────────
    // PODI — Exosquelette passif pour les pompiers
    // ─────────────────────────────────────────────────────────────────────────
    {
        slug: 'podi',
        name: 'PODI',
        category: 'Exosquelette passif',
        challenge: 'Soutenir les premiers répondants',
        title: 'Réduire les contraintes physiques vécues par les pompiers.',
        shortDescription:
            "Un exosquelette mécanique passif destiné à assister les pompiers en réduisant la fatigue et les contraintes musculosquelettiques lors d'interventions.",
        description:
            'PODI est un exosquelette mécanique passif — sans moteur ni batterie — conçu pour redistribuer les charges et réduire la fatigue des pompiers sans limiter leur mobilité opérationnelle.',
        status: 'Prototypage en cours',
        theme: 'podi',
        showProjectPage: true,

        disciplines: [
            'Génie mécanique',
            'Biomécanique',
            'Ergonomie',
            'Génie industriel',
            'Prototypage',
            'Fabrication additive',
            'Conception CAO',
            'Analyse structurale',
        ],

        problem:
            "Les pompiers portent jusqu'à 25 kg d'équipement lors d'interventions prolongées, entraînant fatigue et blessures musculosquelettiques.",
        objective:
            "Concevoir un exosquelette passif léger, compatible avec l'équipement existant, réduisant significativement les contraintes physiques sans limiter la mobilité.",

        currentWork: [
            'Amélioration du premier prototype',
            'Réduction du poids du système',
            'Tests mécaniques et validation fonctionnelle',
        ],

        nextSteps: [
            'Affiner les critères de performance selon les retours des pompiers',
            'Réaliser des essais avec des utilisateurs réels',
            'Préparer la présentation pour la prochaine compétition',
        ],

        achievements: ['ace-2026', 'ace-2025', 'anges-du-genie-2025'],
        teamMembers: [],
        partners: [],

        images: {
            hero: 'public/images/projects/podi/PODI_Image_2.JPG',
            solution: 'https://images.unsplash.com/photo-1575507371089-cd0a12c5aae9?w=800&h=800&fit=crop&auto=format',
            gallery: ['public/images/projects/podi/PODI_Image_2.JPG'],
        },

        // ── Contenu enrichi pour la page détail ───────────────────────────────
        problemBody: [
            'Les pompiers interviennent dans des environnements hostiles tout en portant un équipement de protection individuelle pouvant dépasser les 25 kilogrammes. Ces interventions impliquent des mouvements répétitifs, des postures contraignantes et des efforts soutenus sur de longues périodes.',
            "Cette réalité entraîne une fatigue musculaire importante et des contraintes musculosquelettiques qui augmentent le risque de blessures et réduisent l'efficacité opérationnelle, notamment en fin d'intervention.",
        ],

        problemStats: [
            { value: '25 kg+', label: "Équipement porté lors d'une intervention" },
            { value: '↑ 40%', label: 'Des blessures liées aux contraintes physiques' },
            { value: '4–6 h', label: "Durée typique d'une intervention exigeante" },
            { value: '100%', label: "Passif — aucune source d'énergie requise" },
        ],

        solutionTitle: 'PODI — Un exosquelette mécanique passif.',
        solutionBody: [
            "PODI est un exosquelette mécanique passif — c'est-à-dire sans moteur ni batterie — conçu pour redistribuer les charges pesant sur les membres inférieurs et le dos lors d'interventions.",
            'Le système utilise des mécanismes de transfert de force pour réduire les contraintes sur les articulations critiques, sans limiter la liberté de mouvement indispensable au travail des premiers répondants.',
            "La conception tient compte des contraintes réelles du terrain : chaleur, fumée, espaces restreints, compatibilité avec l'équipement existant et facilité d'enfilage.",
        ],

        technicalObjectives: [
            {
                title: 'Réduction de la charge',
                desc: 'Redistribuer significativement la force exercée sur le dos et les membres inférieurs.',
            },
            {
                title: 'Légèreté',
                desc: "Maintenir un poids propre minimal afin de ne pas alourdir l'équipement du pompier.",
            },
            {
                title: 'Liberté de mouvement',
                desc: 'Permettre une plage de mouvement complète pour toutes les tâches opérationnelles.',
            },
            {
                title: 'Résistance aux conditions',
                desc: 'Fonctionner de manière fiable dans des environnements chauds, humides et poussiéreux.',
            },
            {
                title: 'Compatibilité',
                desc: "S'adapter à l'équipement de protection individuelle standard sans modification.",
            },
            {
                title: "Facilité d'utilisation",
                desc: 'Pouvoir être enfilé et retiré rapidement, sans assistance et sous stress.',
            },
        ],

        roadmap: [
            { label: 'Définition du problème', status: 'Complété' },
            { label: 'Revue de littérature', status: 'Complété' },
            { label: 'Définition des exigences', status: 'Complété' },
            { label: 'Conception préliminaire', status: 'Complété' },
            { label: 'Premier prototype', status: 'Complété' },
            { label: 'Tests fonctionnels', status: 'En cours' },
            { label: 'Itérations et amélioration', status: 'À venir' },
            { label: 'Présentation en compétition', status: 'À venir' },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BIRA — Bras robotique intelligent d'assistance
    // ─────────────────────────────────────────────────────────────────────────
    {
        slug: 'bira',
        name: 'BIRA',
        category: "Bras robotique intelligent d'assistance",
        challenge: "Favoriser l'autonomie grâce à la robotique",
        title: "Rendre l'assistance robotique plus intuitive.",
        shortDescription:
            "Un bras robotique intelligent utilisant l'intelligence artificielle et le traitement automatique du langage naturel pour permettre une interaction intuitive.",
        description:
            "BIRA interprète des commandes exprimées en langage naturel et les traduit en mouvements du bras robotique, rendant l'assistance accessible sans apprentissage technique.",
        status: 'Développement actif',
        theme: 'bira',
        showProjectPage: true,

        disciplines: [
            'Intelligence artificielle',
            'Traitement du langage naturel',
            'Génie logiciel',
            'Génie électrique',
            'Robotique',
            'Systèmes embarqués',
            'Interface utilisateur',
            'Conception biomédicale',
        ],

        problem:
            "Les personnes ayant des limitations motrices peinent à utiliser les systèmes d'assistance robotique existants, trop complexes et peu accessibles.",
        objective:
            "Développer un bras robotique capable d'interpréter des commandes vocales en langage naturel et d'exécuter des tâches physiques de manière sûre et intuitive.",

        currentWork: [
            'Développement du module de traitement du langage naturel (NLP)',
            'Développement du système de contrôle du bras robotique',
            'Intégration des modules IA et contrôle',
        ],

        nextSteps: [
            "Tester l'intégration complète du système",
            'Effectuer des tests fonctionnels avec des utilisateurs',
            'Préparer une démonstration publique',
        ],

        achievements: [],
        teamMembers: [],
        partners: [],

        images: {
            hero: 'public/images/projects/bira/IMG_4532 (2).jpg',
            solution: 'https://images.unsplash.com/photo-1563968559507-d87412ef19d6?w=800&h=800&fit=crop&auto=format',
            gallery: [],
        },

        // ── Contenu enrichi pour la page détail ───────────────────────────────
        problemBody: [
            'Plusieurs millions de personnes vivent avec des limitations motrices qui rendent difficiles ou impossibles certaines tâches physiques du quotidien : saisir un objet, déplacer quelque chose, interagir avec leur environnement immédiat.',
            "Les systèmes d'assistance robotique existants sont souvent coûteux, difficiles à prendre en main et nécessitent un apprentissage technique important, ce qui freine leur adoption dans la vie réelle.",
            "L'enjeu n'est pas uniquement technique. C'est aussi un enjeu d'accessibilité : un système d'assistance n'a de valeur que s'il peut être utilisé confortablement, de façon autonome, par la personne qui en a besoin.",
        ],

        problemStats: [
            { value: 'NLP', label: "Traitement automatique du langage naturel pour l'interaction" },
            { value: 'IA', label: "Modèles d'apprentissage pour interpréter les commandes" },
            { value: 'Temps réel', label: "Objectif d'exécution des commandes" },
            { value: '6 DOF', label: 'Degrés de liberté ciblés pour le bras' },
        ],

        solutionTitle: 'BIRA — Un bras robotique qui comprend le langage naturel.',
        solutionBody: [
            "BIRA est un bras robotique intelligent conçu pour interpréter des commandes exprimées en langage naturel. Plutôt que de forcer l'utilisateur à apprendre un langage de commande rigide, BIRA s'adapte à la façon naturelle de communiquer.",
            "Le système intègre un module de traitement du langage naturel (NLP) couplé à un modèle d'IA capable d'interpréter les intentions de l'utilisateur et de les traduire en actions du bras robotique.",
            "Ce qui est actuellement en développement : le module d'interprétation des commandes vocales, le système de contrôle du bras et l'interface de retour visuel à l'utilisateur.",
        ],
        solutionNote:
            "Les capacités cliniques et les applications thérapeutiques de BIRA n'ont pas encore été validées. Le projet est actuellement en phase de développement.",

        technicalObjectives: [
            {
                title: 'Interprétation naturelle',
                desc: 'Comprendre des commandes formulées en langage courant, sans syntaxe rigide à apprendre.',
            },
            {
                title: 'Réponse en temps réel',
                desc: 'Exécuter les commandes avec une latence minimale pour une expérience fluide.',
            },
            {
                title: 'Sécurité des mouvements',
                desc: "Garantir l'absence de mouvements dangereux grâce à des couches de vérification intégrées.",
            },
            {
                title: 'Précision de saisie',
                desc: 'Atteindre et saisir des objets avec une précision suffisante pour des tâches du quotidien.',
            },
            {
                title: 'Robustesse au bruit',
                desc: 'Fonctionner correctement dans des environnements sonores variés.',
            },
            {
                title: "Accessibilité de l'interface",
                desc: 'Rester utilisable par des personnes ayant des capacités motrices et cognitives variables.',
            },
        ],

        roadmap: [
            { label: 'Définition du problème', status: 'Complété' },
            { label: 'Revue de littérature', status: 'Complété' },
            { label: 'Architecture du système', status: 'Complété' },
            { label: 'Module NLP — prototype', status: 'En cours' },
            { label: 'Contrôle du bras robotique', status: 'En cours' },
            { label: 'Intégration des modules', status: 'À venir' },
            { label: 'Tests fonctionnels', status: 'À venir' },
            { label: 'Présentation en compétition', status: 'À venir' },
        ],

        architecture: {
            sectionTitle: 'Comment fonctionne BIRA?',
            sectionSubtitle: 'Architecture du système',
            steps: [
                {
                    step: '01',
                    title: 'Entrée utilisateur',
                    desc: 'L\'utilisateur formule une commande vocale ou textuelle en langage naturel ("Passe-moi le verre sur la table à droite").',
                },
                {
                    step: '02',
                    title: 'Interprétation IA',
                    desc: "Le module NLP analyse la commande, en extrait l'intention et les paramètres clés (objet, direction, action) et génère une instruction structurée.",
                },
                {
                    step: '03',
                    title: 'Exécution robotique',
                    desc: "Le système de contrôle traduit l'instruction en mouvements du bras robotique, avec vérification de sécurité à chaque étape.",
                },
            ],
        },
    },
];

export const legacyProjects: Project[] = [
    {
        slug: 'chaise-lavage-chsld',
        name: 'Chaise de lavage pour résident en CHSLD',
        category: 'Équipement d’assistance',
        challenge: 'Améliorer les soins d’hygiène en CHSLD',
        title: 'Rendre les soins d’hygiène plus sécuritaires, confortables et efficaces.',
        shortDescription:
            'Une chaise de lavage ajustable conçue pour faciliter les soins d’hygiène des résidents en CHSLD tout en réduisant les contraintes pour les préposés.',
        description:
            'Le projet vise à proposer une alternative aux procédures d’hygiène traditionnelles en combinant les avantages d’une douche et d’un bain. La chaise peut être ajustée à plusieurs positions et intègre notamment des coussins chauffants ainsi que des composantes mécaniques et électriques afin d’améliorer le confort et l’efficacité du processus.',
        status: 'Projet terminé',
        theme: 'default',
        disciplines: ['Génie mécanique', 'Génie électrique', 'Conception', 'Prototypage'],
        problem:
            'Les procédures de soins d’hygiène en CHSLD peuvent être longues, physiquement exigeantes et inconfortables pour les résidents comme pour les préposés.',
        objective:
            'Développer une solution de lavage plus rapide, sécuritaire, confortable et efficace pour les résidents en CHSLD et les préposés aux bénéficiaires.',
        achievements: ['cqi-design-innovateur-2023'],
        teamMembers: [],
        partners: [],
        images: {
            hero: 'public/images/projects/legacy/rsw_365h_365cg_true-3.webp',
            gallery: [],
        },
        showProjectPage: false,
    },

    {
        slug: 'exosquelette-electromyographie',
        name: 'Exosquelette contrôlé par électromyographie',
        category: 'Exosquelette d’assistance',
        challenge: 'Assister les personnes atteintes de dystrophie musculaire',
        title: 'Interpréter l’intention de mouvement pour assister les membres supérieurs.',
        shortDescription:
            'Un exosquelette personnalisé utilisant des signaux électromyographiques et l’apprentissage machine afin d’assister les mouvements des membres supérieurs.',
        description:
            'Le projet vise à concevoir un exosquelette capable de reproduire de façon naturelle les mouvements des membres supérieurs. Les intentions de mouvement sont détectées à partir de signaux électromyographiques captés par des électrodes externes, puis interprétées à l’aide de techniques d’apprentissage machine. La structure est adaptée à chaque utilisateur grâce à l’impression 3D et à un scan du corps.',
        status: 'Projet terminé',
        theme: 'default',
        disciplines: [
            'Génie mécanique',
            'Génie électrique',
            'Intelligence artificielle',
            'Apprentissage machine',
            'Biomécanique',
            'Impression 3D',
        ],
        problem:
            'Les personnes atteintes de dystrophie musculaire peuvent perdre progressivement la capacité d’effectuer certains mouvements des membres supérieurs de manière autonome.',
        objective:
            'Développer un exosquelette personnalisé capable d’interpréter l’intention de mouvement de l’utilisateur et d’assister ses mouvements de façon intuitive.',
        achievements: [],
        teamMembers: [],
        partners: [],
        images: {
            hero: 'public/images/projects/legacy/rsw_365h_365cg_true-1-2.webp',
            gallery: [],
        },
        showProjectPage: false,
    },

    {
        slug: 'fauteuil-roulant-intelligent',
        name: 'Fauteuil roulant intelligent',
        category: 'Mobilité assistée',
        challenge: 'Favoriser la mobilité des jeunes enfants',
        title: 'Adapter la mobilité motorisée aux enfants de 2 à 5 ans.',
        shortDescription:
            'Un fauteuil roulant motorisé intelligent conçu pour les jeunes enfants et intégrant différents capteurs ainsi qu’un design ludique.',
        description:
            'Développé en collaboration avec le Centre de recherche de l’Hôpital Marie-Enfant et le CHU Sainte-Justine, ce fauteuil roulant motorisé intègre différents capteurs adaptés aux jeunes enfants. Son design inspiré d’une coccinelle vise également à rendre l’équipement plus attrayant et à réduire son impact psychologique.',
        status: 'Projet terminé et livré',
        theme: 'default',
        disciplines: ['Génie mécanique', 'Génie électrique', 'Robotique', 'Capteurs', 'Design centré utilisateur'],
        problem:
            'Les solutions traditionnelles de mobilité motorisée ne sont pas toujours adaptées aux capacités, dimensions et besoins psychologiques des très jeunes enfants.',
        objective:
            'Concevoir un fauteuil roulant intelligent adapté aux enfants de 2 à 5 ans afin de favoriser leur mobilité et leur autonomie.',
        achievements: [],
        teamMembers: [],
        partners: ['chu-sainte-justine', 'hopital-marie-enfant'],
        images: {
            hero: 'public/images/projects/legacy/rsw_365h_365cg_true-2-1.webp',
            gallery: [],
        },
        showProjectPage: false,
    },

    {
        slug: 'atelier-episens',
        name: 'Atelier ÉpiSENS',
        category: 'Installation sensorielle',
        challenge: 'Sensibiliser aux effets de l’anxiété',
        title: 'Faire ressentir certaines manifestations de l’anxiété à travers une expérience sensorielle.',
        shortDescription:
            'Une installation composée d’un tapis et de bottes électromagnétiques conçue pour simuler certains effets physiques associés à l’anxiété.',
        description:
            'Héka a développé cette installation en collaboration avec le Centre psychosocial Richelieu-Yamaska. Le système repose sur un tapis et des bottes électromagnétiques contrôlés à distance afin de créer une expérience sensorielle destinée aux jeunes adultes de 18 à 35 ans.',
        status: 'Projet terminé et livré',
        theme: 'default',
        disciplines: [
            'Génie électrique',
            'Génie mécanique',
            'Électromagnétisme',
            'Conception d’expérience',
            'Prototypage',
        ],
        problem:
            'Les effets de l’anxiété peuvent être difficiles à comprendre pour les personnes qui ne les vivent pas directement.',
        objective:
            'Créer une expérience sensorielle permettant de sensibiliser les participants à certaines manifestations de l’anxiété.',
        achievements: [],
        teamMembers: [],
        partners: [],
        images: {
            hero: 'public/images/projects/legacy/rsw_365h_365cg_true-3-1.webp',
            gallery: [],
        },
        showProjectPage: false,
    },
];

export const allProjects: Project[] = [...currentProjects, ...legacyProjects];
