'use client'
import { useEffect, useRef, useCallback } from 'react'

/**
 * Hook that applies scroll-reveal animations using IntersectionObserver.
 * Call this once per page/component — it observes all elements with
 * `.reveal`, `.reveal-left`, or `.reveal-scale` classes and adds
 * `.revealed` when they enter the viewport.
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  const init = useCallback(() => {
    // Disconnect any previous observer
    observerRef.current?.disconnect()

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
    if (elements.length === 0) return

    // Immediately reveal elements that are already in the viewport
    // to avoid the "empty page" look when filtering
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

      if (isInViewport) {
        // Snap visible: disable transition, add class, then restore transition
        const htmlEl = el as HTMLElement
        const prevTransition = htmlEl.style.transition
        htmlEl.style.transition = 'none'
        htmlEl.classList.add('revealed')

        // Force restyle/reflow
        void htmlEl.offsetHeight

        // Restore transition for future state changes if any (though usually revealed is one-way)
        htmlEl.style.transition = prevTransition
      }
    })

    // Observe elements that are still below the fold
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        observerRef.current?.observe(el)
      }
    })
  }, [])

  useEffect(() => {
    // Small delay to ensure DOM is updated and layout is stable
    const t = setTimeout(init, 50)
    return () => {
      clearTimeout(t)
      observerRef.current?.disconnect()
    }
  }, [init])

  return { reinit: init }
}
