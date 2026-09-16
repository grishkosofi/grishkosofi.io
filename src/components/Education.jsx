function Education() {
  return (
    <section className='section' id='education'>
      <div className='container reveal'>
        <h2>Education</h2>

        <article className='education-card'>
          <header>
            <h3>University of Europe for Applied Sciences</h3>
            <p>B.Sc. Software Engineering</p>
            <p>Potsdam, Germany</p>
          </header>

          <div>
            <h4>Relevant areas of study</h4>
            <ul className='study-areas'>
              <li>Algorithms & Data Structures</li>
              <li>Databases</li>
              <li>Software Engineering</li>
              <li>Parallel Computing</li>
              <li>Data Analysis</li>
              <li>Statistics</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education
