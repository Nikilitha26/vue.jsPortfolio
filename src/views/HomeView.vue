<template>

  <div class="home">
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="content">
     
        <!-- <div class="sparkle-wrapper">
  <img id="profile-photo" src="https://nikilitha26.github.io/Boot-img/Image/IMG_8063.PNG" alt="Profile Photo" class="img-fluid  border-5 rounded-circle">
  <div class="sparkle" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
  <div class="sparkle" style="top: 25%; left: 75%;"></div>
  <div class="sparkle" style="top: 75%; left: 75%;"></div>
  <div class="sparkle" style="top: 25%; left: 25%;"></div>
  <div class="sparkle" style="top: 75%; left: 25%;"></div>
</div> -->
        <div id="text" class="align-middle"></div>
        <span id="niki" class="align-middle">Hello! I am </span> <br>
        <h3 id="name" class=" fs-1">NIKILITHA KAKAZA</h3> 
        <div class="profile-titles">
          <h3 id="profile-title-left" class="animate__animated animate__slideInLeft">~ASPIRING</h3>
          <h3 id="profile-title-right" class="animate__animated animate__slideInRight">WEB DEVELOPER~</h3>
        </div> <br>
      
        <div class="container">
          <div id="row" class="row">
            <div id="icon" class="col-md-6">
              <a href="https://www.linkedin.com/in/nikilitha-kakaza-5a86462b9/">
                <img id="custom-image" src="https://nikilitha26.github.io/Boot-img/Image/linkedin_black_logo_icon_147114.png " alt="" class="img-fluid border-5 rounded-circle custom-image" >
              </a>
            </div>
            <div id="icon2" class="col-md-6">
              <a href="https://github.com/Nikilitha26">
                <img id="custom-image2" src="https://nikilitha26.github.io/Boot-img/Image/25231.png" alt="icon" class="img-fluid  border-5 rounded-circle custom-image2">
              </a>
            </div>
          </div>
          <div class="download-cv-btn">
            <a href="https://nikilitha26.github.io/vue.jsImages/Curriculum%20Vitae%20Of%20Nikilitha%20Kakaza%20.pdf" download>
              <button id="btn" class="animate__animated animate__pulse animate__repeat animate__infinite">Download CV</button>
            </a>
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
      imageUrl: 'https://nikilitha26.github.io/vue.jsImages/backg.jpeg' 
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  margin: 0;
  background-color: hite;
  font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
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
  color: #BDA18C;
  text-align: center;
}

/* .footer {
  background-color: #D4AF37;
  color: #fff;
  padding: 1rem;
  text-align: center;
  clear: both;
} */
#profile-photo {
    width: 250px;
    height: 250px;
    margin-top: 100px;
    border: 5px solid #BDA18C;
    border-radius: 50%;
}
#custom-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #BDA18C;
}

#custom-image2 {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #BDA18C;
}
#btn {
  text-align: center;
  margin-top: 20px;
  position: relative;
  bottom: 65px;
}

#btn {
  background-color: #A7795E;
  color: #fff;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

#btn:hover {
  background-color: #fff;
  color: #A7795E;
}
#niki{
    width: 108px; 
    height: 12px; 
    font-size: 50px; 
    color: black;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
}
#profile-title-left {
    color: black;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    left: 20px;
}
#profile-title-right {
    position: relative;
    left: -50px;
    color: black;
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
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
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
  width: 300px;
  
}

.sparkle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background-color: #BDA18C; 
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
  background-color: #BDA18C;
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

  /* For screens smaller than 300px */
  @media (max-width: 300px) {
   .image-background {
      height: 120vh;
      width: 300px;
    }
   .content {
      padding: 8px;
    }
    #profile-photo {
      width: 100px;
      height: 100px;
      margin-top: 15px;
    }
    .profile-titles{
      font-size: -200px;
    }
    #profile-title-left{
      font-size: -2px;
      margin-bottom: 70px;
      position: relative;
      left: 80px;
    }
   
    #custom-image, #custom-image2 {
      width: 25px;
      height: 25px;
      margin: 0 10px;
    }
    #btn {
      font-size: 10px;
      padding: 2px 2px;
    }
  }
  #custom-image2{
    position: relative;
    bottom: -4px;
    left: 30px;
  }
  #custom-image{
    position: relative;
    right: 30px;
  }
  #row {
    flex-direction: row;
    align-items: center;
  }
  #icon, #icon2 {
    margin: 1px 0;
  }
  #btn {
    margin-top: 20px;
  }



</style>