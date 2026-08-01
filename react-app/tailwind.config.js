/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 01 — Affiche
        anton: ['Anton', 'Impact', 'sans-serif'],
        archivo: ['Archivo', 'system-ui', 'sans-serif'],
        // 02 — Ardoise
        caveat: ['Caveat', 'cursive'],
        barlow: ['Barlow', 'system-ui', 'sans-serif'],
        // 03 — Comptoir
        bricolage: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // 01 — Affiche provençale
        bleu: '#17357A',
        bleuclair: '#2A57B8',
        rouge: '#D93A2B',
        jaune: '#F5B921',
        papier: '#F7F1E3',
        papier2: '#EFE5CE',
        noir: '#14181F',
        // 02 — Ardoise de bistrot
        ardoise: '#1F2A26',
        ardoise2: '#16201D',
        ardoise3: '#293630',
        craie: '#F2EFE6',
        laiton: '#C8A34E',
        bois: '#8A5A38',
        abricot: '#E8A05C',
        // 03 — Comptoir éditorial
        creme: '#F6F2E9',
        creme2: '#EDE7DA',
        olive: '#2F3A26',
        olive2: '#3F4E33',
        brique: '#A8382C',
        briquec: '#C55A45',
        encre: '#1B1F17',
        sourdine: '#6B7360',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        rayons: {
          to: { transform: 'translateX(-50%) rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee var(--duration,38s) linear infinite',
        rayons: 'rayons 90s linear infinite',
      },
    },
  },
  plugins: [],
}
