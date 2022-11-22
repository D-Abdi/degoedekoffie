<template>
  <header class="text-gray-600 body-font max-w-7xl sticky top-0 z-50 custom-bg-primary">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        flex-col
        md:flex-row
        items-center
      "
    >
      <a
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
      >
        <img class="h-24 w-auto" src="../../assets/images/logo.png" alt="" />
      </a>
      <nav
        class="
          md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400
          flex flex-wrap
          items-center
          text-base
          justify-center
        "
      >
        <a
          href="#"
          class="hero-link font-medium text-white mr-5"
          :class="{ 'active-link': this.$route.name === 'Home' }"
          @click="this.$router.push('/')"
          >Home</a
        >

        <a
          href="#"
          class="hero-link font-medium text-white mr-5"
          :class="{
            'active-link':
              this.$route.name === 'Products' || this.$route.name === 'Product',
          }"
          @click="this.$router.push('/products')"
          >Koffiebonen</a
        >

        <a
          href="#"
          class="hero-link font-medium text-white mr-5"
          :class="{ 'active-link': this.$route.name === 'About' }"
          @click="this.$router.push('/about')"
          >Over ons</a
        >

        <a
          href="#"
          class="hero-link font-medium text-white mr-5"
          :class="{ 'active-link': this.$route.name === 'Contact' }"
          @click="this.$router.push('/contact')"
          >Contact</a
        >
      </nav>
 
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <i class="fa-solid fa-2x text-gray-300 fa-cart-shopping"></i>
          <span class="badge badge-sm indicator-item bg-red-600 h-6 w-6">{{this.products.length}}</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content custom-bg-primary shadow-xl">
        <div class="card-body">
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-medium text-gray-400" id="slide-over-title">Shopping cart</h2>
            <div class="ml-3 flex h-7 items-center">
              <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li class="flex py-6" v-for="product of this.products" :key="product.id">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img :src="product?.image" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-400">
                            <h3>
                              <a href="#">{{product?.name}}</a>
                            </h3>
                            <p class="ml-4">&euro;{{product?.price}}</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">{{product?.taste}}</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Qty 1</p>
                          <div class="flex">
                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                          </div>
                        </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="border-t border-gray-200 py-6 px-4 sm:px-6 mt-5">
              <div class="flex justify-between text-base font-medium text-gray-400">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-400">Shipping and taxes calculated at checkout.</p>
              <div class="mt-6">
                <a href="#" class="                rounded-md
                border border-transparent
                custom-bg-secondary
                px-8
                py-3
                text-base
                font-medium
                text-white
                md:py-2 md:px-6 md:text-lg
                hero-btn">Checkout</a>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
              </div>
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="space-y-1 px-2 pt-2 pb-3">
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Product</a>

              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Features</a>

              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Marketplace</a>

              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Company</a>
            </div>
            <a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</a>
          </div>
        </div>
      
  </header>
</template>

<script>
import { useShoppingCartStore } from '../../stores/ShoppingCartStore';

export default {
  name: "Nav",
  data() {
    products: []
  },
  beforeMount() {
    const ShoppingCartStore = useShoppingCartStore();

    this.products = ShoppingCartStore.shoppingCart;
    ShoppingCartStore.getTotalPrice();
  },
};
</script>
