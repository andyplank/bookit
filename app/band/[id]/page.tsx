import Link from 'next/link'
import { getUserIds } from '../../../lib/users'

export const dynamicParams = false;

export async function generateStaticParams() {
	return getUserIds();
}

export default function Page({ params }: { params: { id: string } }) {
	const book = `/band/${params.id}/book`
	return <>
		<div>ID: {params.id}</div>
		<Link href={book}>Book</Link>
	</>
}