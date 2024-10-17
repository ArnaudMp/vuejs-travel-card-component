<template>
  <div>
    <div class="flextravel-card overflow-hidden rounded-3xl bg-cover">
      <div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20">
        <div class="title" data-swiper-parallax="-300">
          <p class="text-4xl font-bold">{{ post.title }}</p>
          <!-- <p class="text-4xl font-bold">{{ image.url }}</p> -->
        </div>
        <div class="subtitle pt-10">
          <p class="text-2xl font-light">
            {{ post.body.slice(0, 40) }}
          </p>
        </div>
        <div class="text pt-10">
          <p class="text-lg">
            {{ post.body }}
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
    <div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover">
      <div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20">
        <div class="title">
          <p class="text-4xl font-bold">{{ post.title }}</p>
          <!-- <p class="text-4xl font-bold">{{ image.url }}</p> -->
        </div>
        <div class="subtitle pt-10">
          <p class="text-2xl font-light">
            {{ post.body.slice(0, 40) }}
          </p>
        </div>
        <div class="text pt-10">
          <p class="text-lg">
            {{ post.body }}
            {{ post.body }}
          </p>
        </div>
      </div>
      <div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20">
        <div class="title">
          <p class="text-4xl font-bold">{{ post.title }}</p>
          <!-- <p class="text-4xl font-bold">{{ image.url }}</p> -->
        </div>
        <div class="subtitle pt-10">
          <p class="text-2xl font-light">
            {{ post.body.slice(0, 40) }}
          </p>
        </div>
        <div class="text pt-10">
          <p class="text-lg">
            {{ post.body }}
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
    <div class="travel-card mt-10 overflow-hidden rounded-3xl">
      <div class="bg-gradient-to-t from-white/20 to-white/40 p-5 sm:p-20">
        <swiper
:space-between="30" :centered-slides="true" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :pagination="{
          clickable: true,
        }" :navigation="true" class="mySwiper rounder-3xl bg-transparent">
          <swiper-slide><img src="assets/img/1.jpg" class="rounded-3xl bg-transparent"></swiper-slide>
          <swiper-slide><img src="assets/img/2.jpg" class="rounded-3xl bg-transparent"></swiper-slide><swiper-slide><img
              src="assets/img/3.jpg" class="rounded-3xl bg-transparent"></swiper-slide>
        </swiper>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover">
          <RateComponent />
        </div>

        <div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover">
          <RateComponent />
        </div>
        <div class="flextravel-card mt-10 flex overflow-hidden rounded-3xl bg-cover">
          <RateComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<script setup>
const route = useRoute();

const { data: post } = await useFetch(
  () => "https://jsonplaceholder.typicode.com/posts/" + route.params.id,
  {
    lazy: false,
  },
);
console.log(post);
</script>
