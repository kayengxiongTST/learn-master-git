export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['vuetify/lib/styles/main.sass', '~/assets/main.css'],
	build: {
		transpile: ['vuetify']
	},
	vite: {
		define: {
			'process.env.DEBUG': false
		}
	}
})
