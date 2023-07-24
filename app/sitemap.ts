import { MetadataRoute } from 'next'

if (!process.env.PUBLIC_URL ) {
	throw new Error('Invalid/Missing environment variable: "PUBLIC_URL"')
}
	 
export default function sitemap(): MetadataRoute.Sitemap {
	const baseURL =  process.env.PUBLIC_URL;
	const routes = ['/']
	const site = routes.map((r) => {
		return {
			url: baseURL + r,
			lastModified: new Date(),
		}
	});
	return site;
}