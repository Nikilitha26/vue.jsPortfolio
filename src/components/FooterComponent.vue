<template lang="">
  <div>
    <footer class="footer">
      <div class="container">
        <p>&copy; Nikilitha Kakaza {{ currentYear }}. All rights reserved.</p>
        <div class="container">
          <div id="row" class="row">
            <div id="icon" class="col-md-6">
              <a href="https://www.linkedin.com/in/nikilitha-kakaza-5a86462b9/">
                <img id="custom-image" src="https://nikilitha26.github.io/Boot-img/Image/linkedin_black_logo_icon_147114.png " alt="icon animate__animated animate__heartBeat" class="img-fluid  border-5 rounded-circle custom-image" >
              </a>
            </div>
            <div id="icon2" class="col-md-6">
              <a href="https://github.com/Nikilitha26">
                <img id="custom-image2" src="https://nikilitha26.github.io/Boot-img/Image/25231.png" alt="icon" class="img-fluid border-5 rounded-circle custom-image2">
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #D4AF37;
  color: #fff;
  padding: 1rem;
  text-align: center;
  clear: both;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#custom-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #D4AF37;
  position: relative;
  right: -300px;
}

#custom-image2 {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #D4AF37;
  position: relative;
  left: -300px;
}
#row{
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Add media queries for responsiveness */
@media only screen and (max-width: 300px) {
  .footer {
    padding: 0.5rem;
  }
  #custom-image, #custom-image2 {
    width: 30px;
    height: 30px;
    right: -10px; /* adjust the right/left values to fit your design */
    left: -10px;
    display: inline;
  }
  /* #custom-image{
    margin-left: -10px;
  } */
  #custom-image2{
    /* left: -10px; */
    margin-right: 70px;
    position: relative;
    bottom: 30px;
  }
  #row {
    flex-direction: row; /* stack the icons vertically on small screens */
    position:relative;
    left: 30px;
  }
}
</style>