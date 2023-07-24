import { Metadata } from 'next'
 
export const metadata: Metadata = {
	title: 'Bookit',
	description: 'Welcome to Bookit',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (<>
		{children}
	</>)
}
