<template>
    <main>
        <div v-if="post">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>

        </div>
        <div v-else>
            Chargement...
        </div>
    </main>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useFetch(() => "https://jsonplaceholder.typicode.com/posts/" + route.params.id, {
    lazy: true
})

useSeoMeta({
    title: () => post.value?.title.slice(0,10)
})
</script>