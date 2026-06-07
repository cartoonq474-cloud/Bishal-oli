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
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Insights' },
  ]

  return (
    <>
      <nav className={navClass} id="mainNav" aria-label="Main navigation">
        <div className="container">
          <div className="nav__inner">
            <Link href="/" className="nav__logo" aria-label="Bishal Oli home">
              Bishal <span>Oli</span>
            </Link>
            <div className="nav__links" role="list">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav__link${pathname === href ? ' active' : ''}`}
                  role="listitem"
                >
                  {label}
                </Link>
              ))}
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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/blog">Insights</Link>
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px', alignSelf: 'flex-start' }}>
          Work With Me
        </Link>
      </div>
    </>
  )
}
