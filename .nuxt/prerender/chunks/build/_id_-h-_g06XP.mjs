import { a as buildAssetsURL } from '../_/renderer.mjs';
import { useSSRContext, withAsyncContext, unref, withCtx, createVNode, defineComponent, ref, computed, watch, mergeProps } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Swiper, SwiperSlide } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/swiper-vue.mjs';
import { Autoplay } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/swiper/modules/index.mjs';
import { c as useRoute } from './server.mjs';
import { u as useFetch } from './fetch-C3Fcqyqc.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/h3/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ofetch/dist/node.mjs';
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

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class AlphaColor {
  constructor(color) {
    __publicField(this, "color");
    __publicField(this, "opacity");
    this.color = color;
    this.opacity = 1;
  }
  parseAlphaColor() {
    const match = this.color.match(/rgba?\(([^)]+)\)/);
    if (match) {
      const [r, g, b, a] = match[1].split(",").map(Number);
      this.color = `rgb(${r}, ${g}, ${b})`;
      this.opacity = a !== void 0 ? a : 1;
    }
    return this;
  }
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NuxtStar",
  __ssrInlineRender: true,
  props: {
    fill: {},
    points: {},
    size: {},
    starId: {},
    activeColor: {},
    inactiveColor: {},
    borderColor: {},
    skeletonColor: {},
    borderWidth: {},
    roundedCorners: { type: Boolean }
  },
  emits: ["star-mouse-move", "star-selected"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const getColor = (color) => new AlphaColor(color).parseAlphaColor().color;
    const getOpacity = (color) => new AlphaColor(color).parseAlphaColor().opacity;
    const grad = ref(props.activeColor);
    ref(true);
    const parseSize = (size2) => {
      if (typeof size2 === "number")
        return size2;
      const value = parseFloat(size2);
      return isNaN(value) ? 0 : value;
    };
    const size = parseSize(props.size);
    const starPointsToString = computed(() => props.points.join(","));
    const gradId = computed(() => `url(#${grad.value})`);
    const starSize = computed(() => {
      return size + (props.roundedCorners && props.borderWidth <= 0 ? 6 : props.borderWidth);
    });
    const starFill = computed(() => `${props.fill}%`);
    const getBorderColor = computed(
      () => props.roundedCorners && props.borderWidth <= 0 ? props.inactiveColor : props.borderColor
    );
    const maxSize = computed(() => {
      const max = Math.max(...props.points);
      return isFinite(max) ? max : 100;
    });
    const viewBox = computed(() => `0 0 ${maxSize.value} ${maxSize.value}`);
    const strokeLinejoin = computed(() => props.roundedCorners ? "round" : "miter");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f0c63eac><svg class="nuxt-rating-star-svg"${ssrRenderAttr("height", starSize.value)}${ssrRenderAttr("width", starSize.value)}${ssrRenderAttr("viewBox", viewBox.value)} data-v-f0c63eac><linearGradient${ssrRenderAttr("id", grad.value)} x1="0" x2="100%" y1="0" y2="0" data-v-f0c63eac><stop${ssrRenderAttr("offset", starFill.value)}${ssrRenderAttr("stop-color", getColor(_ctx.activeColor))}${ssrRenderAttr("stop-opacity", getOpacity(_ctx.activeColor))} data-v-f0c63eac></stop><stop${ssrRenderAttr("offset", starFill.value)}${ssrRenderAttr("stop-color", getColor(_ctx.inactiveColor))}${ssrRenderAttr("stop-opacity", getOpacity(_ctx.inactiveColor))} data-v-f0c63eac></stop></linearGradient><polygon${ssrRenderAttr("height", starSize.value)}${ssrRenderAttr("width", starSize.value)}${ssrRenderAttr("points", starPointsToString.value)}${ssrRenderAttr("fill", gradId.value)}${ssrRenderAttr("stroke", getBorderColor.value)}${ssrRenderAttr("stroke-width", _ctx.borderWidth)}${ssrRenderAttr("stroke-linejoin", strokeLinejoin.value)} data-v-f0c63eac></polygon><polygon${ssrRenderAttr("points", starPointsToString.value)}${ssrRenderAttr("fill", gradId.value)} data-v-f0c63eac></polygon></svg></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-rating/dist/runtime/components/NuxtStar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NuxtStar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f0c63eac"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NuxtRating",
  __ssrInlineRender: true,
  props: {
    ratingStep: { default: 0.1 },
    ratingValue: { default: 4.5 },
    roundStartRating: { type: Boolean, default: true },
    activeColor: { default: "#ffa41c" },
    inactiveColor: { default: "#d8d8d8" },
    skeletonColor: { default: "#d8d8d8" },
    ratingCount: { default: 5 },
    ratingContent: { default: () => [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56] },
    ratingSize: { default: 15 },
    ratingSpacing: { default: 2 },
    readOnly: { type: Boolean, default: true },
    inline: { type: Boolean, default: false },
    borderColor: { default: "#db8403" },
    borderWidth: { default: 0 },
    roundedCorners: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false }
  },
  emits: ["ratingSelected", "ratingHovered"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const step = ref(props.ratingStep * 100);
    const currentRating = ref(props.ratingValue);
    const selectedRating = ref(props.ratingValue);
    const ratingSelected = ref(false);
    const isLoading = ref(true);
    const shouldRound = computed(() => ratingSelected.value || props.roundStartRating);
    const activeColors = computed(
      () => Array.isArray(props.activeColor) ? padColors(props.activeColor, props.ratingCount, props.activeColor.slice(-1)[0]) : new Array(props.ratingCount).fill(props.activeColor)
    );
    const currentActiveColor = computed(
      () => selectedRating.value > 0 ? activeColors.value[Math.ceil(selectedRating.value) - 1] : props.inactiveColor
    );
    const roundedRating = computed(() => {
      const inv = 1 / props.ratingStep;
      return Math.min(props.ratingCount, Math.ceil(currentRating.value * inv) / inv);
    });
    const fillLevel = computed(() => {
      const rating = shouldRound.value ? roundedRating.value : currentRating.value;
      return Array.from({ length: props.ratingCount }, (_, i) => {
        if (i < rating) {
          return rating - i > 1 ? 100 : (rating - i) * 100;
        }
        return 0;
      });
    });
    watch(
      () => props.ratingValue,
      (val) => {
        currentRating.value = val;
        selectedRating.value = val;
      }
    );
    const setRating = (event, persist) => {
      var _a;
      if (!props.readOnly) {
        const position = Number(event.position) / 100;
        const newRating = event.id - 1 + Math.ceil(position * (1 / props.ratingStep)) * props.ratingStep;
        currentRating.value = Math.min(newRating, props.ratingCount);
        const decimalPlaces = ((_a = props.ratingStep.toString().split(".")[1]) == null ? void 0 : _a.length) || 0;
        const formattedRating = Number(currentRating.value.toFixed(decimalPlaces));
        if (persist) {
          selectedRating.value = props.clearable && currentRating.value === selectedRating.value ? 0 : currentRating.value;
          ratingSelected.value = true;
          emit("ratingSelected", formattedRating);
        }
        emit("ratingHovered", formattedRating);
      }
    };
    const padColors = (array, minLength, fillValue) => array.concat(Array(minLength - array.length).fill(fillValue));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nuxt-rating-wrapper", { "nuxt-rating-inline": props.inline }]
      }, _attrs))} data-v-038f2b51><!--[-->`);
      ssrRenderList(props.ratingCount, (n) => {
        _push(`<span class="${ssrRenderClass([{ "nuxt-rating-pointer": !props.readOnly, "skeleton-pulse": isLoading.value }, "nuxt-rating-star"])}" style="${ssrRenderStyle({ marginRight: n !== props.ratingCount ? `${props.ratingSpacing}px` : "0" })}" data-v-038f2b51>`);
        _push(ssrRenderComponent(NuxtStar, {
          fill: isLoading.value ? 100 : fillLevel.value[n - 1],
          size: props.ratingSize,
          points: props.ratingContent,
          "star-id": n,
          step: step.value,
          "active-color": isLoading.value ? props.skeletonColor : currentActiveColor.value,
          "inactive-color": props.inactiveColor,
          "border-color": isLoading.value ? props.skeletonColor : props.borderColor,
          "border-width": props.borderWidth,
          "rounded-corners": props.roundedCorners,
          onStarSelected: ($event) => setRating($event, true),
          onStarMouseMove: setRating
        }, null, _parent));
        _push(`</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-rating/dist/runtime/components/NuxtRating.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-038f2b51"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RateComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(0);
    const logRating = (event) => {
      console.log(event);
    };
    const ratingValue = Math.random() * 5;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtRating = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-t from-gray-400/20 to-gray-400/40 p-5 sm:p-20" }, _attrs))}><div class="title"><p class="text-4xl font-bold">Lorem Ipum</p></div><div class="py-5">`);
      _push(ssrRenderComponent(_component_NuxtRating, {
        "border-color": "#db8403",
        "active-color": "#ffa41c",
        "inactive-color": "#fff",
        "rating-step": 0.5,
        "rounded-corners": true,
        "border-width": 5,
        "rating-size": 30,
        "rating-value": ratingValue,
        onRatingSelected: logRating,
        onRatingHovered: (event) => rating.value = event
      }, null, _parent));
      _push(`</div><div><p class="text-lg"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam tempore nobis nesciunt cumque! Porro, exercitationem vero doloremque suscipit pariatur repudiandae, consectetur reiciendis fuga, facere minima tempore ipsa nesciunt vel quos? </p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RateComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("1.B97qKlVb.jpg");
const _imports_1 = "" + buildAssetsURL("2.yaISrnfe.jpg");
const _imports_2 = "" + buildAssetsURL("3.DFAJ96x1.jpg");
const __default__ = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => "https://jsonplaceholder.typicode.com/posts/" + route.params.id,
      {
        lazy: false
      },
      "$9NNVypnPIA"
    )), __temp = await __temp, __restore(), __temp);
    console.log(post);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RateComponent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flextravel-card overflow-hidden rounded-3xl bg-cover"><div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20"><div class="title" data-swiper-parallax="-300"><p class="text-4xl font-bold">${ssrInterpolate(unref(post).title)}</p></div><div class="subtitle pt-10"><p class="text-2xl font-light">${ssrInterpolate(unref(post).body.slice(0, 40))}</p></div><div class="text pt-10"><p class="text-lg">${ssrInterpolate(unref(post).body)} ${ssrInterpolate(unref(post).body)}</p></div></div></div><div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover"><div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20"><div class="title"><p class="text-4xl font-bold">${ssrInterpolate(unref(post).title)}</p></div><div class="subtitle pt-10"><p class="text-2xl font-light">${ssrInterpolate(unref(post).body.slice(0, 40))}</p></div><div class="text pt-10"><p class="text-lg">${ssrInterpolate(unref(post).body)} ${ssrInterpolate(unref(post).body)}</p></div></div><div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20"><div class="title"><p class="text-4xl font-bold">${ssrInterpolate(unref(post).title)}</p></div><div class="subtitle pt-10"><p class="text-2xl font-light">${ssrInterpolate(unref(post).body.slice(0, 40))}</p></div><div class="text pt-10"><p class="text-lg">${ssrInterpolate(unref(post).body)} ${ssrInterpolate(unref(post).body)}</p></div></div></div><div class="travel-card mt-10 overflow-hidden rounded-3xl"><div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20">`);
      _push(ssrRenderComponent(unref(Swiper), {
        "space-between": 30,
        "centered-slides": true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true
        },
        navigation: true,
        modules: unref(modules),
        class: "mySwiper rounder-3xl bg-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="rounded-3xl bg-transparent"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "rounded-3xl bg-transparent"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} class="rounded-3xl bg-transparent"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
                      class: "rounded-3xl bg-transparent"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} class="rounded-3xl bg-transparent"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      class: "rounded-3xl bg-transparent"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    class: "rounded-3xl bg-transparent"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    class: "rounded-3xl bg-transparent"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    class: "rounded-3xl bg-transparent"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-3 gap-5"><div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover">`);
      _push(ssrRenderComponent(_component_RateComponent, null, null, _parent));
      _push(`</div><div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover">`);
      _push(ssrRenderComponent(_component_RateComponent, null, null, _parent));
      _push(`</div><div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover">`);
      _push(ssrRenderComponent(_component_RateComponent, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-h-_g06XP.mjs.map
