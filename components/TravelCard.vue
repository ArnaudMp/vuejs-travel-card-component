<template>
  <div
    class="travel-card overflow-hidden rounded-3xl bg-cover"
    :style="{ backgroundImage: `url(img/${post.id}.jpg)` }"
  >
    <div class="bg-gradient-to-t from-black/20 to-black/40 p-5 sm:p-20 text-left">
      <div class="title" data-swiper-parallax="-300">
        <p class="text-4xl font-bold">{{ post.title.slice(0, 25) }}</p>
        <!-- <p class="text-4xl font-bold">{{ image.url }}</p> -->
      </div>
      <div class="subtitle pt-10" data-swiper-parallax="-200">
        <p class="text-2xl font-light">
          {{ post.body.slice(0, 40) }}
        </p>
      </div>
      <div class="text pt-10" data-swiper-parallax="-100">
        <p class="text-lg">
          {{ post.body }}
          {{ post.body }}
        </p>
      </div>

      <div class="button pl-1 pt-10">
        <NuxtLink
          class="mb-2 me-2 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg shadow-orange-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-orange-300 dark:shadow-lg dark:shadow-orange-800/80 dark:focus:ring-orange-800"
          :to="`/destinations/${post.id}`"
          >Voir les activités
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },

  async setup(props) {
    const { data: post } = await useFetch(
      () => `https://jsonplaceholder.typicode.com/posts/${props.id}`,
      {
        lazy: true,
      },
    );
    const { data: image } = await useFetch(
      () => `https://jsonplaceholder.typicode.com/photos/${props.id}`,
      {
        lazy: true,
      },
    );

    return { post, image };
  },
};
</script>
