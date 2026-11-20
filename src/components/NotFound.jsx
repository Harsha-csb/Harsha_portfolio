import { Link } from 'react-router-dom'
import { FiArrowLeft, FiHome } from 'react-icons/fi'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="nf">
      <div className="nf__inner">
        <span className="nf__code grad-text">404</span>
        <h1 className="nf__title">Page not found</h1>
        <p className="nf__text">
          The page you're looking for doesn't exist, or it may have been moved. Let's get you back on track.
        </p>
        <div className="nf__actions">
          <Link to="/" className="btn btn--primary">
            <FiHome /> Back to Home
          </Link>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => window.history.back()}
          >
            <FiArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </section>
  )
}
