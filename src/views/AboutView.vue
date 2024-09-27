<template >
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <div class="about">
    <div class="image-background">

      <h2 id="about" class="animate__animated animate__slideInLeft">ABOUT</h2 >
        <div id="backgroundd" class="container rounded p-4 bg-opacity-25" >
            <div class="row d-flex align-items-right">
              <div class="col-md-6">
                <img id="img" src="https://nikilitha26.github.io/Boot-img/Image/IMG_8063.PNG" alt="Image" class="img-fluid-sqare" style="width: 300px; height: 300px; margin-left: 100px;">
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
  font-weight: bolder;
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
    height: auto; 
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
    position: relative;
}

.img-fluid-sqare{
  position: relative;
  top: 25px;
  right: 50px;
}
.swiper-wrapper {
  padding: 0; 
  margin: 0; 
}

@media only screen and (max-width: 600px) {
  .image-background {
  height: auto;
  display: flex;
  width: auto !important;
  margin: 0 !important;

}
  #about, #skills {
    font-size: 25px;
  }
  #skills{
    position: relative;
    left: 270px;
  }

  #img {
    width: 170px !important;
    height: 170px !important;
    position: relative;
    right: 50px !important;
  }
.skills-container{
  position: relative;
  margin-left: 500px !important;
}
  .skills-card {
    width: 100px;
    margin: 20px 20px;
    padding: 10px;
  }

  .skills-card img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }

  .swiper-slide {
  margin: 0;
  padding: 0;
}
  .mySwiper {
    width: 600px;
    top: 150px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .mySwiper .swiper-wrapper {
    width: auto !important; 
    margin: 0; 
    padding: 0;
  }
  .swiper-wrapper {
  padding: 0; 
  margin: 0; 
}
  #description {
    font-size: 14px;
    margin-right: 20px;
  }
  #btn {
    width: 80px;
    font-size: 12px;
  }
}

</style>
