<template>
  <div class="w-[80%] mx-auto mt-[90px]  p-[30px] grid grid-cols-3 gap-3">
    <product v-for='product in products' :key="product.id" :product='product'/>
  </div>
</template>

<script>
import Product from "../product/index.vue";
import products from "../../dataProducts";
export default {
    data(){
        return{
            products:products
        }
    },
  components: {
    Product,
  },
  methods: {

  },
};
</script>