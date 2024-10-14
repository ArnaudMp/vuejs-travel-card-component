import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
  nitro: {
    prerender: {
      routes: ['/', '/about'],
      ignore: ['/blog', '/blog/*']
    },
  },

  routeRules: {
    '/blog': {ssr: false}
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    pageTransition: {
      name: 'page', mode:'out-in'
    }
  },

  modules: ['vue3-pixi-nuxt'],
})