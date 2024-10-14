import { a as __nuxt_component_0 } from "../server.mjs";
import { withAsyncContext, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useFetch } from "./fetch-BirQBo_q.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "klona";
import "ohash";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-4C-m5hG0.js.map
