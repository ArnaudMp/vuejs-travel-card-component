import{_ as l}from"./CoSYsZp6.js";import{u as i}from"./IEFf6bQm.js";import{_ as n}from"./DlAUqK2U.js";import{o as p,s as c,q as x,d as t,i as m,t as o}from"./fMEigYNt.js";const _={props:{id:{type:[String,Number],required:!0}},async setup(a){const{data:s}=await i(()=>`https://jsonplaceholder.typicode.com/posts/${a.id}`,{lazy:!0},"$XkTrG25Ff8"),{data:r}=await i(()=>`https://jsonplaceholder.typicode.com/photos/${a.id}`,{lazy:!0},"$zEBahArpRh");return{post:s,image:r}}},b={class:"bg-white/50 p-5 text-left text-black transition-colors duration-500 ease-in-out hover:bg-black/30 hover:text-white sm:p-20"},u={class:"grid grid-cols-2 justify-between"},g={class:"title","data-swiper-parallax":"-300"},h={class:"text-xl sm:text-4xl font-bold"},f={class:"subtitle pt-10","data-swiper-parallax":"-200"},v={class:"text-md sm:text-2xl font-light"},y={class:"text pt-4 sm:pt-10","data-swiper-parallax":"-100"},w={class:"text-xs sm:text-lg"};function k(a,s,r,e,j,B){const d=l;return p(),c(d,{to:`/destinations/${e.post.id}`},{default:x(()=>[t("div",{class:"travel-card overflow-hidden rounded-3xl bg-cover",style:m({backgroundImage:`url(../img/${e.post.id}.jpg)`})},[t("div",b,[t("div",u,[t("div",g,[t("p",h,o(e.post.title.charAt(0).toUpperCase()+e.post.title.slice(1)),1)]),s[0]||(s[0]=t("div",{class:"flex flex-wrap h-min justify-end"},[t("div",{class:"text-xs sm:text-lg tag px-4 py-2 m-1 rounded-3xl border-2 border-orange-500 bg-orange-500 text-white"},[t("span",null,"Popular destination")]),t("div",{class:"text-xs sm:text-lg tag px-4 py-2 m-1 rounded-3xl border-2 border-green-500 text-white bg-green-500"},[t("span",null,"Best for adventure")])],-1))]),t("div",f,[t("p",v,o(e.post.body.slice(0,40)),1)]),t("div",y,[t("p",w,o(e.post.body)+" "+o(e.post.body),1)]),s[1]||(s[1]=t("div",{class:"mt-auto flex pl-1 pt-10"},[t("div",{class:"button border-3 mb-2 me-2 rounded-lg border border-black px-5 py-2.5 text-center text-sm font-medium text-black"}," Voir les activités ")],-1))])],4)]),_:1},8,["to"])}const T=n(_,[["render",k]]);export{T};
