import { personalInfo } from '../config/personal'

function About() {
  return (
    <section className='section' id='about'>
      <div className='container reveal'>
        <h2>About Me</h2>
        <p className='section-intro'>{personalInfo.about}</p>

        <div className='info-grid'>
          {personalInfo.infoBlocks.map((item) => (
            <article key={item.label} className='info-card'>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
