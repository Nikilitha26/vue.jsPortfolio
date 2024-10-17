<template>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
  <div class="about">
    <div class="image-background">

      <h2 id="about" class="animate__animated animate__slideInLeft">ABOUT</h2 >
        <div id="backgroundd" class="container rounded p-4 bg-opacity-25" >
            <div class="row d-flex align-items-right">
              <div class="col-md-6">
                <img id="img" src="https://nikilitha26.github.io/vue.jsImages/WhatsApp%20Image%202024-10-04%20at%2013.25.10_47246c9b.jpg" alt="Image" class="img-fluid-sqare" style="width: 250px; height: 300px; margin-left: 100px;">
              </div>
              <div class="col-md-6 text-white" >
                <p id="description" style="margin-right: 50px; font-style: italic;">
                  "My name is Nikilitha Kakaza,born on the 26th of June 2003. I was born and raised in Cape Town in a township called Khayelitsha. I chose web development because I think having an online presence is essential to any business's success. Although I am aware of the opportunities, I would prefer to concentrate on coding and designing stunning websites rather than freelancing. I like to cook and doing make-up(content creation) on my spare time. I graduted in 2024, I graduated in Psychology at the Nelson Mandela University. I did this course becaus I was not sure of what I really wanted at first, but now I finally dicided to do coding which I enjoy so much. A true defination of 'follow what your heart desires'. I love exploring and trying out new ideas based on the knowledge I have, so if you think you share the same sentiment as mine, don't be scared to contact me and we shall work magic. 😊"
                </p>
              </div>
            </div>
          </div>

        <h2 id="technical-skills" class="animate__animated animate__slideInLeft">TECHNICAL SKILLS</h2>
      <!-- <div class="skills-container"> -->
        <swiper
        ref="swiperRef"
        :slidesPerView="3"
        :centeredSlides="true"
        :spaceBetween="0"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper technical-skills-swiper"
      >
        <swiper-slide v-for="skill in $store.state.technicalskills" :key="skill.id">
          <div class="skills-card">
            <img :strc="skill.image" alt="Skill Image" />
            <p id="skil">{{ skill.name }}</p>
          </div>
          {{ console.log('Swiper slide rendered') }}
        </swiper-slide>
      </swiper>

      <h2 id="soft-skills" class="animate__animated animate__slideInLeft">SOFT SKILLS</h2>
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
        class="mySwiper soft-skills-swiper"
      >
        <swiper-slide v-for="skill in $store.state.softskills" :key="skill.id">
          <div id="card" class="skillss-card">
            <img id="softimage" :src="skill.image" alt="Skill Image" />
            <p id="sskils" class="sskils">{{ skill.name }}</p>
          </div>
          {{ console.log('Swiper slide rendered') }}
        </swiper-slide>
      </swiper>

      <h2 id="badges" class="animate__animated animate__slideInLeft">MY BADGES</h2>
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
        class="mySwiper badges-swiper"
      >
        <swiper-slide v-for="badge in $store.state.mybadges" :key="badge.id">
          <div id="badge" class="skills-card">
            <img class="image" :src="badge.image" alt="Badge Image" />
            <p id="skil">{{ badge.name }}</p>
            <!-- <p id="skil"> {{ badge.certificate }}</p> -->
            <a :href="badge.certificate" download>
            <i id="icon" class="fas fa-download"></i>
            </a>
          </div>
          {{ console.log('Swiper slide rendered') }}
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
  console.log('Swiper components initialized');
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
};
</script>
<style scoped>
@import "~animate.css/animate.min.css";
body {
  padding-top: 50px;
}
.image-background {
  height: 100%;
  width: 100%;
  /* background-color: F3F3F3); */
  /* background-image: url("https://nikilitha26.github.io/vue.jsImages/db71eb556f9ca6b9510391ed1ba528d4.jpg"); */
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  height: 240vh;
  margin: 0;
  margin-top: 100px;
}


.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: none;
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
}
.swiper-navigation {
  widows: 200px ;
}
.swiper-pagination{
  position: relative;
  top: 20px !important;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  justify-content: center;
}

.swiper {
  position: relative;
  left: -620px;
  width: -900px;
  height: 300px;
  margin: 100px -180px;
  color: #906046;
  --swiper-navigation-color: #906046;
  --swiper-navigation-width: 700px;
}
.swiper-wrapper {
  margin: 0;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
  width: 70px;
  color: #906046;
  font-weight: bolder;
}
.swiper-button-next{
margin-left: 200px;
}
.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #b98e77;
  color: #b98e77;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
  font-weight: bolder;
}
.mySwiper {
  position: relative;
  right: 870px;
  width: 100%;
  height: 300px;
  top: 270px;
  color: #906046;
  font-weight: bolder;
  /* background-color: red; */
}
#technical-skills {
  position: relative;
  bottom: 180px;
  left: -370px;
  font-size: 35px;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  text-align: center;
  color: #906046;
  text-decoration: underline;
}
.technical-skills-swiper{
  position: relative;
  left: -490px;
  top: -10px
}
#card {
  display: inline-block;
  margin: 40px 40px;
  padding: 5px;
  border: 1px solid #b98e77;
  border-radius: 10px;
  background-color: white;
  width: 150px!important;
  height: 130px;
  box-shadow: 6px 6px 6px #8e634c;
}
#soft-skills {
  position: relative;
  top: 190px;
  left: -520px;
  font-size: 35px;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  text-align: center;
  color: #906046;
  text-decoration: underline;
}
#softimage{
  /* justify-content: center; */
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
  position: relative;
  left: 20px;
}
.soft-skills-swiper{
  position: relative;
  /* left: -350px; */

  top: 340px;
}
#badges {
  position: relative;
  top: 530px;
  left: -630px;
  font-size: 35px;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  text-align: center;
  color: #906046;
  text-decoration: underline;
}
#badge{
  height: 180px;
}
#icon{
  color: #745646;
  position: relative;
  bottom: 20px;
}
.badges-swiper{
  position: relative;
  top: 690px;
  left: -740px;
}
.image{
  width: 70px !important;
  height: 70px !important;
  margin-bottom: 30px;
  position: relative;
  /* left: 20px; */
}
#tskil {
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  /* text-align: left; */
}
#sskils {
  position: relative;
  bottom: 10px;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  /* text-align: left; */
}
#skil {
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  /* text-align: left; */
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
  border: 1px solid #b98e77;
  border-radius: 10px;
  background-color: white;
  width: 150px;
  height: 140px;
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
  color: #b98e77;
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
  bottom: 750px;
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
  width: 250%;
  bottom: 500px;
  background-color: #b98e77;
  color: white;
  height: auto;
  margin-top: 30px;
  left: 190px;
  box-shadow: 8px 8px 8px #906046;
  transition: transform 0.7s ease-out;
}
#backgroundd:hover {
  background-color: #745646;
  color: white;
  box-shadow: 8px 8px 8px #906046;
  transform: scale(1.1);
  transition: transform 0.7s ease-out;
}
#backgroundd:hover #description {
  color: white;
}
#description {
  margin-right: 50px;
  text-align: justify;
  font-style: italic;
  color: white;
  text-shadow: 2px 2px 4px #906046;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  position: relative;
}

.img-fluid-sqare {
  position: relative;
  top: 25px;
  right: 50px;
}
.swiper-wrapper {
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 320px) {
  .image-background {
    height: auto;
    display: flex;
    width: auto !important;
    margin: 0 !important;
  }
  #about,
  #skills {
    font-size: 25px;
  }
  #about{
    position: relative;
    top: -340px;
    left: 530px!important;
  }
  #skills {
    position: relative;
    left: 570px;
  }

  #img {
    width: 170px !important;
    height: 170px !important;
    position: relative;
    right: 50px !important;
  }
  .skills-container {
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
    margin-right: 1in;
    position: relative;
    left: 350px;
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
  #backgroundd{
    position: relative;
    top: 130px;
    left: 320px;
    height: 135vh;
  }
  #description {
    font-size: 14px;
    margin-left: 30px;
    margin-top: 60px;
  }
  .technical-skills-swiper{
  position: relative;
  right: 50px;
  top: 10px
}
  #btn {
    width: 80px;
    font-size: 12px;
  }
}
@media only screen and (max-width: 600px) {
  /* .about{
    height: ;
  } */
  .image-background {
    height: auto;
    display: flex;
    width: auto !important;
    margin: 0 !important;
  }
  #about{
    position: relative;
    bottom: 340px;
    left: 400px;
    font-size: 25px;
  }
  #description {
    font-size: 14px;
    margin-right: 20px;
  }
  #backgroundd{
    position: relative;
    top: 130px;
    left: 200px;
    height: 135vh;
  }
  #technical-skills {
    position: relative;
    left: -30px;
    top: 620px;
    font-size: 25px;
  }

  #img {
    width: 170px !important;
    height: 170px !important;
    position: relative;
    right: 50px !important;
  }
  .skills-container {
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
  #btn {
    width: 80px;
    font-size: 12px;
  }
}
</style>
