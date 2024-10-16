<template>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  />
  <div class="projects">
    <h2 id="brr" class="brr animate__animated animate__slideInLeft">PROJECTS 👩🏻‍💻</h2>

    <div class="container">
      <div class="row">
        <div v-for="project in $store.state.projects" :key="project.id" class="col-md-4">
          <div class="flip-card">
            <div class="flip-card-icons">
              <a :href="project.github" target="_blank"
                ><img
                  id="icongit"
                  class="animate__animated animate__pulse animate__repeat animate__infinite"
                  src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/1a7775df88538582dec5b01d37c3f33e483b4f49/25231.png"
              /></a>
              <a :href="project.vercel" target="_blank"
                ><img
                  id="iconvercel"
                  class="animate__animated animate__pulse animate__repeat animate__infinite"
                  src="https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/1a7775df88538582dec5b01d37c3f33e483b4f49/vercel-logo-removebg-preview.png"
                  alt=""
              /></a>
            </div>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="projjects"
                  :src="project.image"
                  alt="Project Image"
                  class="img-fluid flip"
                /><br />
                <h5 class="card-title">{{ project.name }}</h5>
              </div>
              <div class="flip-card-back">
                <p id="card-text" class="card-text" style="text-align: center">
                  {{ project.description }}
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
};
</script>

<style scoped>
@import "~animate.css/animate.min.css";

.flip-card {
  width: 300px;
  height: 340px;
  border: 2px solid #b98e77;
  border-radius: 10px;
  perspective: 1000px;
  margin: 20px;
  padding: 10px;
  position: relative;
  left: 100px;
  bottom: 220px;
}
.brr {
  margin-top: 150px;
  text-decoration: underline;
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: #906046;
}
#brr {
  position: relative;
  top: 30px;
}
.container {
  margin-top: 0;
  padding-top: 0;
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

.flip-card-front,
.flip-card-back {
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
  height: auto;
  width: 100%;
  /* margin: 0; */
  margin-top: -25px;
  /* margin-top: 0;
  padding-top: 0; */
  /* background-image: url("https://i.pinimg.com/564x/db/71/eb/db71eb556f9ca6b9510391ed1ba528d4.jpg"); */
  /* background-size: cover; */
  /* background-position: center;
  background-repeat: no-repeat; */
}

.card-title {
  font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  position: relative;
  top: 10px;
}

.card-text {
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

.row {
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
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  color: black;
  text-decoration: underline;
}

#icongit {
  width: 30px;
  height: 30px;
  position: relative;
  top: 20px;
}

#iconvercel {
  position: relative;
  left: 20px;
  width: 60px;
  height: 40px;
  top: 20px;
}

#projjects {
  height: 200px;
  transition: transform 0.5s;
  transition: transform 0.7s ease-out;
}

#projjects.flip:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: 0.7s;
}

/* For small screens (mobile devices) */
@media only screen and (max-width: 768px) {
  /* .projects {
    width: 100%;
  } */
  .row {
    justify-content: center;
    top: 10px;
  }
  .flip-card {
    margin: 10px auto;
  }
  .brr {
    text-align: center;
    left: 0;
    right: 0;
    position: relative;
    /* top: 180px; */
    margin-top: 150px;
  }
  .projects {
    height: auto;
    max-width: 1200px; 
  margin: 0 auto;
  padding: 20px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;

  }
}

/* For medium screens (tablets) */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .flip-card {
    width: 280px;
    height: 320px;
    margin: 15px;
  }
  .flip-card-icons {
    top: 260px;
  }
  .row {
    margin-top: 260px;
  }
  #projjects {
    height: 200px;
  }
  .brr {
    margin-top: 150px;
    text-decoration: underline;
    font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    color: #906046;
  }
  .projects {
    height: auto;
  }
}

/* For medium screens (tablets) */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .flip-card {
    margin: 20px;
    width: calc(50% - 40px);
    width: 230px;
    height: 320px;
    position: relative;
    left: 30px;
    margin: 30px;
  }
  .brr {
    position: relative;
    padding: 0;
  }
  .projects {
    height: 200vh;
  }
}

/* For extra large screens */
@media only screen and (min-width: 1200px) {
  .flip-card {
    width: 320px;
    height: 360px;
    margin: 25px;
  }
  .flip-card-icons {
    top: 280px;
  }
  .row {
    margin-top: 300px;
  }
  #projjects {
    height: 240px;
  }
  .brr {
    top: 180px;
    left: 25px;
  }
}
</style>
