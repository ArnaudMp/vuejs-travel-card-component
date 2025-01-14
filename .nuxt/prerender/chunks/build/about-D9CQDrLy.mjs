import { mergeProps, useSSRContext } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { u as useI18n, a as useHead, b as useSeoMeta } from './server.mjs';
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
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ohash/dist/index.mjs';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("pages.about.meta.title"),
      meta: [{ name: "description", content: t("pages.about.meta.description") }]
    });
    useSeoMeta({
      title: t("pages.about.meta.title"),
      description: t("pages.about.meta.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><h1 class="text-4xl text-black">${ssrInterpolate(_ctx.$t("pages.about.title"))}</h1><main class="mt-4 text-black [&amp;&gt;*]:mb-4"><p>${ssrInterpolate(_ctx.$t("pages.about.p"))}</p><p>${ssrInterpolate(_ctx.$t("pages.about.p"))}</p><p>${ssrInterpolate(_ctx.$t("pages.about.p"))} ${ssrInterpolate(_ctx.$t("pages.about.p"))}</p><p>${ssrInterpolate(_ctx.$t("pages.about.p"))}</p></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-D9CQDrLy.mjs.map
