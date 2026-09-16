const focusAreas = [
  {
    title: 'Machine Learning',
    description: 'Building stronger foundations in practical ML workflows and model evaluation.',
  },
  {
    title: 'Algorithms & Data Structures',
    description: 'Deepening problem-solving and performance-focused implementation skills.',
  },
  {
    title: 'AI',
    description: 'Exploring modern AI concepts and their real-world software applications.',
  },
  {
    title: 'Software Architecture',
    description: 'Improving system design thinking for scalable and maintainable applications.',
  },
]

function CurrentFocus() {
  return (
    <section className='section' id='current-focus'>
      <div className='container reveal'>
        <h2>Currently Exploring</h2>

        <div className='focus-grid'>
          {focusAreas.map((area) => (
            <article key={area.title} className='focus-card'>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentFocus
