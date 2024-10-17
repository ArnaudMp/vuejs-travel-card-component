<template>
  <NuxtLink :to="`/destinations/${post.id}`">
    <div
      class="travel-card overflow-hidden rounded-3xl bg-cover"
      :style="{ backgroundImage: `url(img/${post.id}.jpg)` }"
    >
      <div
        class="bg-white/50 p-5 text-left text-black transition-colors duration-500 ease-in-out hover:bg-black/30 hover:text-white sm:p-20"
      >
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

        <div class="mt-auto flex pl-1 pt-10">
          <div
            class="button border-3 mb-2 me-2 rounded-lg border border-black px-5 py-2.5 text-center text-sm font-medium text-black"
          >
            Voir les activités
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
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

<style lang="postcss">
.travel-card:hover .button {
  @apply border-white bg-white text-black transition-colors duration-150 ease-in-out;
}
</style>
