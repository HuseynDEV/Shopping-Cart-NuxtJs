<template>
  <div class="w-full rounded-md shadow-2xl h-full">
    <img
      :src="product.image"
      alt=""
      class="h-[300px] w-full object-cover rounded-tl-md rounded-tr-md"
    />
    <div class="p-[20px]">
     <div class='flex justify-between items-center'>
      <h1 class='text-2xl'>{{ product.name }}</h1>
      <h3 class='text-xl'>{{ product.price + " " + "AZN" }}</h3>
     </div>
      <div class="flex items-center gap-3 justify-end my-3">
        <button @click="increase"  class='w-[50px] h-[30px] text-white bg-blue-500'>+</button>
        <p>{{ count }}</p>
        <button @click="decrease" class='w-[50px] h-[30px] text-white bg-blue-500'>-</button>
      </div>
      <button class=' my-3 w-full h-[40px] bg-blue-500 text-white' @click='addProduct(product)'>Add To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  props: {
    product: {
      required: true,
      type: Object,
    },
  },

  methods:{
    increase(){
        this.count++
    },
    decrease(){
        if(this.count>0){
            this.count--
        }
    },
    addProduct(item){
     this.$store.dispatch('addProduct',{...item,totalPrice:item.price*this.count, count:this.count})
    }
  }
};
</script>