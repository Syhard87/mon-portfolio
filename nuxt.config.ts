// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Activation des modules installés
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],



  // Configuration TypeScript Stricte
  typescript: {
    strict: true,
    typeCheck: true
  },

  // Configuration pour le déploiement sur Vercel (Rendu Statique)
  nitro: {
    preset: 'vercel-static'
  },

  routeRules: {
    '/': { prerender: true }
  },

  // Compatibilité et futur
  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      title: 'Antoine Morellet - Développeur Nuxt.js',
      meta: [
        { name: 'description', content: 'Portfolio de Antoine Morellet, Développeur Nuxt.js spécialisé dans le développement web moderne et performant.' },
        { name: 'author', content: 'Antoine Morellet' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  compatibilityDate: '2024-11-01'
})