import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

export default function UserLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<Header />
			<div className='px-20'>{children}</div>
			<Footer />
		</div>
	)
}
