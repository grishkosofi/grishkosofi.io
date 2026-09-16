import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section className='section' id='skills'>
      <div className='container reveal'>
        <h2>Skills</h2>
        <p className='section-intro'>
          Tools and technologies across software development, data and machine learning.
        </p>

        <div className='skills-grid'>
          {skillCategories.map((group) => (
            <article key={group.category} className='skill-group'>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
