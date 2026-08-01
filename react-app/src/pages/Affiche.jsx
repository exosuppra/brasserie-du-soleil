import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Phone, MapPin, Clock, Car } from 'lucide-react'
import { RESTO, CARTE, SERVICES, AVIS, PHOTOS } from '../data'
import SmoothScroll from '../components/SmoothScroll'
import { introOK } from '../lib/intro'
import SplitLines from '../components/ui/SplitLines'
import Marquee from '../components/ui/Marquee'
import NumberTicker from '../components/ui/NumberTicker'
import SectionReveal, { StaggerGroup, StaggerItem } from '../components/ui/SectionReveal'

const NAV = [
  { h: '#maison', t: 'La maison' },
  { h: '#carte', t: 'La carte' },
  { h: '#avis', t: 'Avis' },
  { h: '#infos', t: 'Infos' },
]

const BLOCS = [
  { n: '01', t: 'Ouvert tous les jours', d: "L'une des rares adresses de Gréoux ouvertes 7j/7, de 7h du matin à 1h. Café, déjeuner, apéro, dîner : on ne ferme pas entre les services.", bg: 'bg-jaune text-noir' },
  { n: '02', t: 'La terrasse', d: "À l'ombre de l'olivier, la meilleure place du village pour un déjeuner qui traîne. Salle climatisée quand le mistral se lève.", bg: 'bg-papier text-noir' },
  { n: '03', t: 'Prix de brasserie', d: 'Menu du jour à 16,50 € entrée-plat-dessert, pizzas dès 10 €, compter 20 à 30 € à la carte. Généreux, sans mauvaise surprise.', bg: 'bg-rouge text-papier' },
]

const btn = 'inline-flex items-center gap-2 border-4 border-noir px-6 py-3.5 text-[15px] font-extrabold uppercase tracking-[.06em] no-underline transition-[transform,box-shadow] duration-100'
const shadow = 'shadow-[7px_7px_0_#14181F] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#14181F]'

export default function Affiche() {
  return (
    <div className="min-h-screen overflow-x-clip bg-papier font-archivo text-noir">
      <SmoothScroll />

      {/* bandeau d'information */}
      <div className="bg-noir py-2.5 text-[12.5px] font-semibold uppercase tracking-[.14em] text-papier">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-5">
          <Link to="/" className="inline-flex items-center gap-2 no-underline transition-colors hover:text-jaune">
            <ArrowLeft size={14} /> Les 3 maquettes
          </Link>
          <span className="hidden sm:inline">{RESTO.addressShort}, {RESTO.city}</span>
          <a href={RESTO.phoneHref} className="no-underline transition-colors hover:text-jaune">Réservations : {RESTO.phone}</a>
        </div>
      </div>

      {/* navigation */}
      <div className="sticky top-0 z-50 border-b-4 border-noir bg-jaune">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <span className="relative h-10 w-10 flex-none border-[3px] border-noir bg-bleu">
              <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-jaune" />
            </span>
            <span>
              <b className="block font-anton text-[21px] uppercase leading-none">{RESTO.name}</b>
              <span className="block text-[10px] font-bold uppercase tracking-[.2em]">{RESTO.city}</span>
            </span>
          </a>
          <ul className="hidden list-none gap-7 lg:flex">
            {NAV.map((n) => (
              <li key={n.h}>
                <a href={n.h} data-anchor={n.h} className="border-b-[3px] border-transparent pb-0.5 text-[13.5px] font-bold uppercase tracking-[.1em] no-underline transition-colors hover:border-rouge">{n.t}</a>
              </li>
            ))}
          </ul>
          <a href={RESTO.phoneHref} className={`${btn} hidden bg-rouge px-5 py-2.5 text-[13px] text-papier shadow-[5px_5px_0_#14181F] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#14181F] lg:inline-flex`}>Réserver</a>
        </div>
      </div>

      {/* héros */}
      <header id="top" className="relative overflow-hidden border-b-4 border-noir bg-bleu text-papier">
        <div className="pointer-events-none absolute left-1/2 top-[-38%] h-[150vmax] w-[150vmax] -translate-x-1/2 animate-rayons"
          style={{ background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(245,185,33,.16) 0deg 7deg, transparent 7deg 14deg)' }} aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-14 lg:grid-cols-[1.15fr_.85fr] lg:py-[70px]">
          <div>
            <span className="inline-block bg-jaune px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[.2em] text-noir">
              {RESTO.tagline} — depuis 2017
            </span>
            <h1 className="mt-5 font-anton text-[clamp(3.4rem,9.6vw,8.25rem)] uppercase leading-[.92]">
              <SplitLines lines={[
                'Ici on',
                <span key="j" className="text-jaune">mange</span>,
                <span key="o" className="text-transparent [-webkit-text-stroke:2.5px_#F7F1E3]">au soleil</span>,
              ]} />
            </h1>
            <motion.p
              initial={introOK ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[60ch] text-[clamp(1rem,1.8vw,1.2rem)] font-medium text-papier/90"
            >
              Pizzas au feu de bois, tartare préparé minute, frites maison et terrasse à l'ombre de l'olivier.
              Du café de 7h au dernier verre de 1h du matin — tous les jours, sans exception.
            </motion.p>
            <motion.div
              initial={introOK ? { opacity: 0, y: 18 } : false} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.66, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3.5"
            >
              <a href={RESTO.phoneHref} className={`${btn} ${shadow} bg-jaune text-noir`}><Phone size={16} /> {RESTO.phone}</a>
              <a href="#carte" data-anchor="#carte" className={`${btn} border-papier bg-transparent text-papier shadow-[7px_7px_0_#F5B921] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#F5B921]`}>Voir la carte</a>
            </motion.div>

            <div className="mt-10 flex flex-wrap border-[3px] border-papier">
              {[
                { b: '7j/7', s: 'Ouvert tous les jours' },
                { b: '16,50 €', s: 'Menu du jour' },
                { b: '1 412', s: 'Avis Google' },
              ].map((f) => (
                <div key={f.b} className="flex-1 basis-1/3 border-r-[3px] border-papier px-4 py-3.5 last:border-r-0 max-[560px]:basis-full max-[560px]:border-b-[3px] max-[560px]:border-r-0 max-[560px]:last:border-b-0">
                  <b className="block font-anton text-[26px] leading-none text-jaune">{f.b}</b>
                  <span className="text-[11px] font-bold uppercase tracking-[.14em] text-papier/70">{f.s}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={introOK ? { opacity: 0, scale: 0.95 } : false} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 z-10 grid h-28 w-28 -rotate-[11deg] place-items-center rounded-full border-4 border-noir bg-rouge text-center text-papier">
              <span>
                <b className="block font-anton text-[27px] leading-[.9]">7h<br />1h</b>
                <span className="text-[9.5px] font-extrabold uppercase tracking-[.14em]">Non-stop</span>
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border-4 border-noir shadow-[14px_14px_0_#F5B921]">
              <img src={PHOTOS.pizza} alt="Pizza au feu de bois" className="h-full w-full object-cover [filter:saturate(1.1)_contrast(1.06)]" />
              <span className="absolute inset-0 bg-rouge opacity-[.16] mix-blend-multiply" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </header>

      <div className="h-[22px] border-b-4 border-noir" style={{ background: 'repeating-linear-gradient(90deg,#D93A2B 0 46px,#F7F1E3 46px 92px)' }} aria-hidden="true" />
      <Marquee
        className="border-b-4 border-noir bg-jaune py-3"
        itemClassName="font-anton text-[23px] uppercase"
        separator="●"
        items={['Pizzas au feu de bois', "Terrasse sous l'olivier", 'Tartare minute', 'Frites maison', 'Cocktails', 'Menu 16,50 €']}
      />

      {/* la maison */}
      <section id="maison" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5">
          <SectionReveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-block bg-rouge px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[.2em] text-papier">La maison</span>
              <h2 className="mt-3.5 font-anton text-[clamp(2.4rem,6.4vw,5.4rem)] uppercase leading-[.92]">Une adresse<br />de village</h2>
            </div>
            <p className="max-w-[42ch] text-[clamp(1rem,1.8vw,1.2rem)] font-medium">
              Au rond-point du Grysélis depuis 2017. Curistes, familles, habitués : ici tout le monde a sa table,
              et personne ne repart en ayant faim.
            </p>
          </SectionReveal>

          <StaggerGroup className="grid border-4 border-noir md:grid-cols-3" stagger={0.09}>
            {BLOCS.map((b) => (
              <StaggerItem key={b.n} className={`${b.bg} border-b-4 border-r-4 border-noir px-7 pb-8 pt-8 last:border-r-0 md:border-b-0`}>
                <div className={`font-anton text-[64px] leading-[.8] ${b.n === '03' ? 'text-jaune' : 'text-rouge'}`}>{b.n}</div>
                <h3 className="mb-2.5 mt-3 font-anton text-[clamp(1.35rem,2.4vw,1.85rem)] uppercase leading-none">{b.t}</h3>
                <p className="text-[14.8px] font-medium">{b.d}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* la carte */}
      <section id="carte" className="bg-papier2 py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5">
          <SectionReveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-block bg-noir px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[.2em] text-papier">La carte</span>
              <h2 className="mt-3.5 font-anton text-[clamp(2.4rem,6.4vw,5.4rem)] uppercase leading-[.92]">Généreuse,<br />sans chichi</h2>
            </div>
            <p className="max-w-[42ch] text-[clamp(1rem,1.8vw,1.2rem)] font-medium">
              Cuisine française aux accents provençaux, touche italienne assumée. La carte bouge au fil des saisons.
            </p>
          </SectionReveal>

          <SectionReveal className="grid border-4 border-noir bg-papier md:grid-cols-2">
            {CARTE.map((cat, i) => (
              <article key={cat.key} className={`border-noir ${i % 2 === 0 ? 'md:border-r-4' : ''} ${i < 2 ? 'border-b-4' : 'max-md:border-b-4'} max-md:last:border-b-0`}>
                <div className="flex items-stretch border-b-4 border-noir">
                  <div className="w-[132px] flex-none overflow-hidden border-r-4 border-noir">
                    <img src={cat.photo} alt={cat.title} loading="lazy" className="h-full min-h-[118px] w-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center px-5 py-4">
                    <h3 className="font-anton text-[clamp(1.3rem,2.2vw,1.75rem)] uppercase leading-none">{cat.title}</h3>
                    <span className="mt-1.5 text-[11.5px] font-extrabold uppercase tracking-[.14em] text-rouge">{cat.sub}</span>
                  </div>
                </div>
                <ul className="list-none px-6 pb-6 pt-4">
                  {cat.items.map((it) => (
                    <li key={it.n} className="flex items-baseline gap-2.5 border-b-2 border-dotted border-noir/30 py-2.5 last:border-b-0">
                      <span className="text-[15.4px] font-semibold">
                        {it.n}
                        {it.sub && <small className="block text-[12.5px] font-medium opacity-60">{it.sub}</small>}
                      </span>
                      <span className="flex-1" />
                      <span className={it.soft
                        ? 'whitespace-nowrap text-[12.5px] font-bold uppercase tracking-[.08em] text-noir/50'
                        : 'whitespace-nowrap font-anton text-[19px] text-bleu'}>{it.p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* menu du jour */}
      <section className="border-y-4 border-noir bg-rouge py-14 text-center text-papier md:py-20">
        <SectionReveal className="mx-auto max-w-[1240px] px-5">
          <span className="inline-block bg-jaune px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[.2em] text-noir">Tous les midis</span>
          <div className="my-2 font-anton text-[clamp(5.5rem,20vw,15.5rem)] leading-[.82] tracking-[-.02em] text-jaune">
            <NumberTicker value={16.5} decimals={2} suffix=" €" />
          </div>
          <h2 className="mb-3.5 font-anton text-[clamp(1.5rem,3.4vw,2.75rem)] uppercase">Entrée · Plat · Dessert</h2>
          <p className="mx-auto mb-7 max-w-[46ch] font-medium text-papier/90">
            « Menu du jour entrée-plat-dessert, ça devient rare » — c'est ce que nos clients écrivent. Alors on le garde.
          </p>
          <a href={RESTO.phoneHref} className={`${btn} ${shadow} bg-jaune text-noir`}>Réserver une table</a>
        </SectionReveal>
      </section>

      {/* avis */}
      <section id="avis" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5">
          <SectionReveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-block bg-rouge px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[.2em] text-papier">Ils y étaient</span>
              <h2 className="mt-3.5 font-anton text-[clamp(2.4rem,6.4vw,5.4rem)] uppercase leading-[.92]">Ce qu'on<br />écrit sur nous</h2>
            </div>
            <p className="max-w-[42ch] text-[clamp(1rem,1.8vw,1.2rem)] font-medium">
              Plus de 1 400 avis Google et 350 avis Tripadvisor. Voici quelques extraits publiés par nos clients.
            </p>
          </SectionReveal>

          <StaggerGroup className="grid gap-6 lg:grid-cols-3" stagger={0.08}>
            {AVIS.map((a, i) => (
              <StaggerItem key={a.name}>
                <article className={`h-full border-4 border-noir bg-papier px-6 pb-5 pt-6 ${['shadow-[8px_8px_0_#17357A]', 'shadow-[8px_8px_0_#D93A2B]', 'shadow-[8px_8px_0_#4E7A3E]'][i % 3]}`}>
                  <div className="text-[15px] tracking-[2px] text-rouge">★★★★★</div>
                  <p className="my-3 text-[15.4px] font-medium">« {a.text} »</p>
                  <div className="flex items-center gap-3 border-t-[3px] border-noir pt-3.5">
                    <span className="grid h-9 w-9 flex-none place-items-center bg-bleu font-anton text-[18px] text-papier">{a.name.charAt(0)}</span>
                    <div>
                      <b className="block text-[14.5px] font-extrabold">{a.name}</b>
                      <span className="text-[12px] font-semibold opacity-60">{a.city}</span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* infos */}
      <section id="infos" className="bg-papier2 py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5">
          <SectionReveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-block bg-noir px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[.2em] text-papier">Infos pratiques</span>
              <h2 className="mt-3.5 font-anton text-[clamp(2.4rem,6.4vw,5.4rem)] uppercase leading-[.92]">Rond-point<br />du Grysélis</h2>
            </div>
            <p className="max-w-[42ch] text-[clamp(1rem,1.8vw,1.2rem)] font-medium">
              À deux pas des thermes et du centre-ville, avec un parking gratuit à 95 m.
            </p>
          </SectionReveal>

          <SectionReveal className="grid border-4 border-noir lg:grid-cols-2">
            <div className="border-b-4 border-noir bg-papier px-8 py-9 lg:border-b-0 lg:border-r-4">
              {[
                { Icon: MapPin, t: 'Adresse', v: <>{RESTO.addressShort}<br />04800 {RESTO.city}</> },
                { Icon: Phone, t: 'Réservation', v: <a href={RESTO.phoneHref} className="no-underline transition-colors hover:text-bleu">{RESTO.phone}</a> },
                { Icon: Clock, t: 'Horaires', v: <>{RESTO.hours}<br />Service midi &amp; soir</> },
                { Icon: Car, t: 'Parking', v: RESTO.parking },
              ].map(({ Icon, t, v }) => (
                <div key={t} className="flex gap-4 border-b-2 border-dotted border-noir/30 py-4 last:border-b-0">
                  <span className="grid h-[42px] w-[42px] flex-none place-items-center border-[3px] border-noir bg-jaune"><Icon size={18} /></span>
                  <div>
                    <b className="block text-[11.5px] font-extrabold uppercase tracking-[.14em] text-rouge">{t}</b>
                    <div className="text-[15.6px] font-semibold">{v}</div>
                  </div>
                </div>
              ))}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {SERVICES.map((s) => (
                  <span key={s} className="border-2 border-noir bg-papier2 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[.06em]">{s}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={RESTO.phoneHref} className={`${btn} ${shadow} bg-rouge text-papier`}>Appeler</a>
                <a href={RESTO.maps} target="_blank" rel="noopener" className={`${btn} ${shadow} bg-papier text-noir`}>Itinéraire</a>
              </div>
            </div>
            <div className="min-h-[460px]">
              <iframe
                title="Carte — La Brasserie du Soleil"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[460px] w-full border-0 [filter:saturate(.85)_contrast(1.05)]"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.878%2C43.752%2C5.895%2C43.762&layer=mapnik&marker=43.7573%2C5.8866"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer className="bg-noir py-12 text-papier">
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-papier/20 pt-5 text-[12px] font-semibold uppercase tracking-[.1em] text-papier/55">
            <span>© 2026 {RESTO.name} — Maquette « Affiche »</span>
            <Link to="/" className="no-underline transition-colors hover:text-jaune">← Revenir aux 3 maquettes</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
