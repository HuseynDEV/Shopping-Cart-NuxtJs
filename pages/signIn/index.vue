<template>
  <div
    class="
      w-[900px]
      h-[600px]
      p-[20px]
      rounded-[25px]
      bg-blue-500
      mx-auto
      mt-[90px]
      flex
      items-center
      gap-3
    "
  >
    <form @submit.prevent="submit">
      <div class="w-[500px]">
        <div class="flex flex-col my-4">
          <label for="name" class="text-xl mb-2">Name</label>
          <input
            v-model="userData.name"
            type="text"
            placeholder="Name..."
            id="name"
            class="h-[40px] p-2"
          />
          <small class="name hidden text-red-600 text-lg"
            >Please write your name</small
          >
        </div>
        <div class="flex flex-col my-4">
          <label for="password" class="text-xl mb-2">Password</label>
          <input
            v-model="userData.password"
            type="password"
            placeholder="Password..."
            id="password"
            class="h-[40px] p-2"
          />
        </div>
        <button class="w-full h-[50px] text-black bg-white rounded-md text-xl">
          SignIn
        </button>
        <p class="text-center text-xl mt-3">
          If you have a account
          <nuxt-link
            to="/signUp"
            tag="a"
            class="text-blue-800 border-solid border-b-2 border-blue-800"
            >SignUp</nuxt-link
          >
        </p>
      </div>
    </form>
    <div class="w-[50%] h-full object-cover">
      <img
        class="h-full w-full"
        src="https://images.unsplash.com/photo-1675157214170-dd1ffe03c724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     userData:{
       name: null,
      password: null,
     }
    };
  },
  methods: {
    submit() {
      if (this.userData.name && this.userData.password) {
        this.$store.dispatch('signIn',this.userData)
      }
    },
  },
};
</script>
