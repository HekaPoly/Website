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
  {
    id: "polytechnique-montreal",
    name: "Polytechnique Montréal",
    logo: "public/images/partners/logo-exception-noir2x.png",
    website: "https://polymtl.ca/",
    category: "Platinum",
    description: "Description courte du partenariat.",
  },
  {
    id: "aep",
    name: "Association des étudiants de Polytechnique",
    logo: "public/images/partners/logoAEP-1-edited.webp",
    website: "https://www.aep.polymtl.ca/",
    category: "Gold",
    description: "Description courte du partenariat.",
  },
  {
    id: "revau",
    name: "ReVau",
    logo: "public/images/partners/logo-revau-noir.png",
    website: "https://www.revau.com/",
    category: "Gold",
    description: "Description courte du partenariat.",
  },
  {
    id: "innovative-vehicle-institute",
    name: "Innovative Vehicle Institute",
    logo: "public/images/partners/institut-du-vehicule-innovant.jpg",
    website: "https://www.ivisolutions.ca/",
    category: "Silver",
    description: "Description courte du partenariat.",
  },
  {
    id: "transmedtech",
    name: "Institut TransMedTech",
    logo: "public/images/partners/transmedtech.webp",
    website: "https://transmedtech.org/",
    category: "Bronze",
    description: "Partenaire de Héka dans le domaine des technologies médicales.",
  },

  {
    id: "kenesto",
    name: "Kenesto",
    logo: "public/images/partners/logoKenesto-1-edited.webp",
    website: "https://www.kenesto.com/",
    category: "Bronze",
    description: "Partenaire offrant des outils de gestion et de collaboration pour les fichiers d’ingénierie.",
  },

  {
    id: "solidworks",
    name: "SOLIDWORKS",
    logo: "public/images/partners/SolidWorks_Logo.svg.png",
    website: "https://www.solidworks.com/",
    category: "Bronze",
    description: "Partenaire logiciel pour la conception et la modélisation 3D.",
  },

  {
    id: "mecademic",
    name: "Mecademic",
    logo: "public/images/partners/Mab robotics.png",
    website: "https://mecademic.com/",
    category: "Bronze",
    description: "Partenaire spécialisé en robotique industrielle compacte et de haute précision.",
  },
]
