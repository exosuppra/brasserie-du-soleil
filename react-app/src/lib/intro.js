// Framer Motion avance ses animations via requestAnimationFrame : dans un onglet
// ouvert en arrière-plan (clic milieu, « ouvrir dans un nouvel onglet »), rAF est
// gelé et IntersectionObserver ne se déclenche pas. Les éléments resteraient donc
// bloqués sur leur état `initial` — invisibles. On détecte ce cas au chargement et
// on rend directement l'état final : le contenu prime sur l'effet.
export const introOK =
  typeof document !== 'undefined' &&
  !document.hidden &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
