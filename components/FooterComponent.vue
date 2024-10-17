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
              class="from-white-400 via-white-500 to-white-600 shadow-white-500/50 focus:ring-white-300 dark:shadow-white-800/80 mb-2 me-2 rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 dark:shadow-lg dark:focus:ring-green-800"
              to="/"
              >Home
            </NuxtLink>
          </div>
          <div class="button pl-1 pt-10">
            <NuxtLink
              class="from-white-400 via-white-500 to-white-600 shadow-white-500/50 focus:ring-white-300 dark:shadow-white-800/80 mb-2 me-2 rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 dark:shadow-lg dark:focus:ring-green-800"
              to="/destinations"
              >Toutes les destinations
            </NuxtLink>
          </div>
          <div class="button pl-1 pt-10">
            <NuxtLink
              class="from-white-400 via-white-500 to-white-600 shadow-white-500/50 focus:ring-white-300 dark:shadow-white-800/80 mb-2 me-2 rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-xl font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 dark:shadow-lg dark:focus:ring-green-800"
              to="/about"
              >About
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
