export const dynamic = 'force-static'

export default function sitemap() {
  const base = 'https://bishaloli.com'
  const pages = ['', '/about', '/services', '/case-studies', '/blog', '/contact']
  return pages.map((path) => ({
    url: `${base}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
