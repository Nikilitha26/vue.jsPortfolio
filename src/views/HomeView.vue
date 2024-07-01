<template>
  <div class="home">
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="content">
     
        <div class="sparkle-wrapper">
  <img id="profile-photo" src="https://nikilitha26.github.io/Boot-img/Image/IMG_8063.PNG" alt="Profile Photo" class="img-fluid border border-danger-subtle border border-5 rounded-circle">
  <div class="sparkle" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
  <div class="sparkle" style="top: 25%; left: 75%;"></div>
  <div class="sparkle" style="top: 75%; left: 75%;"></div>
  <div class="sparkle" style="top: 25%; left: 25%;"></div>
  <div class="sparkle" style="top: 75%; left: 25%;"></div>
</div>
        <div id="text" class="align-middle"></div>
        <span id="niki" class="align-middle">Hello! I am </span>
        <h3 id="name" class="fw-bolder fs-1">NIKILITHA KAKAZA</h3>
        <div class="profile-titles">
          <h3 id="profile-title-left" class="animate__animated animate__slideInLeft"> ~ASPIRING</h3>
          <h3 id="profile-title-right" class="animate__animated animate__slideInRight">WEB DEVELOPER~</h3>
        </div>
      
        
        
        <div class="container">
            <div id="row" class="row">
                <div id="icon" class="col-md-6">
                  <a href="https://www.linkedin.com/in/nikilitha-kakaza-5a86462b9/">
                    <img id="custom-image" src="https://nikilitha26.github.io/Boot-img/Image/linkedin_black_logo_icon_147114.png " alt="icon animate__animated animate__heartBeat" class="img-fluid border border-danger-subtle border border-5 rounded-circle custom-image" >
                  </a>
                </div>
                <div id="icon2" class="col-md-6">
                  <a href="https://github.com/Nikilitha26">
                    <img id="custom-image2" src="https://nikilitha26.github.io/Boot-img/Image/25231.png" alt="icon" class="img-fluid border border-danger-subtle border border-5 rounded-circle custom-image2">
                  </a>
                </div>
            </div>
      </div>
    </div>

  </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      imageUrl: 'https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/8c8d5d155d446f2286d63e4a51a8516d143de490/896712.jpg' 
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  margin: 0;
}

.image-background {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  color: #D4AF37;
  text-align: center;
}

.footer {
  background-color: #D4AF37;
  color: #fff;
  padding: 1rem;
  text-align: center;
  clear: both;
}
#profile-photo {
    width: 250px;
    height: 250px;
    margin-top: 100px;
    border: 5px solid #D4AF37;
    border-radius: 50%;
}
#custom-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #D4AF37
}

#custom-image2 {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #D4AF37;
}
#niki{
    width: 108px; 
    height: 12px; 
    font-size: 50px; 
    color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
#profile-title-left {
    color: #D4AF37;
    font-size: 20px;
    font-weight: 600;
}
#profile-title-right {
    position: relative;
    left: -45px;
    color: #D4AF37;
    font-size: 20px;
    font-weight: 600;
}
.profile-titles {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#profile-title-left, #profile-title-right {
  flex: 1;
}
#name{
  font-size: 35px;
  color: black;
}
#row{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #custom-image, #custom-image2 {
    margin: 0 70px;
  }

  .slide-from-left {
  animation: slide-from-left 1s forwards;
}

.slide-from-right {
  animation: slide-from-right 1s forwards;
}

@keyframes slide-from-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-from-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.animate__animated {
    animation-duration: 1s;
  }

   /* Animation */
.slide-from-left {
  animation: slide-from-left 1s forwards;
}

@keyframes slide-from-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.sparkle-wrapper {
  position: relative;
}

.sparkle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background-color: #D4AF37; 
  animation: sparkle 2s infinite;
}

.sparkle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background-color: #D4AF37;
  animation: sparkle-before 2s infinite;
}

@keyframes sparkle {
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
}

@keyframes sparkle-before {
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
}
</style>