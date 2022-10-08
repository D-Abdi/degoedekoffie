<template>
  <section class="grid grid-cols-2 gap-4">
    <div class="card w-100 shadow-xl image-full">
      <figure>
        <img
          src="src\assets\images\ecuador-man.png"
          alt="Ecuadorian man in a coffee field."
          class="w-full"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Ecuador</2>
        <img
          src="src\assets\images\coffee-bag.jpg"
          alt="A coffee bag surrounded by coffee beans."
          class="w-60 h-72 rounded"
        />
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card w-100 shadow-xl image-full">
      <figure>
        <img
          src="src\assets\images\guatamala-woman.png"
          alt="Guatamalan woman carrying plants in a coffee field."
          class="w-full"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Guatamala</h2>
        <img
          src="src\assets\images\coffee-bag.jpg"
          alt="A coffee bag surrounded by coffee beans."
          class="w-60 h-72"
        />
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
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
