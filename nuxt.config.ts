import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/seo',
		'@nuxt/image',
		'@nuxt/fonts',
	],
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()]
	},
	site: {
		url: process.env.NUXT_PUBLIC_SITE_URL || 'https://carolrivero.com',
		name: 'Carol Rivero',
		defaultLocale: 'es'
	},
	ogImage: { enabled: false },
	i18n: {
		defaultLocale: 'es',
		strategy: 'prefix_except_default',
		locales: [
			{
				code: 'es',
				language: 'es-CO',
				name: 'Español',
				file: 'es.json'
			},
			{
				code: 'en',
				language: 'en-US',
				name: 'English',
				file: 'en.json'
			}
		],
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_lang',
			redirectOn: 'root'
		},
	},
	runtimeConfig: {
		public: {
			whatsapp: '573155645641',
			instagram: 'psico.carolrivero'
		}
	},
	app: {
		head: {
			meta: [
				{
					name: 'theme-color',
					content: '#f7f1ea'
				}
			]
		}
	},
	nitro: {
		prerender: {
			routes: ['/', '/en']
		}
	},
	devtools: { enabled: true }
})
