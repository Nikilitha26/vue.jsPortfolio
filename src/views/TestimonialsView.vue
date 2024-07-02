<template>
    <div class="testimonials">
      <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="container">
          <div class="row">
            <div v-for="testimonial in $store.state.testimonials" :key="testimonial.id" class="col-md-4">
              <div class="card mb-4">
                <img :src="testimonial.image" class="card-img-top" alt="testimonial image">
                <div class="card-body">
                  <h5 class="card-title">{{ testimonial.name }} {{ testimonial.position }}</h5>
                  <p class="card-text">{{ testimonial.message }}</p>
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
      getTestimonials() {
        return this.$store.state.testimonials; 
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
    }
  }
  </script>
  <style scoped>
    .testimonials {
      height: 200vh;
      margin: 0;
    }
  
    .image-background {
      height: 100%;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .card {
      margin-bottom: 20px;
    }
  </style>