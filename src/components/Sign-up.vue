<template>
    <div class="signup-page">
      <h1>Create an Account</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required>
        </div>
        <button type="submit" v-on:click="submitForm">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        formData:{
            name: '',
            email: '',
            password: '',
        },
        responseData: null
      };
    },
    methods: {
      async submitForm() {
       console.log("hi")
        let result =await axios.post('http://localhost:3000/users', this.formData);
        //this refers to the instance of the component itself
        //The $router property is automatically injected into all Vue components when you have Vue Router set up correctly. It allows you to interact with the router and perform routing actions, such as navigating to different routes using push(), replace(), or other methods provided by Vue Router.
        if(result.status==201){
            console.log(result)
    
       // to check whether the user is register or not we can store user credentials to the local storage
       // Store response data in local storage
       //The JSON.stringify() method is used to convert a JavaScript object or value into a JSON string representation.
       localStorage.setItem('responseData', JSON.stringify(result.data)); 
       this.$router.push({name:'Home'})
        }
         
    },
   
    },
     //may be user kahon befit signup adrgo kehone ahon signup sayaderg wede home page redirect lemareg
    mounted() {
  let user = localStorage.getItem('responseData');
  if (user) {
    this.$router.push({ name: 'Home' });
  }
}
  };
  </script>
  
  <style>
  .signup-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>