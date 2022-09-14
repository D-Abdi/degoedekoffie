<template>
  <div class="flex justify-center text-white my-16">
    <h2 class="text-xl md:text-3xl">Het beste voor u, van boer tot boon</h2>
  </div>
  <div class="grid grid-cols-3 justify-items-center">
    <div
      class="card bg-neutral col-span-3 md:col-span-1 w-auto mx-12 mb-20 md:mb-0 md:mx-0 md:w-80 shadow-xl drop-shadow-xl"
    >
      <figure class="px-10 pt-5">
        <div
          class="rounded-full w-24 h-24 flex justify-center items-center custom-bg-secondary"
        >
          <i
            class="fa-solid fa-hand-holding-seedling text-5xl custom-color-primary"
          ></i>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title custom-color-secondary">Eerlijk</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
        </p>
      </div>
    </div>
    <div
      class="card bg-neutral col-span-3 md:col-span-1 w-auto mx-12 mb-20 md:mb-0 md:mx-0 md:w-80 shadow-xl drop-shadow-xl"
    >
      <figure class="px-10 pt-5">
        <div
          class="rounded-full w-24 h-24 flex justify-center items-center custom-bg-secondary"
        >
          <i class="fa-solid fa-coffee-beans text-5xl custom-color-primary"></i>
        </div>
      </figure>
      <div class="card-body items-center text-center text-white">
        <h2 class="card-title custom-color-secondary">Kwaliteit</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
        </p>
      </div>
    </div>
    <div
      class="card bg-neutral col-span-3 md:col-span-1 w-auto mx-12 md:mx-0 md:w-80 shadow-xl drop-shadow-xl"
    >
      <figure class="px-10 pt-5">
        <div
          class="rounded-full w-24 h-24 flex justify-center items-center custom-bg-secondary"
        >
          <i class="fa-solid fa-truck-fast text-5xl custom-color-primary"></i>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title custom-color-secondary">Snel</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>
