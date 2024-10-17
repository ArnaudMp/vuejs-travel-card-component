<template>
    <div class="bg-gradient-to-t from-gray-400/20 to-gray-400/40 p-5 sm:p-20">
        <div class="title">
            <p class="text-4xl font-bold">Lorem Ipum</p>
            <!-- <p class="text-4xl font-bold">{{ image.url }}</p> -->
        </div>
        <div class="py-5">
            <NuxtRating
border-color="#db8403" active-color="#ffa41c" inactive-color="#fff" :rating-step="0.5"
                :rounded-corners="true" :border-width="5" :rating-size="30" :rating-value="ratingValue"
                @rating-selected="logRating" @rating-hovered="event => (rating = event)" />
        </div>
        <div>
            <p class="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam tempore nobis nesciunt cumque!
                Porro, exercitationem vero doloremque suscipit pariatur repudiandae, consectetur reiciendis fuga, facere
                minima tempore ipsa nesciunt vel quos?
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rating = ref(0)

const logRating = (event: number) => {
    console.log(event)
}

const ratingValue = Math.random() * 5
</script>