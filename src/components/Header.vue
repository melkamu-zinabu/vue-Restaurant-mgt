<template>
    <header>
      <nav>
        <ul>
         <li><router-link to="/" href="#">Home</router-link></li>
          <li><router-link to="/Add">Add restaurant</router-link></li>
          <li><router-link to="/Update">Update restaurant</router-link></li>
         
          <li><a v-on:click="logout" href="#">logout</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    // Component logic goes here
    methods:{
        logout(){
            //make claer local storage and redirect the page othe page
            localStorage.clear();
            console.log('logout')
        }
    }
  };
  </script>
  
  <style scoped>
  /* Example CSS styles for the header component */
  header {
    background-color: #333;
    padding: 10px 0;
    color: #fff;
    margin-top: 0;
  }
  

  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

  }
  
  nav ul li {
    margin-right: 10px;
  }
  
  nav ul li:last-child {
    margin-right: 0;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }
  </style>