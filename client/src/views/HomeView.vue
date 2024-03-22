<script setup>
  import { RouterLink, RouterView } from 'vue-router';
import "../assets/footer.css";
import "../assets/header.css";
import "../assets/home.css";
import navbar from "../components/navbarView.vue";
</script>

<template>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
  </head>
  <header class = "header-section">
    <navbar></navbar>
  </header>
 
  <footer class = "footer-section">
    <div class = "flex-navbar-foot">
      <!-- Link to appropriate pages once created-->
      <RouterLink to="/"><img src = "../components/icons/home.svg" id ="home-icon"></RouterLink>
      <img src = "../components/icons/catalogue.svg" id = "catalogue-icon">
      <img src = "../components/icons/user.svg" id = "user-icon">
      <img src = "../components/icons/friends.svg" id = "friends-icon">
      <img src = "../components/icons/chat.svg" id = "chat-icon">

    </div>

  </footer>

</template>
