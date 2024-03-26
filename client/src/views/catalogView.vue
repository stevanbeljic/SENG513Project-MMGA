<script setup>
import "../assets/footer.css";
import "../assets/header.css";
import "../assets/catalog.css";
import navbar from "../components/navbarView.vue";
import bottomNavbar from '@/components/bottomNavbarView.vue';
</script>

<script>
    

    export default {
        Name: "catalogView",
        data(){
            return{
                search: '',
                games : [
        {id: 1 , title: 'Game1', developer: 'Developer1', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {id: 2 ,title: 'Game2', developer: 'Developer2', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {id: 3 ,title: 'Game3', developer: 'Developer3', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {id: 4 ,title: 'Game4', developer: 'Developer4', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {id: 5 ,title: 'Game5', developer: 'Developer2', Genre: 'Genre3', 
            AppPrice: '$1.99', Playprice: '$2.99', img: '../components/icons/mario.jpg'},
        {id: 6 ,title: 'Game6', developer: 'Developer3', Genre: 'Genre3', 
            AppPrice: '$1.99', Playprice: '$2.99', img: '../components/icons/mario.jpg'},
        {id: 7 ,title: 'Mario', developer: 'Nintendo', Genre: 'Adventure', 
            AppPrice: '$1.99', Playprice: '$2.99', img: '../components/icons/mario.jpg'}
    ]
            }
        },
        computed: {
            filteredGames(){
                return this.games.filter(item => 
                    item.title.toLowerCase().includes(this.search.toLowerCase()))
            }
        }
    };
</script>

<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>
    <body>
    <div class="page-container">
        <div id="search-bar">
            <!-- <ul>
                <li>Recommended</li>
                <li>Top Sellers</li>
                <li>Latest</li>
            </ul> -->
            <form>
                <div id="search-img">
                    <img src="../components/icons/magnifying-glass.svg"/>
                </div>
                <input type="text" placeholder="Search" id="search-input" v-model="search"/>
            </form>
        </div>
        
        <div id="games-container">
            <div v-for="item in filteredGames" :key="item.id" class="game-card">
                <a href="/game">
                <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl class="game-title">{{item.title}}</hl>
                <h3 class="developer-name">{{item.developer}}</h3>
                <h3 class="game-genre">{{item.genre}}</h3>
                <p>App Store Price: {{ item.AppPrice }}</p>
                <p>Play Store Price: {{ item.Playprice }}</p>
            </a>
            </div>
        </div>
    </div>
    </body>
    <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
</template>
