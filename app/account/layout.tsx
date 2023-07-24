import { Metadata } from 'next'
 
export const metadata: Metadata = {
	title: 'Account',
	description: 'Manage your account',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section>
			<div>header</div>
			{children}
			<div>footer</div>
		</section>
	)
}