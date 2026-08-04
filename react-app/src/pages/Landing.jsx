import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { RESTO } from '../data'
import SplitLines from '../components/ui/SplitLines'
import { introOK } from '../lib/intro'

const FACTS = [
  { b: '7j/7', s: 'Ouvert · 7h – 1h' },
  { b: '16,50 €', s: 'Menu du jour' },
  { b: '1 412', s: 'Avis Google' },
  { b: '100 %', s: 'Responsive' },
]

const PROPS = [
  {
    to: '/affiche', n: '01', name: 'Affiche', kind: 'Affiche · sérigraphie',
    desc: "Style affiche de marché : aplats de couleur francs, typographie condensée très grasse, bordures épaisses et ombres portées nettes. Bleu Marseille, rouge tomate, jaune soleil.",
    tags: ['Anton condensé', 'Aplats francs', 'Bordures 4px'],
  },
  {
    to: '/ardoise', n: '02', name: 'Ardoise', kind: 'Ardoise · craie',
    desc: "La carte comme une vraie ardoise de bistrot : fond ardoise texturé, écriture à la craie, cadres tracés à la main, photos en polaroids scotchés.",
    tags: ['Craie manuscrite', 'Polaroids', 'Laiton'],
  },
  {
    to: '/comptoir', n: '03', name: 'Comptoir', kind: 'Éditorial · revue',
    desc: "Revue culinaire contemporaine : photo plein cadre, sommaire numéroté, grille asymétrique, filets fins. Crème, olive profond et rouge brique.",
    tags: ['Bricolage Grotesque', 'Photo plein cadre', 'Sommaire'],
  },
]

/* Aperçus rendus en CSS pur, chacun dans SA direction artistique. */
function Vignette({ which }) {
  if (which === '01') {
    return (
      <div className="relative flex aspect-[16/11] flex-col justify-end overflow-hidden bg-bleu p-6 text-papier">
        <div className="pointer-events-none absolute left-1/2 top-[-58%] h-[190%] w-[170%] -translate-x-1/2"
          style={{ background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(245,185,33,.22) 0deg 7deg, transparent 7deg 14deg)' }} />
        <div className="absolute inset-x-0 bottom-0 h-3.5"
          style={{ background: 'repeating-linear-gradient(90deg,#D93A2B 0 26px,#F7F1E3 26px 52px)' }} />
        <span className="absolute right-5 top-4 font-bricolage text-[13px] font-extrabold tracking-[.1em] text-jaune">01</span>
        <span className="relative z-10 font-anton text-[clamp(1.75rem,3.2vw,2.6rem)] uppercase leading-[.92]">
          Ici on<br /><span className="text-jaune">mange</span><br />au soleil
        </span>
        <span className="relative z-10 mt-2 text-[11px] font-semibold uppercase tracking-[.18em] text-papier/75">Affiche · sérigraphie</span>
      </div>
    )
  }
  if (which === '02') {
    return (
      <div className="relative flex aspect-[16/11] flex-col justify-end overflow-hidden bg-ardoise p-6 text-craie">
        <div className="pointer-events-none absolute inset-3 border border-dashed border-craie/25" />
        <div className="pointer-events-none absolute inset-0 opacity-[.07]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23c)'/%3E%3C/svg%3E\")" }} />
        <span className="absolute right-5 top-4 font-bricolage text-[13px] font-extrabold tracking-[.1em] text-laiton">02</span>
        <span className="relative z-10 font-caveat text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[.92]">
          Aujourd'hui,<br /><span className="text-laiton">on mange</span><br />bien.
        </span>
        <span className="relative z-10 mt-2 text-[11px] font-semibold uppercase tracking-[.18em] text-craie/60">Ardoise · craie</span>
      </div>
    )
  }
  return (
    <div className="relative flex aspect-[16/11] flex-col justify-end overflow-hidden bg-creme2 p-6 text-encre">
      <div className="absolute inset-x-0 top-0 h-[52%] bg-olive" />
      <div className="absolute left-6 top-5 h-11 w-11 rounded-full border-[5px] border-creme" />
      <span className="absolute right-5 top-4 font-bricolage text-[13px] font-extrabold tracking-[.1em] text-creme">03</span>
      <span className="relative z-10 font-bricolage text-[clamp(1.75rem,3.3vw,2.75rem)] font-bold leading-[.92] tracking-[-.04em]">
        La table<br />du <span className="text-brique">village</span>
      </span>
      <span className="relative z-10 mt-2 text-[11px] font-semibold uppercase tracking-[.18em] text-sourdine">Éditorial · revue</span>
    </div>
  )
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-creme font-sans text-encre">
      <div className="border-b border-encre/[.16]">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-4 px-6 py-2.5 text-[11px] font-medium uppercase tracking-[.16em] text-sourdine">
          <span>{RESTO.name} · {RESTO.city}</span>
          <span>Version React animée — 2026</span>
          <a href={RESTO.phoneHref} className="transition-colors hover:text-brique">{RESTO.phone}</a>
        </div>
      </div>

      <header className="border-b border-encre/[.16] py-16 md:py-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-brique">
            Trois directions artistiques
            <span className="h-px flex-1 bg-encre/[.16]" />
          </p>
          <h1 className="mt-5 max-w-[15ch] font-bricolage text-[clamp(2.75rem,7.4vw,6.5rem)] font-bold leading-[.98] tracking-[-.03em]">
            <SplitLines lines={['Trois maquettes,', 'une même table.']} />
          </h1>
          <motion.p
            initial={introOK ? { opacity: 0, y: 18 } : false} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[56ch] text-[clamp(1.05rem,1.9vw,1.3rem)] font-light text-olive"
          >
            Trois partis pris visuels pour le futur site de la brasserie, construits avec vos données réelles :
            carte et prix, horaires 7j/7, menu du jour, avis publiés.
          </motion.p>

          <div className="mt-11 grid grid-cols-2 border-t border-encre/[.16] md:grid-cols-4">
            {FACTS.map((f, i) => (
              <motion.div
                key={f.b}
                initial={introOK ? { opacity: 0, y: 16 } : false} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="border-r border-encre/[.16] px-5 pt-[18px] last:border-r-0 first:pl-0"
              >
                <b className="block font-bricolage text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-[-.03em] text-brique">{f.b}</b>
                <span className="text-[11px] font-medium uppercase tracking-[.14em] text-sourdine">{f.s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1300px] px-6">
        <div className="grid lg:grid-cols-3">
          {PROPS.map((p, i) => (
            <motion.article
              key={p.to}
              initial={introOK ? { opacity: 0, y: 26 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border-b border-encre/[.16] lg:border-r lg:last:border-r-0"
            >
              <Vignette which={p.n} />
              <div className="flex flex-1 flex-col gap-3 border-t border-encre/[.16] p-6 pb-7">
                <h2 className="font-bricolage text-[1.9rem] font-bold tracking-[-.03em]">{p.name}</h2>
                <p className="text-[.92rem] font-light text-sourdine">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-sm border border-encre/[.16] px-2.5 py-1 text-[.72rem] text-sourdine">{t}</span>
                  ))}
                </div>
                <div className="mt-auto pt-3.5">
                  <Link
                    to={p.to}
                    className="group inline-flex items-center gap-2 rounded-sm border border-encre px-6 py-3 text-sm font-medium transition-colors hover:bg-encre hover:text-creme"
                  >
                    Voir la maquette
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto max-w-[70ch] py-12 text-center text-[.82rem] font-light text-sourdine">
          Données réelles : {RESTO.addressShort}, {RESTO.phone}, ouvert {RESTO.hours.toLowerCase()},
          prix des pizzas relevés sur la carte, menu du jour à {RESTO.menuDuJour} et extraits d'avis publiés.
          Photos : clichés clients (Tripadvisor), à remplacer par les vôtres — couleurs, textes et visuels entièrement personnalisables.
        </p>
      </main>

      <footer className="bg-olive py-9 text-[.8rem] font-light text-creme/60">
        <div className="mx-auto flex max-w-[1300px] flex-wrap justify-between gap-4 px-6">
          <span>© 2026 <b className="font-medium text-creme">{RESTO.name}</b> — {RESTO.city}</span>
          <span>Développé par <a href="https://logiq-ia.fr" target="_blank" rel="noopener" className="font-medium text-briquec transition-colors hover:text-creme">Logiq IA</a></span>
        </div>
      </footer>
    </div>
  )
}
