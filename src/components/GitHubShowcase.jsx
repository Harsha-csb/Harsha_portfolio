import { useEffect, useState } from 'react'
import {
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiExternalLink,
  FiGitBranch,
  FiRefreshCw,
  FiStar,
} from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import {
  deploymentWorkflow,
  githubFallbackRepositories,
  githubProfile,
  projects,
  versionControlSkills,
} from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import './GitHubShowcase.css'

const VERIFIED_LIVE_DEMOS = {
  Teddy2: 'https://harsha-csb.github.io/Teddy2/',
}

export default function GitHubShowcase() {
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    let current = true

    async function loadRepositories() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(githubProfile.repositoriesApi, {
          signal: controller.signal,
          headers: { Accept: 'application/vnd.github+json' },
        })
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`)

        const items = await response.json()
        if (!Array.isArray(items)) throw new Error('Unexpected repository response')
        const publicRepos = items.filter((repo) => !repo.private)
        if (current) {
          setRepositories(publicRepos)
          setLoading(false)
        }

        // README links are only shown when GitHub confirms a README exists.
        const documentedRepos = await Promise.all(
          publicRepos.map(async (repo) => {
            try {
              const readmeResponse = await fetch(
                `https://api.github.com/repos/${repo.full_name}/readme`,
                {
                  signal: controller.signal,
                  headers: { Accept: 'application/vnd.github+json' },
                },
              )
              if (readmeResponse.status === 404) return { ...repo, readmeStatus: 'missing' }
              if (!readmeResponse.ok) return { ...repo, readmeStatus: 'unavailable' }
              const readme = await readmeResponse.json()
              return { ...repo, readmeUrl: readme.html_url, readmeStatus: 'available' }
            } catch {
              return { ...repo, readmeStatus: 'unavailable' }
            }
          }),
        )
        if (current) setRepositories(documentedRepos)
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') return
        if (current) {
          setRepositories(githubFallbackRepositories)
          setError('Could not load public repositories right now. The GitHub links below are still available.')
          setLoading(false)
        }
      }
    }

    loadRepositories()
    return () => {
      current = false
      controller.abort()
    }
  }, [attempt])

  return (
    <div className="github-showcase">
      <div className="vc">
        <Reveal className="vc__heading">
          <span className="vc__eyebrow"><FiGitBranch /> Practical workflow</span>
          <h3>Version Control <span className="grad-text">&amp; Deployment</span></h3>
          <p>
            I use Git and GitHub to track changes, maintain project repositories, document work, and publish
            frontend projects when a deployment is configured.
          </p>
        </Reveal>

        <div className="vc__skills">
          {versionControlSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Reveal key={skill.title} delay={index * 0.05} className="vc__skill glass glass--hover">
                <span className="vc__skill-icon"><Icon /></span>
                <h4>{skill.title}</h4>
                <p>{skill.text}</p>
                <span className="vc__skill-level">Practical knowledge</span>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="workflow glass glass--edge">
          <div className="workflow__head">
            <div>
              <span className="vc__eyebrow">From code to a shareable project</span>
              <h4>Deployment Workflow</h4>
            </div>
            <FiExternalLink aria-hidden="true" />
          </div>
          <ol className="workflow__steps" aria-label="Project deployment workflow">
            {deploymentWorkflow.map((step, index) => (
              <li className="workflow__step" key={step}>
                <span className="workflow__number">{String(index + 1).padStart(2, '0')}</span>
                <span>{step}</span>
                {index < deploymentWorkflow.length - 1 && (
                  <FiArrowRight className="workflow__arrow" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div id="github-repositories" className="github">
        <Reveal className="github__head">
          <div className="github__title-group">
            <span className="github__mark"><FaGithub /></span>
            <div>
              <span className="vc__eyebrow">GitHub Profile</span>
              <h3>Projects &amp; <span className="grad-text">Repositories</span></h3>
              <p>Public repositories loaded from GitHub. Language, stars, and README links appear when available.</p>
            </div>
          </div>
          <div className="github__actions">
            <a
              href={githubProfile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost btn--sm"
            >
              <FaGithub /> Visit GitHub Profile
            </a>
            <a
              href={githubProfile.repositoriesUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--sm"
            >
              <FiCode /> View Repositories
            </a>
          </div>
        </Reveal>

        {loading && repositories.length === 0 && (
          <p className="github__message" role="status">Loading public repositories…</p>
        )}

        {error && (
          <div className="github__error" role="alert">
            <p>{error}</p>
            <button type="button" className="btn btn--ghost btn--sm" onClick={() => setAttempt((n) => n + 1)}>
              <FiRefreshCw /> Try again
            </button>
          </div>
        )}

        {!loading && !error && repositories.length === 0 && (
          <p className="github__message">No public repositories were returned by GitHub.</p>
        )}

        {repositories.length > 0 && (
          <div className="github__grid">
            {repositories.map((repo, index) => {
              const liveDemo = VERIFIED_LIVE_DEMOS[repo.name]
              const portfolioProject = projects.find(
                (project) => project.repo.toLowerCase() === repo.html_url.toLowerCase(),
              )
              return (
                <Reveal key={repo.id} delay={Math.min(index * 0.035, 0.2)} className="github__repo glass glass--hover glass--edge">
                  <div className="github__repo-top">
                    <span className="github__repo-icon"><FiCode /></span>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="github__repo-name">
                      {repo.name}
                    </a>
                    <span className="github__stars" title={`${repo.stargazers_count} stars`}>
                      <FiStar /> {repo.stargazers_count}
                    </span>
                  </div>

                  <p className="github__description">
                    {repo.description ||
                      portfolioProject?.overview ||
                      'No repository description has been added yet.'}
                  </p>

                  <div className="github__repo-meta">
                    <span className="github__language">
                      <i aria-hidden="true" /> {repo.language || 'Language not detected'}
                    </span>
                    {liveDemo && (
                      <a
                        className="github__live"
                        href={liveDemo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <FiExternalLink />
                      </a>
                    )}
                  </div>

                  <div className="github__repo-links">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <FaGithub /> Repository
                    </a>
                    {repo.readmeUrl ? (
                      <a href={repo.readmeUrl} target="_blank" rel="noreferrer">
                        <FiBookOpen /> Documentation
                      </a>
                    ) : (
                      <span className="github__no-docs">
                        {repo.readmeStatus === 'missing' ? 'No README found' : 'README status unavailable'}
                      </span>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        )}

        {loading && repositories.length > 0 && (
          <p className="github__refreshing" role="status">Checking repository README files…</p>
        )}
      </div>
    </div>
  )
}
