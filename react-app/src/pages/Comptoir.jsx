import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, Phone } from 'lucide-react'
import { RESTO, CARTE, SERVICES, AVIS, PHOTOS } from '../data'
import SmoothScroll from '../components/SmoothScroll'
import { introOK } from '../lib/intro'
import SplitLines from '../components/ui/SplitLines'
import NumberTicker from '../components/ui/NumberTicker'
import SectionReveal, { StaggerGroup, StaggerItem } from '../components/ui/SectionReveal'

const NAV = [
  { h: '#maison', t: 'La maison' },
  { h: '#carte', t: 'La carte' },
  { h: '#avis', t: 'Avis' },
  { h: '#infos', t: 'Infos' },
]

const SOMMAIRE = [
  { no: '01', h: '#maison', t: 'La maison', d: 'Une adresse de village ouverte tous les jours depuis 2017.' },
  { no: '02', h: '#carte', t: 'La carte', d: 'Pizzas au feu de bois, tartare minute, pâtes et planches.' },
  { no: '03', h: '#avis', t: 'Les avis', d: 'Plus de 1 400 retours publiés sur Google et Tripadvisor.' },
  { no: '04', h: '#infos', t: 'Venir', d: 'Rond-point du Grysélis, parking gratuit à 95 m.' },
]

const btn = 'inline-flex items-center gap-2 rounded-sm border px-6 py-3.5 text-sm font-medium no-underline transition-colors duration-300'

function Rubrique({ children, light = false }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] ${light ? 'text-briquec' : 'text-brique'}`}>
      {children}
      <span className={`h-px flex-1 ${light ? 'bg-creme/25' : 'bg-encre/[.16]'}`} />
    </p>
  )
}

export default function Comptoir() {
  const uneRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: uneRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  return (
    <div className="min-h-screen overflow-x-clip bg-creme font-sans text-encre">
      <SmoothScroll />

      {/* ours */}
      <div className="border-b border-encre/[.16]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-4 px-6 py-2.5 text-[11px] font-medium uppercase tracking-[.16em] text-sourdine">
          <Link to="/" className="inline-flex items-center gap-2 no-underline transition-colors hover:text-brique">
            <ArrowLeft size={13} /> Les 3 maquettes
          </Link>
          <span className="hidden sm:inline">Ouvert 7j/7 · 7h – 1h</span>
          <a href={RESTO.phoneHref} className="no-underline transition-colors hover:text-brique">Réservations : {RESTO.phone}</a>
        </div>
      </div>

      {/* navigation */}
      <div className="sticky top-0 z-50 border-b border-encre/[.16] bg-creme/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-5 px-6 py-4">
          <a href="#top" className="flex items-baseline gap-3 no-underline">
            <b className="font-bricolage text-xl font-extrabold leading-none tracking-[-.03em]">{RESTO.name}</b>
          </a>
          <ul className="hidden list-none gap-8 lg:flex">
            {NAV.map((n) => (
              <li key={n.h}>
                <a href={n.h} data-anchor={n.h} className="text-[13.5px] font-medium text-sourdine no-underline transition-colors hover:text-encre">{n.t}</a>
              </li>
            ))}
          </ul>
          <a href={RESTO.phoneHref} className={`${btn} hidden border-encre bg-encre text-creme hover:border-brique hover:bg-brique lg:inline-flex`}>Réserver une table</a>
        </div>
      </div>

      {/* la une */}
      <header ref={uneRef} id="top" className="relative flex min-h-[calc(100svh-108px)] items-end overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 h-[114%]" aria-hidden="true">
          <img src={PHOTOS.terrasse} alt="" className="h-full w-full object-cover" />
          <span className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(27,31,23,.42) 0%,rgba(27,31,23,.18) 34%,rgba(27,31,23,.86) 100%)' }} />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1560px] px-6 pb-12 pt-32 text-creme">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-creme">
            {RESTO.tagline}<span className="h-px flex-1 bg-creme/40" />
          </p>
          <h1 className="mt-5 font-bricolage text-[clamp(3.25rem,10.4vw,10.5rem)] font-bold leading-[.98] tracking-[-.042em]">
            <SplitLines lines={['La table', 'du village']} />
          </h1>

          <div className="mt-9 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <motion.p
              initial={introOK ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[48ch] text-[clamp(.97rem,1.7vw,1.13rem)] font-light text-creme/85"
            >
              Cuisine française aux accents provençaux, pizzas au feu de bois et terrasse à l'ombre de l'olivier.
              Au {RESTO.addressShort.toLowerCase()}, ouvert tous les jours du premier café au dernier verre.
            </motion.p>
            <motion.div
              initial={introOK ? { opacity: 0, y: 18 } : false} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.64, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              <a href={RESTO.phoneHref} className={`${btn} border-creme bg-creme text-encre hover:border-brique hover:bg-brique hover:text-creme`}>{RESTO.phone}</a>
              <a href="#carte" data-anchor="#carte" className={`${btn} border-creme/50 bg-transparent text-creme hover:bg-creme hover:text-encre`}>Lire la carte</a>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-wrap border-t border-creme/30">
            {[
              { b: '7j/7', s: 'Ouvert' },
              { b: '7h – 1h', s: 'Service continu' },
              { b: '11,50 €', s: 'Pizzas dès' },
              { b: '1 412', s: 'Avis Google' },
            ].map((f) => (
              <div key={f.s} className="flex-1 basis-1/4 border-r border-creme/30 px-5 pt-4 first:pl-0 last:border-r-0 max-[640px]:basis-1/2 max-[640px]:border-r-0 max-[640px]:pl-0">
                <b className="block font-bricolage text-[clamp(1.35rem,2.6vw,2rem)] font-bold tracking-[-.03em]">{f.b}</b>
                <span className="text-[11px] font-medium uppercase tracking-[.14em] text-creme/60">{f.s}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* sommaire */}
      <nav className="border-b border-encre/[.16]" aria-label="Sommaire">
        <div className="mx-auto grid max-w-[1560px] px-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOMMAIRE.map((s) => (
            <a key={s.no} href={s.h} data-anchor={s.h}
              className="block border-r border-encre/[.16] px-6 pb-7 pt-6 no-underline transition-colors last:border-r-0 hover:bg-creme2">
              <span className="font-bricolage text-xs font-bold tracking-[.1em] text-brique">{s.no}</span>
              <h3 className="mb-1.5 mt-2 font-bricolage text-[clamp(1.25rem,2.1vw,1.6rem)] font-bold tracking-[-.018em]">{s.t}</h3>
              <p className="text-[13.5px] font-light text-sourdine">{s.d}</p>
            </a>
          ))}
        </div>
      </nav>

      {/* la maison */}
      <section id="maison" className="py-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-6 lg:grid-cols-[5fr_7fr] lg:gap-14">
          <SectionReveal as="figure" className="m-0">
            <img src={PHOTOS.salle} alt="La salle de la brasserie" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <figcaption className="mt-3 border-l-2 border-brique pl-3.5 text-xs text-sourdine">
              La salle, climatisée et accessible de plain-pied — et la terrasse dès les beaux jours.
            </figcaption>
          </SectionReveal>

          <div>
            <SectionReveal>
              <Rubrique>01 — La maison</Rubrique>
              <h2 className="my-5 font-bricolage text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[.98] tracking-[-.03em]">
                Ouverte<br />tous les jours,<br />vraiment.
              </h2>
              <p className="max-w-[46ch] text-[clamp(1.05rem,2vw,1.375rem)] font-light leading-[1.5] text-olive">
                C'est l'une des rares tables de {RESTO.city} à ne jamais baisser le rideau : de 7h du matin à 1h,
                sept jours sur sept, sans coupure entre les services.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <p className="mt-6 max-w-[62ch] text-base font-light text-sourdine">
                Au rond-point du Grysélis, à deux pas des thermes et du centre-ville, la brasserie accueille curistes,
                familles et habitués depuis 2017. On y vient pour le café du matin, pour déjeuner en terrasse, pour
                partager une planche à l'apéro ou dîner d'une pizza qui déborde de l'assiette.
              </p>
              <p className="mt-3.5 max-w-[62ch] text-base font-light text-sourdine">
                Salle climatisée quand le mistral se lève, accès de plain-pied, chaises hautes pour les plus petits et
                un parking gratuit à quatre-vingt-quinze mètres. Rien de compliqué : une brasserie qui fait son travail,
                tous les jours.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.14} className="mt-9 grid border-t border-encre/[.16] sm:grid-cols-3">
              {[{ b: '2017', s: 'Depuis' }, { b: '20–30 €', s: 'À la carte' }, { b: '95 m', s: 'Parking gratuit' }].map((c) => (
                <div key={c.s} className="border-r border-encre/[.16] px-5 pt-5 first:pl-0 last:border-r-0 max-sm:border-r-0 max-sm:pl-0">
                  <b className="block font-bricolage text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-.03em] text-brique">{c.b}</b>
                  <span className="text-[11px] font-medium uppercase tracking-[.14em] text-sourdine">{c.s}</span>
                </div>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* la carte */}
      <section id="carte" className="bg-olive py-16 text-creme md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-9 px-6 lg:grid-cols-[280px_1fr] lg:gap-14">
          <SectionReveal className="lg:sticky lg:top-24">
            <Rubrique light>02 — La carte</Rubrique>
            <ol className="mt-5 list-none [counter-reset:c]">
              {CARTE.map((cat) => (
                <li key={cat.key} className="border-t border-creme/20 [counter-increment:c] last:border-b">
                  <a href={`#c-${cat.key}`} data-anchor={`#c-${cat.key}`}
                    className="flex items-baseline gap-3 py-3.5 text-[15px] no-underline transition-all hover:pl-1.5 hover:text-briquec
                               before:font-bricolage before:text-[11px] before:font-bold before:tracking-[.08em] before:text-briquec before:content-[counter(c,decimal-leading-zero)]">
                    {cat.title}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-base font-light text-creme/65">
              Portions généreuses, prix de brasserie. La carte évolue au fil des saisons et des arrivages.
            </p>
          </SectionReveal>

          <div>
            <SectionReveal>
              <h2 className="mb-11 font-bricolage text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[.98] tracking-[-.03em]">
                Ce qu'on<br />sert ici
              </h2>
            </SectionReveal>

            {CARTE.map((cat) => (
              <SectionReveal key={cat.key} className="mb-11 border-b border-creme/20 pb-11 last:mb-0 last:border-b-0 last:pb-0">
                <div id={`c-${cat.key}`} className="mb-5 flex flex-wrap items-end justify-between gap-5 scroll-mt-24">
                  <h3 className="font-bricolage text-[clamp(1.6rem,3.2vw,2.5rem)] font-bold tracking-[-.02em]">{cat.title}</h3>
                  <span className="text-[11.5px] font-medium uppercase tracking-[.16em] text-briquec">{cat.sub}</span>
                </div>
                <div className="grid gap-x-12 md:grid-cols-2">
                  {cat.items.map((it) => (
                    <div key={it.n} className="flex items-baseline gap-3 border-b border-creme/[.14] py-2.5">
                      <span className="text-base font-normal">
                        {it.n}
                        {it.sub && <small className="block text-[12.5px] font-light text-creme/50">{it.sub}</small>}
                      </span>
                      <span className="flex-1" />
                      <span className={it.soft
                        ? 'whitespace-nowrap text-xs uppercase tracking-[.12em] text-creme/45'
                        : 'whitespace-nowrap font-bricolage text-[17px] font-bold tracking-[-.02em]'}>{it.p}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* la spécialité */}
      <section className="relative grid min-h-[min(76svh,620px)] place-items-center overflow-hidden text-center text-creme">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src={PHOTOS.apero} alt="" loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute inset-0 bg-[rgba(27,31,23,.66)]" />
        </div>
        <SectionReveal className="relative z-10 max-w-[840px] px-6 py-16">
          <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em]">La spécialité de la maison</p>
          <div className="my-2.5 font-bricolage text-[clamp(3.4rem,12vw,9.5rem)] font-extrabold leading-[.86] tracking-[-.05em]">
            Pizzas dès <NumberTicker value={11.5} decimals={2} suffix=" €" />
          </div>
          <h2 className="mb-3.5 font-bricolage text-[clamp(1.4rem,3vw,2.4rem)] font-bold tracking-[-.03em]">Au feu de bois</h2>
          <p className="mx-auto mb-7 max-w-[46ch] text-base font-light text-creme/78">
            « Énorme pizza qui prend toute l'assiette, avec une très bonne odeur qui s'en dégage » — c'est ce que nos clients écrivent.
          </p>
          <a href={RESTO.phoneHref} className={`${btn} border-creme bg-creme text-encre hover:border-brique hover:bg-brique hover:text-creme`}>
            <Phone size={15} /> Réserver une table
          </a>
        </SectionReveal>
      </section>

      {/* avis */}
      <section id="avis" className="py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionReveal>
            <Rubrique>03 — Les avis</Rubrique>
            <h2 className="my-5 font-bricolage text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[.98] tracking-[-.03em]">
              Ce qu'on écrit<br />sur nous
            </h2>
            <p className="mb-11 max-w-[46ch] text-[clamp(1.05rem,2vw,1.375rem)] font-light leading-[1.5] text-olive">
              Plus de 1 400 avis Google et 350 avis Tripadvisor. En voici quelques extraits, publiés par nos clients.
            </p>
          </SectionReveal>

          <StaggerGroup className="grid border-t border-encre/[.16] lg:grid-cols-3" stagger={0.07}>
            {AVIS.map((a) => (
              <StaggerItem key={a.name} className="border-b border-r border-encre/[.16] px-8 pb-8 pt-8 lg:[&:nth-child(3n)]:border-r-0 max-lg:border-r-0 max-lg:px-0">
                <div className="text-[13px] tracking-[2px] text-brique">★★★★★</div>
                <blockquote className="my-3.5 font-bricolage text-[clamp(1.1rem,1.9vw,1.375rem)] font-medium leading-[1.32] tracking-[-.022em]">
                  « {a.text} »
                </blockquote>
                <div className="text-[13px] font-medium">
                  {a.name}
                  <span className="block text-xs font-light text-sourdine">{a.city}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* venir */}
      <section id="infos" className="bg-creme2 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionReveal>
            <Rubrique>04 — Venir</Rubrique>
            <h2 className="my-5 font-bricolage text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[.98] tracking-[-.03em]">
              Rond-point<br />du Grysélis
            </h2>
            <p className="mb-11 max-w-[46ch] text-[clamp(1.05rem,2vw,1.375rem)] font-light leading-[1.5] text-olive">
              À deux pas des thermes et du centre-ville, avec un parking gratuit à 95 mètres.
            </p>
          </SectionReveal>

          <SectionReveal className="grid border border-encre/[.16] lg:grid-cols-2">
            <div className="border-b border-encre/[.16] px-9 py-10 lg:border-b-0 lg:border-r">
              {[
                { t: 'Adresse', v: <>{RESTO.addressShort}<br />04800 {RESTO.city}</> },
                { t: 'Téléphone', v: <a href={RESTO.phoneHref} className="no-underline transition-colors hover:text-brique">{RESTO.phone}</a> },
                { t: 'Horaires', v: <>{RESTO.hours}<br />Service midi &amp; soir</> },
                { t: 'Parking', v: RESTO.parking },
                { t: 'Budget', v: <>{RESTO.budget} · pizzas dès {RESTO.pizzaFrom}</> },
              ].map(({ t, v }) => (
                <div key={t} className="grid grid-cols-[96px_1fr] items-start gap-4 border-b border-encre/[.16] py-4 last:border-b-0">
                  <b className="pt-1 text-[11px] font-semibold uppercase tracking-[.16em] text-brique">{t}</b>
                  <div className="text-base font-light">{v}</div>
                </div>
              ))}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {SERVICES.map((s) => (
                  <span key={s} className="rounded-sm border border-encre/[.16] px-3 py-1.5 text-xs text-sourdine">{s}</span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={RESTO.phoneHref} className={`${btn} border-encre bg-encre text-creme hover:border-brique hover:bg-brique`}>Appeler le restaurant</a>
                <a href={RESTO.maps} target="_blank" rel="noopener" className={`${btn} border-encre bg-transparent text-encre hover:bg-encre hover:text-creme`}>Itinéraire</a>
              </div>
            </div>
            <div className="min-h-[470px]">
              <iframe
                title="Carte — La Brasserie du Soleil"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[470px] w-full border-0 [filter:saturate(.72)_contrast(1.04)]"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.878%2C43.752%2C5.895%2C43.762&layer=mapnik&marker=43.7573%2C5.8866"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer className="bg-olive py-12 text-sm font-light text-creme/65">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 px-6">
          <span>© 2026 {RESTO.name} — Développé par <a href="https://logiq-ia.fr" target="_blank" rel="noopener" className="font-medium text-briquec no-underline transition-colors hover:text-creme">Logiq IA</a></span>
          <Link to="/" className="no-underline transition-colors hover:text-creme">← Revenir aux 3 maquettes</Link>
        </div>
      </footer>
    </div>
  )
}
