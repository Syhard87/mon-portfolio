// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Activation des modules installés
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],

  // Configuration pour le déploiement sur Vercel (Rendu Statique)
  routeRules: {
    '/': { prerender: true }
  },

  // Compatibilité et futur
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01'
})