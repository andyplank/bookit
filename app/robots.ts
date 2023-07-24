import { MetadataRoute } from 'next'
 
if (!process.env.PUBLIC_URL ) {
	throw new Error('Invalid/Missing environment variable: "PUBLIC_URL"')
}

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/account', '/api/*', '*/book$', '/*.pdf$', '/*.png$', '/*.svg$', '/*.jpg$'],
		},
		sitemap: `${process.env.PUBLIC_URL}/sitemap.xml`,
  	}
}