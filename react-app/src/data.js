// Photos réelles du restaurant, publiées par des clients sur Tripadvisor.
// Importées en statique : Vite les résout, les optimise et les copie dans le build.
// ⚠ Droits : ces photos appartiennent à leurs auteurs (la fiche Tripadvisor n'est pas
// revendiquée par le restaurant). Elles servent de repère visuel en attendant les
// photos du restaurant — voir la section « Photos » du README.
import terrasse from '../../photos/terrasse.jpg'
import pizza from '../../photos/pizza.jpg'
import pizzaLarge from '../../photos/pizza-large.jpg'
import salade from '../../photos/salade-perigourdine.jpg'
import saladeChevre from '../../photos/salade-chevre.jpg'
import carpaccio from '../../photos/carpaccio-burrata.jpg'
import salle from '../../photos/salle.jpg'
import interieur from '../../photos/interieur.jpg'
import apero from '../../photos/apero.jpg'
import dessert from '../../photos/dessert.jpg'

export const PHOTOS = {
  terrasse,      // la terrasse sous l'olivier, en soirée
  pizza,         // pizza chorizo (portrait)
  pizzaLarge,    // pizza chèvre-chorizo (paysage)
  salade,        // salade périgourdine
  saladeChevre,  // salade au chèvre chaud
  carpaccio,     // carpaccio de bœuf & burrata
  salle,         // la salle
  interieur,     // banquettes
  apero,         // table d'apéro : pizza & cocktails
  dessert,       // crème brûlée & café gourmand
}

// Données réelles du restaurant
// Sources : fiche Google, Tripadvisor, Mairie de Gréoux-les-Bains, lacarte.menu
export const RESTO = {
  name: 'La Brasserie du Soleil',
  tagline: 'Brasserie · Pizzeria · Bar',
  city: 'Gréoux-les-Bains',
  region: 'Alpes-de-Haute-Provence',
  address: 'Rond-point du Grysélis, 04800 Gréoux-les-Bains',
  addressShort: 'Rond-point du Grysélis',
  phone: '04 92 78 01 53',
  phoneHref: 'tel:+33492780153',
  hours: 'Tous les jours · 7h00 – 1h00',
  rating: '3,9',
  reviews: 1412,
  budget: '20 – 30 € par personne',
  menuDuJour: '16,50 €',
  parking: 'Parking gratuit Av. des Marronniers, à 95 m',
  maps: 'https://www.google.com/maps/search/?api=1&query=Brasserie+du+Soleil+Rond-point+du+Gryselis+04800+Greoux-les-Bains',
}

// Prix vérifiés : pizzas et quiche. Le reste est à la carte (prix à confirmer).
export const CARTE = [
  {
    key: 'pizzas',
    title: 'Les pizzas',
    sub: 'Ø 40 cm · au feu de bois',
    photo: pizzaLarge,
    desc: 'Pâte fine, garnitures généreuses. En grand format à partager ou en petite taille.',
    items: [
      { n: 'Fromage ou Anchois', p: '10 €' },
      { n: 'Royale', p: '11 €' },
      { n: 'Arménienne', p: '11 €' },
      { n: 'Parmesana', p: '12 €' },
      { n: 'Corse', p: '14 €' },
      { n: 'Mexicaine', sub: 'la plus demandée', p: 'signature', soft: true },
      { n: 'Quiche 3 fromages', p: '10 €' },
    ],
  },
  {
    key: 'plats',
    title: 'Les incontournables',
    sub: 'Viandes & poissons',
    photo: carpaccio,
    desc: 'La viande, la vraie — et des frites maison qui reviennent dans tous les avis.',
    items: [
      { n: 'Steak tartare', sub: 'préparé minute', p: 'la spécialité', soft: true },
      { n: 'Carpaccio de bœuf & burrata', p: 'à la carte', soft: true },
      { n: 'Pièce de bœuf & frites maison', p: 'à la carte', soft: true },
      { n: 'Entrecôte grillée', p: 'à la carte', soft: true },
      { n: 'Magret de canard caramélisé', p: 'à la carte', soft: true },
      { n: 'Escalope milanaise', p: 'à la carte', soft: true },
      { n: 'Menu du jour', sub: 'entrée + plat + dessert', p: '16,50 €' },
    ],
  },
  {
    key: 'pates',
    title: 'Pâtes & salades',
    sub: 'Le côté italien',
    photo: salade,
    desc: 'Le côté italien de la maison, et des salades généreuses pour les midis d’été.',
    items: [
      { n: 'Salade périgourdine', p: 'à la carte', soft: true },
      { n: 'Salade au chèvre chaud', p: 'à la carte', soft: true },
      { n: 'Spaghettis bolognaise', p: 'à la carte', soft: true },
      { n: 'Spaghettis carbonara', p: 'à la carte', soft: true },
      { n: 'Lasagnes maison', p: 'à la carte', soft: true },
      { n: 'Tomate & mozzarella', p: 'à la carte', soft: true },
      { n: 'Burrata crémeuse', p: 'à la carte', soft: true },
    ],
  },
  {
    key: 'bar',
    title: 'Apéro, bar & desserts',
    sub: 'À partager, puis la note sucrée',
    photo: dessert,
    desc: "L'heure de l'apéro en terrasse, et de quoi finir en douceur.",
    items: [
      { n: 'Planche de charcuterie', p: 'à partager', soft: true },
      { n: 'Planche de fromages', p: 'à partager', soft: true },
      { n: 'Cocktails maison', p: 'carte du bar', soft: true },
      { n: 'Bières pression & vins au verre', p: 'carte du bar', soft: true },
      { n: 'Crème brûlée · Tiramisu', p: 'maison', soft: true },
      { n: 'Tarte au citron · Fondant chocolat', p: 'maison', soft: true },
      { n: 'Café gourmand · Glaces & sorbets', p: 'au choix', soft: true },
    ],
  },
]

export const SERVICES = [
  'Terrasse ombragée',
  'Salle climatisée',
  'Accessible PMR',
  'Chaises hautes',
  'Groupes bienvenus',
  'Cocktails',
  'Retransmissions sportives',
  'CB & espèces',
]

// Extraits d'avis réellement publiés (Google / Tripadvisor)
export const AVIS = [
  {
    name: 'Sandrine M.',
    city: 'Juillet 2026 · Tripadvisor',
    text: "Accueil au top, souriante et à l'écoute. La viande comme je l'aime, frites maison et légumes : parfait !",
  },
  {
    name: 'Philippe C.',
    city: 'Sainte-Croix-du-Verdon · Juin 2026',
    text: "Patron au top, cuisine excellente pour un prix abordable. Un lieu incontournable pour passer un excellent moment.",
  },
  {
    name: 'Gaspard P.',
    city: 'Nancy · Tripadvisor',
    text: "Déjeuner en terrasse sous un olivier, super ! Très bon accueil, menu du jour entrée-plat-dessert : ça devient rare.",
  },
  {
    name: 'Sylvie R.',
    city: 'Sarrebourg · Mai 2026',
    text: "Brasserie sympa, toujours beaucoup de monde. Bons petits plats, bon rapport qualité-prix. Continuez ainsi !",
  },
  {
    name: 'Charlotte A.',
    city: 'En famille · Tripadvisor',
    text: "Superbe découverte, la pièce de bœuf est juste incroyable. Les enfants ont adoré les pâtes bolognaise.",
  },
  {
    name: 'Éliane B.',
    city: 'Juin 2026 · Google',
    text: "Énorme pizza qui prend toute l'assiette, avec une très bonne odeur qui s'en dégage. Personnel très sympathique.",
  },
]
