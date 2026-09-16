import { links, personalInfo } from '../config/personal'

function Hero() {
  const cvHref = `${import.meta.env.BASE_URL}${links.cvPath}`

  return (
    <section className='section hero' id='top'>
      <div className='container hero-grid'>
        <div className='hero-copy reveal'>
          <p className='eyebrow'>{personalInfo.greeting}</p>
          <h1>{personalInfo.role}</h1>
          <p className='hero-description'>{personalInfo.shortBio}</p>

          <ul className='tech-list' aria-label='Core technologies'>
            {personalInfo.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className='hero-actions'>
            <a className='button button-primary' href='#projects'>
              View my projects
            </a>
            <a className='button button-secondary' href={links.github} target='_blank' rel='noreferrer'>
              GitHub
            </a>
            {links.cvAvailable ? (
              <a className='button button-ghost' href={cvHref} download>
                Download CV
              </a>
            ) : (
              <button type='button' className='button button-ghost button-disabled' disabled>
                Download CV
              </button>
            )}
          </div>
        </div>

        <div className='hero-visual reveal' aria-hidden='true'>
          <div className='node-grid'>
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={`node-${index}`} className='node-dot' />
            ))}
          </div>
          <div className='code-block'>
            <span>{'<algorithm />'}</span>
            <span>{'<data-flow />'}</span>
            <span>{'<systems-design />'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
