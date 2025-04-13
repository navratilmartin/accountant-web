// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    // Removing '@nuxt/content' to avoid better-sqlite3 issues
    '@formkit/nuxt',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  app: {
    head: {
      title: 'Účetní služby pro OSVČ',
      htmlAttrs: {
        lang: 'cs',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Profesionální účetní služby pro OSVČ. Kompletní vedení účetnictví, daňová přiznání a poradenství.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '~/assets/css/main.css'
  ],
  image: {
    quality: 80,
    format: ['webp']
  },
  // Removed content configuration section to avoid SQLite issues
  ui: {
    icons: ['heroicons'],
    global: true,
    safelistColors: ['primary', 'gray'],
    // Enable the CSS reset and Tailwind base styles that Nuxt UI needs
    cssReset: true,
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  formkit: {
    // Konfigurace FormKit
    autoImport: true
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/core', '@vueuse/motion']
    }
  }
})