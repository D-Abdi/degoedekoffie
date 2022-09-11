<template>
  <div class="container">
    <div class="mb-20">
      <Hero />
    </div>
    <div class="my-20">
      <Cards />
    </div>
  </div>
</template>

<script lang="ts">
import Hero from "../components/HomePage/Hero.vue";
import Cards from "../components/HomePage/Cards.vue";

export default {
  name: "HomePage",
  components: {
    Hero,
    Cards,
  },
};
</script>
