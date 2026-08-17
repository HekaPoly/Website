/*
  NAVIGATION DU SITE
  ------------------
  Ce fichier définit les liens de la barre de navigation.

  HOW TO ADD A PAGE:
  1. Ajoutez un objet { label: "Nom affiché", pageId: "identifiant-interne" }.
  2. Assurez-vous que le pageId correspond à un cas dans App.tsx.
  3. Sauvegardez le fichier.

  L'ordre des items ici détermine l'ordre dans la navigation.
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
