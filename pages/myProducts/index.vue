<template>
  <div class="mt-[50px] w-[80%] mx-auto p-[30px] grid grid-cols-3 gap-3">
    <div v-if="products" class="w-full">
      <div v-for="product in products" :key="product.id" class="w-full">
        <my-product :product="product" class="w-full" />
      </div>
      <div class="mt-4 bg-blue-500">
        <h1 class="text-3xl">Total Price: {{totalCount}} AZN </h1>
      </div>
    </div>
    <div v-else>Empty</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import myProduct from "../myProduct/index.vue";
export default {

  components: {
    myProduct,
  },
  computed: {
    ...mapState(["products","totalCount"]),

  },
};
</script>