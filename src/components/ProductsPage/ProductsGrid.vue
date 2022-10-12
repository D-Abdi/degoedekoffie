<template>
  <section class="grid grid-cols-2 gap-4">
    <div class="card w-100 shadow-xl image-full bg-base-300">
      <figure>
        <img
          src="src\assets\images\ecuador-man.png"
          alt="Ecuadorian man in a coffee field."
          class="w-full brightness-125"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="mb-1 card-title custom-color-secondary text-2xl">Ecuador</h2>
        <img
          src="src\assets\images\coffee-bag.jpg"
          alt="A coffee bag surrounded by coffee beans."
          class="w-60 h-60 rounded"
        />
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
      <figure>
        <img
          src="src\assets\images\guatamala-woman.png"
          alt="Guatamalan woman carrying plants in a coffee field."
          class="w-full brightness-125"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="mb-1 card-title custom-color-secondary text-2xl">
          Guatamala
        </h2>
        <img
          src="src\assets\images\coffee-bag.jpg"
          alt="A coffee bag surrounded by coffee beans."
          class="w-60 h-60"
        />
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
export default {
  name: "ProductsGrid",
};
</script>
