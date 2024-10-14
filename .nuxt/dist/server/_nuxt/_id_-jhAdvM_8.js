import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { b as useRoute, c as useSeoMeta } from "../server.mjs";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => "https://jsonplaceholder.typicode.com/posts/" + route.params.id, {
      lazy: true
    }, "$b6624wP6pv")), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: () => {
        var _a;
        return (_a = post.value) == null ? void 0 : _a.title.slice(0, 10);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      if (unref(post)) {
        _push(`<div><h1>${ssrInterpolate(unref(post).title)}</h1><p>${ssrInterpolate(unref(post).body)}</p></div>`);
      } else {
        _push(`<div> Chargement... </div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-jhAdvM_8.js.map
