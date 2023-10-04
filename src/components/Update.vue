<template>
    <div class="app">
      <Header></Header>
      <h1>hello user welcome to update page</h1>
      <!-- Your app content goes here -->
    </div>
  </template>
<script>
import Header from './Header.vue';
export default{
    components:{
        Header
    },
 //user kelele wede signup
 mounted() {
  let user = localStorage.getItem('responseData');
  if (!user) {
    this.$router.push({ name: 'signup' });
  }
}
}
</script>
<style scoped>


</style>