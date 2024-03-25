<script setup>
import "../assets/footer.css";
import "../assets/header.css";
import "../assets/catalog.css";
import navbar from "../components/navbarView.vue";
import bottomNavbar from '@/components/bottomNavbarView.vue';
import App from "@/App.vue";
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>
    <div class="page-container">
        <div id="search-bar">
            <ul>
                <li>Recommended</li>
                <li>Top Sellers</li>
                <li>Latest</li>
            </ul>
            <form>
                <div id="search-img">
                    <img src="../components/icons/magnifying-glass.svg"/>
                </div>
                <input type="text" placeholder="Search" id="search-input"/>
            </form>
        </div>
        <div id="games-container">
        <div class="game-card">
            <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        <div class="game-card">
            <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        <div class="game-card">
            <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        <div class="game-card">
                <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        <div class="game-card">
                <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        <div class="game-card">
                <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        <div class="game-card">
                <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        <div class="game-card">
                <div id="game-img-container">
                    <img src="../components/icons/mario.jpg"/>
                </div>
                <hl>Title</hl>
                <h3>developer</h3>
                <h3>Genre</h3>
                <p>App Store Price</p>
                <p>Play Store Price</p>
        </div>
        </div>
    </div>
    <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
</template>

<script>
    let games = [
        {title: 'Game1', developer: 'Developer1', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {title: 'Game2', developer: 'Developer2', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {title: 'Game3', developer: 'Developer3', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {title: 'Game4', developer: 'Developer4', Genre: 'Genre1', 
            AppPrice: '$0.99', Playprice: '$0.99', img: '../components/icons/mario.jpg'},
        {title: 'Game5', developer: 'Developer2', Genre: 'Genre3', 
            AppPrice: '$1.99', Playprice: '$2.99', img: '../components/icons/mario.jpg'}
    ]
</script>