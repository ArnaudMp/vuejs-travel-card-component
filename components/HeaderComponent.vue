<template>
  <header class="mb-5">
    <nav class="flex flex-row justify-start pb-5 pt-10">
      <NuxtLink to="/" aria-label="Home" class="min-w-fit">
        <nuxt-img
          class="h-6 sm:ml-3 lg:ml-0"
          src="logo/logo.svg"
          densities="x1 x2"
          alt="nuxt-logo"
          style="height: 36px; width: 99px"
        />
      </NuxtLink>
      <div
        class="flex flex-col space-x-3 space-y-4 pr-2 sm:flex-row sm:space-x-3 sm:space-y-0 sm:pr-10 rtl:space-x-reverse"
      />
      <ul
        class="flex flex-wrap items-center space-x-1 sm:justify-center sm:space-x-2 sm:space-x-reverse"
      >
        <li class="h-full">
          <NuxtLink
            class="flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer"
            to="/"
            >{{ $t("pages.index.link") }}</NuxtLink
          >
        </li>
        <li class="h-full">
          <NuxtLink
            class="flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer"
            to="/destinations"
            >{{ $t("pages.destinations.link") }}</NuxtLink
          >
        </li>
        <li class="h-full">
          <NuxtLink
            class="flex h-full w-full items-center justify-center rounded-lg px-4 text-black hover:cursor-pointer"
            to="/about"
            >{{ $t("pages.about.link") }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="postcss">
ul .router-link-exact-active {
  @apply border-orange-500/20 bg-orange-500/20 text-black hover:border-orange-500/20 hover:bg-orange-500/20;
}
</style>