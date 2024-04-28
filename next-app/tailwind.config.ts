import type { Config } from 'tailwindcss'

const config: Config = {
	important: true,
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				accent: '#5B40FF',
				secondary: '#F3F5F6',
				tertiary: '#D2D2D2',
			},
		},
	},
	plugins: [],
}
export default config
