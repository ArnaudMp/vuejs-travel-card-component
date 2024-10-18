import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  nitro: {
    compressPublicAssets: true,
    logLevel: 4,

    prerender: {
      routes: ["/", "/about"],
      ignore: ["/destinations", "/destinations/*"],
    },

    storage: {
      data: {
        driver: "vercelKV",
      },
    },
  },

  routeRules: {
    "/destinations": { ssr: false },
    "/destinations/*": { ssr: false },
    "/api/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Expose-Headers": "*",
      },
    },
  },

  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@dargmuesli/nuxt-cookie-control",
    "nuxt-rating",
    "nuxt-mapbox",
    "@nuxt/fonts"
  ],

  mapbox: {
    accessToken:
      "{pk.eyJ1IjoiYXJuYXVkc3dlZW4iLCJhIjoiY20yZWZlYmRsMWtvbDJqcXhnc2QxZzBrYyJ9.Fb5BoKHGFCI8TJlLOookNQ}",
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    viewer: true,
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ["./stores", "./locales"],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  colorMode: {
    classSuffix: "",
  },

  image: {
    provider: "ipx",
    quality: 80,
    format: ["png", "jpeg", "webp"],
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: false,
      alwaysRedirect: true,
      fallbackLocale: "fr-FR",
      redirectOn: "root",
    },
  },

  compatibilityDate: "2024-09-15",
});
