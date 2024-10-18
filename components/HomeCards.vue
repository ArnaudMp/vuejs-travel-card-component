<template>
  <swiper
:style="{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }" :speed="600" :parallax="true" :lazy="true" :space-between="20" :autoplay="{
    delay: 2500,
    autoplay: true
  }" class="mySwiper rounded-3xl">
    <template #container-start />
    <swiper-slide v-for="post in posts" :key="post.id" class="parallax-bg" data-swiper-parallax="-23%">
      <TravelCard :id="post.id" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';

import { Autoplay, Parallax } from "swiper/modules";
import SwiperCore from "swiper";
import TravelCard from "~/components/TravelCard.vue";
SwiperCore.use(Autoplay);


export default {
  components: {
    Swiper,
    SwiperSlide,
    TravelCard,
  },
  setup() {
    return {
      modules: [Parallax, Autoplay],
    };
  },
};
</script>
<script setup>
const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
);
</script>
