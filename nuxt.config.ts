// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import en from "./locales/en-US.json";
import fr from "./locales/fr-FR.json";
import ar from "./locales/ar-AR.json";

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
      // enable CORS
      cors: true, // if enabled, also needs cors-preflight-request.ts Nitro middleware to answer CORS preflight requests
      headers: {
        // CORS headers
        "Access-Control-Allow-Origin": "*", // 'http://example:6006', has to be set to the requesting domain that you want to send the credentials back to
        "Access-Control-Allow-Methods": "*", // 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "*", // 'Origin, Content-Type, Accept, Authorization, X-Requested-With'
        "Access-Control-Expose-Headers": "*",
        // 'Access-Control-Max-Age': '7200', // 7200 = caching 2 hours (Chromium default), https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age#directives
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

  googleFonts: {},

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
      fallbackLocale: "en-US",
      redirectOn: "root", // recommended
    },
  },

  // eslint: {
  //   lintOnStart: false,
  // },

  cookieControl: {
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year
    // set all these to true for highest GDPR enforcement
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: false,
    isCookieIdVisible: true,
    closeModalOnClickOutside: true,
    // show cookie button
    isControlButtonEnabled: true,
    // disable to get unstyled css for tailwind
    isCssEnabled: false,
    isDashInDescriptionEnabled: false,
    cookies: {
      necessary: [
        {
          name: {
            fr: fr.cookies.necessary.title,
            en: en.cookies.necessary.title,
            ar: ar.cookies.necessary.title,
          },
          description: {
            fr: fr.cookies.necessary.description,
            en: en.cookies.necessary.description,
            ar: ar.cookies.necessary.description,
          },
          targetCookieIds: ["ncc_"],
          id: "",
        },
      ],
      optional: [],
    },
    locales: ["en", "fr", "ar"],
  },

  compatibilityDate: "2024-09-15",
});
