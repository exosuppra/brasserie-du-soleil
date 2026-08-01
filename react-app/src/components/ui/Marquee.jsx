import { cn } from '../../lib/utils'

// Bandeau défilant : la liste est doublée pour un défilement continu de -50 %.
export default function Marquee({ items, className = '', itemClassName = '', separator = '●', duration = '38s' }) {
  const doubled = [...items, ...items]
  return (
    <div className={cn('overflow-hidden whitespace-nowrap marquee-pause', className)} aria-hidden="true">
      <div data-marquee className="inline-flex animate-marquee" style={{ '--duration': duration }}>
        {doubled.map((it, i) => (
          <span key={i} className={cn('inline-flex items-center gap-7 px-7', itemClassName)}>
            {it}
            <span className="opacity-70">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
