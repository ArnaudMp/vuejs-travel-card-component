import{e as S,b as C,A as $,a as E,S as P}from"./1pYFsA-k.js";import{T}from"./Ds381WH2.js";import{u as M}from"./qb1WoD8K.js";import{l as q,o as h,q as A,p as b,c as F,F as I,h as O,m as _,j}from"./CFGZSmUN.js";import"./d_cAePBp.js";import"./DlAUqK2U.js";function v(g){let{swiper:a,extendParams:w,on:n}=g;w({parallax:{enabled:!1}});const o="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",f=(t,s)=>{const{rtl:p}=a,i=p?-1:1,c=t.getAttribute("data-swiper-parallax")||"0";let e=t.getAttribute("data-swiper-parallax-x"),r=t.getAttribute("data-swiper-parallax-y");const d=t.getAttribute("data-swiper-parallax-scale"),l=t.getAttribute("data-swiper-parallax-opacity"),u=t.getAttribute("data-swiper-parallax-rotate");if(e||r?(e=e||"0",r=r||"0"):a.isHorizontal()?(e=c,r="0"):(r=c,e="0"),e.indexOf("%")>=0?e=`${parseInt(e,10)*s*i}%`:e=`${e*s*i}px`,r.indexOf("%")>=0?r=`${parseInt(r,10)*s}%`:r=`${r*s}px`,typeof l<"u"&&l!==null){const x=l-(l-1)*(1-Math.abs(s));t.style.opacity=x}let y=`translate3d(${e}, ${r}, 0px)`;if(typeof d<"u"&&d!==null){const x=d-(d-1)*(1-Math.abs(s));y+=` scale(${x})`}if(u&&typeof u<"u"&&u!==null){const x=u*s*-1;y+=` rotate(${x}deg)`}t.style.transform=y},m=()=>{const{el:t,slides:s,progress:p,snapGrid:i,isElement:c}=a,e=S(t,o);a.isElement&&e.push(...S(a.hostEl,o)),e.forEach(r=>{f(r,p)}),s.forEach((r,d)=>{let l=r.progress;a.params.slidesPerGroup>1&&a.params.slidesPerView!=="auto"&&(l+=Math.ceil(d/2)-p*(i.length-1)),l=Math.min(Math.max(l,-1),1),r.querySelectorAll(`${o}, [data-swiper-parallax-rotate]`).forEach(u=>{f(u,l)})})},k=function(t){t===void 0&&(t=a.params.speed);const{el:s,hostEl:p}=a,i=[...s.querySelectorAll(o)];a.isElement&&i.push(...p.querySelectorAll(o)),i.forEach(c=>{let e=parseInt(c.getAttribute("data-swiper-parallax-duration"),10)||t;t===0&&(e=0),c.style.transitionDuration=`${e}ms`})};n("beforeInit",()=>{a.params.parallax.enabled&&(a.params.watchSlidesProgress=!0,a.originalParams.watchSlidesProgress=!0)}),n("init",()=>{a.params.parallax.enabled&&m()}),n("setTranslate",()=>{a.params.parallax.enabled&&m()}),n("setTransition",(t,s)=>{a.params.parallax.enabled&&k(s)})}C.use($);const B={components:{Swiper:P,SwiperSlide:E,TravelCard:T},setup(){return{modules:[v,$]}}},L=Object.assign(B,{__name:"HomeCards",async setup(g){let a,w;const{data:n}=([a,w]=q(()=>M("https://jsonplaceholder.typicode.com/posts?_limit=5","$1VuRE4nH0k")),a=await a,w(),a);return(o,f)=>(h(),A(_(P),{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},speed:600,parallax:!0,lazy:!0,"space-between":20,autoplay:{delay:2500,autoplay:!0},class:"mySwiper rounded-3xl"},{"container-start":b(()=>f[0]||(f[0]=[])),default:b(()=>[(h(!0),F(I,null,O(_(n),m=>(h(),A(_(E),{key:m.id,class:"parallax-bg","data-swiper-parallax":"-23%"},{default:b(()=>[j(T,{id:m.id},null,8,["id"])]),_:2},1024))),128))]),_:1}))}});export{L as default};
