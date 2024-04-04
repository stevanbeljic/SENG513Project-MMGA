<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/discussion.css";
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from "../components/bottomNavbarView.vue";
    import { onMounted, ref } from "vue";
    import router from "@/router";


    let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
    let loggedInId = ref(sessionStorage.getItem('loggedInId'));
    const fetchedGames = ref([]);
    const likedDiscussions = ref([]);

    const fetchAllGames = async () => {
        const response = await fetch('http://localhost:8080/game/getAllGames');
        const games = await response.json();
        for (let game of games) {
            game.discussions = await fetchDiscussion(game.id);
        }

        fetchedGames.value = games;
    };

    const fetchDiscussion = async (id) => {
        const response = await fetch('http://localhost:8080/discussion/getDiscussionsByGame?id='+id);
        return await response.json();
    }

    const fetchLikedDiscussions = async() => {
        const response = await fetch('http://localhost:8080/discussion/likedDiscussionsByUserID?userid=' + loggedInId.value);
        const data = await response.json();
        likedDiscussions.value = await data;
    }

    const handleDiscussionClick = (id) =>{
        console.log(id);
        router.push({ name: 'discussionpost', params: { discussionId: id }})
    }

    const handleViewAll = (id) => {
        router.push({ name: 'allDiscussions', params: { gameid: id}});
    }

    const handleNewDiscussion = (id) => {
        if(loggedIn.value){
            router.push({ name: 'addDiscussion', params: {gameid: id} });
        } else {
            router.push('/login');
        }
        
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

    onMounted(async () =>{
        try {
            await fetchAllGames();
            await fetchLikedDiscussions();
        } catch (error) {
            console.log(error);
        }
    });

    defineExpose({handleDiscussionClick, handleViewAll, handleNewDiscussion});
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>
    <div class="discussion-body-container">
        <div v-for="game in fetchedGames" :key="game.id" class="discussion-card">
            <div class="discussion-game-section">
                <img :src="'http://localhost:8080' + game.thumbnail" alt="Image Unavailable"/>
                <h1 v-text="game.name"></h1>
            </div>
            <div class="discussion-list-section">
                <div v-if="game.discussions.length != 0">
                    <div class="discussion-list-box"  v-for="discussion in game.discussions.slice(0, 3)" :key="discussion.discussion_id">
                        <div>
                            <h3 v-on:click="handleDiscussionClick(discussion.discussion_id)" v-text="discussion.title"></h3>
                        </div>
                        <div class="likes-container">
                            <button :class="[isLiked(discussion.discussion_id) ? 'liked-button' : 'unliked-button']" 
                            @click="toggleLike($event, discussion.discussion_id)">❤︎</button>
                        </div>
                    </div>
                </div>
                <div class="discussion-list-box" v-else>
                    <h3>Be the first to talk about {{ game.name }}!</h3>
                    <div class="likes-container">
                        <button class="add-discussion-button" v-on:click="handleNewDiscussion(game.id)">+</button>
                    </div>
                </div>
            </div>
            <div class="discussion-view-all-section">
                <button class="discussion-view-all-button" v-on:click="handleViewAll(game.id)">↪ VIEW ALL</button>
            </div>
        </div>
    </div>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>