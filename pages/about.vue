<script setup>
const { t } = useI18n();
useHead({
  title: t("pages.about.meta.title"),
  meta: [{ name: "description", content: t("pages.about.meta.description") }],
});
useSeoMeta({
  title: t("pages.about.meta.title"),
  description: t("pages.about.meta.description"),
});
</script>
<template>
  <div class="p-5">
    <h1 class="text-4xl text-black">{{ $t("pages.about.title") }}</h1>
    <main class="mt-4 text-black  [&>*]:mb-4">
      <p>
        {{ $t("pages.about.p") }}
      </p>
      <p>
        {{ $t("pages.about.p") }}
      </p>
      <p>{{ $t("pages.about.p") }} {{ $t("pages.about.p") }}</p>
      <p>
        {{ $t("pages.about.p") }}
      </p>
    </main>
  </div>
</template>
