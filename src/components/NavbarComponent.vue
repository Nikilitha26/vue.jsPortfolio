<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="https://nikilitha26.github.io/vue.jsImages/NIKILITHA_KAKAZA-removebg-preview.png" alt="Logo" width="100" height="100">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="right">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item" :class="{ active: $route.path === '/' }">
  <router-link class="nav-link" to="/">Home</router-link>
</li>
<li class="nav-item" :class="{ active: $route.path === '/about' }">
  <router-link class="nav-link" to="/about">About Me</router-link>
</li>
<li class="nav-item" :class="{ active: $route.path === '/education' }">
  <router-link class="nav-link" to="/education">Education & Experience</router-link>
</li>
<li class="nav-item" :class="{ active: $route.path === '/projects' }">
  <router-link class="nav-link" to="/projects">Projects</router-link>
</li>
<li class="nav-item" :class="{ active: $route.path === '/contact' }">
  <router-link class="nav-link" to="/contact">Contact Me</router-link>
</li>
</ul>
      </div>
      </div>
    </div>
  </nav>

</template>
<style>

.nav-item.active {
  text-decoration: underline;
color: #b98E77 !important;
}
.nav-item.active .nav-link {
  text-decoration: underline;
  color: #ffffff !important;
  background-color: transparent;
}
nav {
position: absolute;
background-color:#b98E77;
padding: 1rem; 
margin-bottom: 0;
padding-bottom: 0;

}

.right{
  position: relative;
  left: 650px;
}

/* .nav-link {
color: #ffffff !important; 
margin-right: 20px; 
} */

.nav-link {
  color: #ffffff !important; 
  text-decoration: none;
  margin-right: 20px;
  /* text-align: right; */
  font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
}
.nav-link:hover {
  background: transparent;
  color: #b98E77;
  text-decoration: underline;
}

.offcanvas {
  margin-right: 0rem;
}

#profile {
  position: relative;
  bottom: 15px
}

/*  offcanvas */
#list-unstyled{
text-align: start;
color: black;
}
.list-unstyled a {
  text-decoration: none;
  color: #337ab7;
}

.offcanvas-body .list-unstyled a {
color: rgb(96, 56, 38) !important;
font-family: "Cormorant", serif;
font-optical-sizing: auto;
font-weight: 800;
font-style: normal;
font-size: 18px;
/* position: relative;
left: 130px; */
}

.btn-close {
  background-color: transparent;
  border: none;
  padding: 0.5rem 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.btn-close:hover {
  background-color: #f0f0f0;
  color: (148, 118, 103)

}

.btn15{
background-color: rgb(148, 118, 103);
color: white;
border: none;
border-radius: 5px;
margin-top: 50px;
padding: 7px;
}
.mb-0{
position: relative;
bottom: 20px;
font-family: "Cormorant", serif;
font-optical-sizing: auto;
font-weight: 800;
font-style: normal;
font-size: 26px;
/* left: 100px; */
}

.offcanvas-title{
font-family: "Cormorant", serif;
font-optical-sizing: auto;
font-weight: 800;
font-style: normal;
font-size: 30px;
}

#profile{
position: relative;
right: 10px;
}

.router-link-active {
  color: #337ab7;
}

.router-link-exact-active {
  color: #23527c;
}

@media only screen and (max-width: 990px) {
nav {
  flex-direction: column; 
}
.navbar-nav {
  flex-direction: column;
}
.nav-link {
  font-size: 0.8rem; 
  margin-right: 0; 
  border-radius: 0.25rem; 
  padding: 0.5rem 0.5rem; 
}
.right {
  position: static;
  left: 0;
}
.offcanvas {
  margin-right: 0rem;
}
}

@media only screen and (max-width: 1250px) {
nav {
  flex-direction: column;
}
.navbar-nav {
  flex-direction: column;
}
.nav-link {
  font-size: 0.8rem;
  margin-right: 0;
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem;
  text-align: st;
}
.right {
  position: static;
  left: 0;
}
}
</style>