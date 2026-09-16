import { Mail } from 'lucide-react'
import { links } from '../config/personal'

function Contact() {
  return (
    <section className='section contact' id='contact'>
      <div className='container reveal'>
        <h2>Let's Connect</h2>
        <p className='section-intro'>
          I&apos;m open to Working Student, Internship and entry-level opportunities in Software
          Engineering and Machine Learning.
        </p>

        <div className='contact-links'>
          <a className='button button-secondary' href={links.github} target='_blank' rel='noreferrer'>
            GitHub
          </a>
          {links.linkedin.startsWith('http') ? (
            <a className='button button-secondary' href={links.linkedin} target='_blank' rel='noreferrer'>
              LinkedIn
            </a>
          ) : (
            <span className='todo-pill'>TODO: Add LinkedIn URL</span>
          )}
          {links.email.includes('@') ? (
            <a className='button button-secondary' href={`mailto:${links.email}`}>
              <Mail size={16} /> Email
            </a>
          ) : (
            <span className='todo-pill'>TODO: Add Email Address</span>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
