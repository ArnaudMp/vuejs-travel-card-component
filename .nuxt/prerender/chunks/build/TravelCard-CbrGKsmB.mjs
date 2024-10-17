import { _ as __nuxt_component_0 } from './nuxt-link-CiH37B-H.mjs';
import { u as useFetch } from './fetch-C3Fcqyqc.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "travel-card overflow-hidden rounded-3xl bg-cover",
    style: { backgroundImage: `url(img/${$setup.post.id}.jpg)` }
  }, _attrs))}><div class="transition-colors ease-in-out duration-150 bg-white/80 hover:bg-black/30 p-5 sm:p-20 text-left text-black hover:text-white"><div class="title" data-swiper-parallax="-300"><p class="text-4xl font-bold">${ssrInterpolate($setup.post.title.slice(0, 25))}</p></div><div class="subtitle pt-10" data-swiper-parallax="-200"><p class="text-2xl font-light">${ssrInterpolate($setup.post.body.slice(0, 40))}</p></div><div class="text pt-10" data-swiper-parallax="-100"><p class="text-lg">${ssrInterpolate($setup.post.body)} ${ssrInterpolate($setup.post.body)}</p></div><div class="button pl-1 pt-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mb-2 me-2 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg shadow-orange-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-orange-300 dark:shadow-lg dark:shadow-orange-800/80 dark:focus:ring-orange-800",
    to: `/destinations/${$setup.post.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Voir les activit\xE9s `);
      } else {
        return [
          createTextVNode("Voir les activit\xE9s ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TravelCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TravelCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TravelCard as T };
//# sourceMappingURL=TravelCard-CbrGKsmB.mjs.map
