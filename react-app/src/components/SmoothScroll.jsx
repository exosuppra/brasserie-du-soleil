import { useEffect } from 'react'
import Lenis from 'lenis'

// Smooth scroll global (désactivé si prefers-reduced-motion)
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 })
    let id
    const raf = (time) => {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)

    // Ancres internes (data-anchor="#section")
    const onClick = (e) => {
      const a = e.target.closest('a[data-anchor]')
      if (!a) return
      const anchor = a.getAttribute('data-anchor')
      const el = document.querySelector(anchor)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -80 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])
  return null
}
