import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { links, personalInfo } from '../config/personal'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <header className='site-header'>
      <nav className='navbar container' aria-label='Main navigation'>
        <a className='brand' href='#top' aria-label='Go to top'>
          <span className='brand-full'>{personalInfo.name}</span>
          <span className='brand-mono'>{personalInfo.monogram}</span>
        </a>

        <button
          className='menu-toggle'
          type='button'
          aria-expanded={open}
          aria-controls='mobile-menu'
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className='nav-right desktop-only'>
          <ul className='nav-list'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <button
            type='button'
            className='theme-toggle'
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <div className='social-links'>
            <a href={links.github} target='_blank' rel='noreferrer' aria-label='GitHub profile'>
              <GitHubIcon size={18} />
            </a>
            {links.linkedin.startsWith('http') && (
              <a href={links.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn profile'>
                <LinkedInIcon size={18} />
              </a>
            )}
          </div>
        </div>
      </nav>

      <div id='mobile-menu' className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul className='mobile-nav-list'>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='mobile-menu-footer'>
          <button
            type='button'
            className='theme-toggle'
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <div className='social-links'>
            <a href={links.github} target='_blank' rel='noreferrer' aria-label='GitHub profile'>
              <GitHubIcon size={18} />
            </a>
            {links.linkedin.startsWith('http') && (
              <a href={links.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn profile'>
                <LinkedInIcon size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
