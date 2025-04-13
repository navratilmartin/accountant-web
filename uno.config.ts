import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // Můžete definovat vlastní zkratky zde
    ['btn', 'px-4 py-2 rounded inline-block bg-primary text-white cursor-pointer hover:bg-primary-600 transition duration-200 ease-in-out'],
    ['btn-gray', 'px-4 py-2 rounded inline-block bg-gray-500 text-white cursor-pointer hover:bg-gray-600 transition duration-200 ease-in-out'],
    ['container-custom', 'w-full max-w-full mx-auto px-3 sm:px-4 lg:px-6 lg:max-w-[1344px] box-border']
  ],
  theme: {
    colors: {
      // Definování vlastních barev
      primary: {
        DEFAULT: '#2c6ecb',
        '50': '#eef2ff',
        '100': '#e0e7ff',
        '200': '#c7d2fe',
        '300': '#a5b4fc',
        '400': '#818cf8',
        '500': '#2c6ecb',
        '600': '#4f46e5',
        '700': '#4338ca',
        '800': '#3730a3',
        '900': '#312e81'
      },
    },
  },
  presets: [
    presetUno(), // základní preset s Tailwind/Windi CSS-like utilit třídami
    presetAttributify(), // použití attributů místo tříd
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(), // typografie
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,600,700',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(), // podpora pro @apply, @screen, atd.
    transformerVariantGroup(), // podpora pro (hover:text-red/sm:text-green)
  ],
  safelist: [
    'prose',
    'prose-sm',
    'm-auto',
    'text-left',
    'text-center',
    'text-right',
  ]
})