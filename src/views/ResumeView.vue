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

      <h2 id="experience" class="animate__animated animate__slideInLeft">EXPERIENCE💼</h2>

      <div class="experience-cards">
        <div v-for="experience in $store.state.experience" :key="experience.id" class="experience-card">
          <h3 id="company" >{{ experience.company }}</h3>
          <p id="period">{{ experience.period }}</p>
          <p id="position">{{ experience.position }}</p>
        </div>
      </div>

      <div class="download-cv-btn">
        <a href="https://nikilitha26.github.io/vue.jsImages/Curriculum%20Vitae%20Of%20Nikilitha%20Kakaza%20.pdf" download>
          <button id="btn" class="animate__animated animate__pulse animate__repeat animate__infinite">Download CV</button>
        </a>
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
    getExperience() {
      return this.$store.state.experience;
    },
  },
  mounted() {
    this.getData(); 
  },
  components: {},
  setup() {
    return {};
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
    margin-top: 0px;
    position: relative;
    
  }
  
  .education-card {
    background-color: #fff;
    padding: 20px;
    margin-left: 20px;
    /* margin: 20px 10px;  */
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 250px;
    color: #b98E77;
    flex: 1; 
    position: relative;
    bottom: 210px;
    left: 300px;
    box-shadow: 6px 6px 6px #8e634c;
    transition: transform 0.7s ease-out
  }
  .education-card:hover{
    transform: scale(1.1);
    transition: 0.7s;
  }

  .education-card h3 {
    margin-top: 0;
    font-size: 20px;
    font-weight: bolder;
    font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  }
  
  .education-card p {
    margin-bottom: 10px;
    font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: italic;
  }
  #education {
    position: relative;
    bottom: 420px;
    left: 950px;
    font-size: 35px;
    font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
    text-align: center;
    color: #b98E77;
    text-decoration: underline;
}
#year{
  font-weight: bold;
}
  #experiennce{
    position: relative;
    top: 550px;
    right:820px;
    font-size: 35px;
    font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
    text-align: center;
    color: #b98E77;
    text-decoration: underline;
}
#experience{
  position: relative;
  top: 140px;
  right: 310px;
  text-decoration: underline;
  color: #8e634c;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
}
.experience-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 120px;
    position: relative;
    right: 660px;

  }
  
  .experience-cards {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 120px;
  position: relative;
  top: 320px;
  right: 670px;
}

.experience-card {
  margin: 20px;
  padding: 20px;
  position: relative;
  bottom: 60px;
  right: 30px;
  border: 1px solid #b98E77;
  border-radius: 10px;
  background-color: white;
  width: 250px;
  color: #8e634c;
  box-shadow: 6px 6px 6px #8e634c;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  transition: transform 0.7s ease-out
}
.experience-card:hover{
    transform: scale(1.1);
    transition: 0.7s;
  }
  
  .skills-card img {
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  #btn {
  /* text-align: center; */
  margin-top: 20px;
  position: relative;
  top: -10px;
  right: 1050px;
  width: 120px;
}

#btn {
  background-color: #b98E77;
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

@media (max-width: 600px) {
  .resume {
    height: auto;
    margin: 20px;
  }
  .education-cards, .experience-cards {
    flex-wrap: wrap;
    justify-content: center;
  }
  .education-card, .experience-card {
    margin: 20px;
    width: 100%;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  #btn {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    padding: 10px;
  }
}
  </style>