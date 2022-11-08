<template>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 pt-12 pb-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1
              class="
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
                md:text-5xl
              "
            >
              <span class="block">Goede koffie</span>
              <span class="block custom-color-secondary xl:inline"
                >voor een eerlijke prijs</span
              >
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-400
                sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start align-baseline"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-md
                    border border-transparent
                    custom-bg-secondary
                    px-8
                    py-3
                    text-base
                    font-medium
                    text-white
                    md:py-4 md:px-6 md:text-lg
                    hero-btn
                  "
                  ><i class="fa-solid fa-mug-hot mr-2"></i>Bekijk ons aanbod</a>
              </div>
            </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="../../assets/images/banner.jpg">
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>
