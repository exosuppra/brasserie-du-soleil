import { motion } from 'framer-motion'
import { introOK } from '../../lib/intro'

// Titre dont chaque ligne remonte depuis un masque (aucune librairie de découpe).
export default function SplitLines({ lines, className = '', lineClassName = '', delay = 0.12, stagger = 0.1 }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            initial={introOK ? { y: '108%' } : false}
            animate={{ y: 0 }}
            transition={{ duration: 1.05, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
