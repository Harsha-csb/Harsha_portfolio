import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view for the active nav indicator.
 * @param {string[]} ids - section ids in document order
 * @returns {string} the active section id
 */
export function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + offset
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollPos) current = id
      }

      // Snap to the last section when the page is scrolled to the bottom.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1]
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
