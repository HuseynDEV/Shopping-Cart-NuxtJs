<template>
  <div
    class="
      flex
      items-center
      justify-between
      p-[20px]
      bg-blue-500
      text-white text-xl
      fixed
      top-0
      left-0
      w-full
    "
  >
    <div class="flex items-center gap-3">
      <nuxt-link tag="a" to="/">Home</nuxt-link>
      <nuxt-link tag="a" to="/products">Products</nuxt-link>
    </div>
    <div class="flex items-center gap-3">
      <nuxt-link tag="a" to="/myProducts" v-if="userCheck" class="relative">
        <p>{{ user.name }}</p>
        <span
          class="
            absolute
            -top-1
            -right-2
            w-[20px]
            h-[20px]
            rounded-[50%]
            bg-red-600
            text-center
            leading-[20px]
            text-sm
          "
          >{{ products.length }}</span
        >
      </nuxt-link>

      <p v-if="userCheck" @click="logout">Logout</p>
      <nuxt-link tag="a" to="/signUp">SignUp</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user", "userCheck", "products"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

