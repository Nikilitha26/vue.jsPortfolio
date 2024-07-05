<template>
    <div class="loader-container" v-if="loading">
      <img src="https://github.com/Nikilitha26/vue.jsImages/blob/main/Portfolio__2_-removebg-preview.png?raw=true" alt="Logo" class="logo" />
      <div class="linear-loader">
        <div class="loader-bar"></div>
      </div>
    </div>
    <!-- Your content here -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      // Simulate a delay to show the loader
      setTimeout(() => {
        this.loading = false
        this.$router.push({ name: 'home' }) // Redirect to home page
      }, 2000)
      
    }
  }
  </script>
  
  <style scoped>
  .loader-container {
    position: relative;
    left: 700px;
    top: 350px;
  }
  
  .logo {
    position: relative;
    bottom: 90px;
    right: 600px;
    transform: translateX(-50%);
    width: 200px;
    height: 190px;
    z-index: 1;
  }
  
  .linear-loader {
    width: 100px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    position: relative;
    z-index: 0;
  }
  
  .loader-bar {
    width: 20px;
    height: 10px;
    background-color: #D4AF37;
    border-radius: 5px;
    animation: load 5s linear infinite;

    bottom: 100px;
    position: relative;
    left: 40px;
  }
  
  @keyframes load {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  </style>

