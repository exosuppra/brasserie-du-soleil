import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Phone, MapPin, Clock, Car } from 'lucide-react'
import { RESTO, CARTE, SERVICES, AVIS, PHOTOS } from '../data'
import SmoothScroll from '../components/SmoothScroll'
import { introOK } from '../lib/intro'
import SplitLines from '../components/ui/SplitLines'
import Marquee from '../components/ui/Marquee'
import SectionReveal, { StaggerGroup, StaggerItem } from '../components/ui/SectionReveal'

const NAV = [
  { h: '#maison', t: 'La maison' },
  { h: '#carte', t: "L'ardoise" },
  { h: '#avis', t: 'Avis' },
  { h: '#infos', t: 'Infos' },
]

const POLAS = [
  { img: PHOTOS.pizza, cap: 'la pizza', cls: 'left-0 top-0 h-[56%] w-1/2 -rotate-[5deg] max-[620px]:h-[64%] max-[620px]:w-[64%]' },
  { img: PHOTOS.apero, cap: "l'apéro", cls: 'right-0 top-[9%] h-1/2 w-[44%] rotate-[4.5deg] max-[620px]:hidden' },
  { img: PHOTOS.terrasse, cap: 'la terrasse', cls: 'bottom-0 left-[17%] z-[3] h-[43%] w-[43%] -rotate-[1.5deg] max-[620px]:left-[38%] max-[620px]:h-[52%] max-[620px]:w-[58%]' },
]

const NOTES = [
  { n: '1', t: 'On ne ferme pas entre les services.', d: "Café du matin, déjeuner, apéro sur la terrasse, dîner : de 7h à 1h, tous les jours." },
  { n: '2', t: "La terrasse à l'ombre de l'olivier.", d: 'La meilleure place du village quand il fait beau ; salle climatisée quand le mistral se lève.' },
  { n: '3', t: 'Des prix de brasserie.', d: 'Pizzas maison dès 11,50 €, pâtes à 16,50 €, viandes de 18,50 à 23,50 €. Prix TTC, service compris.' },
]

const btn = 'inline-flex items-center gap-2 border-2 px-6 py-3 font-barlow text-[14.5px] font-semibold no-underline transition-all duration-300 main-tracee'

function Ligne({ it }) {
  return (
    <div className="flex items-baseline gap-2.5 py-2">
      <span className="text-[15.6px] font-normal">
        {it.n}
        {it.sub && <small className="block text-[12.8px] text-craie/50">{it.sub}</small>}
      </span>
      <span className="-translate-y-[3px] flex-1 border-b border-dotted border-craie/25" />
      <span className={it.soft
        ? 'whitespace-nowrap font-barlow text-[12.5px] font-medium uppercase tracking-[.1em] text-craie/50'
        : 'whitespace-nowrap font-caveat text-[25px] font-bold leading-none text-craie'}>{it.p}</span>
    </div>
  )
}

export default function Ardoise() {
  return (
    <div className="grain-craie relative min-h-screen overflow-x-clip bg-ardoise font-barlow font-light text-craie">
      <SmoothScroll />

      {/* bandeau bois */}
      <div className="relative z-10 border-b-2 border-black/35 py-2 text-[12.5px] font-medium uppercase tracking-[.1em] text-[#F6E7D6]"
        style={{ background: 'linear-gradient(180deg,#9B6740,#7A4E30)' }}>
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-3 px-5">
          <Link to="/" className="inline-flex items-center gap-2 no-underline transition-colors hover:text-white">
            <ArrowLeft size={14} /> Les 3 maquettes
          </Link>
          <span className="hidden sm:inline">{RESTO.addressShort}, {RESTO.city}</span>
          <a href={RESTO.phoneHref} className="no-underline transition-colors hover:text-white">Réservations : {RESTO.phone}</a>
        </div>
      </div>

      {/* navigation */}
      <div className="sticky top-0 z-50 border-b border-craie/20 bg-ardoise/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3.5">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <span className="main-tracee grid h-10 w-10 flex-none place-items-center border-2 border-craie text-[19px] leading-none">☀</span>
            <span>
              <b className="block font-caveat text-[26px] font-bold leading-[.95]">{RESTO.name}</b>
              <span className="block text-[9.5px] font-semibold uppercase tracking-[.22em] text-craie/50">{RESTO.city}</span>
            </span>
          </a>
          <ul className="hidden list-none gap-7 lg:flex">
            {NAV.map((n) => (
              <li key={n.h}>
                <a href={n.h} data-anchor={n.h} className="text-[14px] font-medium text-craie/75 no-underline transition-colors hover:text-laiton">{n.t}</a>
              </li>
            ))}
          </ul>
          <a href={RESTO.phoneHref} className={`${btn} hidden border-laiton bg-laiton text-ardoise2 hover:-translate-y-0.5 hover:border-abricot hover:bg-abricot lg:inline-flex`}>Réserver</a>
        </div>
      </div>

      {/* héros */}
      <header id="top" className="relative py-16 md:py-[70px]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 lg:grid-cols-[1.06fr_.94fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[.26em] text-laiton">
              <span className="h-px w-6 bg-laiton" />{RESTO.tagline} — depuis 2017
            </span>
            <h1 className="mt-4 font-caveat text-[clamp(3.6rem,10.5vw,8.75rem)] font-bold leading-none">
              <SplitLines lines={["Aujourd'hui,", <span key="o" className="text-laiton">on mange</span>, 'bien.']} />
            </h1>
            <motion.p
              initial={introOK ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[58ch] text-[clamp(.97rem,1.7vw,1.13rem)] text-craie/80"
            >
              L'ardoise change avec le marché, la terrasse ne change jamais. Pizzas maison,
              tartare préparé minute, frites maison — et le café dès 7h du matin.
            </motion.p>
            <motion.div
              initial={introOK ? { opacity: 0, y: 18 } : false} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a href={RESTO.phoneHref} className={`${btn} border-laiton bg-laiton text-ardoise2 hover:-translate-y-0.5 hover:border-abricot hover:bg-abricot`}>
                <Phone size={15} /> {RESTO.phone}
              </a>
              <a href="#carte" data-anchor="#carte" className={`${btn} border-craie bg-transparent text-craie hover:-translate-y-0.5 hover:bg-craie/10`}>Lire l'ardoise</a>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-dashed border-craie/20 pt-6">
              {[{ b: '7j/7', s: 'Ouvert tous les jours' }, { b: '11,50 €', s: 'Pizzas dès' }, { b: '1 412', s: 'Avis Google' }].map((f) => (
                <div key={f.b}>
                  <b className="block font-caveat text-[36px] font-bold leading-[.9] text-laiton">{f.b}</b>
                  <span className="text-[11.5px] font-semibold uppercase tracking-[.14em] text-craie/50">{f.s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* polaroids */}
          <div className="relative h-[clamp(360px,44vw,520px)] max-[620px]:h-[330px]">
            {POLAS.map((p, i) => (
              <motion.figure
                key={p.cap}
                initial={introOK ? { opacity: 0, y: 40 } : false} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute rounded-sm bg-[#F6F3EA] px-2.5 pb-[42px] pt-2.5 shadow-[0_26px_46px_-22px_rgba(0,0,0,.75)] ${p.cls}`}
              >
                <span className="absolute left-1/2 top-[-13px] h-6 w-[78px] -translate-x-1/2 -rotate-2 bg-[rgba(216,205,178,.72)] shadow-[0_2px_6px_rgba(0,0,0,.25)]" aria-hidden="true" />
                <span className="block h-full overflow-hidden">
                  <img src={p.img} alt={p.cap} loading={i === 0 ? 'eager' : 'lazy'} className="h-full w-full object-cover" />
                </span>
                <figcaption className="absolute inset-x-2 bottom-2.5 truncate text-center font-caveat text-[19px] font-semibold leading-none text-[#2C3A34]">{p.cap}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </header>

      <Marquee
        className="border-y border-dashed border-craie/20 bg-ardoise3 py-6"
        itemClassName="font-caveat text-[32px] font-bold text-craie/90"
        separator={<span className="text-laiton text-[17px]">✦</span>}
        duration="44s"
        items={['Pizzas maison dès 11,50 €', 'Tartare de bœuf', 'Entrecôtes grillées', "Terrasse sous l'olivier", 'Café dès 7h']}
      />

      {/* la maison */}
      <section id="maison" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14">
          <SectionReveal className="main-tracee border-2 border-craie/20 p-2">
            <img src={PHOTOS.salle} alt="Salle de la brasserie, un midi" loading="lazy" className="main-tracee aspect-[5/4] w-full object-cover" />
          </SectionReveal>
          <div>
            <SectionReveal>
              <span className="inline-flex items-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[.26em] text-laiton">
                <span className="h-px w-6 bg-laiton" />La maison
              </span>
              <h2 className="my-3.5 font-caveat text-[clamp(2.9rem,7vw,5.5rem)] font-bold leading-none">
                Une <span className="souligne text-laiton">adresse</span><br />de village
              </h2>
              <p className="max-w-[58ch] text-[clamp(.97rem,1.7vw,1.13rem)] text-craie/78">
                Au rond-point du Grysélis, la brasserie accueille curistes, familles et habitués depuis 2017.
                C'est l'une des rares tables de {RESTO.city} ouvertes tous les jours — et sans doute la plus animée.
              </p>
            </SectionReveal>

            <StaggerGroup className="mt-7 grid gap-4" stagger={0.1}>
              {NOTES.map((n) => (
                <StaggerItem key={n.n}>
                  <div className="flex items-start gap-3.5">
                    <span className="main-tracee grid h-[30px] w-[30px] flex-none place-items-center border-2 border-laiton font-caveat text-[17px] font-bold text-laiton">{n.n}</span>
                    <p className="text-[15.4px] text-craie/80"><b className="font-semibold text-craie">{n.t}</b> {n.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* l'ardoise */}
      <section id="carte" className="bg-ardoise2 py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5">
          <SectionReveal className="mx-auto mb-12 max-w-[660px] text-center">
            <span className="inline-flex items-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[.26em] text-laiton">
              <span className="h-px w-6 bg-laiton" />L'ardoise
            </span>
            <h2 className="my-3.5 font-caveat text-[clamp(2.9rem,7vw,5.5rem)] font-bold leading-none">
              Ce qu'on <span className="souligne text-laiton">sert</span> ici
            </h2>
            <p className="mx-auto max-w-[58ch] text-craie/78">
              Cuisine française aux accents provençaux, touche italienne assumée. Portions généreuses, prix raisonnables.
            </p>
          </SectionReveal>

          <SectionReveal className="relative border-[3px] border-bois bg-ardoise p-7 shadow-[inset_0_0_90px_rgba(0,0,0,.5),0_30px_60px_-34px_rgba(0,0,0,.9)] md:p-[52px]">
            <span className="pointer-events-none absolute inset-2.5 border border-dashed border-craie/20" aria-hidden="true" />
            <div className="mb-10 text-center">
              <div className="font-caveat text-[clamp(2.4rem,5.4vw,3.9rem)] font-bold leading-none">{RESTO.name}</div>
              <div className="mt-2 text-[12px] font-semibold uppercase tracking-[.24em] text-laiton">{RESTO.addressShort} · {RESTO.city}</div>
            </div>

            <div className="grid gap-x-14 md:grid-cols-2">
              {CARTE.map((cat) => (
                <div key={cat.key} className="mb-8">
                  <h3 className="font-caveat text-[34px] font-bold leading-none text-laiton">{cat.title}</h3>
                  <div className="mb-3.5 mt-1.5 text-[12px] font-medium uppercase tracking-[.14em] text-craie/50">{cat.sub}</div>
                  {cat.items.map((it) => <Ligne key={it.n} it={it} />)}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ardoise du jour */}
      <section className="border-y border-dashed border-craie/20 bg-ardoise2 py-16 text-center md:py-24">
        <SectionReveal className="mx-auto max-w-[1180px] px-5">
          <span className="inline-flex items-center justify-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[.26em] text-laiton">
            <span className="h-px w-6 bg-laiton" />La spécialité de la maison
          </span>
          <div className="font-caveat text-[clamp(5rem,17vw,13rem)] font-bold leading-[.8] text-laiton">Pizzas dès 11,50 €</div>
          <h2 className="mb-3 mt-3.5 font-caveat text-[clamp(2.1rem,4.6vw,3.6rem)] font-bold">Pizzas maison</h2>
          <p className="mx-auto mb-7 max-w-[46ch] text-craie/72">
            « Énorme pizza qui prend toute l'assiette, avec une très bonne odeur qui s'en dégage » — c'est ce que nos clients écrivent.
          </p>
          <a href={RESTO.phoneHref} className={`${btn} border-laiton bg-laiton text-ardoise2 hover:-translate-y-0.5 hover:border-abricot hover:bg-abricot`}>Réserver une table</a>
        </SectionReveal>
      </section>

      {/* avis */}
      <section id="avis" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5">
          <SectionReveal className="mx-auto mb-12 max-w-[660px] text-center">
            <span className="inline-flex items-center justify-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[.26em] text-laiton">
              <span className="h-px w-6 bg-laiton" />Ils y étaient
            </span>
            <h2 className="my-3.5 font-caveat text-[clamp(2.9rem,7vw,5.5rem)] font-bold leading-none">
              Épinglés au <span className="souligne text-laiton">comptoir</span>
            </h2>
            <p className="mx-auto max-w-[58ch] text-craie/78">Plus de 1 400 avis Google et 350 avis Tripadvisor. En voici quelques-uns.</p>
          </SectionReveal>

          <StaggerGroup className="grid gap-7 lg:grid-cols-3" stagger={0.08}>
            {AVIS.map((a, i) => (
              <StaggerItem key={a.name}>
                <article
                  className="relative h-full rounded-sm bg-[#F6F3EA] px-6 pb-5 pt-7 text-[#2C3A34] shadow-[0_22px_40px_-22px_rgba(0,0,0,.8)]"
                  style={{ rotate: `${[-1.4, 0.9, -0.5][i % 3]}deg` }}
                >
                  <span className="absolute left-1/2 top-[-11px] h-4 w-4 -translate-x-1/2 rounded-full bg-bois shadow-[0_3px_7px_rgba(0,0,0,.45),inset_0_-3px_5px_rgba(0,0,0,.3)]" aria-hidden="true" />
                  <div className="text-[14px] tracking-[2px] text-bois">★★★★★</div>
                  <p className="my-3 font-caveat text-[21px] font-semibold leading-[1.34]">« {a.text} »</p>
                  <div className="border-t border-dashed border-[#2C3A34]/30 pt-3.5">
                    <b className="block text-[14px] font-semibold">{a.name}</b>
                    <span className="text-[12px] text-[#2C3A34]/60">{a.city}</span>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* infos */}
      <section id="infos" className="bg-ardoise2 py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5">
          <SectionReveal className="mx-auto mb-12 max-w-[660px] text-center">
            <span className="inline-flex items-center justify-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[.26em] text-laiton">
              <span className="h-px w-6 bg-laiton" />Infos pratiques
            </span>
            <h2 className="my-3.5 font-caveat text-[clamp(2.9rem,7vw,5.5rem)] font-bold leading-none">
              Rond-point du <span className="souligne text-laiton">Grysélis</span>
            </h2>
            <p className="mx-auto max-w-[58ch] text-craie/78">À deux pas des thermes et du centre-ville, avec un parking gratuit à 95 m.</p>
          </SectionReveal>

          <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
            <SectionReveal className="main-tracee border-2 border-craie/20 px-8 py-8">
              {[
                { Icon: MapPin, t: 'Adresse', v: <>{RESTO.addressShort}<br />04800 {RESTO.city}</> },
                { Icon: Phone, t: 'Réservation', v: <a href={RESTO.phoneHref} className="no-underline transition-colors hover:text-laiton">{RESTO.phone}</a> },
                { Icon: Clock, t: 'Horaires', v: <>{RESTO.hours}<br />Service midi &amp; soir</> },
                { Icon: Car, t: 'Parking', v: RESTO.parking },
              ].map(({ Icon, t, v }) => (
                <div key={t} className="flex gap-4 border-b border-dashed border-craie/20 py-4 last:border-b-0">
                  <span className="main-tracee grid h-10 w-10 flex-none place-items-center border-2 border-laiton"><Icon size={17} /></span>
                  <div>
                    <b className="block text-[11.5px] font-semibold uppercase tracking-[.16em] text-laiton">{t}</b>
                    <div className="text-[15.6px]">{v}</div>
                  </div>
                </div>
              ))}
              <div className="mt-5 flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <span key={s} className="main-tracee border border-dashed border-craie/20 px-3.5 py-1.5 text-[12.5px] font-medium text-craie/80">{s}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={RESTO.phoneHref} className={`${btn} border-laiton bg-laiton text-ardoise2 hover:-translate-y-0.5 hover:border-abricot hover:bg-abricot`}>Appeler</a>
                <a href={RESTO.maps} target="_blank" rel="noopener" className={`${btn} border-craie bg-transparent text-craie hover:-translate-y-0.5 hover:bg-craie/10`}>Itinéraire</a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1} className="main-tracee min-h-[460px] overflow-hidden border-2 border-craie/20">
              <iframe
                title="Carte — La Brasserie du Soleil"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[460px] w-full border-0 [filter:invert(.9)_hue-rotate(160deg)_saturate(.5)_brightness(.92)]"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.878%2C43.752%2C5.895%2C43.762&layer=mapnik&marker=43.7573%2C5.8866"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-dashed border-craie/20 bg-ardoise2 py-11 text-[13px] text-craie/50">
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-4 px-5">
          <span>© 2026 {RESTO.name} — Développé par <a href="https://logiq-ia.fr" target="_blank" rel="noopener" className="font-medium text-laiton no-underline">Logiq IA</a></span>
          <Link to="/" className="no-underline transition-colors hover:text-laiton">← Revenir aux 3 maquettes</Link>
        </div>
      </footer>
    </div>
  )
}
