import{_ as d}from"./ewsYcyiO.js";import{u as i}from"./Dcf8iGvq.js";import{_ as c}from"./DlAUqK2U.js";import{o as l,c as p,d as t,t as s,j as _,p as g,B as h,i as m}from"./DvZP5VID.js";const u={props:{id:{type:[String,Number],required:!0}},async setup(a){const{data:e}=await i(()=>`https://jsonplaceholder.typicode.com/posts/${a.id}`,{lazy:!0},"$XkTrG25Ff8"),{data:r}=await i(()=>`https://jsonplaceholder.typicode.com/photos/${a.id}`,{lazy:!0},"$zEBahArpRh");return{post:e,image:r}}},x={class:"transition-colors ease-in-out duration-300 bg-black/40 hover:bg-black/20 p-5 sm:p-20 text-left"},f={class:"title","data-swiper-parallax":"-300"},b={class:"text-4xl font-bold"},v={class:"subtitle pt-10","data-swiper-parallax":"-200"},y={class:"text-2xl font-light"},w={class:"text pt-10","data-swiper-parallax":"-100"},k={class:"text-lg"},B={class:"button pl-1 pt-10"};function N(a,e,r,o,j,z){const n=d;return l(),p("div",{class:"travel-card overflow-hidden rounded-3xl bg-cover",style:m({backgroundImage:`url(img/${o.post.id}.jpg)`})},[t("div",x,[t("div",f,[t("p",b,s(o.post.title.slice(0,25)),1)]),t("div",v,[t("p",y,s(o.post.body.slice(0,40)),1)]),t("div",w,[t("p",k,s(o.post.body)+" "+s(o.post.body),1)]),t("div",B,[_(n,{class:"mb-2 me-2 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg shadow-orange-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-orange-300 dark:shadow-lg dark:shadow-orange-800/80 dark:focus:ring-orange-800",to:`/destinations/${o.post.id}`},{default:g(()=>e[0]||(e[0]=[h("Voir les activités ")])),_:1},8,["to"])])])],4)}const C=c(u,[["render",N]]);export{C as T};
