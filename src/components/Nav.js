'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const normalizedPath = pathname.replace(/\/$/, '')
  const isDarkHero = normalizedPath === '' || normalizedPath === '/seo-expert-nepal' || normalizedPath.startsWith('/blog/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const navClass = ['nav', isDarkHero && !scrolled ? 'nav--dark-hero' : '', scrolled ? 'nav--scrolled' : '']
    .filter(Boolean).join(' ')

  const links = [
    { href: '/', label: 'Home' },
    { 
      label: 'About Us', 
      href: '/about',
      dropdown: [
        { href: '/about', label: 'About Me' },
        { href: '/seo-expert-nepal', label: 'SEO Expert Nepal' }
      ]
    },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Insights' },
  ]

  const isLinkActive = (item) => {
    const normPath = pathname.replace(/\/$/, '')
    const normHref = item.href.replace(/\/$/, '')
    if (normPath === normHref) return true
    if (item.dropdown && item.dropdown.some(sub => normPath === sub.href.replace(/\/$/, ''))) return true
    return false
  }

  return (
    <>
      <nav className={navClass} id="mainNav" aria-label="Main navigation">
        <div className="container">
          <div className="nav__inner">
            <Link href="/" className="nav__logo" aria-label="Bishal Oli home">
              Bishal <span>Oli</span>
            </Link>
            <div className="nav__links" role="list">
              {links.map((item) => {
                const isActive = isLinkActive(item)
                if (item.dropdown) {
                  return (
                    <div key={item.label} className="nav__item-dropdown" role="listitem">
                      <Link
                        href={item.href}
                        className={`nav__link${isActive ? ' active' : ''}`}
                      >
                        {item.label}
                        <svg className="nav__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px', transition: 'transform var(--transition)', display: 'inline-block', verticalAlign: 'middle' }}>
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                      <div className="dropdown-menu">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`dropdown-item${pathname.replace(/\/$/, '') === sub.href.replace(/\/$/, '') ? ' active' : ''}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav__link${isActive ? ' active' : ''}`}
                    role="listitem"
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link href="/contact" className="btn btn-primary btn-sm nav__cta">
                Work With Me
              </Link>
            </div>
            <button
              className="nav__hamburger"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              id="hamburgerBtn"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {links.map((link) => {
          const isActive = isLinkActive(link)
          if (link.dropdown) {
            return (
              <div key={link.label} className="mobile-dropdown-group">
                <span className={`mobile-dropdown-parent${isActive ? ' active' : ''}`}>{link.label}</span>
                <div className="mobile-dropdown-sublinks">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={pathname.replace(/\/$/, '') === sub.href.replace(/\/$/, '') ? 'active' : ''}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? 'active' : ''}
            >
              {link.label}
            </Link>
          )
        })}
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px', alignSelf: 'flex-start' }}>
          Work With Me
        </Link>
      </div>
    </>
  )
}
