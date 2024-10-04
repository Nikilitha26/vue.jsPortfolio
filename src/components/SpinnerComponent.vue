<template>
    <div>
      <!-- Your content here -->
      <router-view />
      <div class="loader-container" v-if="loading">
        <img src="https://nikilitha26.github.io/vue.jsImages/NIKILITHA_KAKAZA1-removebg-preview.png" alt="Logo" class="logo" />
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
      <router-view />
    <div class="loader-container" v-if="loading">
      <!-- Loader HTML here -->
    </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      loading: false
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.loading = true
    next()
  },
  mounted() {
    this.$router.afterEach(() => {
      this.loading = false
    })
  }
}
  </script>
  
  <style scoped>
    
  .loader-container {
    position: fixed;
    bottom: 150px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .logo {
    position: relative;
    width: 200px;
    height: 190px;
    margin-bottom: 20px;
  }
  
  .spinner {
    text-align: center;
  }
  
  .bounce1,.bounce2,.bounce3 {
    width: 20px;
    height: 20px;
    background-color: #906046 ;
    border-radius: 100%;
    display: inline-block;
    animation: bouncedelay 1.4s infinite ease-in-out both;
    margin: 0 10px;
  }
  
  .bounce1 {
    animation-delay: -0.32s;
  }
  
  .bounce2 {
    animation-delay: -0.16s;
  }
  
  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0);
    } 40% {
      transform: scale(1);
    }
  }
  </style>
