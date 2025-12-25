// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
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
  // Konfigurace pro UnoCSS
  unocss: {
    // Preload fonts
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
  // Nastavení pro správné generování statických souborů pro Cloudflare Pages
  ssr: true,
  nitro: {
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: false,  // Vypnout automatické procházení odkazů
      routes: [
        '/',
        '/sluzby',
        '/cenik',
        '/reference'
      ],
      failOnError: false  // Nepřerušovat build při chybě renderování
    },
    // Přidat podporu pro Node.js moduly
    externals: {
      inline: ['@vueuse/core',]
    }
  }
})