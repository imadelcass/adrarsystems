// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-aos', '@nuxtjs/i18n'],
  aos: {
    disable: 'mobile',
    startEvent: 'DOMContentLoaded',
    offset: 120,
    delay: 0, 
    duration: 800, 
    easing: 'ease-in-out',
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom'
  },
  i18n: {
    vueI18n: './i18n/i18n.config.ts'
  },
})