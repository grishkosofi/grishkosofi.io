import ProjectCard from './ProjectCard'
import { projects, projectsSection } from '../data/projects'

function Projects() {
  return (
    <section className='section projects' id='projects'>
      <div className='container reveal'>
        <h2>{projectsSection.title}</h2>
        <p className='section-intro'>{projectsSection.subtitle}</p>

        <div className='projects-grid'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <a className='button button-primary projects-cta' href={projectsSection.githubProfile} target='_blank' rel='noreferrer'>
          View all projects on GitHub
        </a>
      </div>
    </section>
  )
}

export default Projects
