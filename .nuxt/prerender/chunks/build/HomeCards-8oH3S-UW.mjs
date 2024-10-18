import { withAsyncContext, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { Swiper, SwiperSlide } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/swiper-vue.mjs';
import { Autoplay, Parallax } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/modules/index.mjs';
import SwiperCore from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/swiper.mjs';
import { T as TravelCard } from './TravelCard-dUsva49Y.mjs';
import { u as useFetch } from './fetch-C3Fcqyqc.mjs';
import './nuxt-link-CiH37B-H.mjs';
import './server.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

SwiperCore.use(Autoplay);
const __default__ = {
  components: {
    Swiper,
    SwiperSlide,
    TravelCard
  },
  setup() {
    return {
      modules: [Parallax, Autoplay]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "HomeCards",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      "$1VuRE4nH0k"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        style: {
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        },
        speed: 600,
        parallax: true,
        lazy: true,
        "space-between": 20,
        autoplay: {
          delay: 2500,
          autoplay: true
        },
        class: "mySwiper rounded-3xl"
      }, _attrs), {
        "container-start": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(posts), (post) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: post.id,
                class: "parallax-bg",
                "data-swiper-parallax": "-23%"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(TravelCard, {
                      id: post.id
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(TravelCard, {
                        id: post.id
                      }, null, 8, ["id"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: post.id,
                  class: "parallax-bg",
                  "data-swiper-parallax": "-23%"
                }, {
                  default: withCtx(() => [
                    createVNode(TravelCard, {
                      id: post.id
                    }, null, 8, ["id"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/HomeCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeCards-8oH3S-UW.mjs.map
