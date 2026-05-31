import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Bishal Oli — SEO & AI Search Optimization Expert',
  description: 'Get in touch with Bishal Oli to discuss SEO strategy, AI search optimization, topical mapping, or any search visibility challenge you\'re facing.',
  alternates: { canonical: 'https://bishaloli.com/contact/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Bishal Oli',
  url: 'https://bishaloli.com/contact/',
  description: 'Contact page for Bishal Oli — SEO & AI Search Optimization Expert',
}

export default function Contact() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero" aria-labelledby="contactHeading">
        <div className="container">
          <p className="page-hero__label">Get In Touch</p>
          <h1 id="contactHeading">Let's talk about your search visibility.</h1>
          <p>Whether you have a specific project in mind or just want to explore what's possible — I'm happy to have a conversation. Fill out the form and I'll get back to you within 1–2 business days.</p>
        </div>
      </section>

      <section className="section" aria-label="Contact form and details">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--s12)', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--s6)' }}>Direct contact</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s4)' }}>
                <div style={{ padding: 'var(--s4)', background: 'var(--sage)', borderRadius: '2px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--lime-dark)', marginBottom: '8px' }}>Email</p>
                  <a href="mailto:bishaloli610@gmail.com" style={{ fontWeight: 500 }}>bishaloli610@gmail.com</a>
                </div>
                <div style={{ padding: 'var(--s4)', background: 'var(--sage)', borderRadius: '2px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--lime-dark)', marginBottom: '8px' }}>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/bishal-oli/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500 }}>linkedin.com/in/bishal-oli</a>
                </div>
                <div style={{ padding: 'var(--s4)', background: 'var(--sage)', borderRadius: '2px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--lime-dark)', marginBottom: '8px' }}>Response Time</p>
                  <p style={{ fontWeight: 500 }}>1–2 business days</p>
                </div>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--s6)' }}>Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sage)' }} aria-labelledby="faqHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Common Questions</p>
            <h2 id="faqHeading" style={{ maxWidth: '16ch' }}>Frequently asked questions.</h2>
          </div>
          <div style={{ maxWidth: '760px', marginTop: 'var(--s8)' }}>
            <FaqAccordion />
          </div>
        </div>
      </section>
    </main>
  )
}
