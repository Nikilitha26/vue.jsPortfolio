<template >
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <div class="about">
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">

      <h2 id="about" class="animate__animated animate__slideInLeft">ABOUT</h2 >
        <div id="backgroundd" class="container rounded p-4 bg-opacity-25" >
            <div class="row d-flex align-items-right">
              <div class="col-md-6">
                <img src="https://nikilitha26.github.io/Boot-img/Image/IMG_8063.PNG" alt="Image" class="img-fluid-sqare" style="width: 300px; height: 300px; margin-left: 100px;">
              </div>
              <div class="col-md-6 text-white" >
                <p id="description" style="margin-right: 50px; font-style: italic;">
                  "My name is Nikilitha Kakaza,born on the 26th of June 2003. I was born and raised in Cape Town in a township called Khayelitsha. I chose web development because I think having an online presence is essential to any business's success. Although I am aware of the opportunities, I would prefer to concentrate on coding and designing stunning websites rather than freelancing. I like to cook and doing make-up(content creation) on my spare time. I graduted in 2024, I graduated in Psychology at the Nelson Mandela University. I did this course becaus I was not sure of what I really wanted at first, but now I finally dicided to do coding which I enjoy so much. A true defination of 'follow what your heart desires'. I love exploring and trying out new ideas based on the knowledge I have, so if you think you share the same sentiment as mine, don't be scared to contact me and we shall work magic. 😊"
                </p>
              </div>
            </div>
          </div>

        <h2 id="skills" class="animate__animated animate__slideInLeft">SKILLS</h2>
      <div class="skills-container">
        <swiper
        ref="swiperRef"
        :slidesPerView="3"
        :centeredSlides="true"
        :spaceBetween="30"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      ><div class="swiper-navigation">

      </div>
        <swiper-slide v-for="skill in $store.state.skills" :key="skill.id">
          <div class="skills-card">
            <img :src="skill.image" alt="Skill Image">
            <p id="skil">{{ skill.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
      </div>
</div>

    </div>

</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

  export default {
    methods: {
      getEducation() {
        return this.$store.state.education; 
      },
      getData() {
        return this.$store.dispatch("getData");
      },
    },
    mounted() {
      this.getData(); 
    },
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
}

</script>
<style scoped>
@import '~animate.css/animate.min.css';

.about {
  height: 160vh;
  margin: 0;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: none;
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-navigation{
  widows: 200px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  justify-content: center;
}

.swiper {
  width: -900px;
  height: 300px;
  margin: 100px -180px;
  color: #906046;
  --swiper-navigation-color:#906046 ;
  --swiper-navigation-width: 700px;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
  width: 70px;
  color: #906046;
  font-weight: bolder;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #b98E77;
  color: #b98E77;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
  font-weight: bolder;
}
.mySwiper{
  position: relative;
  right: 870px;
  width: 700px;
  top: 270px;
  color: #906046;
  font-weight: bolder
}
  #skills{
    position: relative;
    top: 90px;
    right: 340px;
    font-size: 35px;
    font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    text-align: center;
    color: #906046;
    text-decoration: underline;
}
#skil{
  font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    text-align: left;
}
.skills-container {
  position: relative;
  top: 20px;
  left: 280px;

  }
  
  .skills-card {
    display: inline-block;
    margin: 40px 40px;
    padding: 20px;
    border: 1px solid #b98E77;
    border-radius: 10px;
    background-color: white;
    width: 150px;
    box-shadow: 6px 6px 6px #8e634c;
  }
  
  .skills-card img {
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  #btn {
  text-align: center;
  margin-top: 20px;
  position: relative;
  top: 50px;
  right: 490px;
  width: 120px;
}

#btn {
  background-color: #906046;
  color: #fff;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

#btn:hover {
  background-color: #fff;
  color: #b98E77;
}

 .image-background {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#about {
    position: relative;
    bottom: 480px;
    left: 710px;
    font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    text-align: center;
    color: #906046;
    text-decoration: underline;
}

#backgroundd {
    position: relative;
    bottom: 230px;
    background-color: #b98E77; 
    color: white;
    height: 400px; 
    margin-top: 30px;
    left: 170px;
    box-shadow: 8px 8px 8px #906046;
    transition: transform 0.7s ease-out;
}
#backgroundd:hover  {
    background-color: #745646;
    color: white; 
    box-shadow: 8px 8px 8px #906046;
    transform: scale(1.1) ;
  transition: transform 0.7s ease-out;
}
#backgroundd:hover #description {
  color: white; 
}
#description {
    margin-right: 50px;
    text-align:justify;
    font-style: italic;
    color: white;
    text-shadow: 2px 2px 4px #906046;
    font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
}

.img-fluid-sqare{
  position: relative;
  top: 25px;
  right: 50px;
}
/* Media queries for 300px screen */
/* @media only screen and (max-width: 300px) {
  .about {
    height: 100vh;
    margin: 0;
    padding: 20px;
  }
  .image-background {
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #about {
    font-size: 24px;
    left: 0;
    bottom: 100px;
  }
  #backgroundd {
    height: 250px;
    margin-top: 20px;
    right: 0;
  }
  #description {
    margin-right: 20px;
    font-size: 16px;
  }
  .img-fluid-sqare {
    width: 10px;
    height: 10px;
    margin-left: 50px;
  }
} */

 /* Large screens (1200px and below) */
@media only screen and (max-width: 1200px) {
  .about {
    height: 150vh;
  }
  .swiper-slide {
    width: 120px;
  }
  .swiper {
    width: -600px;
    height: 200px;
    margin: 50px -120px;
  }
  .mySwiper{
    right: 600px;
    width: 500px;
    top: 200px;
  }
  #skills{
    top: 100px;
    right: 200px;
    font-size: 25px;
  }
  .skills-container {
    top: 40px;
    left: 180px;
  }
  .skills-card {
    width: 100px;
  }
  #btn {
    top: 30px;
    right: 350px;
    width: 100px;
  }
  #about {
    bottom: 300px;
    left: 500px;
  }
  #backgroundd {
    height: 300px; 
    margin-top: 20px;
    left: 120px;
  }
  #description {
    margin-right: 20px;
    font-size: 14px;
  }
  .img-fluid-sqare {
    width: 80px;
    height: 80px;
    margin-left: 30px;
  }
}

/* Medium screens (900px and below) */
@media only screen and (max-width: 900px) {
  .about {
    height: 120vh;
  }
  .swiper-slide {
    width: 100px;
  }
  .swiper {
    width: -400px;
    height: 150px;
    margin: 30px -100px;
  }
  .mySwiper{
    right: 400px;
    width: 400px;
    top: 150px;
  }
  #skills{
    top: 80px;
    right: 150px;
    font-size: 20px;
  }
  .skills-container {
    top: 30px;
    left: 120px;
  }
  .skills-card {
    width: 80px;
  }
  #btn {
    top: 20px;
    right: 250px;
    width: 80px;
  }
  #about {
    bottom: 250px;
    left: 400px;
  }
  #backgroundd {
    height: 250px; 
    margin-top: 15px;
    left: 90px;
  }
  #description {
    margin-right: 15px;
    font-size: 12px;
  }
  .img-fluid-sqare {
    width: 60px;
    height: 60px;
    margin-left: 20px;
  }
}

/* Small screens (600px and below) */
@media only screen and (max-width: 600px) {
  .about {
    height: 100vh;
  }
  .swiper-slide {
    width: 80px;
  }
  .swiper {
    width: -200px;
    height: 100px;
    margin: 20px -80px;
  }
  .mySwiper{
    right: 200px;
    width: 300px;
    top: 100px;
  }
  #skills{
    top: 60px;
    right: 100px;
    font-size: 15px;
  }
  .skills-container {
    top: 20px;
    left: 80px;
  }
  .skills-card {
    width: 60px;
  }
  #btn {
    top: 15px;
    right: 150px;
    width: 60px;
  }
  #about {
    bottom: 200px;
    left: 300px;
  }
  #backgroundd {
    height: 200px; 
    margin-top: 10px;
    left: 60px;
  }
  #description {
    margin-right: 10px;
    font-size: 10px;
  }
  .img-fluid-sqare {
    width: 40px;
    height: 40px;
    margin-left: 15px;
  }
}

/* Extra small screens (300px and below) */
@media only screen and (max-width: 300px) {
  /* .about {
    height: 80vh;
  } */
  .swiper-slide {
    width: 60px;
  }
  .swiper {
    width: -100px;
    height: 80px;
    margin: 15px -60px;
  }
  .mySwiper{
    right: 100px;
    width: 200px;
    top: 80px;
  }
  #skills{
    top: 70px;
    right: 60px;
    font-size: 18px;
  }
  .skills-container {
    top: 15px;
    left: 40px;
  }
  .skills-card {
    width: 40px;
  }
  #btn {
    top: 10px;
    right: 100px;
    width: 40px;
  }
  #about {
    bottom: 150px;
    left: 200px;
  }
  #backgroundd {
    height: 550px; 
    margin-top: 10px;
    left: 0px;
  }
  #description {
    margin-right: 5px;
    font-size: 10px;
    position: relative;
    top: 50px;
  }
  .img-fluid-sqare {
    width: 100px !important;
    height: 100px !important;
    margin-left: 10px;
    position: relative;
    bottom: 20px;

  }
}
</style>
