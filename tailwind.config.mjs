/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors:{
				main: '#F60303',
			},

			backgroundImage: {
				'hero-section': "url('/public/hero.jpg')",
			},

			keyframes: {
				fadeIn: {
				  '0%': { opacity: 0, transform: 'translateY(20px)' },
				  '100%': { opacity: 1, transform: 'translateY(0)' },
				},
			  },
			  animation: {
				fadeIn: 'fadeIn 0.9s ease-out forwards',
			  },
		},
	},
	plugins: [],
}
