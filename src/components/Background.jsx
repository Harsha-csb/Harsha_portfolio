/**
 * Fixed decorative background: gradient auras + subtle grid.
 * Sits behind all content (z-index: 0).
 */
export default function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <div className="aura aura--1" />
      <div className="aura aura--2" />
      <div className="aura aura--3" />
    </div>
  )
}
