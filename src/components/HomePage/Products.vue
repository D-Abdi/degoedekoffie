<template>
  <section class="text-gray-600 mx-auto max-w-7xl">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-1 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300"
          >
            Ons aanbod aan hoogwaardige koffie
          </h1>
          <div class="h-1 w-20 custom-bg-secondary rounded"></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4 justify-evenly">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-neutral shadow-xl drop-shadow-xl p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h2
              class="text-lg custom-color-secondary font-medium title-font mb-4"
            >
              Chichen Itza
            </h2>
            <p class="leading-relaxed text-base text-gray-400">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-neutral shadow-xl drop-shadow-xl p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/721x401"
              alt="content"
            />
            <h2
              class="text-lg custom-color-secondary font-medium title-font mb-4"
            >
              Colosseum Roma
            </h2>
            <p class="leading-relaxed text-base text-gray-400">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Products",
};
</script>
