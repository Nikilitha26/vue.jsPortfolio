<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <div class="projects">
      <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
        <h2 id="projects" class="animate__animated animate__slideInLeft">PROJECTS<br>👩🏻‍💻</h2>

        <div class="container">
          <div class="row">
            <div v-for="project in $store.state.projects" :key="project.id" class="col-md-4">
                <div id="carrd" class="card mb-4">
                  <img id="projjects" :src="project.image" alt="Project Image" class="img-fluid flip"><br>
                <h5 class="card-title">{{ project.name }}</h5>
                <div class="card-body">
                  <p id="card-text" class="card-text">{{ project.description }}</p>
                  <p class="card-text">
                    <a :href="project.github" target="_blank"><img id="icongit" class="animate__animated animate__rubberBand" src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/1a7775df88538582dec5b01d37c3f33e483b4f49/25231.png"></a>
                    <a :href="project.vercel" target="_blank"><img id="iconvercel" class="animate__animated animate__rubberBand"  src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/1a7775df88538582dec5b01d37c3f33e483b4f49/vercel-logo-removebg-preview.png" alt=""></a>
                  </p>
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

  data() {
    return {
      imageUrl: 'https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/8c8d5d155d446f2286d63e4a51a8516d143de490/896712.jpg' 
    }
   
  },
}
</script>
<style scoped>

@import '~animate.css/animate.min.css';

.projects {
  height: 100%;
  margin: 0;
}
.card-title{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bolder;
 
}
.card-text{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;

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
}


#projects {
    position: relative;
    bottom: 590px;
    left: 640px;
    font-size: 40px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
    color: #D4AF37;
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
}
#projjects.flip:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: 0.7s;
  }
    

   
</style>