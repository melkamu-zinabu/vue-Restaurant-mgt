<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="name">
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const result = await axios.get(`http://localhost:3000/users?name=${this.name}&password=${this.password}`);
          console.log(result)
          // Perform login logic
          // Make API request to authenticate the user
          // Validate the credentials
          console.log('loggedin');
          if(result.status==201 && result.data.length>0){
            console.log(result)
    
       // to check whether the user is register or not we can store user credentials to the local storage
       // Store response data in local storage
       //The JSON.stringify() method is used to convert a JavaScript object or value into a JSON string representation.
       localStorage.setItem('responseData', JSON.stringify(result.data)); 
       this.$router.push({name:'Home'})
        }
  
        } catch (error) {
          // Handle error
          console.error('Login failed:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>