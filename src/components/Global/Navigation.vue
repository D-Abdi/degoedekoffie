<template>
  <header class="text-gray-600 body-font max-w-7xl">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
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
      <i class="fa badge fa-lg cursor-pointer" value="0" style="font-size: 24px"
        >&#xf07a;</i
      >
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
export default {
  name: "Nav",
  mounted() {
    console.log(this.$route, "Route");
  },
};
</script>
