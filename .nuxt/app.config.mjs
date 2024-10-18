
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {},
  "_MAPBOX_CONFIG": {
    "accessToken": "{pk.eyJ1IjoiYXJuYXVkc3dlZW4iLCJhIjoiY20yZWZlYmRsMWtvbDJqcXhnc2QxZzBrYyJ9.Fb5BoKHGFCI8TJlLOookNQ}"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/app.config.js"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
