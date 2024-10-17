<template>
  <div class="h-full w-screen bg-orange-500 bg-cover pb-40 pt-40">
    <div class="container mx-auto max-h-screen max-w-screen-xl px-8">
      <section class="w-full">
        <div class="flex justify-start">
          <h1 class="pr-2 font-sans text-5xl font-thin text-white sm:text-7xl">
            Footer
          </h1>
        </div>

        <p class="max-w-lg pt-10 font-sans text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore
          fugit et voluptatem natus, corrupti delectus consequatur atque facilis
          nisi quidem veniam?
        </p>
        <div class="flex flex-wrap md:flex-row">
          <div class="button pl-1 pt-10">
            <NuxtLink
              class="button border-3 mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white hover:text-black hover:bg-white transition-colors duration-150 ease-in-out"
              to="/"
              >Home
            </NuxtLink>
          </div>
          <div class="button pl-1 pt-10">
            <NuxtLink
              class="button border-3 mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white hover:text-black hover:bg-white transition-colors duration-150 ease-in-out"
              to="/destinations"
              >Toutes les destinations
            </NuxtLink>
          </div>
          <div class="button pl-1 pt-10">
            <NuxtLink
              class="button border-3 mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white hover:text-black hover:bg-white transition-colors duration-150 ease-in-out"
              to="/about"
              >About
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
