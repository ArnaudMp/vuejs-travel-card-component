<template>
  <div class="destinations ">
    <main class="mt-4 text-white [&>*]:mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 " >
      <div
        v-for="post in posts"
        :key="post.id"
        class="card max-h-none rounded-2xl"
      >
        <TravelCard :id="post.id" />
      </div>
    </main>
  </div>
</template>

<script>
import TravelCard from "~/components/TravelCard.vue";

definePageMeta({
  layout: "default",
});

export default {
  components: {
    TravelCard,
  },
};
</script>

<script setup>
const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
);
</script>
