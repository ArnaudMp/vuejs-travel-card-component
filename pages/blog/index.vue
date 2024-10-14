<template>
    <h1>Blog</h1>
    <article v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <h2>{{ post.body.slice(0, 100) }}</h2>
        <p>
            <NuxtLink :to="`/blog/${post.id}`">Lire la suite</NuxtLink>
        </p>
    </article>
</template>

<script setup>
const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
</script>