<template>
  <div
    class="h-screen w-screen bg-[url('assets/img/background.jpg')] bg-cover -mt-40 pb-60 pt-60"
  >
    <div class="container mx-auto max-h-screen max-w-screen-xl pt-30 px-8">
        <section class="w-full">
          <div class="flex justify-start">
            <h1 class="font-sans text-5xl sm:text-7xl font-thin text-white pr-2">My</h1>
            <h1 class="font-sans text-5xl sm:text-7xl font-bold text-green-400">
              Travel App
            </h1>
          </div>

          <p class="max-w-lg pt-10 font-sans text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore
            fugit et voluptatem natus, corrupti delectus consequatur atque
            facilis nisi quidem veniam? Aperiam amet tempora ea quod. Odio,
            facere! Sunt.
          </p>
          <div class="button pt-10 pl-1">
            <NuxtLink
              class="mb-2 me-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center font-medium text-white text-xl shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800"
              to="/destinations"
              >Toutes les destinations
            </NuxtLink>
          </div>
        </section>
    </div>
  </div>
</template>
