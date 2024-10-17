import { type Config } from "tailwindcss";

export default {
  // content: ["./src/**/*.{html,js}"],
  // darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ["serif"],
      mono: ["monospace"],
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {
      colors: {
        "nuxt-green": "#00DC82",
        "nuxt-white": "#ffffff",
        "nuxt-grey": "#18181B",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./app.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  // safelist: [
  //   'safelisted',
  //   {
  //     pattern: /bg-(red|green|blue)-(100|200|300)/,
  //   },
  // ]
} satisfies Config;
