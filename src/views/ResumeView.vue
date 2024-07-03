<template>
    <div class="resume">
      <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div v-if="!imageUrl" style="height: 100%; display: flex; justify-content: center; align-items: center;">
          Loading...
        </div>

        <h2 id="education" class="animate__animated animate__slideInLeft">EDUCATION🎓</h2>

        <div class="education-cards">
          <div v-for="education in $store.state.education" :key="education.id" class="education-card">
            <h3 id="school" >{{ education.placeOfInstitution }}</h3>
            <p id="year">{{ education.year }}</p>
            <p>{{ education.description }}</p>
          </div>
        </div>

        
        <h2 id="skills" class="animate__animated animate__slideInLeft">SKILLS</h2>
      
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
      >
        <swiper-slide v-for="skill in $store.state.skills" :key="skill.id">
          <div class="skills-card">
            <img :src="skill.image" alt="Skill Image">
            <p id="skil">{{ skill.name }}</p>
          </div>
        </swiper-slide>
      </swiper>

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
    data() {
      return {
        imageUrl: 'https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/8c8d5d155d446f2286d63e4a51a8516d143de490/896712.jpg',
        slide: 0,
      }
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
.swiper {
  width: 500px;
  height: 100px;

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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin: 100px -180px;
  color: #D4AF37;
  --swiper-navigation-color:#D4AF37 ;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
  width: 70px;
  color: #D4AF37;
  font-weight: bolder;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #D4AF37;
  color: #D4AF37;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
  font-weight: bolder;
}
.mySwiper{
  position: relative;
  right: 690px;
  width: 700px;
  top: 270px;
  color: #D4AF37;
  font-weight: bolder
}

@import '~animate.css/animate.min.css';

  .resume {
    height: 150vh;
    margin: 0;
    overflow-x: hidden;
  }
  
  .image-background {
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .education-cards {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 100px;
    position: relative;
  }
  
  .education-card {
    background-color: #fff;
    padding: 20px;
    margin: 20px 10px; 
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 250px;
    color: #D4AF37;
    flex: 1; 
    position: relative;
    bottom: 200px;
    left: 60px;
  }
  
  .education-card h3 {
    margin-top: 0;
    font-size: 20px;
    font-weight: bolder;
  }
  
  .education-card p {
    margin-bottom: 10px;
    font-style: italic;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  #education {
    position: relative;
    bottom: 350px;
    left: 700px;
    font-size: 35px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
    color: #D4AF37;
    text-decoration: underline;
}
#year{
  font-weight: bold;
}
  #skills{
    position: relative;
    top: 70px;
    right:540px;
    font-size: 35px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
    color: #D4AF37;
    text-decoration: underline;
}
#skil{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.skills-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 120px;
    position: relative;
    right: 660px;

  }
  
  .skills-card {
    display: inline-block;
    margin: 40px 40px;
    padding: 20px;
    border: 1px solid #D4AF37;
    border-radius: 10px;
    background-color: white;
    width: 150px;
  }
  
  .skills-card img {
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  </style>