// import remarkContainer from 'remark-container'
import transformerDirectives from '@unocss/transformer-directives'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'normalize.css/normalize.css',
    '@/designs/index.scss',
  ],
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    // '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  content: {
    markdown: {
      toc: {
        depth: 4,
        searchDepth: 4,
      },
      // remarkPlugins: {
      //   'remark-container': remarkContainer,
      // }
    },
    // documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      // theme: 'github-light'
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },
  unocss: {
    wind: true,
    transformers: [
      transformerDirectives(),
    ]
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
  imports: {
    dirs: [
      'store',
      'utils/transform/**'
    ],
  },
})
