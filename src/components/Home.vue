<template>
    <div class="app">
      <Header></Header>
      <h1>hello {{name}} welcome to home page</h1>
      <!-- Your app content goes here -->
      <table border="1">
        <tr>
          <td>
            name
          </td>
          <td>
            contact
          </td>
          <td>
            address
          </td>
          <td>
            id
          </td>
        </tr>
        <tr v-for="item in resturant" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.id }}</td>

        </tr>
      </table>
    </div>
  </template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default{
    data(){
        return{
            name:'',
            resturant:[]

        }
    },
    components:{
        Header
    },
 //user kelele wede signup
 async mounted() {
  let user = localStorage.getItem('responseData');
  this.name=JSON.parse(user).name
  if (!user) {
    this.$router.push({ name: 'signup' });
  }
  let result= await axios.get(`http://localhost:3000/resturaunt`)
  this.resturant=result.data;
}
}
</script>
<style scoped>
td{
  width: 160px;
  height: 30px;
}

</style>