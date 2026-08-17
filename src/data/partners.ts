/*
  PARTENAIRES DE HÉKA
  --------------------
  Ce fichier contient la liste des partenaires.

  HOW TO ADD A PARTNER:
  1. Copiez un bloc { ... } ci-dessous.
  2. Collez-le à la fin de la liste (avant le crochet fermant ]).
  3. Remplissez les informations entre guillemets.
  4. Placez le logo dans : public/images/partners/nom-du-partenaire.svg
  5. Sauvegardez le fichier.

  Catégories disponibles : "principal" | "financial" | "technical" | "institutional" | "material"

  Si le logo n'est pas encore disponible, laissez logo: "" — le nom sera affiché à la place.
*/

import type { Partner } from '../types/content'

export const partners: Partner[] = [
  // Exemple de partenaire (décommentez et modifiez pour ajouter) :
  {
    id: "polytechnique-montreal",
    name: "Polytechnique Montréal",
    logo: "public/images/partners/logo-exception-noir2x.png",
    website: "https://polymtl.ca/",
    category: "principal",
    description: "Description courte du partenariat.",
  },
]
