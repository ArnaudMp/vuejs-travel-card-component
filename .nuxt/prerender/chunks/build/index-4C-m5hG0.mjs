import { a as __nuxt_component_0 } from './server.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, useSSRContext } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { u as useFetch } from './fetch-BirQBo_q.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/h3/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/devalue/index.js';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ufo/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/@unhead/ssr/dist/index.mjs';
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
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/pathe/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unhead/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unctx/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10", "$ansXcfZp0C")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><h1>Blog</h1><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<article><h2>${ssrInterpolate(post.title)}</h2><h2>${ssrInterpolate(post.body.slice(0, 100))}</h2><p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${post.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Lire la suite`);
            } else {
              return [
                createTextVNode("Lire la suite")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p></article>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4C-m5hG0.mjs.map
