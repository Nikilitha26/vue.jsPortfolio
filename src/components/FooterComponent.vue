<template lang="">
  <div>
    <footer class="footer">
      <div class="container">
        <p>&copy; Nikilitha Kakaza {{ currentYear }}. All rights reserved.</p>
        <div class="social-icons-container">
          <div id="row" class="row justify-content-center align-items-center">
            <div id="icon" class="col-auto">
              <a href="https://www.linkedin.com/in/nikilitha-kakaza-5a86462b9/">
                <img id="custom-image" src="https://nikilitha26.github.io/Boot-img/Image/linkedin_black_logo_icon_147114.png" alt="icon animate__animated animate__heartBeat" class="img-fluid border-5 rounded-circle custom-image">
              </a>
            </div>
            <div id="icon2" class="col-auto">
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

<style scoped>
.footer {
  /* position: fixed; */
  /* position: absolute; */
  flex-shrink: 0;
  background-color: #b98E77;
  color: #fff;
  padding: 0.25rem;
  text-align: center;
  clear: both;
  font-family: "Cormorant", serif;
font-optical-sizing: auto;
font-weight: 800;
font-style: normal;
margin-bottom: 0;
}

.footer p {
  margin-bottom: 0; 
  line-height: 1; 
}
.social-icons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem; 
  margin-bottom: 0.25rem; 
}

.custom-image {
  width: 35px !important;
  height: 35px !important;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #b98E77;
  margin: 0 10px;
}
.custom-image2 {
  width: 35px !important;
  height: 35px !important;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #b98E77;
  margin: 0 10px;
}

#row {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .footer {
    padding: 0.5rem;
    width: 600px;
  }
  .custom-image {
    width: 40px !important;
    height: 40px !important;
    margin: 0 5px;
  }
  .custom-image2 {
    width: 40px !important;
    height: 40px !important;
    margin: 0 5px;
  }
}

/* Medium screens (max-width: 768px) */
@media only screen and (max-width: 768px) {
  .footer {
    padding: 0.75rem;
    height: 70px;
  }
  .custom-image {
    width: 30px  !important;
    height: 30px !important;
    margin: 0 10px;
    border: none !important;
  }
  .custom-image2 {
    width: 30px !important;
    height: 30px !important;
    margin: 0 10px;
    border: none !important;
  }
}

/* Large screens (max-width: 992px) */
@media only screen and (max-width: 992px) {
  .footer {
    padding: 1rem;
  }
  .custom-image {
    width: 50px;
    height: 50px;
    margin: 0 15px;
  }
  .custom-image2 {
    width: 50px;
    height: 50px;
    margin: 0 15px;
  }
}

/* Extra large screens (min-width: 1200px) */
@media only screen and (min-width: 1200px) {
  .footer {
    padding: 1.25rem;
    
  }
  .custom-image {
    width: 60px;
    height: 60px;
    margin: 0 20px;
  }
  .custom-image2 {
    width: 60px;
    height: 60px;
    margin: 0 20px;
  }
}
</style>