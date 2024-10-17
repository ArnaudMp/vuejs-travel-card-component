import { withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { T as TravelCard } from './TravelCard-DUUHFe5-.mjs';
import { u as useFetch } from './fetch-C3Fcqyqc.mjs';
import './nuxt-link-CiH37B-H.mjs';
import './server.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/h3/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/destr/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/hookable/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/klona/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/scule/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/defu/dist/defu.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ohash/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unstorage/drivers/vercel-kv.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/pathe/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unhead/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unctx/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/arnaudmichel/Documents/GC-Tech/vuejs-travel-card-component/node_modules/cookie-es/dist/index.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const __default__ = {
  components: {
    TravelCard
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      "$2VseBSWVGs"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "destinations" }, _attrs))}><main class="text-white px-10 grid gap-4 grid-cols-1 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<div class="rounded-2xl">`);
        _push(ssrRenderComponent(TravelCard, {
          id: post.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ChBp5RtF.mjs.map
