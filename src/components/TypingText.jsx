import { useEffect, useRef, useState } from 'react'
import './TypingText.css'

/**
 * Rotating typewriter effect that cycles through an array of words.
 */
export default function TypingText({ words, typeSpeed = 75, deleteSpeed = 38, pause = 1400 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const current = words[index % words.length]
    let delay = deleting ? deleteSpeed : typeSpeed

    if (!deleting && text === current) {
      // Full word typed — hold, then start deleting.
      delay = pause
      timer.current = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(timer.current)
    }

    if (deleting && text === '') {
      // Word fully deleted — advance to the next word.
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    timer.current = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      )
    }, delay)

    return () => clearTimeout(timer.current)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return (
    <span className="typing" aria-live="polite">
      <span className="typing__text grad-text">{text}</span>
      <span className="typing__caret" aria-hidden="true" />
    </span>
  )
}
