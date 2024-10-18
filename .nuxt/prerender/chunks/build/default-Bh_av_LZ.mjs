import { _ as __nuxt_component_0$1 } from './nuxt-link-CiH37B-H.mjs';
import { defineComponent, ref, computed, h, mergeProps, useSSRContext, withCtx, openBlock, createBlock, createTextVNode, toDisplayString } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/index.mjs';
import { defu } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/defu/dist/defu.mjs';
import { a as useHead, d as useNuxtApp, k as useLocaleHead, l as useRequestEvent, m as encodeParam, n as hasProtocol, w as withLeadingSlash, o as joinURL, p as parseURL, q as useRuntimeConfig, r as encodePath } from './server.mjs';
import { appendHeader } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/h3/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/destr/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/hookable/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/klona/dist/index.mjs';
import 'file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/scule/dist/index.mjs';
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

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file:///Users/arnaudsween/Documents/GC-Tech/vuejs-travel-card-component/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "") {
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage$1 = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$VjgTvTCkvr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage: getImage$1,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const getImage = (url) => ({ url });
const noneRuntime$zvi7gplQIx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "none",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "png",
    "jpeg",
    "webp",
    "webp"
  ],
  "quality": 80
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$VjgTvTCkvr, defaults: {} },
  ["none"]: { provider: noneRuntime$zvi7gplQIx, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, default: void 0 },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: {
    type: [Boolean, Object],
    default: void 0
  },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  placeholderClass: { type: String, default: void 0 }
};
const __nuxt_component_1$1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs,
      class: props.placeholder && !placeholderLoaded.value ? [props.placeholderClass] : void 0,
      src: src.value
    });
  }
});
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_nuxt_img = __nuxt_component_1$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}><nav class="flex flex-row justify-start pb-5 pt-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    "aria-label": "Home",
    class: "min-w-fit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$route.fullPath === "/") {
          _push2(ssrRenderComponent(_component_nuxt_img, {
            class: "h-6 sm:ml-3 lg:ml-0 home-logo",
            src: "logo/logo-white.svg",
            densities: "x1 x2",
            alt: "nuxt-logo",
            style: { "height": "36px", "width": "99px", "color": "red" }
          }, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_nuxt_img, {
            class: "h-6 sm:ml-3 lg:ml-0 home-logo",
            src: "logo/logo.svg",
            densities: "x1 x2",
            alt: "nuxt-logo",
            style: { "height": "36px", "width": "99px", "color": "red" }
          }, null, _parent2, _scopeId));
        }
      } else {
        return [
          _ctx.$route.fullPath === "/" ? (openBlock(), createBlock(_component_nuxt_img, {
            key: 0,
            class: "h-6 sm:ml-3 lg:ml-0 home-logo",
            src: "logo/logo-white.svg",
            densities: "x1 x2",
            alt: "nuxt-logo",
            style: { "height": "36px", "width": "99px", "color": "red" }
          })) : (openBlock(), createBlock(_component_nuxt_img, {
            key: 1,
            class: "h-6 sm:ml-3 lg:ml-0 home-logo",
            src: "logo/logo.svg",
            densities: "x1 x2",
            alt: "nuxt-logo",
            style: { "height": "36px", "width": "99px", "color": "red" }
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex flex-col space-x-3 space-y-4 pr-2 sm:flex-row sm:space-x-3 sm:space-y-0 sm:pr-10 rtl:space-x-reverse"></div><ul class="flex flex-wrap items-center space-x-1 sm:justify-center sm:space-x-2 sm:space-x-reverse"><li class="h-full">`);
  if (_ctx.$route.fullPath === "/") {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "flex h-full w-full items-center justify-center rounded-lg px-4 text-white hover:cursor-pointer",
      to: "/"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("pages.index.link"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("pages.index.link")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer",
      to: "/"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("pages.index.link"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("pages.index.link")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</li><li class="h-full">`);
  if (_ctx.$route.fullPath === "/") {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "flex h-full w-full items-center justify-center rounded-lg px-4 text-white hover:cursor-pointer",
      to: "/destinations"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("pages.destinations.link"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("pages.destinations.link")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer",
      to: "/destinations"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("pages.destinations.link"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("pages.destinations.link")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</li><li class="h-full">`);
  if (_ctx.$route.fullPath === "/") {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "flex h-full w-full items-center justify-center rounded-lg px-4 text-white hover:cursor-pointer",
      to: "/about"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("pages.about.link"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("pages.about.link")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer",
      to: "/about"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("pages.about.link"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("pages.about.link")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</li></ul></nav></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-screen bg-[url('assets/img/background.jpg')] bg-cover -mt-40 pb-60 pt-60" }, _attrs))}><div class="container mx-auto max-h-screen max-w-screen-xl pt-30 px-8"><section class="w-full"><div class="flex justify-start"><h1 class="font-sans text-5xl sm:text-7xl font-thin text-white pr-2">My</h1><h1 class="font-sans text-5xl sm:text-7xl font-bold text-green-400"> Travel App </h1></div><p class="max-w-lg pt-10 font-sans text-xl text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore fugit et voluptatem natus, corrupti delectus consequatur atque facilis nisi quidem veniam? Aperiam amet tempora ea quod. Odio, facere! Sunt. </p><div class="button pt-10 pl-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mb-2 me-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center font-medium text-white text-sm shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800",
    to: "/destinations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toutes les destinations `);
      } else {
        return [
          createTextVNode("Toutes les destinations ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-screen bg-orange-500 bg-cover pb-40 pt-40" }, _attrs))}><div class="container mx-auto max-h-screen max-w-screen-xl px-8"><section class="w-full"><div class="flex justify-start"><h1 class="pr-2 font-sans text-5xl font-thin text-white sm:text-7xl"> Footer </h1></div><p class="max-w-lg pt-10 font-sans text-xl text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore fugit et voluptatem natus, corrupti delectus consequatur atque facilis nisi quidem veniam? </p><div class="flex flex-wrap md:flex-row"><div class="button pl-1 pt-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "button border-3 mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white hover:text-black hover:bg-white transition-colors duration-150 ease-in-out",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home `);
      } else {
        return [
          createTextVNode("Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="button pl-1 pt-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "button border-3 mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white hover:text-black hover:bg-white transition-colors duration-150 ease-in-out",
    to: "/destinations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toutes les destinations `);
      } else {
        return [
          createTextVNode("Toutes les destinations ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="button pl-1 pt-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "button border-3 mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white hover:text-black hover:bg-white transition-colors duration-150 ease-in-out",
    to: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About `);
      } else {
        return [
          createTextVNode("About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useLocaleHead({
      addDirAttribute: true,
      identifierAttribute: "id",
      addSeoAttributes: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderComponent = __nuxt_component_0;
      const _component_HeroComponent = __nuxt_component_1;
      const _component_FooterComponent = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}><div class="container mx-auto max-h-screen max-w-screen-xl px-8">`);
      _push(ssrRenderComponent(_component_HeaderComponent, null, null, _parent));
      _push(`</div>`);
      if (_ctx.$route.fullPath === "/") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_HeroComponent, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="align-center justify-middle container mx-0 sm:mx-auto sm:max-w-screen-xl px-1 sm:px-8"><div class="pb-24 pt-12">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_FooterComponent, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Bh_av_LZ.mjs.map
