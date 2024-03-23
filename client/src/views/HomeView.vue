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
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap" rel="stylesheet">
  </head>
  <header class="header-section">
    <navbar></navbar>
  </header>

  <body>
    <div id="dashboardDiv">
      <div id="topHalfDiv">
        <div id="trendingDiv">
          <div class="subTitleDiv">
            <h2>Trending Release🔥</h2>
          </div>
          <div id="trendingContentDiv">
            <img src = "../components/icons/mario.jpg"/>
            <div id="gameDescDiv">
              <h3>Evil Mario</h3>
              <p id="publisher">Evil Nintendo Studios</p>
              <p>Luigi must embark on a harrowing adventure to save his brother, Mario, from an evil force corrupting his mind and soul.</p>
              <div id="genreDiv">
                <p class="genre">Family</p>
                <p class="genre">Horror</p>
              </div>
              <div id="info">
                <p class="tags">▶ 1.8M</p>
                <p class="tags">★ 81k</p>
                <p class="tags" id="price">$0.99</p>
              </div>
            </div>
          </div>
        </div>
        <div id="recentDiscussionsDiv">
          <div class="subTitleDiv">
            <h2>Recent Discussions</h2>
            <ul>
              <li>
                <p>Keep losing to Luigi :(</p>
                <a>❤︎</a>
              </li>
              <li>
                <p>Luigi Boss Batte</p>
                <a>❤︎</a>
              </li>
              <li>
                <p>Looking for team</p>
                <a>❤︎</a>
              </li>
              <li>
                <p>I calculated how much coins you need to win</p>
                <a>❤︎</a>
              </li>
              <li>
                <p>Questions about Luigi's strength</p>
                <a>❤︎</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="bottomHalfDiv">
        <div id="newsDiv"><!--Will use an API call to some gaming news site to auto-genrrate live news-->
          <h2>Recent News in Gaming 📰</h2>
          <div id="newsContent">
            <div class="newsItem">
              <img src = "../components/icons/mario.jpg"/>
              <p>Evil Mario wins GOTY</p>
            </div>
            <div class="newsItem">
              <img src = "../components/icons/mario.jpg"/>
              <p>Gamers in rage over recent adaptation of beloved Mario franchise</p>
            </div>
          </div>
        </div> 
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
