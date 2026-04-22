import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    function highlightActive() {
      const mid = window.scrollY + window.innerHeight / 3
      for (const { href } of NAV_LINKS) {
        const section = document.querySelector(href)
        if (!section) continue
        if (section.offsetTop <= mid && section.offsetTop + section.offsetHeight > mid) {
          setActiveLink(href)
          break
        }
      }
    }

    function handleScroll() {
      setScrolled(window.scrollY > 50)
      highlightActive()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    highlightActive()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          JDM<span className="accent">.</span>
        </a>

        <nav
          className={`navbar__links${menuOpen ? ' open' : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeLink === href ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="theme-toggle"
            aria-label="Toggle light/dark mode"
            onClick={onThemeToggle}
          >
            <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={String(menuOpen)}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
