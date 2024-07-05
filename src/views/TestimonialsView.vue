<template>
    <div class="testimonials">
      <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
        <h2 id="testimonials" class="animate__animated animate__slideInLeft">TESTIMONIALS</h2><br>
        <div class="container">
          <swiper 
            :effect="'flip'"
            :grabCursor="true"
            :navigation="true"
            :modules="modules"
            :centeredSlides="true"
            class="mySwiper"
          >
            <swiper-slide v-for="testimonial in $store.state.testimonials" :key="testimonial.id">
              <div class="card mb-4">
                <img :src="testimonial.image" class="card-img-top" alt="testimonial image">
                <div class="card-body">
                  <h3 class="card-title">{{ testimonial.name }}</h3> <h5 class="posi">{{ testimonial.position }}</h5><br>
                  <p class="card-text"> " {{ testimonial.message }} "</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-flip';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  
    // import required modules
    import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [EffectFlip, Pagination, Navigation],
        };
      },
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
  .card-text{
    color: #D4AF37;
    font-style: italic;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  #testimonials{
    position: relative;
    bottom: 370px;
    left:640px;
    font-size: 35px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
    color: #D4AF37;
    text-decoration: underline;
}
  .posi{
    color: #D4AF37;
    font-style: italic;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
  }
  .card-title{
    color: #D4AF37;
    font-style: italic;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
  }
     .testimonials {
    height: 150vh;
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
    width: 350px;
    box-shadow: 6px 6px 6px rgba(255, 255, 255, 0.5);
  }
  .card-img-top{
      height: 290px;
  }
  .row{
      margin-top: 30px;
  }
  .container{
    position: relative;
    background-color: #D4AF37;
    height: 760px;
    right:90px;
    top: 100px;

  }
.swiper {
  width: 600px;
  height: 300px;
  padding: 120px;
  bottom: 60px;
  --swiper-navigation-color: white;
  --swiper-navigation-margin-top: 70px;
}

.mySwiper .swiper-navigation {
  position: absolute;
  top: 80px; 
  left: 50%;
  transform: translateX(-50%);
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


  </style>