<template>
  <section class="grid grid-cols-2 gap-4">
    <div class="card w-100 shadow-xl image-full bg-base-300 bg-cover">
      <!-- Card hover -->
      <div class="flex z-30 opacity-0 hover:opacity-100 transition-all duration-300"
        style="background-color: rgba(0, 0, 0, .75)">
        <div class="p-10">
          <h2 class="tracking-widest text-2xl custom-color-secondary mb-1">Ecuador</h2>
          <h1 class="title-font text-xl font-medium text-gray-50 mb-3">Roast level: Dark</h1>
          <p class="leading-relaxed h-24 mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
            tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing
            tousled waistcoat.</p>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 class="my-1 text-xl custom-color-secondary">Kracht</h3>
              <div>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
              </div>
            </div>
            <div>
              <h3 class="my-1 text-xl custom-color-secondary">Smaak</h3>
              <p>Intents, lage zuurgraad, pure chocolade, romig</p>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="rounded-md border border-transparent custom-bg-secondary px-8 py-3 text-base font-medium text-white md:py-2 md:px-10 md:text-lg hero-btn"
              @click="this.$router.push('/product/1')">Bekijk</button>
          </div>
        </div>
      </div>
      <figure>
        <img src="src\assets\images\ecuador-man.png" alt="Ecuadorian man in a coffee field."
          class="w-full brightness-125" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="mb-1 card-title custom-color-secondary text-2xl">Ecuador</h2>
        <img src="src\assets\images\coffee-bag.jpg" alt="A coffee bag surrounded by coffee beans."
          class="w-60 h-60 rounded" />
        <h3 class="my-1 text-xl">Kracht</h3>
        <div>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
        </div>
      </div>
    </div>
    <div class="card w-100 shadow-xl image-full bg-base-300">
      <div class="flex z-30 opacity-0 hover:opacity-100 transition-all duration-300"
        style="background-color: rgba(0, 0, 0, .75)">
        <div class="p-10">
          <h2 class="tracking-widest text-2xl custom-color-secondary mb-1">Guatamala</h2>
          <h1 class="title-font text-xl font-medium text-gray-50 mb-3">Roast level: Dark</h1>
          <p class="leading-relaxed h-24 mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
            tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing
            tousled waistcoat.</p>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 class="my-1 text-xl custom-color-secondary">Kracht</h3>
              <div>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating opacity-25"></i>
              </div>
            </div>
            <div>
              <h3 class="my-1 text-xl custom-color-secondary">Smaak</h3>
              <p>Intents, lage zuurgraad, pure chocolade, romig</p>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="rounded-md border border-transparent custom-bg-secondary px-8 py-3 text-base font-medium text-white md:py-2 md:px-10 md:text-lg hero-btn"
              @click="this.$router.push('/product/2')">Bekijk</button>
          </div>
        </div>
      </div>
      <figure>
        <img src="src\assets\images\guatamala-woman.png" alt="Guatamalan woman carrying plants in a coffee field."
          class="w-full brightness-125" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="mb-1 card-title custom-color-secondary text-2xl">
          Guatamala
        </h2>
        <img src="src\assets\images\coffee-bag.jpg" alt="A coffee bag surrounded by coffee beans." class="w-60 h-60" />
        <h3 class="my-1 text-xl">Kracht</h3>
        <div>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating"></i>
          <i class="fa-solid fa-coffee-bean coffee-rating opacity-25"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useProductsStore } from "../../stores/ProductStore";

export default {
  name: "ProductsGrid",
  data() {
    return {
      products: [],
    };
  },
  async beforeMount() {
    const productManager = useProductsStore();                                           
    this.products = productManager.products;
  }
};
</script>
