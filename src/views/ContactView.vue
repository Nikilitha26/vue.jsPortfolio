<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2 class="contact">Contact Us</h2>
        <div style="margin-bottom: 40px;"></div>
        <ul class="list-unstyled">
          <li>
            <i class="fas fa-phone animate__animated animate__headShake animate__infinite "></i>
            <span>+27 82 402 1820</span>
          </li>
          <li>
            <i class="fas fa-envelope "></i>
            <span>kakazanikilitha544@gmail.com</span>
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span>Khayeliysha, Site C, Western Cape, 7744</span>
          </li>
            <li class="center-icons">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/nikilitha-kakaza-5a86462b9/">
              <i class="fab fa-linkedin"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/your-github-profile">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-8">
        <h2 id="get">Get in Touch</h2>
        <form @submit.prevent="handleSubmit" action="https://formspree.io/f/xanwydyn" method="POST">
          <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" class="form-control" id="firstName" placeholder="Enter your first name..." style="width: 70%" v-model="firstName">
    <div v-if="errors.firstName" class="error">{{ errors.firstName }}</div>
  </div>
          <div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" class="form-control" id="lastName" placeholder="Enter your last name..." style="width: 70%" v-model="lastName">
    <div v-if="errors.lastName" class="error">{{ errors.lastName }}</div>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter your email..." style="width: 70%" v-model="email">
    <div v-if="errors.email" class="error">{{ errors.email }}</div>
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea class="form-control" id="message" placeholder="Enter your message..." style="width: 70%" v-model="message"></textarea>
    <div v-if="errors.message" class="error">{{ errors.message }}</div>
  </div>
          <button type="submit" class="btn0">Submit</button>
        </form>
      </div>
    </div>
    <div class="popup-message" v-if="submitted">
    <div class="popup-content">
      <h2>Message submitted successfully!</h2>
      <p>Thank you for reaching out to me. I will get back to you soon.</p>
      <button @click="closePopup">Close</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      submitted: false,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      errors: {}
    }
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      if (!this.firstName) {
        this.errors.firstName = "First name is required";
      }
      if (!this.lastName) {
        this.errors.lastName = "Last Name is required";
      }
      if (!this.email) {
        this.errors.email = "Email is required";
      }
      if (!this.message) {
        this.errors.message = "Message is required";
      }
      if (Object.keys(this.errors).length === 0) {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
        this.submitted = true;
      }
    },
    closePopup() {
      this.submitted = false;
      this.$router.push({ name: 'home' });
    }
  }
}
</script>
  
  <style scoped>
  body {
  font-family: Arial, sans-serif;
  background-color: #d5d0d0;
  /* background-image: url('https://i.pinimg.com/564x/af/ed/57/afed57c024c97924cee749bd8c01261a.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  bottom: 50px;
}
  .center-icons {
  display: flex;
  justify-content: center;
}
.popup-message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-style: normal;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.popup-content h2 {
  margin-top: 0;
}

.popup-content button {
  background-color: #b98E77;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.popup-content button:hover {
  background-color: #84614e;
}
    .error {
    color: red;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  .container {
    width: 900px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: "Cormorant", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    margin-top: 190px;
    
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .col-md-4 {
    width: 50%;
  }
  
  .col-md-8 {
    width: 50%;
  }
  
  /* Social Media Icons */
  .contact{
    position: relative;
    right: 100px;
  }
  ul {
    list-style: none;
    padding: 20px;
    margin: 0;
  }
  
  li {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    margin-top: 40px; 
  }
  
  i {
    font-size: 24px;
    color: #b98E77;
    margin-right: 10px;
  }
  
  span {
    color: #333;
  }
  
  /* Form Styles */
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #b98E77; 
  }
  
  input, textarea {
    padding: 10px;
    border: none;
    border-bottom: 1px solid #b98E77;
    background-color: transparent;
    position: relative;
    left: 100px;
    font-style: italic;
    font-weight: 600;
  }
  
  input:focus, textarea:focus {
    border-color: #b98E77; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  button[type="submit"] {
    background-color: #b98E77; 
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    left: 40px;
  }
  
  button[type="submit"]:hover {
    background-color: #fff;
    color: #b98E77;
  }


  @media (max-width: 600px) {
    .row {
      flex-direction: column;
    }
    .col-md-4, .col-md-8 {
      width: 100%;
    }
    .container{
      width: 80%;
      font-size: 14px;
      padding: 20px 30px; 
      background-color: #fff;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      font-family: "Cormorant", serif;
      font-optical-sizing: auto;
      font-weight: 800;
      font-style: normal;
    }
    .contact{
        position: relative;
        left: 10px;
    } 
    ul{
        position: relative;
        left: 5px;
    }
    label{
        position: relative;
        left: 20px;
    }
    .col-md-8{
        position: relative;
        right: 30px;
    }
    .col-md-4{
        position: relative;
        right: 20px;
    }
    #get{
        position: relative;
        left: 30px;
    }
    .form-control{
        position: relative;
        left: 60px;
        margin-top: 20px;
    }
    .btn0{
        position: relative;
        right: 30px;
    }
  }

  @media (min-width: 601px) and (max-width: 767px) {
  .row {
    flex-direction: row;
  }
  .col-md-4, .col-md-8 {
    width: 80%;
  }
  .container {
    width: 80%;
    padding: 20px 30px;
  }

  .col-md-4{
    position: relative;
    left: 90px;
  }

  .contact {
    font-size: 28px;
    margin-bottom: 15px;
    position: relative;
    right: 100px;
  }
  ul {
    padding: 15px;
  }
  li {
    margin-bottom: 25px;
  }
  label {
    font-size: 14px;
  }
  input, textarea {
    font-size: 18px;
    font-weight: bold;
    position: relative;
    left: 70px;
  }
  button[type="submit"] {
    font-size: 12px;
    padding: 6px 12px;
  }
}
  

  /* @media (max-width: 400px) {
  .row {
    flex-direction: column;
  }
  .col-md-4, .col-md-8 {
    width: 90%;
  }
  .container {
    width: 90%;
    padding: 15px 20px;
  }
  .contact {
    font-size: 18px;
    margin-bottom: 20px;
  }
  ul {
    padding: 10px;
  }
  li {
    margin-bottom: 30px;
  }
  label {
    font-size: 16px;
  }
  input, textarea {
    font-size: 14px;
  }
  button[type="submit"] {
    font-size: 14px;
    padding: 8px 15px;
  }
} */
  </style>