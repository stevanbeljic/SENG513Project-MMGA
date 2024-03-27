<script setup>
import "../assets/footer.css";
import "../assets/gameOverview.css";
import "../assets/header.css";
import "../assets/home.css";
import navbar from "../components/navbarView.vue";
import bottomNavbar from '@/components/bottomNavbarView.vue';
import { useRoute } from 'vue-router';

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
    <div class="page-container">
        <div class="game-overview">
            <div id="cover-image">
                <img src = "../components/icons/mario.jpg"/>
            </div>
            <h1 id="game-name"> {{ game.name }}</h1>
            <h3 id="publisher-name">by: {{ game.publisher }}</h3>
            <h3 id="game-categories">Genre: {{ game.genre }}</h3>
            <p id="game-description">{{ game.description }}</p>
            <div id="appStore-info" class="store-info">
                <img src="../components/icons/app-store-icon.jpg"/>
                <p>${{ game.appstoreprice }}</p>
            </div>
            <div id="playStore-info" class="store-info">
                <img src="../components/icons/playstore-icon.svg"/>
                <p>${{ game.playstoreprice }}</p>
            </div>
        </div>
        <div class="discussions-container">
            <div class="discussion-div odd"><h2>Keep Losing to Luigi! >:(</h2></div>
            <div class="discussion-div even"><h2>When is the next update coming out? It’s been forever and the games getting stale</h2></div>
            <div class="discussion-div odd"><h2>Secret level!</h2></div>
            <div class="discussion-div even"><h2>Message from Devs!</h2></div>
            <div class="discussion-div" v-for="discussion in discussions" :key="discussion.id"><h2>{{ discussion.title }}</h2></div>
        </div>
    </div>
    <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
</template>