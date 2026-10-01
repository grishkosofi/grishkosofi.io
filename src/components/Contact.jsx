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
          <a
            className='button button-secondary'
            href={links.github}
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub profile (opens in a new tab)'
          >
            GitHub
          </a>
          {links.linkedin.startsWith('http') ? (
            <a
              className='button button-secondary'
              href={links.linkedin}
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn profile (opens in a new tab)'
            >
              LinkedIn
            </a>
          ) : (
            <span className='todo-pill'>TODO: Add LinkedIn URL</span>
          )}
          {links.leetcode.startsWith('http') ? (
            <a
              className='button button-secondary'
              href={links.leetcode}
              target='_blank'
              rel='noreferrer'
              aria-label='LeetCode profile (opens in a new tab)'
            >
              LeetCode
            </a>
          ) : (
            <span className='todo-pill'>TODO: Add LeetCode URL</span>
          )}
        </div>
        <a className='contact-email' href={`mailto:${links.email}`}>
          <Mail size={18} aria-hidden='true' />
          <span>
            <span className='contact-email-label'>Want to get in touch?</span>
            <span className='contact-email-address'>{links.email}</span>
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
