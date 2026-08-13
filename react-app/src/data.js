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
  terrasse, pizza, pizzaLarge, salade, saladeChevre, carpaccio, salle, interieur, apero, dessert,
}

// Données réelles du restaurant.
// Carte et prix : relevés sur l'ardoise du restaurant (photo fournie par le client).
// Coordonnées : fiche Google, Mairie de Gréoux-les-Bains. Avis : Google / Tripadvisor.
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
  pizzaFrom: '11,50 €',      // prix de la pizza la moins chère (Margarita)
  parking: 'Parking gratuit Av. des Marronniers, à 95 m',
  paiement: 'Prix TTC, service compris · CB acceptée dès 10 €',
  maps: 'https://www.google.com/maps/search/?api=1&query=Brasserie+du+Soleil+Rond-point+du+Gryselis+04800+Greoux-les-Bains',
}

// Carte complète, relevée sur l'ardoise du restaurant.
export const CARTE = [
  {
    key: 'salades',
    title: 'Salades & entrées',
    sub: 'Fraîcheur & générosité',
    photo: salade,
    desc: 'Des salades composées généreuses et de belles entrées à partager.',
    items: [
      { n: 'Salade César', sub: 'tomate, maïs, œuf, parmesan, croûtons, poulet', p: '17 €' },
      { n: 'Salade de chèvre pané', sub: 'tomate, maïs, œuf, jambon cru, chèvre pané', p: '17 €' },
      { n: 'Terrine de foie gras maison', p: '20 €' },
      { n: 'Tomate & burrata', p: '17 €' },
      { n: 'Carpaccio de bœuf', p: '15 €' },
    ],
  },
  {
    key: 'viandes',
    title: 'Viandes & pâtes',
    sub: 'La cuisine de brasserie',
    photo: carpaccio,
    desc: 'Viandes grillées et pâtes maison — le cœur de la carte.',
    items: [
      { n: 'Tartare de bœuf', p: '19,50 €' },
      { n: 'Escalope à la milanaise', p: '20 €' },
      { n: "Entrecôte maître d'hôtel", p: '21,50 €' },
      { n: 'Entrecôte roquefort', p: '23,50 €' },
      { n: 'Foie de veau persillé', p: '18,50 €' },
      { n: 'Magret de canard, sauce miel', p: '22 €' },
      { n: 'Hamburger de bœuf ou de poulet', p: '18,50 €' },
      { n: 'Pâtes bolognaise · carbonara · roquefort', p: '16,50 €' },
    ],
  },
  {
    key: 'pizzas',
    title: 'Pizzas — base tomate',
    sub: 'Au feu de bois',
    photo: pizzaLarge,
    desc: 'La signature de la maison : pâte fine et garnitures généreuses.',
    items: [
      { n: 'Margarita', sub: 'emmental râpé, olives, origan', p: '11,50 €' },
      { n: 'Napolitaine', sub: 'anchois, olives, origan', p: '12,50 €' },
      { n: '4 fromages', sub: 'emmental, chèvre, roquefort, mozzarella', p: '13,50 €' },
      { n: 'Royale', sub: 'emmental, jambon, champignons, olives, origan', p: '13,50 €' },
      { n: 'Chorizo', sub: 'emmental, chorizo, olives, origan', p: '14 €' },
    ],
  },
  {
    key: 'pizzas-creme',
    title: 'Pizzas — base crème',
    sub: 'Au feu de bois',
    photo: pizza,
    desc: 'Les gourmandes, sur une base crème fraîche.',
    items: [
      { n: 'Paysanne', sub: 'emmental, lardons, champignons, origan', p: '13,50 €' },
      { n: 'Campagnarde', sub: 'emmental, chèvre, roquefort, mozzarella, olives, origan', p: '15 €' },
      { n: 'Chausson Reine', sub: 'emmental, jambon, champignons, œuf, olives, origan', p: '15 €' },
      { n: 'Glaces & desserts maison', sub: 'demandez l’ardoise du jour', p: 'au choix', soft: true },
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
  'CB dès 10 € & espèces',
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
    text: "Déjeuner en terrasse sous un olivier, super ! Très bon accueil. Nous avons très bien mangé, bravo au cuisinier. Nous reviendrons.",
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
