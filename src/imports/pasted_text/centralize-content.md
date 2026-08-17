# Prompt Figma Make — Centraliser le contenu dans des fichiers `data`

Refactor the existing Héka website so that **all editable website content is centralized into simple
TypeScript data files**, separate from the React components and page layout.

The goal is to make the website extremely easy to maintain for future Héka members, including people
with little or no programming experience.

Do **not** redesign the website unless necessary. Preserve the existing visual identity, layout,
components, responsive behavior, colors, typography, and animations.

The main objective is to improve the architecture and content management.

## Core principle

React components should contain as little hard-coded content as possible.

Editable information should live inside:

```text
src/data/
```

The website should read the data from these files and automatically render the corresponding
content.

For example, adding a new team member should only require editing `team.ts`, not modifying
`Team.tsx`.

Adding a new project should only require editing `projects.ts`, not creating a completely new page
manually.

---

# Required folder structure

Create the following structure:

```text
src/
├── components/
├── data/
│   ├── site.ts
│   ├── projects.ts
│   ├── team.ts
│   ├── partners.ts
│   ├── achievements.ts
│   ├── forms.ts
│   └── navigation.ts
│
├── types/
│   └── content.ts
│
├── pages/
└── ...
```

Use TypeScript for all data files.

---

# 1. `site.ts`

Create a central configuration file for general website information.

It should contain information such as:

```ts
export const site = {
    name: 'Héka',
    organization: 'Polytechnique Montréal',

    tagline: 'L’ingénierie au service de la santé et de l’humain.',

    description:
        'Héka est une société technique de Polytechnique Montréal qui développe des solutions technologiques répondant à des enjeux humains concrets.',

    email: 'heka@polymtl.ca',

    socialMedia: {
        instagram: '',
        linkedin: '',
        facebook: '',
    },

    mission: [
        {
            title: 'Concevoir',
            description: 'Développer des solutions d’ingénierie adaptées à des besoins humains réels.',
        },
        {
            title: 'Former',
            description: 'Offrir aux étudiants une expérience pratique et multidisciplinaire.',
        },
        {
            title: 'Sensibiliser',
            description: 'Faire connaître les enjeux biomédicaux auprès de la communauté.',
        },
    ],

    statistics: [
        {
            value: 'XX',
            label: 'Membres',
        },
        {
            value: '2',
            label: 'Projets actifs',
        },
    ],
};
```

Pages and components should import this information instead of duplicating it.

---

# 2. `projects.ts`

Create a single data file containing all Héka projects.

Each project should follow the same reusable structure.

Example:

```ts
export const projects = [
    {
        slug: 'podi',

        name: 'PODI',

        shortName: 'PODI',

        category: 'Exosquelette passif',

        challenge: 'Soutenir les premiers répondants',

        title: 'Réduire les contraintes physiques vécues par les pompiers.',

        shortDescription:
            'Un exosquelette mécanique passif destiné à assister les pompiers pendant certaines tâches physiquement exigeantes.',

        description: 'Description plus complète du projet.',

        status: 'En développement',

        theme: 'podi',

        disciplines: ['Génie mécanique', 'Ergonomie', 'Prototypage', 'Sécurité'],

        problem: 'Description du problème auquel répond le projet.',

        objective: 'Description de l’objectif technique.',

        currentWork: ['Amélioration du prototype', 'Réduction du poids', 'Tests mécaniques'],

        nextSteps: ['Définir les critères de performance', 'Effectuer de nouveaux essais'],

        achievements: ['ace-2026'],

        teamMembers: ['member-id-example'],

        partners: [],

        images: {
            hero: '',
            gallery: [],
        },
    },

    {
        slug: 'bira',

        name: 'BIRA',

        category: 'Bras robotique intelligent',

        challenge: 'Favoriser l’autonomie',

        title: 'Rendre l’assistance robotique plus intuitive.',

        shortDescription:
            'Un bras robotique intelligent utilisant l’intelligence artificielle et le traitement automatique du langage naturel.',

        status: 'En développement',

        theme: 'bira',

        disciplines: ['Robotique', 'Intelligence artificielle', 'NLP', 'Génie logiciel'],

        problem: '',

        objective: '',

        currentWork: [],

        nextSteps: [],

        achievements: [],

        teamMembers: [],

        partners: [],

        images: {
            hero: '',
            gallery: [],
        },
    },
];
```

## Important architectural requirement

There should be **one reusable project page**.

For example:

```text
/projets/podi
/projets/bira
/projets/futur-projet
```

should all use the same React page component.

Use the URL `slug` to find the correct project from `projects.ts`.

Do not create separate components like:

```text
PodiPage.tsx
BiraPage.tsx
```

unless there is a very strong technical reason.

Future projects should automatically work by adding one object to `projects.ts`.

---

# 3. `team.ts`

Create a centralized team data file.

Each member should have a unique ID.

Example:

```ts
export const team = [
    {
        id: 'phi-dan-nguyen',

        name: 'Phi-Dan Nguyen',

        role: 'Direction générale',

        program: 'Génie logiciel',

        project: null,

        group: 'direction',

        photo: '',

        linkedin: '',

        email: '',
    },

    {
        id: 'member-example',

        name: 'Nom du membre',

        role: 'Direction mécanique',

        program: 'Génie mécanique',

        project: 'podi',

        group: 'project-leadership',

        photo: '',

        linkedin: '',

        email: '',
    },
];
```

The Team page should automatically render these members.

Allow grouping by:

```text
Direction
Administration
PODI
BIRA
Other project teams
```

without manually rewriting the page.

If a member has no photo, automatically display their initials or a neutral placeholder.

---

# 4. `partners.ts`

Create a partners data file.

Example:

```ts
export const partners = [
    {
        id: 'partner-name',

        name: 'Nom partenaire',

        logo: '/images/partners/partner.svg',

        website: 'https://example.com',

        category: 'principal',

        description: '',
    },
];
```

The partners section should automatically display the logo when a partner is added.

Allow categories such as:

```text
principal
financial
technical
institutional
material
```

but do not require every category to be displayed if it is empty.

---

# 5. `achievements.ts`

Use one file for:

- competitions;
- awards;
- conferences;
- events;
- media appearances;
- demonstrations;
- important project milestones.

Example:

```ts
export const achievements = [
    {
        id: 'ace-2026',

        date: '2026-05-01',

        type: 'competition',

        title: 'ACE 2026',

        project: 'podi',

        status: 'completed',

        location: 'Hamilton, Ontario',

        description: 'Description de la compétition.',

        result: '1re place',

        image: '',

        link: '',
    },
];
```

The website should automatically sort achievements from newest to oldest.

Create filters based on `type`.

Possible types:

```ts
'competition';
'award';
'event';
'conference';
'media';
'milestone';
```

Do not hard-code filters that are not present in the data.

---

# 6. `forms.ts`

Create a simple configuration file for forms.

We currently want to use external forms such as Microsoft Forms.

Example:

```ts
export const forms = {
    recruitment: {
        title: 'Rejoindre Héka',

        description: 'Vous souhaitez rejoindre PODI, BIRA ou contribuer à Héka?',

        url: '',

        buttonLabel: 'Ouvrir le formulaire de recrutement',
    },

    partnership: {
        title: 'Devenir partenaire',

        description: 'Vous souhaitez soutenir ou collaborer avec Héka?',

        url: '',

        buttonLabel: 'Nous contacter',
    },

    contact: {
        title: 'Nous joindre',

        description: 'Compétition, média, conférence ou demande générale.',

        url: '',

        buttonLabel: 'Ouvrir le formulaire',
    },
};
```

If the URL is empty, do not show a broken button.

Instead display something like:

```text
Formulaire bientôt disponible
```

---

# 7. `navigation.ts`

Centralize the main navigation.

Example:

```ts
export const navigation = [
    {
        label: 'Accueil',
        href: '/',
    },
    {
        label: 'À propos',
        href: '/a-propos',
    },
    {
        label: 'Projets',
        href: '/projets',
    },
    {
        label: 'Réalisations',
        href: '/realisations',
    },
    {
        label: 'Équipe',
        href: '/equipe',
    },
    {
        label: 'Partenaires',
        href: '/partenaires',
    },
    {
        label: 'Nous joindre',
        href: '/nous-joindre',
    },
];
```

Both desktop and mobile navigation should read from this file.

Do not duplicate menu links inside multiple components.

---

# 8. TypeScript types

Create:

```text
src/types/content.ts
```

Define reusable types for:

```ts
Project;
TeamMember;
Partner;
Achievement;
FormConfiguration;
NavigationItem;
SiteConfiguration;
```

Example:

```ts
export interface Project {
    slug: string;
    name: string;
    category: string;
    challenge: string;
    title: string;
    shortDescription: string;
    description?: string;
    status: string;
    theme: 'podi' | 'bira' | 'default';
    disciplines: string[];
    problem: string;
    objective: string;
    currentWork: string[];
    nextSteps: string[];
    achievements: string[];
    teamMembers: string[];
    partners: string[];
    images: {
        hero: string;
        gallery: string[];
    };
}
```

Use these types inside the data files.

This should allow TypeScript to warn future maintainers when required information is missing.

---

# 9. Relationships between data

Avoid copying the same information into multiple files.

Use IDs instead.

For example:

A project should reference team members using:

```ts
teamMembers: ['phi-dan-nguyen', 'member-example'];
```

instead of duplicating their full name and job information.

An achievement should reference:

```ts
project: 'podi';
```

instead of copying the entire PODI project.

A project can reference achievements:

```ts
achievements: ['ace-2026'];
```

The React components can resolve these relationships.

---

# 10. Helper functions

Create reusable utility functions where appropriate.

For example:

```text
src/utils/content.ts
```

Functions could include:

```ts
getProjectBySlug(slug);

getTeamMembersByProject(projectSlug);

getAchievementsByProject(projectSlug);

getPartnersByProject(projectSlug);

getLatestAchievements(limit);
```

Pages should use these helpers instead of repeatedly writing filter logic.

---

# 11. Images

Organize images like this:

```text
public/
└── images/
    ├── team/
    ├── projects/
    │   ├── podi/
    │   └── bira/
    ├── partners/
    ├── achievements/
    └── general/
```

Data files should only contain paths.

Example:

```ts
photo: '/images/team/phi-dan.jpg';
```

Do not import every image manually inside React components unless technically necessary.

---

# 12. Beginner-friendly comments

The people maintaining this website may not know React or TypeScript.

At the top of each `data` file, add a short comment explaining exactly how to add content.

Example:

```ts
/*
HOW TO ADD A TEAM MEMBER

1. Copy one member object below.
2. Paste it at the end of the list.
3. Change the information between quotation marks.
4. Save the file.

Do not delete commas, brackets or property names.
*/
```

Keep comments concise and practical.

---

# 13. Empty states

Every dynamic page should handle missing data gracefully.

Examples:

No partners:

```text
Nos partenaires seront bientôt ajoutés.
```

No upcoming competitions:

```text
Aucune compétition annoncée pour le moment.
```

No photo:

Display initials.

No form URL:

```text
Formulaire bientôt disponible.
```

No project achievements:

Do not display an empty achievements section.

---

# 14. Do not over-engineer

Do NOT add:

- Redux;
- backend;
- database;
- authentication;
- CMS;
- complex state management;
- unnecessary context providers;
- APIs;
- Docker;
- server-side rendering;

unless already required elsewhere in the project.

This is primarily a public informational website.

Keep the architecture simple.

---

# 15. Maintain existing visual identity

Keep the current Héka design system.

Brand colors:

```css
Héka Blue: #41699d
Héka Yellow: #f2c664
```

Project identities:

```text
PODI → red / orange / warm colors
BIRA → blue / technological colors
```

Héka's main blue should remain visually distinct from BIRA's project blue.

Do not change the current design unnecessarily.

---

# 16. Final architecture goal

A future Héka executive should be able to do things like:

### Add a member

Only modify:

```text
src/data/team.ts
```

### Add a competition

Only modify:

```text
src/data/achievements.ts
```

### Add a partner

Only modify:

```text
src/data/partners.ts
```

### Change recruitment form

Only modify:

```text
src/data/forms.ts
```

### Add an entirely new project

Only modify:

```text
src/data/projects.ts
```

The React components should automatically adapt.

The final architecture should prioritize **maintainability, simplicity, and handoff between student
teams** over technical sophistication.
