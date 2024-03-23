<script setup>
import bottomNavbar from '@/components/bottomNavbarView.vue';
import { onMounted, ref } from 'vue';
import VueMq from 'vue-mq';
import { RouterLink } from 'vue-router';
import "../assets/footer.css";
import "../assets/header.css";
import "../assets/home.css";
import navbar from "../components/navbarView.vue";

let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
let username = ref(sessionStorage.getItem('loggedInAs'));

const updateSessionData = () => {
  loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
  username.value = sessionStorage.getItem('loggedInAs');
  console.log(loggedIn.value);
  console.log(username.value);
};

onMounted(updateSessionData);

window.addEventListener('storage', updateSessionData);

defineExpose({loggedIn, username});

</script>
<script>

</script>
<template>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
  </head>
  <header class="header-section">
    <navbar></navbar>
  </header>

  <body>
    <div id="dashboard">
      <div id="welcomeDiv" v-if="loggedIn">
        <p class="welcomemessage" >{{ `Hey ${username}, let's make Mobile Great again!` }}</p>
      </div>
      <div id="feed">
        <!--The user's feed will eventually go here-->
      </div>
    </div>
  </body>

  <footer class="footer-section">
    <div class="flex-navbar-foot">
      <!-- Link to appropriate pages once created-->
      <RouterLink to="/"><img src="../components/icons/home.svg" id="home-icon"></RouterLink>
      <img src="../components/icons/catalogue.svg" id="catalogue-icon">
      <img src="../components/icons/user.svg" id="user-icon">
      <img src="../components/icons/friends.svg" id="friends-icon">
      <img src="../components/icons/chat.svg" id="chat-icon">
    </div>
  </footer>
</template>
