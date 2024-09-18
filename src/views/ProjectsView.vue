<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <div class="projects">
      <h2 class="brr animate__animated animate__slideInLeft">PROJECTS 👩🏻‍💻</h2>

      <div class="container">
          <div class="row">
              <div v-for="project in $store.state.projects" :key="project.id" class="col-md-4">
                  <div class="flip-card">
                      <div class="flip-card-icons">
                          <a :href="project.github" target="_blank"><img id="icongit" class="animate__animated animate__pulse animate__repeat animate__infinite" src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/1a7775df88538582dec5b01d37c3f33e483b4f49/25231.png"></a>
                          <a :href="project.vercel" target="_blank"><img id="iconvercel" class="animate__animated animate__pulse animate__repeat animate__infinite"  src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/1a7775df88538582dec5b01d37c3f33e483b4f49/vercel-logo-removebg-preview.png" alt=""></a>
                      </div>
                      <div class="flip-card-inner">
                          <div class="flip-card-front">
                              <img id="projjects" :src="project.image" alt="Project Image" class="img-fluid flip"><br>
                              <h5 class="card-title">{{ project.name }}</h5>
                          </div>
                          <div class="flip-card-back">
                              <p id="card-text" class="card-text" style="text-align: center;">{{ project.description }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        getProjects() {
            return this.$store.state.projects; 
        },
        getData() {
            return this.$store.dispatch("getData");
        },
    },
    mounted() {
        this.getData(); 
    },
}
</script>

<style scoped>
@import '~animate.css/animate.min.css';

.flip-card {
  width: 300px;
  height: 340px;
  border: 2px solid #b98E77;
  border-radius: 10px;
  perspective: 1000px;
  margin: 20px;
  padding: 10px;
  position: relative;
  left: 100px;
  bottom: 40px;
}
.brr{
  position: relative;
  top: 150px;
  left: 20px;
  text-decoration: underline;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}
.flip-card-icons {
  position: absolute;
  top: 270px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 1;
}

.flip-card-inner {
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  border-radius: 10px;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  border-radius: 10px;
}

.flip-card-front {
  /* background-color: #bbb; */
  color: black;
  border-radius: 10px;
}

.flip-card-back {
  background-color: white;
  color: #7d482b;
  transform: rotateY(180deg);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects {
  height: 100%;
  margin: 0;
}

.card-title{
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

.card-text{
  position: relative;
  bottom: 40px;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 900;
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

.row{
  margin-top: 270px;
  position: relative;
  right: 90px;
}

.card {
  margin: 10px;
  box-shadow: 6px 6px 6px rgba(255, 210, 11, 0.5);
}

#projects {
  position: relative;
  bottom: 590px;
  left: 640px;
  font-size: 40px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  color: black;
  text-decoration: underline;
}

#icongit{
  width: 40px;
  height: 40px;
}

#iconvercel{
  position: relative;
  left: 20px;
  width: 60px;
  height: 40px;
}

#projjects{
  height: 200px;
  transition: transform 0.5s;
  transition: transform 0.7s ease-out
}

#projjects.flip:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: 0.7s;
}
</style>