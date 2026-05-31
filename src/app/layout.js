import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    template: '%s — Bishal Oli',
    default: 'Bishal Oli — SEO & AI Search Optimization Expert',
  },
  description:
    'Bishal Oli is an SEO strategist and AI search optimization expert specializing in semantic SEO, topical authority, and search visibility for traditional and AI-powered search engines.',
  keywords: ['SEO expert', 'semantic SEO', 'AI search optimization', 'topical authority', 'E-E-A-T', 'search visibility'],
  authors: [{ name: 'Bishal Oli' }],
  openGraph: {
    title: 'Bishal Oli — SEO & AI Search Optimization Expert',
    description: 'Helping brands earn real visibility across search engines and AI systems through semantic SEO, topical authority, and content intelligence.',
    type: 'website',
    url: 'https://bishaloli.com',
  },
  alternates: {
    canonical: 'https://bishaloli.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
