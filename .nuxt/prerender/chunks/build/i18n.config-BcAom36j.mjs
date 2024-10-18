const site$1 = {
  name: "My Travel App"
};
const themes$1 = {
  system: "System",
  light: "Light",
  dark: "Dark"
};
const error$1 = {
  "return": "Go back",
  "page-not-found": "Page not found"
};
const pages$1 = {
  index: {
    meta: {
      title: "Home",
      description: "Home page"
    },
    link: "Home",
    features: {
      googleFonts: "Google Fonts",
      eslint: "ESLint",
      Typescript: "Typescript",
      Prettier: "Prettier",
      imageOptim: "Image optimization",
      TailwindCSS: "TailwindCSS",
      darkMode: "Dark mode",
      i18n: "Localization (i18n)",
      postcss: "PostCSS",
      lightHouse: "Lighthouse 100%",
      deviceDetect: "Device detection",
      cookies: "Cookie banner",
      Iconify: "Iconify",
      Pinia: "Pinia"
    }
  },
  about: {
    meta: {
      title: "About",
      description: "About page"
    },
    link: "About",
    title: "About",
    p: "As a front-end and mobile developer, I'm passionate about creating innovative, high-performance digital experiences.With solid experience in web and mobile application development, I combine technical skills and creativity to design intuitive, user-centered interfaces. Always on the lookout for new technologies and trends, I'm ready to take on ambitious challenges and contribute to high-impact projects."
  },
  destinations: {
    meta: {
      title: "Destinations page",
      description: "Destinations"
    },
    link: "Destinations"
  }
};
const en = {
  "locale.en-US": "English",
  "locale.fr-FR": "French",
  "locale.dir": "ltr",
  site: site$1,
  themes: themes$1,
  error: error$1,
  pages: pages$1
};
const site = {
  name: "My Travel App"
};
const themes = {
  system: "Syst\xE8me",
  light: "Clair",
  dark: "Sombre"
};
const error = {
  "return": "Retour",
  "page-not-found": "Page non trouv\xE9e"
};
const pages = {
  index: {
    meta: {
      title: "Accueil",
      description: "Accueil"
    },
    link: "Accueil",
    features: {
      googleFonts: "Polices Google",
      eslint: "ESLint",
      Typescript: "Typescript",
      Prettier: "Prettier",
      imageOptim: "Optimisation d'images",
      TailwindCSS: "TailwindCSS",
      darkMode: "Mode sombre",
      i18n: "Localisation (i18n)",
      postcss: "PostCSS",
      lightHouse: "Lighthouse 100%",
      deviceDetect: "D\xE9tection de p\xE9riph\xE9rique",
      cookies: "Banni\xE8re de cookies",
      Iconify: "Iconify",
      Pinia: "Pinia"
    }
  },
  about: {
    meta: {
      title: "\xC0 propos",
      description: "\xC0 propos"
    },
    link: "\xC0 propos",
    title: "\xC0 propos",
    p: "D\xE9veloppeur front-end et mobile, je suis passionn\xE9 par la cr\xE9ation d\u2019exp\xE9riences num\xE9riques innovantes et performantes.Fort d\u2019une exp\xE9rience solide en d\xE9veloppement d\u2019applications web et mobiles, j\u2019allie comp\xE9tences techniques et cr\xE9ativit\xE9 pour concevoir des interfaces intuitives, centr\xE9es sur l\u2019utilisateur. Mon approche repose sur les meilleures pratiques de d\xE9veloppement, avec un souci constant d\u2019optimisation et de qualit\xE9.Toujours \xE0 l\u2019\xE9coute des nouvelles technologies et tendances, je suis pr\xEAt \xE0 relever des d\xE9fis ambitieux et \xE0 contribuer \xE0 des projets \xE0 fort impact."
  },
  destinations: {
    meta: {
      title: "Page destinationse (mise en page plein \xE9cran)",
      description: "Page destinationse utilisant la mise en page plein \xE9cran"
    },
    link: "Destinations"
  }
};
const fr = {
  "locale.en-US": "English",
  "locale.fr-FR": "Fran\xE7ais",
  "locale.dir": "ltr",
  site,
  themes,
  error,
  pages
};
const i18n_config = () => ({
  legacy: false,
  langDir: "./locales",
  messages: { "en-US": en, "fr-FR": fr },
  baseUrl: void 0,
  locales: [
    {
      code: "en",
      iso: "en-US",
      isCatchallLocale: true
    },
    {
      code: "fr",
      iso: "fr-FR"
    }
  ]
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-BcAom36j.mjs.map
