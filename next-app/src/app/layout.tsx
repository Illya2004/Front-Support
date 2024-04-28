import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'
import './globals.css'
import { Providers } from './providers'

const inter = Montserrat_Alternates({
	style: 'normal',
	weight: ['300', '500', '600', '700', '900'],
	subsets: ['cyrillic'],
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
