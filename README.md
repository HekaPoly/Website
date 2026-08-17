# Site Héka — React + TypeScript

Cette version a été reconstruite à partir du fichier Figma Make fourni afin de rendre le site plus facile à maintenir et à faire évoluer.

## Objectifs de l'architecture

- React + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router pour de vraies URLs
- aucun backend obligatoire
- contenu séparé des composants
- ajout de projets sans créer une nouvelle page React
- espaces prévus pour Microsoft Forms ou un autre service de formulaires
- déploiement possible sur Netlify ou Vercel

## Démarrage

### 1. Installer Node.js

Utilisez une version de Node compatible avec Vite 8. Ensuite, dans le dossier du projet :

```bash
npm install
npm run dev
```

Le terminal indiquera l'adresse locale du site.

### 2. Vérifier avant publication

```bash
npm run typecheck
npm run build
```

Le dossier `dist/` produit par `npm run build` est la version de production.

---

# Pour une personne qui ne code pas

Dans la grande majorité des cas, ne modifiez que les fichiers dans :

```text
src/data/
├── site.ts
├── projects.ts
├── achievements.ts
├── team.ts
├── partners.ts
└── forms.ts
```

La règle à retenir :

> **Le contenu va dans `src/data/`. Le fonctionnement du site va dans `src/components/` et `src/pages/`.**

## Modifier les textes généraux

Ouvrez :

```text
src/data/site.ts
```

Vous pouvez modifier le hero, la mission, le processus et les statistiques.

## Ajouter un projet

Ouvrez :

```text
src/data/projects.ts
```

Copiez un projet complet et modifiez les valeurs. Exemple :

```ts
{
  slug: "nouveau-projet",
  name: "NOM",
  eyebrow: "Enjeu humain",
  title: "Titre explicatif",
  subtitle: "Type de technologie",
  description: "Description courte",
  problem: "Le problème réel",
  objective: "Objectif technique",
  status: "En développement",
  accent: "bira",
  disciplines: ["Génie logiciel"],
  currentWork: ["Travail actuel"],
  nextSteps: ["Prochaine étape"],
  image: "",
}
```

Le site créera automatiquement :

```text
/projets/nouveau-projet
```

Vous n'avez pas besoin de créer une nouvelle page `.tsx`.

### Couleurs de projets

- `accent: "podi"` → tons chauds rouge/orange
- `accent: "bira"` → bleu BIRA

Les couleurs principales Héka sont :

- Bleu : `#41699d`
- Jaune : `#f2c664`

## Ajouter une réalisation

Ouvrez :

```text
src/data/achievements.ts
```

Ajoutez les éléments les plus récents en haut de la liste.

## Ajouter un membre

Ouvrez :

```text
src/data/team.ts
```

Exemple :

```ts
{
  name: "Prénom Nom",
  role: "Responsable mécanique",
  program: "Génie mécanique",
  project: "PODI",
  photo: "/images/team/prenom-nom.jpg",
  linkedin: "",
}
```

Mettez la photo dans :

```text
public/images/team/
```

Si `photo` est vide, le site affiche automatiquement les initiales.

## Ajouter un partenaire

Mettez le logo dans :

```text
public/images/partners/
```

Puis ajoutez-le dans :

```text
src/data/partners.ts
```

Exemple :

```ts
{
  name: "Entreprise",
  logo: "/images/partners/entreprise.svg",
  website: "https://exemple.ca",
}
```

## Ajouter les formulaires

Ouvrez :

```text
src/data/forms.ts
```

La méthode la plus simple est d'utiliser **Microsoft Forms**.

Exemple :

```ts
recruitment: {
  title: "Rejoindre Héka",
  description: "...",
  url: "https://forms.office.com/...",
  buttonLabel: "Ouvrir le formulaire de recrutement",
}
```

Si `url` est vide, le site affiche automatiquement :

> Formulaire bientôt disponible

Aucun backend n'est donc nécessaire pour les formulaires de la première version.

---

# Structure technique

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── FormCard.tsx
│   ├── Nav.tsx
│   ├── ProjectCard.tsx
│   ├── ScrollToTop.tsx
│   └── SectionTitle.tsx
├── data/
│   ├── achievements.ts
│   ├── forms.ts
│   ├── partners.ts
│   ├── projects.ts
│   ├── site.ts
│   └── team.ts
├── pages/
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── Partners.tsx
│   ├── ProjectDetail.tsx
│   ├── Projects.tsx
│   └── Team.tsx
├── types/
│   └── content.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Pourquoi une seule `ProjectDetail.tsx` ?

L'ancienne version avait des pages séparées pour PODI et BIRA. Cette version utilise une seule page dynamique qui lit `projects.ts`.

C'est important pour la passation : si Héka crée un troisième projet, il suffit d'ajouter ses données.

---

# Déploiement

## Netlify

Le projet contient déjà `netlify.toml`.

Configuration :

```text
Build command: npm run build
Publish directory: dist
```

## Vercel

Le projet contient déjà `vercel.json` pour que React Router fonctionne lorsque quelqu'un ouvre directement une URL comme `/projets/podi`.

---

# Avant publication

- [ ] Remplacer les données « À confirmer »
- [ ] Ajouter les vraies photos de PODI et BIRA
- [ ] Ajouter les vrais membres
- [ ] Ajouter les logos partenaires autorisés
- [ ] Ajouter les liens Microsoft Forms
- [ ] Confirmer l'adresse courriel publique
- [ ] Vérifier les descriptions techniques de PODI et BIRA
- [ ] Tester sur téléphone
- [ ] Lancer `npm run typecheck`
- [ ] Lancer `npm run build`

## Note sur le backend

Cette version n'en nécessite pas. Si Héka veut plus tard une interface d'administration où les membres peuvent ajouter du contenu sans modifier les fichiers, `src/data/` pourra être remplacé progressivement par un CMS ou une API sans refaire toute l'interface React.
