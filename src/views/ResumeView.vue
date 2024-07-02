<template>
    <div class="resume">
      <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div v-if="!imageUrl" style="height: 100%; display: flex; justify-content: center; align-items: center;">
          Loading...
        </div>

        <h2 id="education" class="animate__animated animate__slideInLeft">EDUCATION</h2>

        <div class="education-cards">
          <div v-for="education in $store.state.education" :key="education.id" class="education-card">
            <h3 id="school" >{{ education.placeOfInstitution }}</h3>
            <p>{{ education.year }}</p>
            <p>{{ education.description }}</p>
          </div>
        </div>

        
        <div>
        <h2 id="skills" class="animate__animated animate__slideInLeft">SKILLS</h2>
        <div class="skills-container">
          <div v-for="skill in $store.state.skills" :key="skill.id" class="skills-card">
            <img :src="skill.image" alt="Skill Image">
            <p>{{ skill.name }}</p>
          </div>
        </div>
        </div>
        </div>
        </div>
  </template>
  
  <script>

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
  }
  
  </script>
  
  <style scoped>
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
    left: 410px;
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
    font-weight: bold;
  }
  
  .education-card p {
    margin-bottom: 10px;
    font-style: italic;
  }
  #education {
    position: relative;
    bottom: 350px;
    left: 1100px;
    font-size: 35px;
    text-align: center;
    color: #D4AF37;
    text-decoration: underline;
}
  #skills{
    position: relative;
    top: 170px;
    right:640px;
    font-size: 35px;
    text-align: center;
    color: #D4AF37;
    text-decoration: underline;
}
.skills-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 20px;
    position: relative;
    right: 660px;
    top: 180px;
  }
  
  .skills-card {
    display: inline-block;
    margin: 40px 40px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: white;
    width: 150px;
  }
  
  .skills-card img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  </style>