import { ExternalLink, Github } from 'lucide-react'

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
        <a
          className='button button-secondary'
          href={project.githubUrl}
          target='_blank'
          rel='noreferrer'
          aria-label={`${project.title} GitHub repository`}
        >
          <Github size={16} /> GitHub
        </a>
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
