<script setup>
import { useProductsStore } from './store/ProductStore';
const productManager = useProductsStore();

if (productManager.products.length === 0) {
  productManager.retrieveProducts()
}

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
