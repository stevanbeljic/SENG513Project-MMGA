<script setup>
    import "../assets/footer.css";
import "../assets/gameOverview.css";
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
    <div class="page-container">
        <div class="game-overview">
            <div id="cover-image">
                <img src = "../components/icons/mario.jpg"/>
            </div>
            <h1 id="game-name">Evil Mario</h1>
            <h3 id="publisher-name">by: Nintendo Games</h3>
            <h3 id="game-categories">Horror, Thriller</h3>
            <p id="game-description">Step into the shadows with 'Evil Mario,' where Luigi must confront his corrupted brother in a chilling battle of light versus darkness</p>
            <div id="appStore-info" class="store-info">
                <img src="../components/icons/app-store-icon.jpg"/>
                <p>$0.99</p>
            </div>
            <div id="playStore-info" class="store-info">
                <img src="../components/icons/playstore-icon.svg"/>
                <p>$0.99</p>
            </div>
        </div>
        <div class="discussions-container">
            <h2></h2>
            <div class="discussion-div odd"><h2>Keep Losing to Luigi! >:(</h2></div>
            <div class="discussion-div even"><h2>When is the next update coming out? It’s been forever and the games getting stale</h2></div>
            <div class="discussion-div odd"><h2>Secret level!</h2></div>
            <div class="discussion-div even"><h2>Message from Devs!</h2></div>
        </div>
    </div>
</template>