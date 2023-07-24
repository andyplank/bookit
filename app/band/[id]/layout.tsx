import { Metadata } from 'next'
 
export const metadata: Metadata = {
	title: 'bands',
	description: 'desc',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section>
			{children}
		</section>
	)
}