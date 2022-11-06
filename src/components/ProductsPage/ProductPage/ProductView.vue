<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 lg:px-0 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="
            lg:w-1/2
            w-full
            lg:h-auto
            h-64
            object-cover object-center
            rounded
          " src="../../../assets/images/coffee-bag.jpg" />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-400 tracking-widest">
            Single origin
          </h2>
          <h1 class="custom-color-secondary text-3xl title-font font-medium mb-1">
            {{ product?.name }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <template v-for="n in 5" :key="n">
                <i class="fa-solid fa-star custom-color-secondary" v-if="n <= product?.rating"></i>
                <i class="fa-regular fa-star custom-color-secondary" v-if="n > product?.rating"></i>
              </template>
              <span class="text-gray-400 ml-3">4 Reviews</span>
            </span>
          </div>
          <p class="leading-relaxed text-gray-400 mb-3">
            {{ product?.description }}
          </p>
          <div class="mb-3">
            <h3 class="my-1 text-xl custom-color-secondary">Smaak</h3>
            <p class="text-leading text-gray-400">{{ product?.taste }}</p>
          </div>
          <div class="mb-3">
            <h3 class="my-1 text-xl custom-color-secondary">Kracht</h3>
            <div>
              <template v-for="n in 5" :key="n">
                <i class="fa-solid fa-coffee-bean coffee-rating" v-if="n <= product?.strength"></i>
                <i class="fa-solid fa-coffee-bean coffee-rating opacity-25" v-if="n > product?.strength"></i>
              </template>
            </div>
          </div>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex items-center">
              <span class="mr-3 text-gray-400">Size</span>
              <div class="relative">
                <select v-on:change="handleAmountSelect($event)" class="
                    rounded
                    border
                    appearance-none
                    border-gray-300
                    py-2
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-200
                    focus:border-indigo-500
                    text-base
                    pl-3
                    pr-10
                  ">
                  <option value="0.5">500g</option>
                  <option value="1" selected="selected">1kg</option>
                  <option value="2">2kg</option>
                  <option value="5">5kg</option>
                  <option value="10">10kg</option>
                </select>
                <span class="
                    absolute
                    right-0
                    top-0
                    h-full
                    w-10
                    text-center text-gray-600
                    pointer-events-none
                    flex
                    items-center
                    justify-center
                  ">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <span class="
                title-font
                font-medium
                text-2xl
                custom-color-secondary
                mr-4
              ">&euro;{{ product?.price }}</span>
            <button class="
                rounded-md
                border border-transparent
                custom-bg-secondary
                px-8
                py-3
                text-base
                font-medium
                text-white
                md:py-2 md:px-6 md:text-lg
                hero-btn
              ">
              In winkelwagen
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useProductsStore } from "../../../store/ProductStore";
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  name: "ProductView",
  components: {
    StripeCheckout
  },
  data() {
    return {
      product: {},
      price: null,
    };
  },
  methods: {
    handleAmountSelect(event) {
      for (let target of event.target) {
        if (target.selected) {
          this.product.price = (this.price * target.value).toFixed(2);
          return;
        }
      }
    }
  },
  async beforeMount() {
    const productManager = useProductsStore();
    const routeId = this.$route.params.id;
    if (productManager.products && productManager.products.length > 0) {  
      this.product = productManager.products.find((product) => product.id == routeId);
      this.price = productManager.products.find((product) => product.id == routeId).price;
    } else {
      await productManager.retrieveProducts();
      this.product = productManager.products.find((product) => product.id == routeId);
      this.price = productManager.products.find((product) => product.id == routeId).price;
    }
  },
};
</script>