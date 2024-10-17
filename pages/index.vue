<template>
  <div class="mb-10 mt-5 px-3 flex justify-start">
    <ul class='overflow-auto'>
      <li>
        <section class="pt-10 max-h-min min-w-14 max-w-5xl">
          <HomeCards />
        </section>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("pages.index.meta.title"),
  meta: [{ name: "description", content: t("pages.index.meta.description") }],
});
useSeoMeta({
  title: t("pages.index.meta.title"),
  description: t("pages.index.meta.description"),
});
</script>
