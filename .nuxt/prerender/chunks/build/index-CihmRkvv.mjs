import _sfc_main$1 from './HomeCards-BVSd9jw5.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { u as useI18n, a as useHead, b as useSeoMeta } from './server.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/swiper-vue.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/modules/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/swiper.mjs';
import './TravelCard-CbrGKsmB.mjs';
import './nuxt-link-CiH37B-H.mjs';
import './fetch-C3Fcqyqc.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ohash/dist/index.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/h3/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/destr/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/hookable/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/klona/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/scule/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/defu/dist/defu.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/vercel-kv.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/pathe/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unhead/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unctx/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("pages.index.meta.title"),
      meta: [{ name: "description", content: t("pages.index.meta.description") }]
    });
    useSeoMeta({
      title: t("pages.index.meta.title"),
      description: t("pages.index.meta.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeCards = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10 mt-5 px-3 flex justify-start" }, _attrs))}><ul class="overflow-auto"><li><section class="pt-10 max-h-min min-w-14 max-w-5xl">`);
      _push(ssrRenderComponent(_component_HomeCards, null, null, _parent));
      _push(`</section></li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CihmRkvv.mjs.map
