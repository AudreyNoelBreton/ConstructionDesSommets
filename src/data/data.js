const sliderImagesMobile = [
  {
    src: `${process.env.PUBLIC_URL}/homepage-header-mobile.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/à-propos-header-mobile.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/nos-realisations-header-mobile.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/nous-joindre-header.jpg`,
  },
];

const testimonialsData = [
  {
    quote:
      "« Merci à Louis Brochu Marier d’avoir pris en charge mon projet... »",
    author: "Nicole P.",
  },
  {
    quote: "« Excellent service reçu... »",
    author: "Mélissa T.",
  },
  // Ajoutez plus de témoignages ici si nécessaire
];

const sliderSecteurs = [
  {
    src: `${process.env.PUBLIC_URL}/charpente.jpg`,
    txt: "Charpente",
  },
  {
    src: `${process.env.PUBLIC_URL}/la-ferreolaise-2.jpg`,
    txt: "Finition",
  },
  {
    src: `${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-3.jpg`,
    txt: "Revêtement",
  },
];

const sliderImages = [
  {
    src: `${process.env.PUBLIC_URL}/Projet/Habitations-du-sommet-rue-du-sommet-36.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-3.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/Falaise/Habitations-du-sommet-la-falaise-27.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-1.jpg`,
  },
];
const sliderTemoignages = [
  {
    back: "plain_background.jpg",
    text: "« Merci à Louis Brochu Marier d’avoir pris en charge mon projet. Louis maîtrise toutes les exigences de son entreprise et s’adjoint une équipe de spécialistes aussi perfectionnistes et professionnels que lui. Les résultats ont dépassé mes espérances! Je souligne la disponibilité de Louis et sa patience pour répondre à mes multiples questionnements.  Et s’il vous dit «Tant qu’à faire…, n’hésitez pas; ses suggestions ajouteront au confort, au côté pratique et à l’harmonie du tableau final. »",
    name: "- Nicole P.",
  },
  {
    back: "plain_background.jpg",
    text: "« Très satisfait du travail !!, une équipe professionnelle, à l’écoute du client et de ses besoins. »",
    name: "- Yves B.",
  },
  {
    back: "plain_background.jpg",
    text: "« Excellent service reçu. Professionnel. Très disponible pour discuter des différentes étapes du projet. Travail de finition minutieux. Soucieux de la qualité du produit. Nous recommandons vivement cette entreprise! Merci! »",
    name: "- Mélissa T.",
  },
  {
    back: "plain_background.jpg",
    text: "« Excellent service ; efficace, précis et attentif. Il est à l’écoute des besoins et vraiment fiable. On le recommande++ sans hésitation. »",
    name: "- Dominique B.M.",
  },
];

const consecrationImages = [
  {
    src: `${process.env.PUBLIC_URL}/project-1.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/project-1-2.jpg`,
  },
  {
    src: `${process.env.PUBLIC_URL}/project-1-1.jpg`,
  },
];

const garageVertImages = [
  "1MaisonHDSLouis-119.JPG",
  "MaisonHDSLouis-114.JPG",
  "MaisonHDSLouis-116.JPG",
  "MaisonHDSLouis-118.JPG",
  "MaisonHDSLouis-121.JPG",
  "MaisonHDSLouis-123.JPG",
  "MaisonHDSLouis-124.JPG",
  "MaisonHDSLouis-128.JPG",
  "MaisonHDSLouis-130.JPG",
  "MaisonHDSLouis-131.JPG",
  "MaisonHDSLouis-134.JPG",
  "MaisonHDSLouis-135.JPG",
  "MaisonHDSLouis-136.JPG",
  "MaisonHDSLouis-137.JPG",
  "MaisonHDSLouis-138.JPG",
  "MaisonHDSLouis-139.JPG",
  "MaisonHDSLouis-140.JPG",
  "MaisonHDSLouis-141.JPG",
  "MaisonHDSLouis-142.JPG",
  "MaisonHDSLouis-143.JPG",
  "MaisonHDSLouis-144.JPG",
].map((image) => `${process.env.PUBLIC_URL}/garage-vert/${image}`);

const altitudeImageNumbers = [
  1, 2, 4, 6, 7, 8, 10, 11, 12, 13, 14, 16, 18, 19, 20, 21, 22, 28, 29, 30,
  32, 33, 34, 35, 36, 39, 41, 43, 51, 52, 53, 54, 55, 56, 57, 58, 59, 62, 64,
  67, 68, 69, 73, 74, 75, 77, 78, 80, 81, 82, 83, 84, 85, 86, 88, 89, 100,
  101, 107, 112,
];
const altitudeImage = (imageNumber) =>
  `${process.env.PUBLIC_URL}/l-altitude/MaisonHDSLouis-${imageNumber}.JPG`;
const altitudeImages = altitudeImageNumbers.map(altitudeImage);
const altitudeCardImages = [19, 18, 8].map(altitudeImage);

const amontImageNumbers = [
  147, 148, 149, 150, 151, 152, 154, 157, 159, 160, 161, 162, 167, 168, 169,
  173, 175, 176, 178, 179, 181,
];
const amontImage = (imageNumber) =>
  `${process.env.PUBLIC_URL}/l-amont/MaisonHDSLouis-${imageNumber}.JPG`;
const amontImages = amontImageNumbers.map(amontImage);
const amontCardImages = [147, 148, 157].map(amontImage);

const lesCimesImageNumbers = [188, 189, 190, 182, 186, 187];
const lesCimesImage = (imageNumber) =>
  `${process.env.PUBLIC_URL}/les-cimes/MaisonHDSLouis-${imageNumber}.JPG`;
const lesCimesImages = lesCimesImageNumbers.map(lesCimesImage);
const lesCimesCardImages = [182, 186, 187].map(lesCimesImage);

const cardHomePage = [
  {
    src: `${process.env.PUBLIC_URL}/Projet/Habitations-du-sommet-rue-du-sommet-15.jpg`,
    title: "Passionnés de la qualité",
    text: "Notre équipe expérimentée se démarque par son efficacité et son souci du détail. Chaque élément est soigneusement pris en compte pour un résultat dont vous pourrez être fiers.",
    buttonText: "à propos de nous",
    link: "/team",
  },

  {
    src: `${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-3.jpg`,
    title: "Service personnalisé",
    text: "Chaque projet est unique, c'est pourquoi nous vous garantissons un service sur mesure, adapté à vos besoins. Comptez sur notre expertise pour guider vos choix en fonction de vos objectifs et votre budget.",
    buttonText: "en savoir plus",
    link: "/about",
  },
];

const questions = [
  {
    title: "Quels services offrez-vous ?",
    text: "Nous offrons les services de construction neuve, d'agrandissement et de rénovation. Contactez-nous pour en savoir plus!",
  },
  {
    title: "Comment obtenir une soumission ?",
    text: `Vous aurez besoin des plans détaillés du projet à réaliser. Une fois ceux-ci obtenus, remplir la rubrique <a href="/about">OBTENIR UNE SOUMISSION</a> ou nous les transmettre à l'adresse suivante : <a href="mailto:info@habitationsdusommet.com">info@habitationsdusommet.com</a>. Pour toute question relative aux soumissions, n’hésitez pas à contacter William Viens au 581-991-9485.`,
  },
  {
    title: "Ai-je besoin d'un permis pour effectuer mes travaux ?",
    text: "La grande majorité des projets sur lesquels nous travaillons requièrent du propriétaire qu'il obtienne un permis auprès de la municipalité avant le début des travaux. Contactez votre municipalité pour savoir ce qui est requis et faire votre demande.",
  },
];
const projects = [
  {
    images: [
      `${process.env.PUBLIC_URL}/Projet/Habitations-du-sommet-rue-du-sommet-36.jpg`,
      `${process.env.PUBLIC_URL}/Projet/Habitations-du-sommet-rue-du-sommet-15.jpg`,
      `${process.env.PUBLIC_URL}/Projet/Habitations-du-sommet-rue-du-sommet-14.jpg`,
    ],
    text: "La consécration",
    image1: `${process.env.PUBLIC_URL}/project-1.jpg`,
    image2: `${process.env.PUBLIC_URL}/project-1-2.jpg`,
    image3: `${process.env.PUBLIC_URL}/project-1-1.jpg`,
    url: `/realisations/consecration`,
  },

  {
    images: [
      `${process.env.PUBLIC_URL}/petite-maison-verte-1.jpg`,
      `${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-6.jpg`,
      `${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-7.jpg`,
      `${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-3.jpg`,
    ],
    text: "La petite maison verte",
    image1: `${process.env.PUBLIC_URL}/petite-maison-verte-1.jpg`,
    image2: `${process.env.PUBLIC_URL}/petite-maison-verte-2.jpg`,
    image3: `${process.env.PUBLIC_URL}/petite-maison-verte-3.jpg`,
    url: "/realisations/maison-verte",
  },

  {
    images: [
      `${process.env.PUBLIC_URL}/Falaise/Habitations-du-sommet-la-falaise-27.jpg`,
      `${process.env.PUBLIC_URL}/Falaise/Habitations-du-sommet-la-falaise-27.jpg`,
      `${process.env.PUBLIC_URL}/Falaise/Habitations-du-sommet-la-falaise-31.jpg`,
      `${process.env.PUBLIC_URL}/Falaise/Habitations-du-sommet-la-falaise-32.jpg`,
    ],
    text: "la ferréolaise",
    image1: `${process.env.PUBLIC_URL}/la-ferreeolaise-1.jpg`,
    image2: `${process.env.PUBLIC_URL}/la-ferreolaise-2.jpg`,
    image3: `${process.env.PUBLIC_URL}/la-ferreeolaise-3.jpg`,
    url: "/realisations/ferreolaise",
  },

  {
    images: [
      `${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-1.jpg`,
      `${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-3.jpg`,
      `${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-1.jpg`,
    ],
    text: "l'olympique",
    image1: `${process.env.PUBLIC_URL}/l'olympique-1.jpg`,
    image2: `${process.env.PUBLIC_URL}/l'olympique-2.jpg`,
    image3: `${process.env.PUBLIC_URL}/l'olympique-3.jpg`,
    url: "/realisations/olympique",
  },

  {
    slug: "garage-vert",
    images: garageVertImages.slice(0, 3),
    gallery: garageVertImages,
    text: "Garage vert",
    image1: garageVertImages[0],
    image2: garageVertImages[1],
    image3: garageVertImages[2],
    url: "/realisations/garage-vert",
  },
  {
    slug: "altitude",
    images: altitudeCardImages,
    gallery: altitudeImages,
    text: "L’Altitude",
    image1: altitudeCardImages[0],
    image2: altitudeCardImages[1],
    image3: altitudeCardImages[2],
    url: "/realisations/altitude",
  },
  {
    slug: "amont",
    images: amontCardImages,
    gallery: amontImages,
    text: "L’Amont",
    image1: amontCardImages[0],
    image2: amontCardImages[1],
    image3: amontCardImages[2],
    url: "/realisations/amont",
  },
  {
    slug: "les-cimes",
    images: lesCimesCardImages,
    gallery: lesCimesImages,
    text: "Les Cimes",
    image1: lesCimesCardImages[0],
    image2: lesCimesCardImages[1],
    image3: lesCimesCardImages[2],
    url: "/realisations/les-cimes",
  },
];

const data = {
  sliderImages,
  sliderImagesMobile,
  consecrationImages,
  cardHomePage,
  sliderTemoignages,
  questions,
  projects,
  sliderSecteurs,
  testimonialsData,
};

export default data;
