import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons/SocialIcons'

function ProjectCard({ project }) {
  return (
    <article className='project-card'>
      <div className='project-header'>
        <h3>{project.title}</h3>
        {project.status && <span className='project-status'>{project.status}</span>}
      </div>

      <p>{project.description}</p>

      <ul className='project-tags'>
        {project.tags.map((tag) => (
          <li key={`${project.title}-${tag}`}>{tag}</li>
        ))}
      </ul>

      <ul className='project-highlights'>
        {project.highlights.map((highlight) => (
          <li key={`${project.title}-${highlight}`}>{highlight}</li>
        ))}
      </ul>

      <div className='project-links'>
        {project.githubUrl.startsWith('http') ? (
          <a
            className='button button-secondary'
            href={project.githubUrl}
            target='_blank'
            rel='noreferrer'
            aria-label={`${project.title} GitHub repository`}
          >
            <GitHubIcon size={16} /> GitHub
          </a>
        ) : (
          <p className='todo-pill' role='status'>
            TODO: Add GitHub repository URL
          </p>
        )}
        {project.demoUrl && (
          <a
            className='button button-ghost'
            href={project.demoUrl}
            target='_blank'
            rel='noreferrer'
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
