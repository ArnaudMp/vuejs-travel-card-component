import{W as H,X as J,Y as N,Z as Q,_ as R,$ as L,a0 as X,C as F,a1 as Y,f as b,e as D,r as C,a as Z,g as K,z as ee,o as m,c as z,d as l,j as y,p as h,a2 as I,q as S,B as p,t as k,a3 as te,a4 as ie,U as se}from"./DjWwZ_o2.js";import{_ as W}from"./BJcrNyB1.js";import{_ as P}from"./DlAUqK2U.js";async function oe(e,t){return await ne(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function ne(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>s(o),i.src=e})}function B(e){return t=>t?e[t]||t:e.missingValue}function re({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(n,r)=>`${n}=${r}`),t&&typeof t!="function"&&(t=B(t));const o=i||{};return Object.keys(o).forEach(n=>{typeof o[n]!="function"&&(o[n]=B(o[n]))}),(n={})=>Object.entries(n).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const u=o[d];return typeof u=="function"&&(c=u(n[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(s)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function ae(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=Number.parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function le(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function de(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ce(e){const t={options:e},s=(o,n={})=>U(t,o,n),i=(o,n={},r={})=>s(o,{...r,modifiers:R(n,r.modifiers||{})}).url;for(const o in e.presets)i[o]=(n,r,d)=>i(n,r,{...e.presets[o],...d});return i.options=e,i.getImage=s,i.getMeta=(o,n)=>ue(t,o,n),i.getSizes=(o,n)=>me(t,o,n),t.$img=i,i}async function ue(e,t,s){const i=U(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await oe(e,i.url)}function U(e,t,s){var u,w;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=fe(e,s.provider||e.options.provider),n=ge(e,s.preset);if(t=H(t)?t:J(t),!i.supportsAlias)for(const x in e.options.alias)t.startsWith(x)&&(t=N(e.options.alias[x],t.substr(x.length)));if(i.validateDomains&&H(t)){const x=Q(t).host;if(!e.options.domains.find(j=>j===x))return{url:t}}const r=R(s,n,o);r.modifiers={...r.modifiers};const d=r.modifiers.format;(u=r.modifiers)!=null&&u.width&&(r.modifiers.width=v(r.modifiers.width)),(w=r.modifiers)!=null&&w.height&&(r.modifiers.height=v(r.modifiers.height));const c=i.getImage(t,r,e);return c.format=c.format||d||"",c}function fe(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function ge(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function me(e,t,s){var g,A,M,q,O;const i=v((g=s.modifiers)==null?void 0:g.width),o=v((A=s.modifiers)==null?void 0:A.height),n=de(s.sizes),r=(M=s.densities)!=null&&M.trim()?ae(s.densities.trim()):e.options.densities;le(r);const d=i&&o?o/i:0,c=[],u=[];if(Object.keys(n).length>=1){for(const f in n){const _=E(f,String(n[f]),o,d,e);if(_!==void 0){c.push({size:_.size,screenMaxWidth:_.screenMaxWidth,media:`(max-width: ${_.screenMaxWidth}px)`});for(const $ of r)u.push({width:_._cWidth*$,src:T(e,t,s,_,$)})}}he(c)}else for(const f of r){const _=Object.keys(n)[0];let $=E(_,String(n[_]),o,d,e);$===void 0&&($={size:"",screenMaxWidth:0,_cWidth:(q=s.modifiers)==null?void 0:q.width,_cHeight:(O=s.modifiers)==null?void 0:O.height}),u.push({width:f,src:T(e,t,s,$,f)})}pe(u);const w=u[u.length-1],x=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,j=x?"w":"x",a=u.map(f=>`${f.src} ${f.width}${j}`).join(", ");return{sizes:x,srcset:a,src:w==null?void 0:w.src}}function E(e,t,s,i,o){const n=o.options.screens&&o.options.screens[e]||Number.parseInt(e),r=t.endsWith("vw");if(!r&&/^\d+$/.test(t)&&(t=t+"px"),!r&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!n||!d)return;r&&(d=Math.round(d/100*n));const c=i?Math.round(d*i):s;return{size:t,screenMaxWidth:n,_cWidth:d,_cHeight:c}}function T(e,t,s,i,o){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},s)}function he(e){var s;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function pe(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const ve=re({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>L(e)+"_"+L(t)}),we=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=ve(t)||"_";return s||(s=N(i.options.nuxt.baseURL,"/_ipx")),{url:N(s,o,X(e))}},xe=!0,_e=!0,ye=Object.freeze(Object.defineProperty({__proto__:null,getImage:we,supportsAlias:_e,validateDomains:xe},Symbol.toStringTag,{value:"Module"})),be=e=>({url:e}),$e=Object.freeze(Object.defineProperty({__proto__:null,getImage:be},Symbol.toStringTag,{value:"Module"})),V={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"none",domains:[],alias:{},densities:[1,2],format:["png","jpeg","webp","webp"],quality:80};V.providers={ipx:{provider:ye,defaults:{}},none:{provider:$e,defaults:{}}};const G=()=>{const e=Y(),t=F();return t.$img||t._img||(t._img=ce({...V,nuxt:{baseURL:e.app.baseURL}}))};function Se(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ke={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},je=e=>{const t=b(()=>({provider:e.provider,preset:e.preset})),s=b(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=G(),o=b(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:o}},ze={...ke,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},Ie=D({name:"NuxtImg",props:ze,emits:["load","error"],setup:(e,t)=>{const s=G(),i=je(e),o=C(!1),n=C(),r=b(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:v(e.width),height:v(e.height)}})),d=b(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(a.sizes=r.value.sizes,a.srcset=r.value.srcset),a}),c=b(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||o.value)return!1;if(typeof a=="string")return a;const g=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return s(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),u=b(()=>e.sizes?r.value.src:s(e.src,i.modifiers.value,i.options.value)),w=b(()=>c.value?c.value:u.value);if(e.preload){const a=Object.values(r.value).every(g=>g);Z({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:w.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const j=F().isHydrating;return K(()=>{if(c.value){const a=new Image;a.src=u.value,e.sizes&&(a.sizes=r.value.sizes||"",a.srcset=r.value.srcset),a.onload=g=>{o.value=!0,t.emit("load",g)},Se("nuxt-image");return}n.value&&(n.value.complete&&j&&(n.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),n.value.onload=a=>{t.emit("load",a)},n.value.onerror=a=>{t.emit("error",a)})}),()=>ee("img",{ref:n,...d.value,...t.attrs,class:e.placeholder&&!o.value?[e.placeholderClass]:void 0,src:w.value})}}),Ne={},We={class:"mb-5"},Pe={class:"flex flex-row justify-start pb-5 pt-10"},Ae={class:"flex flex-wrap items-center space-x-1 sm:justify-center sm:space-x-2 sm:space-x-reverse"},Me={class:"h-full"},qe={class:"h-full"},Oe={class:"h-full"};function He(e,t){const s=Ie,i=W;return m(),z("header",We,[l("nav",Pe,[y(i,{to:"/","aria-label":"Home",class:"min-w-fit"},{default:h(()=>[y(s,{class:"h-6 sm:ml-3 lg:ml-0",src:"logo/logo.svg",densities:"x1 x2",alt:"nuxt-logo",style:{height:"36px",width:"99px"}})]),_:1}),t[0]||(t[0]=l("div",{class:"flex flex-col space-x-3 space-y-4 pr-2 sm:flex-row sm:space-x-3 sm:space-y-0 sm:pr-10 rtl:space-x-reverse"},null,-1)),l("ul",Ae,[l("li",Me,[(e._.provides[I]||e.$route).fullPath==="/"?(m(),S(i,{key:0,class:"flex h-full w-full items-center justify-center rounded-lg px-4 text-white hover:cursor-pointer",to:"/"},{default:h(()=>[p(k(e.$t("pages.index.link")),1)]),_:1})):(m(),S(i,{key:1,class:"flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer",to:"/"},{default:h(()=>[p(k(e.$t("pages.index.link")),1)]),_:1}))]),l("li",qe,[(e._.provides[I]||e.$route).fullPath==="/"?(m(),S(i,{key:0,class:"flex h-full w-full items-center justify-center rounded-lg px-4 text-white hover:cursor-pointer",to:"/destinations"},{default:h(()=>[p(k(e.$t("pages.destinations.link")),1)]),_:1})):(m(),S(i,{key:1,class:"flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer",to:"/destinations"},{default:h(()=>[p(k(e.$t("pages.destinations.link")),1)]),_:1}))]),l("li",Oe,[(e._.provides[I]||e.$route).fullPath==="/"?(m(),S(i,{key:0,class:"flex h-full w-full items-center justify-center rounded-lg px-4 text-white hover:cursor-pointer",to:"/about"},{default:h(()=>[p(k(e.$t("pages.about.link")),1)]),_:1})):(m(),S(i,{key:1,class:"flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer",to:"/about"},{default:h(()=>[p(k(e.$t("pages.about.link")),1)]),_:1}))])])])])}const Le=P(Ne,[["render",He]]),Ce={},Be={class:"h-screen w-screen bg-[url('assets/img/background.jpg')] bg-cover -mt-40 pb-60 pt-60"},Ee={class:"container mx-auto max-h-screen max-w-screen-xl pt-30 px-8"},Te={class:"w-full"},Re={class:"button pt-10 pl-1"};function Fe(e,t){const s=W;return m(),z("div",Be,[l("div",Ee,[l("section",Te,[t[1]||(t[1]=l("div",{class:"flex justify-start"},[l("h1",{class:"font-sans text-5xl sm:text-7xl font-thin text-white pr-2"},"My"),l("h1",{class:"font-sans text-5xl sm:text-7xl font-bold text-green-400"}," Travel App ")],-1)),t[2]||(t[2]=l("p",{class:"max-w-lg pt-10 font-sans text-xl text-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore fugit et voluptatem natus, corrupti delectus consequatur atque facilis nisi quidem veniam? Aperiam amet tempora ea quod. Odio, facere! Sunt. ",-1)),l("div",Re,[y(s,{class:"mb-2 me-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center font-medium text-white text-xl shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800",to:"/destinations"},{default:h(()=>t[0]||(t[0]=[p("Toutes les destinations ")])),_:1})])])])])}const De=P(Ce,[["render",Fe]]),Ue={},Ve={class:"h-full w-screen bg-orange-500 bg-cover pb-40 pt-40"},Ge={class:"container mx-auto max-h-screen max-w-screen-xl px-8"},Je={class:"w-full"},Qe={class:"flex flex-wrap md:flex-row"},Xe={class:"button pl-1 pt-10"},Ye={class:"button pl-1 pt-10"},Ze={class:"button pl-1 pt-10"};function Ke(e,t){const s=W;return m(),z("div",Ve,[l("div",Ge,[l("section",Je,[t[3]||(t[3]=l("div",{class:"flex justify-start"},[l("h1",{class:"pr-2 font-sans text-5xl font-thin text-white sm:text-7xl"}," Footer ")],-1)),t[4]||(t[4]=l("p",{class:"max-w-lg pt-10 font-sans text-xl text-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore fugit et voluptatem natus, corrupti delectus consequatur atque facilis nisi quidem veniam? ",-1)),l("div",Qe,[l("div",Xe,[y(s,{class:"from-white-400 via-white-500 to-white-600 shadow-white-500/50 focus:ring-white-300 dark:shadow-white-800/80 mb-2 me-2 rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 dark:shadow-lg dark:focus:ring-green-800",to:"/"},{default:h(()=>t[0]||(t[0]=[p("Home ")])),_:1})]),l("div",Ye,[y(s,{class:"from-white-400 via-white-500 to-white-600 shadow-white-500/50 focus:ring-white-300 dark:shadow-white-800/80 mb-2 me-2 rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 dark:shadow-lg dark:focus:ring-green-800",to:"/destinations"},{default:h(()=>t[1]||(t[1]=[p("Toutes les destinations ")])),_:1})]),l("div",Ze,[y(s,{class:"from-white-400 via-white-500 to-white-600 shadow-white-500/50 focus:ring-white-300 dark:shadow-white-800/80 mb-2 me-2 rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 dark:shadow-lg dark:focus:ring-green-800",to:"/about"},{default:h(()=>t[2]||(t[2]=[p("About ")])),_:1})])])])])])}const et=P(Ue,[["render",Ke]]),tt={class:"min-h-screen bg-gradient-to-t from-gray-100/40 to-gray-100/40"},it={class:"container mx-auto max-h-screen max-w-screen-xl px-8"},st={key:0},ot={class:"container mx-auto max-w-screen-xl px-8"},nt={class:"pb-24 pt-12"},dt=D({__name:"default",setup(e){return te({addDirAttribute:!0,identifierAttribute:"id",addSeoAttributes:!0}),(t,s)=>{const i=Le,o=De,n=et;return m(),z("div",tt,[l("div",it,[y(i)]),(t._.provides[I]||t.$route).fullPath==="/"?(m(),z("div",st,[y(o)])):ie("",!0),l("div",ot,[l("div",nt,[se(t.$slots,"default")])]),l("div",null,[y(n)])])}}});export{dt as default};