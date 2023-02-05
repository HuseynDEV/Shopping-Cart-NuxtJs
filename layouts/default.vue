<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  middleware: "session-control",
  components:{
    Header
  }
};
</script>
