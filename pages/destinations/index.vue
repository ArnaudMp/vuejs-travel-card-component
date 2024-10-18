<template>
  <div class="destinations ">
    <main class="text-white px-2 sm:px-10 grid gap-4   grid-cols-1 sm:grid-cols-2" >
      <div
        v-for="post in posts"
        :key="post.id"
        class=" rounded-2xl"
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
