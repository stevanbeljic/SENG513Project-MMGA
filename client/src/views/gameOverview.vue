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
            console.log(this.$route.params.id)
            let bRoute = "http://localhost:7003/game/getGameById?id="+ this.$route.params.id; 
            console.log(bRoute);
            fetch(bRoute, {method: "GET"})
            .then(res => res.json())
            .then(data => {this.game = data[0]
            console.log(this.game)})
            .catch(err => console.log(err.message));
        },
        data() {
            return{
                game: '',
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
                <img src = "../components/icons/mario.jpg"/>
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
            <div class="discussion-list-box">
                <div><h3>Keep Losing to Luigi! >:(</h3></div>
                <div><button class="discussion-like-button">❤︎</button></div>
            </div>
            <div class="discussion-list-box">
                <div><h3>When is the next update coming out? It’s been forever and the games getting stale</h3></div>
                <div><button class="discussion-like-button">❤︎</button></div>
            </div>
            <div class="discussion-list-box">
                <div><h3>Secret level!</h3></div>
                <div><button class="discussion-like-button">❤︎</button></div>
            </div>
            <div class="discussion-view-all-section">
                <button id="discussion-view-all-button">↪ VIEW ALL</button>
            </div>
        </div>
    </div>
    <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
</template>