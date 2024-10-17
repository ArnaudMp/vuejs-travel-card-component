<script setup lang="ts">
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>
<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto max-h-screen max-w-screen-xl px-8">
      <HeaderComponent />
    </div>
    <!-- <router-view /> -->
    <div v-if="$route.fullPath === '/'">
      <HeroComponent />
    </div>
    <div class="align-center justify-middle container mx-auto max-w-screen-xl px-8">
      <div class="pb-24 pt-12">
        <slot />
      </div>
    </div>
    <div>
      <FooterComponent />
    </div>
  </div>
</template>
