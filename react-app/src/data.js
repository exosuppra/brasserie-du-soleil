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

export const STATS = [
  { value: 1412, label: 'Avis Google' },
  { value: 7, suffix: '/7', label: 'Jours sur 7' },
  { value: 16.5, decimals: 2, suffix: ' €', label: 'Menu du jour' },
  { value: 18, suffix: 'h', label: 'De service par jour' },
]

// Photos de démonstration (Unsplash) — à remplacer par les photos du restaurant
export const PHOTOS = {
  table: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  salle: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
  salleChic: 'https://images.unsplash.com/photo-1560053608-13721e0d69e8?auto=format&fit=crop&w=1200&q=80',
  terrasse: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
  pizza: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=80',
  boeuf: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=80',
  pates: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=1000&q=80',
  planche: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1000&q=80',
  cocktails: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=80',
  bar: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  vin: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=1400&q=80',
}

// Prix vérifiés : pizzas et quiche. Le reste est à la carte (prix à confirmer).
export const CARTE = [
  {
    key: 'pizzas',
    title: 'Les pizzas',
    sub: 'Ø 40 cm · au feu de bois',
    photo: PHOTOS.pizza,
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
    photo: PHOTOS.boeuf,
    desc: "La viande, la vraie — et des frites maison qui reviennent dans tous les avis.",
    items: [
      { n: 'Steak tartare', sub: 'préparé minute', p: 'la spécialité', soft: true },
      { n: 'Pièce de bœuf & frites maison', p: 'à la carte', soft: true },
      { n: 'Entrecôte grillée', p: 'à la carte', soft: true },
      { n: 'Magret de canard caramélisé', p: 'à la carte', soft: true },
      { n: 'Escalope milanaise', p: 'à la carte', soft: true },
      { n: 'Filet de saumon', p: 'à la carte', soft: true },
      { n: 'Menu du jour', sub: 'entrée + plat + dessert', p: '16,50 €' },
    ],
  },
  {
    key: 'pates',
    title: 'Pâtes & salades',
    sub: 'Le côté italien',
    photo: PHOTOS.pates,
    desc: 'Le côté italien de la maison, et des salades généreuses pour les midis d’été.',
    items: [
      { n: 'Spaghettis bolognaise', p: 'à la carte', soft: true },
      { n: 'Spaghettis carbonara', p: 'à la carte', soft: true },
      { n: 'Pennes', p: 'à la carte', soft: true },
      { n: 'Lasagnes maison', p: 'à la carte', soft: true },
      { n: 'Salade périgourdine', p: 'à la carte', soft: true },
      { n: 'Tomate & mozzarella', p: 'à la carte', soft: true },
      { n: 'Burrata crémeuse', p: 'à la carte', soft: true },
    ],
  },
  {
    key: 'bar',
    title: 'Apéro, bar & desserts',
    sub: 'À partager, puis la note sucrée',
    photo: PHOTOS.planche,
    desc: "L'heure de l'apéro en terrasse, et de quoi finir en douceur.",
    items: [
      { n: 'Planche de charcuterie', p: 'à partager', soft: true },
      { n: 'Planche de fromages', p: 'à partager', soft: true },
      { n: 'Cocktails maison', p: 'carte du bar', soft: true },
      { n: 'Bières pression & vins au verre', p: 'carte du bar', soft: true },
      { n: 'Tiramisu · Crème brûlée', p: 'maison', soft: true },
      { n: 'Tarte au citron · Fondant chocolat', p: 'maison', soft: true },
      { n: 'Glaces & sorbets', p: 'au choix', soft: true },
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

export const AMBIANCES = [
  { t: 'La terrasse', d: "À l'ombre de l'olivier, dès les beaux jours", img: PHOTOS.terrasse },
  { t: 'Le bar', d: 'Cocktails, pression et le match en direct', img: PHOTOS.bar },
  { t: 'La salle', d: 'Climatisée, accessible de plain-pied', img: PHOTOS.salleChic },
  { t: 'Le four', d: 'Pizzas Ø 40 cm, dès 10 €', img: PHOTOS.pizza },
  { t: 'La plancha', d: 'Pièce de bœuf, frites maison', img: PHOTOS.boeuf },
  { t: "L'apéro", d: 'Cocktails, planches et coucher de soleil', img: PHOTOS.cocktails },
]
