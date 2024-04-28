/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'war.ukraine.ua',
			},
		],
	},
}

export default nextConfig
