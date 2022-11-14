<template>
  <div class="container mx-auto max-w-7xl">
    <div class="mb-10">
      <Navigation />
    </div>
    <section class="container mx-auto">
      <div class="flex flex-col text-center w-full">
        <h1
          class="
            sm:text-3xl
            text-3xl
            font-medium
            title-font
            mb-4
            custom-color-secondary
          "
        >
          Goede koffie met passie bereid
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          py-24
          md:flex-row
          flex-col
          items-center
        "
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-64 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pl-24
            md:pl-16
            flex flex-col
            md:items-start md:text-left
            items-center
            text-center
          "
        >
          <h1
            class="title-font text-3xl mb-4 font-medium custom-color-secondary"
          >
            Ontmoet Robin de Wolff
          </h1>
          <p class="leading-relaxed text-gray-400">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          py-24
          md:flex-row
          flex-col
          items-center
        "
      >
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pr-24
            md:pr-16
            flex flex-col
            md:items-start md:text-left
            items-center
            text-center
          "
        >
          <h1
            class="title-font text-3xl mb-4 font-medium custom-color-secondary"
          >
            Een eerlijke prijs voor de boeren
          </h1>
          <p class="leading-relaxed text-gray-400">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-64 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="src\assets\images\about\farm.jpg"
          />
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          py-24
          md:flex-row
          flex-col
          items-center
        "
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-64 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="src\assets\images\about\roast.jpg"
          />
        </div>
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pl-24
            md:pl-16
            flex flex-col
            md:items-start md:text-left
            items-center
            text-center
          "
        >
          <h1
            class="title-font text-3xl mb-4 font-medium custom-color-secondary"
          >
            Gebrand in Nederland
          </h1>
          <p class="leading-relaxed text-gray-400">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../components/Global/Navigation.vue";
import Footer from "../../components/Global/Footer.vue";

export default {
  name: "About",
  components: {
    Navigation,
    Footer,
  },
};
</script>
