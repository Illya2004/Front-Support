import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	const token = cookies.get('token')?.value
	const isProfilePage = url.includes('/profile')
	const isAuthPage = url.includes('/auth')

	if (isAuthPage && token) {
		return NextResponse.redirect(new URL('/', url))
	}

	if (isProfilePage && !token) {
		return NextResponse.error()
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth/:path', '/admin/:path'],
}
