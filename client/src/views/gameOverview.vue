<script setup>
import "../assets/footer.css";
import "../assets/gameOverview.css";
import "../assets/header.css";
import "../assets/home.css";
import navbar from "../components/navbarView.vue";
import bottomNavbar from '@/components/bottomNavbarView.vue';
import { useRoute } from 'vue-router';
import router from "@/router";
</script>
<script>
    export default {
        setup(){
            const route = useRoute();
            return {route};
        },
        mounted() {
            let bRoute = "http://localhost:7003/game/getGameById?id="+ this.$route.params.id; 
            fetch(bRoute, {method: "GET"})
            .then(res => res.json())
            .then(data => this.game = data[0])
            .catch(err => console.log(err.message));

            fetch("http://localhost:7003/discussion/getDiscussionsByGame?id="+ this.$route.params.id, {method: "GET"})
            .then(res => res.json())
            .then(data => {this.discussions = data
            console.log(data)})
            .catch(err => console.log(err.message));
        },
        data() {
            return{
                game: '',
                discussions: []
            }
        },
        methods: {
            handleDiscussionClick: function(id){
                console.log(id)
                router.push({ name: 'discussionpost', params: { discussionId: id }})
            }
        }


    }
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>
    <div class="body-container">
        <div class="game-overview">
            <div id="cover-image">
                <img :src="'http://localhost:7003' + game.thumbnail" alt="Image Unavailable"/>
            </div>
            <div id="game-information">
                <div id="game-details">
                    <div id="basic-details">
                        <div id="game-publisher">
                            <h1 id="game-name">{{ game.name }}</h1>
                            <p id="publisher-name">By: {{ game.publisher }}</p>
                        </div>
                        <div>
                            <h3 id="game-categories">{{ game.genre }}</h3>
                        </div>
                    </div>
                    <div id="advanced-details">
                        <div class="store-info">
                            <a href="https://www.apple.com/ca/app-store/">
                                <img id="app-store" src="../components/icons/app-store-icon.jpg"/>
                            </a>
                            <p>${{ game.appstoreprice }}</p>
                        </div>
                        <div class="store-info">
                            <a href="https://play.google.com/store/games?hl=en&gl=US">
                                <img id="play-store" src="../components/icons/playstore-icon.svg"/>
                            </a>
                            <p>${{ game.playstoreprice }}</p>
                        </div>
                    </div>
                </div>
                <div id="game-description">
                    <p>{{ game.description }}</p>
                </div>
            </div>
        </div>
        <div class="discussion-list-section" id="overview-discussion-section">
            <h1 id="discussion-label">Discussions Board</h1>
            <div class="discussion-list-box" v-for="discussion in discussions" :key="discussion.discussion_id">
                <div v-on:click="handleDiscussionClick(discussion.discussion_id)" class="discussionTitle"><h3>{{ discussion.title }}</h3></div>
                <div><button class="discussion-like-button">❤︎</button></div>
            </div>
            <div class="discussion-view-all-section">
                <button class="discussion-view-all-button">↪ VIEW ALL</button>
            </div>
        </div>
    </div>
    <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
</template>