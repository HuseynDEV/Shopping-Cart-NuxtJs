<template>
  <div class="w-[1100px] mx-auto flex justify-between gap-3 my-3 shadow-xl">
    <img
      :src="product.image"
      alt=""
      class="h-[200px] w-[200px] object-cover rounded-tl-md rounded-tr-md"
    />
    <div class="p-[20px]">
      <div class="flex flex-col justify-between items-center gap-2">
        <h1 class="text-xl">Product : {{ product.name }}</h1>
        <h1 class="text-xl">TotalPrice : {{ product.totalPrice }}</h1>
        <h1 class="text-xl">Category : {{ product.category }}</h1>
      </div>
      <div class="flex items-center gap-3 justify-end my-3">
        <button
          @click="increment"
          class="w-[50px] h-[30px] text-white bg-blue-500"
        >
          +
        </button>
        <!-- <p>{{ count }}</p> -->
        <p>{{product.count}}</p>
        <button
          @click="decrement"
          class="w-[50px] h-[30px] text-white bg-blue-500"
        >
          -
        </button>
      </div>
      <button
        class="bg-red-500 w-[100px] h-[40px] ml-[50px]"
        @click="removeProduct(product)"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.product.count,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
    increment() {
      this.$store.dispatch('addCountData',{product:this.product,count:1})
    },
    decrement() {
   this.$store.dispatch('addCountData',{product:this.product,count:-1})
    },
  },
};
</script>