import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!elements.length) {
      return undefined
    }

    elements.forEach((element) => {
      const { revealDelay } = element.dataset
      if (revealDelay) {
        element.style.setProperty('--reveal-delay', `${revealDelay}ms`)
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}