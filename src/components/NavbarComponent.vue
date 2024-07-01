<template>
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="">
          <img src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/a7f6f8a62b52952ca6852dd596822bb78b5cb629/Portfolio__2_-removebg-preview.png" alt="Logo" width="190" height="190">
        </a>
        <ul class="nav-links">
        <li :class="{ active: $route.path === '/home' }"><RouterLink to="/home">Home</RouterLink></li>
        <li :class="{ active: $route.path === '/about' }"><RouterLink to="/about">About</RouterLink></li>
        <li :class="{ active: $route.path === '/projects' }"><RouterLink to="/projects">Projects</RouterLink></li>
        <li :class="{ active: $route.path === '/resume' }"><RouterLink to="/resume">Resume</RouterLink></li>
        <li :class="{ active: $route.path === '/testimonial' }"><RouterLink to="/testimonial">Testimonials</RouterLink></li>
        <li :class="{ active: $route.path === '/contact' }"><RouterLink to="/contact">Contact Me</RouterLink></li>
      </ul>
      </div>
    </nav>
  </template>
    
    <script>
    export default {
     
    }
    </script>
    
    <style scoped>
    .navbar {
      position: absolute;
      background-color: transparent ;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links li.active a {
  text-decoration: underline;
  color: #D4AF37;
}
    
    .navbar-brand {
      position: absolute;
      right: 550px;
      top: -33px;
      font-size: 1.5rem;
      font-weight: bold;
      color:#D4AF37 ;
      text-decoration: none;
    }
    
    .nav-links {
      position: relative;
      left: 800px;
      top: 20px;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      font-size: large;
    }
    
    .nav-links li {
      margin-right: 10px;
    }
    
    .nav-links a {
      color: #D4AF37;
      text-decoration: none;
      transition: color 0.2s ease;
      margin-left: 10px;
      margin-right: 20px;
    }
    
    .nav-links a:hover {
      background: #D4AF37;
      color: white; 
    }
    
    .nav-links li:last-child {
      margin-right: 0;
    }
    </style>