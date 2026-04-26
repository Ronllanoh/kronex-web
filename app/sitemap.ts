import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kronex.cl',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://kronex.cl/cobranzas',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://kronex.cl/calculadora',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://kronex.cl/recursos',
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}