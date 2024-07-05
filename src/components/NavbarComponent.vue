<template>
 <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="../views/HomeView.vue">
        <img id="logo" src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/a7f6f8a62b52952ca6852dd596822bb78b5cb629/Portfolio__2_-removebg-preview.png" alt="Logo" width="190" height="190">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.path === '/home' }">
            <RouterLink class="nav-link" to="/home">Home</RouterLink>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/about' }">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/projects' }">
            <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/resume' }">
            <RouterLink class="nav-link" to="/resume">Resume</RouterLink>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/testimonial' }">
            <RouterLink class="nav-link" to="/testimonial">Testimonials</RouterLink>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/contact' }">
            <RouterLink class="nav-link" to="/contact">Contact Me</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
}
</script>

<style scoped>
.navbar {
  position: absolute;
  background-color: transparent;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
}
.container{
  position: relative;
  right: 70px;
}
.navbar-brand {
  position: absolute;
  right: 560px;
  top: -43px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #D4AF37;
  text-decoration: none;
}

.navbar-nav {
  position: relative;
  left: 800px;
  top: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: large;
  color: #D4AF37;
}

.nav-item {
  margin-right: 10px;
}

.nav-link {
  color: #D4AF37;
  text-decoration: none;
  transition: color 0.2s ease;
  margin-left: 10px;
  margin-right: 20px;
}

.nav-link:hover {
  background: #D4AF37;
  color: white;
}

.nav-item.active .nav-link {
  text-decoration: underline;
  color: #D4AF37;
}

.nav-item.active .nav-link:hover {
  color: white;
  background-color: #D4AF37;
}

.nav-item:last-child {
  margin-right: 0;
}
#logo{
  width:180px;
  height: 170px;
  position: relative;
  bottom: px;
  right: 20px;
}
/* Add media queries for responsiveness */
@media only screen and (max-width: 300px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .container {
    margin: 0 10px;
    max-width: 70%;
  }
  .navbar-brand {
    position: relative;
    right: 0;
    top: 0;
    font-size: 1rem;
    margin: 0 auto; /* add this to center the logo */
  }
  .navbar-nav {
    flex-direction: column;
    left: 0;
    top: 0;
    margin: 0; /* add this to remove the margin */
  }
  .nav-item {
    margin-right: 0;
  }
  .nav-link {
    margin-right: 0;
  }
}
#logo{
  width:170px;
  height: 170px;
  position: relative;
  bottom: px;
  right: 20px;
}
/* .navbar-toggler-icon{
  position: relative;
  bottom: 100px;
  left: 20px;
} */
.navbar-toggler{
  position: relative;
  bottom: 120px;
  left: 255px;
}
</style>