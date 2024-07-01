<template >
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <div class="about">
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">

      <h2 id="about">ABOUT</h2 >
        <div id="backgroundd" class="container rounded p-4 bg-opacity-25" >
            <div class="row d-flex align-items-right">
              <div class="col-md-6">
                <img src="https://nikilitha26.github.io/Boot-img/Image/IMG_8063.PNG" alt="Image" class="img-fluid-sqare" style="width: 300px; height: 300px; margin-left: 100px;">
              </div>
              <div class="col-md-6 text-white" >
                <p id="description" style="margin-right: 50px; font-style: italic;">
                  "My name is Nikilitha Kakaza,born on the 26th of June 2003. I was born and raised in Cape Town in a township called Khayelitsha. I chose web development because I think having an online presence is essential to any business's success. Although I am aware of the opportunities, I would prefer to concentrate on coding and designing stunning websites rather than freelancing. I like to cook and doing make-up(content creation) on my spare time. I graduted in 2024, I graduated in Psychology at the Nelson Mandela University. I did this course becaus I was not sure of what I really wanted at first, but now I finally dicided to do coding which I enjoy so much. A true defination of 'follow what your heart desires'. I love exploring and trying out new ideas based on the knowledge I have, so if you think you share the same sentiment as mine, don't be scared to contact me and we shall work magic. 😊"
                </p>
              </div>
            </div>
          </div>

    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      imageUrl: 'https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/8c8d5d155d446f2286d63e4a51a8516d143de490/896712.jpg' 
    }
  },
}
</script>
<style scoped>
.about {
  height: 100vh;
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
#about {
    position: relative;
    bottom: 170px;
    left: 700px;
    font-size: 40px;
    text-align: center;
    color: #D4AF37;
    text-decoration: underline;
}

#backgroundd {
    position: relative;
    top: 100px;
    background-color: white; 
    height: 390px; 
    margin-top: 30px;
    right: 70px;
}
#description {
    margin-right: 50px;
    font-style: italic;
    color: #D4AF37;
}
.img-fluid-sqare{
  position: relative;
  top: 25px;
  right: 50px;
}
</style>
