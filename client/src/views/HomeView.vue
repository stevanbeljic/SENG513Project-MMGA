<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import "../assets/header.css"
  import "../assets/home.css"
</script>

<template>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
  </head>
  <header class = "header-section">
    <div class = "flex-navbar">
      <ul>
        <div class ="img-container">
          <li><img src ="../components/icons/mmga.svg" id = "mmga"></img></li>
        </div>
        <div class = "right-container">
          <li id = "home"><RouterLink to="/">Home</RouterLink></li>
          <!--change these to the appropriate pages after they've been made-->
          <li><a href="#">Catalogue</a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#">Discussion</a></li>
          <li ><img src = "../components/icons/user.svg" id = "user"> </img></li>
        </div>
      </ul>
    </div>
  </header>

</template>
