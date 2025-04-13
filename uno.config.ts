import { defineConfig } from 'unocss'
import { presetUno, presetIcons, presetTypography, presetAttributify } from 'unocss'
import { presetWind } from 'unocss' // Add the Wind preset which is compatible with Tailwind classes

export default defineConfig({
  // Include essential presets to support Nuxt UI's classes
  presets: [
    presetUno(),
    presetWind(), // This preset supports Tailwind-compatible classes that Nuxt UI uses
    presetIcons(),
    presetAttributify(), // Support attribute format for classes
    presetTypography(),
  ],
  // Important: Add safelist for Nuxt UI classes to ensure they're included
  safelist: [
    // Colors from your app.config.ts
    ...['blue', 'slate', 'gray'].flatMap(color => 
      ['bg', 'text', 'border', 'ring', 'focus:ring'].flatMap(prefix => 
        [...Array(9)].map((_, i) => `${prefix}-${color}-${(i + 1) * 100}`)
      )
    ),
    // Default Nuxt UI classes
    ...['primary'].flatMap(color => 
      ['bg', 'text', 'border', 'ring', 'focus:ring'].flatMap(prefix => 
        [...Array(9)].map((_, i) => `${prefix}-${color}-${(i + 1) * 100}`)
      )
    ),
  ],
  shortcuts: {
    // Add any custom shortcuts you need
    'btn': 'py-2 px-4 font-semibold rounded-md shadow-sm',
    'btn-primary': 'bg-primary-500 text-white hover:bg-primary-600',
  },
  theme: {
    colors: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#2c6ecb', // from your CSS variables
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
    },
  },
})