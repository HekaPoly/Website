/*
 SITE NAVIGATION
  ------------------
  This file defines the navigation bar links.

  HOW TO ADD A PAGE:
  1. Add an object { label: "Display Name", pageId: "internal-id" }.
  2. Ensure the pageId corresponds to a case in App.tsx.
  3. Save the file.

  The order of items here determines the navigation order.
*/

import type { NavigationItem } from '../types/content';

export const navigation: NavigationItem[] = [
    { label: 'Accueil', pageId: 'accueil' },
    { label: 'À propos', pageId: 'apropos' },
    { label: 'Projets', pageId: 'projets' },
    { label: 'Réalisations', pageId: 'realisations' },
    { label: 'Équipe', pageId: 'equipe' },
    { label: 'Partenaires', pageId: 'partenaires' },
    { label: 'Nous joindre', pageId: 'contact' },
];
