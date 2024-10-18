import { _ as __nuxt_component_0 } from './nuxt-link-CiH37B-H.mjs';
import { u as useFetch } from './fetch-C3Fcqyqc.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  async setup(props) {
    const { data: post } = await useFetch(
      () => `https://jsonplaceholder.typicode.com/posts/${props.id}`,
      {
        lazy: true
      },
      "$XkTrG25Ff8"
    );
    const { data: image } = await useFetch(
      () => `https://jsonplaceholder.typicode.com/photos/${props.id}`,
      {
        lazy: true
      },
      "$zEBahArpRh"
    );
    return { post, image };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: `/destinations/${$setup.post.id}`
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="travel-card overflow-hidden rounded-3xl bg-cover" style="${ssrRenderStyle({ backgroundImage: `url(../img/${$setup.post.id}.jpg)` })}"${_scopeId}><div class="bg-white/50 p-5 text-left text-black transition-colors duration-500 ease-in-out hover:bg-black/30 hover:text-white sm:p-20"${_scopeId}><div class="grid grid-cols-2 justify-between"${_scopeId}><div class="title" data-swiper-parallax="-300"${_scopeId}><p class="text-xl sm:text-4xl font-bold"${_scopeId}>${ssrInterpolate($setup.post.title.charAt(0).toUpperCase() + $setup.post.title.slice(1))}</p></div><div class="flex flex-wrap h-min justify-end"${_scopeId}><div class="text-xs sm:text-lg tag px-4 py-2 m-1 rounded-3xl border-2 border-orange-500 bg-orange-500 text-white"${_scopeId}><span${_scopeId}>Popular destination</span></div><div class="text-xs sm:text-lg tag px-4 py-2 m-1 rounded-3xl border-2 border-green-500 text-white bg-green-500"${_scopeId}><span${_scopeId}>Best for adventure</span></div></div></div><div class="subtitle pt-10" data-swiper-parallax="-200"${_scopeId}><p class="text-md sm:text-2xl font-light"${_scopeId}>${ssrInterpolate($setup.post.body.slice(0, 40))}</p></div><div class="text pt-4 sm:pt-10" data-swiper-parallax="-100"${_scopeId}><p class="text-xs sm:text-lg"${_scopeId}>${ssrInterpolate($setup.post.body)} ${ssrInterpolate($setup.post.body)}</p></div><div class="mt-auto flex pl-1 pt-10"${_scopeId}><div class="button border-3 mb-2 me-2 rounded-lg border border-black px-5 py-2.5 text-center text-sm font-medium text-black"${_scopeId}> Voir les activit\xE9s </div></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "travel-card overflow-hidden rounded-3xl bg-cover",
            style: { backgroundImage: `url(../img/${$setup.post.id}.jpg)` }
          }, [
            createVNode("div", { class: "bg-white/50 p-5 text-left text-black transition-colors duration-500 ease-in-out hover:bg-black/30 hover:text-white sm:p-20" }, [
              createVNode("div", { class: "grid grid-cols-2 justify-between" }, [
                createVNode("div", {
                  class: "title",
                  "data-swiper-parallax": "-300"
                }, [
                  createVNode("p", { class: "text-xl sm:text-4xl font-bold" }, toDisplayString($setup.post.title.charAt(0).toUpperCase() + $setup.post.title.slice(1)), 1)
                ]),
                createVNode("div", { class: "flex flex-wrap h-min justify-end" }, [
                  createVNode("div", { class: "text-xs sm:text-lg tag px-4 py-2 m-1 rounded-3xl border-2 border-orange-500 bg-orange-500 text-white" }, [
                    createVNode("span", null, "Popular destination")
                  ]),
                  createVNode("div", { class: "text-xs sm:text-lg tag px-4 py-2 m-1 rounded-3xl border-2 border-green-500 text-white bg-green-500" }, [
                    createVNode("span", null, "Best for adventure")
                  ])
                ])
              ]),
              createVNode("div", {
                class: "subtitle pt-10",
                "data-swiper-parallax": "-200"
              }, [
                createVNode("p", { class: "text-md sm:text-2xl font-light" }, toDisplayString($setup.post.body.slice(0, 40)), 1)
              ]),
              createVNode("div", {
                class: "text pt-4 sm:pt-10",
                "data-swiper-parallax": "-100"
              }, [
                createVNode("p", { class: "text-xs sm:text-lg" }, toDisplayString($setup.post.body) + " " + toDisplayString($setup.post.body), 1)
              ]),
              createVNode("div", { class: "mt-auto flex pl-1 pt-10" }, [
                createVNode("div", { class: "button border-3 mb-2 me-2 rounded-lg border border-black px-5 py-2.5 text-center text-sm font-medium text-black" }, " Voir les activit\xE9s ")
              ])
            ])
          ], 4)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TravelCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TravelCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TravelCard as T };
//# sourceMappingURL=TravelCard-DAqqoGQO.mjs.map
