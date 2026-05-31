import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">Bishal <span>Oli</span></div>
            <p className="footer__desc">
              SEO strategist and AI search optimization expert. Helping brands earn real visibility
              through semantic SEO, topical authority, and content intelligence.
            </p>
            {/* Social Icons */}
            <div className="footer__social" aria-label="Social media links">
              <a href="https://www.linkedin.com/in/bishal-oli/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn" id="footerLinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.youtube.com/@bishaloli" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="YouTube" id="footerYouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--black)"/></svg>
              </a>
              <a href="https://www.facebook.com/bishaloli" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Facebook" id="footerFacebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/bishaloli" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram" id="footerInstagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://twitter.com/bishaloli" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Twitter / X" id="footerTwitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.pinterest.com/bishaloli" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Pinterest" id="footerPinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.329-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.565 0-2.386-1.715-4.054-4.163-4.054-2.838 0-4.503 2.129-4.503 4.332 0 .858.33 1.777.741 2.281a.3.3 0 0 1 .069.283c-.076.31-.243.995-.276 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@bishaloli" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="TikTok" id="footerTikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#audit">SEO Audit</Link></li>
              <li><Link href="/services#semantic-seo">Semantic SEO</Link></li>
              <li><Link href="/services#ai-search">AI Search Optimization</Link></li>
              <li><Link href="/services#topical-map">Topical Mapping</Link></li>
              <li><Link href="/services#content-strategy">Content Strategy</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:bishaloli610@gmail.com">bishaloli610@gmail.com</a></li>
              <li>
                <a href="https://www.linkedin.com/in/bishal-oli/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bishaloli" target="_blank" rel="noopener noreferrer">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Bishal Oli. All rights reserved.</p>
          <p className="footer__copy">SEO &amp; AI Search Optimization Expert</p>
        </div>
      </div>
    </footer>
  )
}
