<template>
  <div>
    <div
class="absolute left-0 -z-10 -mt-40  h-screen w-screen bg-cover"
      :style="{ backgroundImage: `url(../img/${post.id}.jpg)` }" />
    <div class="z-10">
      <div class="flextravel-card overflow-hidden rounded-3xl bg-cover">
        <div class="bg-white/80 p-5 sm:p-20">
          <div class="title flex align-middle justify-center" data-swiper-parallax="-300">
            <p class="text-4xl font-bold pr-2 ">Welcome to </p>
            <p class="text-4xl font-bold text-green-400">{{ post.title.slice(0, 15) }}</p>
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
        <div class="bg-white/80 p-5 sm:p-20">
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
        <div class="bg-white/80 p-5 sm:p-20">
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
        <div class="bg-white/80 p-5 sm:p-20">
          <swiper
:space-between="30" :centered-slides="true" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }" :pagination="{
            clickable: true,
          }" class="mySwiper rounder-3xl bg-transparent">
            <swiper-slide><img src="assets/img/1.jpg" class="rounded-3xl bg-transparent"></swiper-slide>
            <swiper-slide><img
src="assets/img/2.jpg"
                class="rounded-3xl bg-transparent"></swiper-slide><swiper-slide><img
src="assets/img/3.jpg"
                class="rounded-3xl bg-transparent"></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5 mt-10 ">
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

  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },


  async setup(props) {
    const { data: post } = await useFetch(
      () => `https://jsonplaceholder.typicode.com/posts/${props.id}`,
      {
        lazy: true,
      },
    );

    return { post };
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
