import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to a ref
 * and adds the class `visible` when the element enters the viewport.
 *
 * @param {string} className - CSS class that triggers the reveal (default 'reveal')
 * @param {number} threshold - intersection threshold (default 0.15)
 * @param {string} rootMargin - root margin (default '0px 0px -60px 0px')
 */
export function useReveal(className = 'reveal', threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

/**
 * useRevealChildren — adds staggered reveal to direct children
 * of the returned ref element.
 *
 * @param {number} staggerMs - ms delay between each child (default 120)
 * @param {number} threshold
 */
export function useRevealChildren(staggerMs = 120, threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.children)

    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * staggerMs}ms`
      child.classList.add('reveal')
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add('visible'))
          observer.unobserve(container)
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [staggerMs, threshold])

  return ref
}
