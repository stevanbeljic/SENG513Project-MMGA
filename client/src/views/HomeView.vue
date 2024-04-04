<script setup>
  import bottomNavbar from '@/components/bottomNavbarView.vue';
  import { onMounted, ref } from 'vue';
  import "../assets/footer.css";
  import "../assets/header.css";
  import "../assets/home.css";
  import navbar from "../components/navbarView.vue";
  import router from "@/router";

  let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
  let username = ref(sessionStorage.getItem('loggedInAs'));
  let loggedInId = ref(sessionStorage.getItem('loggedInId'));

  const updateSessionData = () => {
    loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
    username.value = sessionStorage.getItem('loggedInAs');
  };

  const newsData = ref([]);
  const trendingGame = ref([]);
  const trendingDiscussions = ref([]);
  const likedDiscussions = ref([]);

  const fetchNewsData = async () => {
    const response = await fetch('http://localhost:8080/homeDashboard');
    const data = await response.json();
    newsData.value = data;
  };

  const fetchTrendingGame = async () => {
    const response = await fetch('http://localhost:8080/game/trendingGame');
    const data = await response.json();
    trendingGame.value = await data;
  }

  const fetchTrendingDiscussions = async() => {
    const response = await fetch('http://localhost:8080/discussion/trendingDiscussions');
    const data = await response.json();
    trendingDiscussions.value = await data;
  }

  const fetchLikedDiscussions = async() => {
    const response = await fetch('http://localhost:8080/discussion/likedDiscussionsByUserID?userid=' + loggedInId.value);
    const data = await response.json();
    likedDiscussions.value = await data;
  }

  const handleDiscussionTitleClick = (id) =>{
      console.log(id);
      router.push({ name: 'discussionpost', params: { discussionId: id }});
    }
  
  const isLiked = (discussion_id) => {
    if (loggedIn.value != true) {
      return false;
    } else {
      return likedDiscussions.value.some(d => d.discussion_id == discussion_id);
    }
  };

  const toggleLike = async(event, discussion_id) => {
    if (loggedIn.value != true) {
      alert("You must be logged in to like discussions");
    } else {
      // get the button that was pressed
      const button = event.currentTarget;
      // toggle the button
      button.classList.toggle("liked-button");
      button.classList.toggle("unliked-button");
      if (button.classList.contains("unliked-button")) {
        button.classList.remove("like-animation");
        // if button is now unliked, remove from likes
        const response = await fetch("http://localhost:8080/discussion/removeLikedDiscussion?userid=" + loggedInId.value 
        +"&discussionid=" + discussion_id, { method: "POST" });
        if (response.status != 200) {
          alert("Liked discussion was not removed successfully.");
        }
      } else if (button.classList.contains("liked-button")) {
        // trigger like animation
        button.classList.add("like-animation");
        // if button is now liked, add to likes
        const response = await fetch("http://localhost:8080/discussion/addLikedDiscussion?userid=" + loggedInId.value 
        +"&discussionid=" + discussion_id, { method: "POST" });
        if (response.status != 200) {
          alert("Liked discussion was not added successfully.");
        }
      }
    }
  };

  onMounted(async () => {
    updateSessionData();
    try {
      await fetchTrendingGame();
      await fetchNewsData();
      await fetchTrendingDiscussions();
      await fetchLikedDiscussions();
    } catch (error){
      console.log(error);
    }
  });

  window.addEventListener('storage', updateSessionData);
  defineExpose({loggedIn, username, handleDiscussionTitleClick});

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
            <router-link id="routerLink" :to="'/game/' + trendingGame.id">
              <div id="trendingContentDiv">
                <img :src="'http://localhost:8080' + trendingGame.thumbnail" alt="Image Unavailable"/>
                <div id="gameDescDiv">
                  <h3 v-text="trendingGame.name"></h3>
                  <p id="publisher" v-text="trendingGame.publisher"></p>
                  <p id="gameDescription" v-text="trendingGame.description"></p>
                  <div id="genreDiv">
                    <p class="genre" v-text="trendingGame.genre"></p>
                  </div>
                  <div id="info">
                    <p class="tags" id="price" v-text="'App Store: $'+trendingGame.appstoreprice"></p>
                    <p class="tags" id="price" v-text="'Play Store: $'+trendingGame.playstoreprice"></p>
                  </div>
                </div>
              </div>
            </router-link>
        </div>
        <div id="recentDiscussionsDiv">
          <div class="subTitleDiv">
            <h2>Recent Discussions</h2>
            <ul>
              <li v-for="d in trendingDiscussions" :key="d.discussion_id">
                <h3 v-text="d.title" v-on:click="handleDiscussionTitleClick(d.discussion_id)"></h3>
                <div class="likes-container">
                  <button :class="[isLiked(d.discussion_id) ? 'liked-button' : 'unliked-button']" 
                  @click="toggleLike($event, d.discussion_id)">❤︎</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="bottomHalfDiv">
        <div id="newsDiv">
          <h2>Recent News in Gaming 📰</h2>
          <div id="newsContent">
            <div class="newsItem" v-for="item in newsData" :key="item.title">
              <a :href="item.articleLink" target="_blank">
                <img :src="item.imageLink">
                <p>{{ item.title }}</p>
                <p class="articleDesc">{{ item.deck }}</p>
              </a>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </body>

  
  <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
  
</template>
