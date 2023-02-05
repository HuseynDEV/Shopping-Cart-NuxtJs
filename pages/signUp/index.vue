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
      <div class=" w-[500px] ">
        <div class="flex flex-col my-4">
          <label for="name" class="text-xl mb-2">Name</label>
          <input
            v-model="userData.name"
            type="text"
            placeholder="Name..."
            id="name"
            class="h-[40px] w-full p-2"
          />
          <small class="name hidden text-red-600 text-lg"
            >Please write your name</small
          >
        </div>
        <div class="flex flex-col my-4">
          <label for="email" class="text-xl mb-2">Email</label>
          <input
            v-model="userData.email"
            type="email"
            placeholder="Email..."
            id="email"
            class="h-[40px] p-2"
          />
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
        <div class="flex flex-col my-4">
          <label for="password2" class="text-xl mb-2">Repeat Passsword</label>
          <input
            v-model="userData.password2"
            type="password"
            placeholder="Password"
            id="password2"
            class="h-[40px] p-2"
          />
        </div>
        <button
          type="submit"
          class="w-full h-[40px] text-black bg-white rounded-md text-xl"
        >
          SignUp
        </button>
        <p class="text-center text-xl mt-3">
          If you have a account
          <nuxt-link
            to="/signIn"
            tag="a"
            class="text-blue-800 border-solid border-b-2 border-blue-800"
            >SignIn</nuxt-link
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
      userData: {
        name: null,
        email: null,
        password: null,
        password2: null,
      },
    };
  },
  methods: {
    submit() {
      if (
        this.userData.name &&
        this.userData.password &&
        this.userData.email &&
        this.userData.password2
      ) {
        this.$store.dispatch("signUp", this.userData);
      }
    },
  },
};
</script>
