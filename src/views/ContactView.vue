<template>
    <div class="contact">
      <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="row">
          <div id="col" class="col-md-6">
            <div id="pics" class="d-flex align-items-center">
              <img id="pic1" :src="image1" alt="Image 1" class=" animate__animated animate__headShake">
              <p id="pe1">+27 82 402 1820</p>
            </div>
            <div class="d-flex align-items-center">
              <img id="pic2" :src="image2" alt="Image 2">
              <p id="pe2">+27 82 402 1820</p>
            </div>
            <div class="d-flex align-items-center">
              <img id="pic3" :src="image3" alt="Image 3">
              <p id="pe3" class="mr-5">kakazanikilitha544@gmail.com</p>
            </div>
            <div class="d-flex align-items-center">
              <img id="pic5" :src="image5" alt="Image 3">
              <p id="pe5" class="mr-5">Khayelitsha, Cape Town, Western Cape, 7784</p>
            </div>
          </div>
          <div class="col-md-6" id="que">
            <form @submit.prevent="formSubmit">
              <h2 id="any">ANY QUESTIONS?</h2><br>
              <label id="text">First name: </label><br>
              <input id="input" type="text" required v-model="firstName" placeholder="First Name..."><br>
              <label id="text">Last name: </label><br>
              <input id="input" type="text" required v-model="lastName" placeholder="Last Name..."><br>
              <label id="text">Email adress: </label><br>
              <input id="input" type="email" required v-model="email" placeholder="Email..."><br>
              <label id="text">Message: </label><br>
              <textarea id="inputs" v-model="message" placeholder="Your message here..."></textarea><br><br>
              <button type="submit">Send</button>
            </form>
            <div v-if="false">
            <p>First name: {{ firstName }}</p>
            <p>Last name: {{ lastName }}</p>
            <p>Email: {{ email }}</p>
            <p>Message: {{ message }}</p>
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
        imageUrl: 'https://raw.githubusercontent.com/Nikilitha26/vue.jsImages/8c8d5d155d446f2286d63e4a51a8516d143de490/896712.jpg',
        image1: 'https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/e5e96cad2bf2012951ae147117657fb619a82f12/7ab4ecb0e584f36bd0285636e2272c2a-removebg-preview.png',
        image2: 'https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/e5e96cad2bf2012951ae147117657fb619a82f12/download__2_-removebg-preview.png',
        image3: 'https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/e5e96cad2bf2012951ae147117657fb619a82f12/email-icon-digital-marketing-icon-mail-icon-ULNU0Cne-removebg-preview.png',
        image5: 'https://github.com/Nikilitha26/vue.jsImages/blob/main/png-transparent-instagram-icon-gold-home-instagram-icon-aesthetic-gold-icons-removebg-preview.png?raw=true',
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
    },
    methods: {
  formSubmit() {
    alert('Form submitted successfully!');
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message = '';
  }
}
  }
  </script>
  
  <style scoped>
  @import '~animate.css/animate.min.css';
  .contact {
    height: 90vh;
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
  
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  body{
    height: 10px;
    }
#contacts{
    font-size: 35px; 
    color: #D4AF37;
    position: relative;
    left: 130px;
    bottom: 200px;
}
#h6{
    font-style: italic;
    color: white;
}

#icon{
    width: 80px; 
    height: 80px; 
    margin-right: 150px;
}
#icon2{
    width: 80px; 
    height: 80px; 
    margin-left:150px ;
}

#pic1{
    height: 80px;
    width: 60px;
    position: relative;
    bottom: 90px;
}
#pic2{
    height: 50px;
    width: 50px;
    position: relative;
    bottom: 90px;
    left: 10px;
}
#pic3{
    width: 60px;
    height: 70px;
    position: relative;
    bottom: 85px;
    left: 10px;
}


#pic5{
    height: 60px;
    width: 60px;
    position: relative;
    bottom: 85px;
    left: 5px;
}
#pic6{
    height: 1px;
}

button{
    background: #D4AF37;
    color: white;
    border: none;
    width: 70px;
    border-radius: 4px;
}

  #pe1{
    position: relative;
    left: 30px;
    bottom: 80px;
    color: #D4AF37;
    font-weight: bolder;
  }
  #pe2{
    position: relative;
    left: 40px;
    bottom: 80px;
    color: #D4AF37;
    font-weight: bolder;
  }
  #pe3{
    position: relative;
    left: 30px;
    bottom: 80px;
    color: #D4AF37;
    font-weight: bolder;
  }
  #pe5{
    position: relative;
    left: 10px;
    bottom: 70px;
    color: #D4AF37;
    font-weight: bolder;
  }
  #text{
    color: #D4AF37;
    font-weight: bolder;
  }
  #input{
    color: #D4AF37;
    font-style: italic;
    height: 35px;
    width: 300px;
    background-color: black;
    font-size: 13px;

  }
  #inputs{
    width: 300px;
    font-style: italic;
    color: #D4AF37;
    background-color: black;
    font-size: 13px;
  }
  ::placeholder{
    color: #D4AF37;
  }
#col{
    position: relative;
    top: 140px;
    right: 290px;
}
#any{
    color: #D4AF37;
    font-weight: bold;
}
#que{
    position: relative;
    left: 100px;
}
  </style>