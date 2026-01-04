// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  features: {
    inlineStyles: false,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@formkit/nuxt',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/sitemap'
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
        { name: 'description', content: 'Profesionální účetní služby pro OSVČ a firmy. Kompletní vedení účetnictví, daňová evidence a odborné poradenství.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img//favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' }
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
  vite: {
    build: {
      // Reducing parallel processing can stop this specific TypeError 
      cssCodeSplit: true,
    }
  },
  unocss: {
    // Preload fonts
    mode: 'global',
    webFonts: {
      fonts: {
        sans: 'Inter:400,500,600,700',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    },
    // Zajištění kompatibility s Nuxt UI
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      // můžete definovat shortcuty přímo zde, nebo v uno.config.ts
    ],
    safelist: [
      'i-heroicons-check',
      'i-heroicons-x-mark',
    ],
  },
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
  // Konfigurace proměnných prostředí
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY, 
    emailRecipient: process.env.EMAIL_RECIPIENT,
    emailUser: process.env.EMAIL_USER, // Used for the "From" address
    public: {
      // Zde můžete přidat veřejné proměnné, které mohou být dostupné i v prohlížeči
    }
  },
  // SEO and Sitemap configuration
  site: {
    url: 'https://ucetni-blansko.cz',
    name: 'Účetní služby pro OSVČ - Martina Navrátilová',
  },
  sitemap: {
    strictNuxtContentPaths: true,
    cacheMaxAgeSeconds: 3600,
  },
  // Nastavení pro správné generování statických souborů pro Cloudflare Pages
  ssr: true,
  nitro: {
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: true,  // Enable automatic link crawling for better SEO
      routes: [
        '/',
        '/ucetni-sluzby-osvc',
        '/reference-klientu'
      ],
      failOnError: false  // Nepřerušovat build při chybě renderování
    },
    // Přidat podporu pro Node.js moduly
    externals: {
      inline: ['@vueuse/core',]
    }
  }
})