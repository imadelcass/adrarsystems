// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-aos", "@nuxtjs/i18n"],
  aos: {
    disable: "mobile",
    startEvent: "DOMContentLoaded",
    offset: 120,
    delay: 0,
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
  },
  app: {
    baseURL: process.env.BASE_URL || "/",
    head: {
      title: "Adrar Systems",
      meta: [
        { name: "description", content: "Adrar Systems" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
