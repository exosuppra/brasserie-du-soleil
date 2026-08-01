import { motion } from 'framer-motion'
import { introOK } from '../../lib/intro'

// Révélation au scroll (Framer Motion whileInView).
// `initial={false}` quand l'onglet démarre caché : voir lib/intro.js.
export default function SectionReveal({ children, className = '', delay = 0, y = 32, as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={introOK ? { opacity: 0, y } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </M>
  )
}

// Conteneur avec stagger pour enfants <StaggerItem>
export function StaggerGroup({ children, className = '', stagger = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial={introOK ? 'hidden' : false}
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 28 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
