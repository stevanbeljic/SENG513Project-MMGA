<script setup>
    import "../assets/footer.css";
import "../assets/header.css";
import "../assets/home.css";
import navbar from "../components/navbarView.vue";
import "../assets/profileView.css";
import bottomNavbar from '@/components/bottomNavbarView.vue';

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
        <div class = "grid-container">
            <!-- Not sure if we want to customize user profile images... placeholder image for now-->
            <div class = "item1"><img src = "../components/icons/user.svg" id ="users-icon"></div>
            <!-- This should instead say the corresponding username for whoever is logged in-->
            <div class = "item2">Timmy123</div>
            <div class = "item3"> <RouterLink to="/editProfile"><button class ="edit-btn">Edit Profile</button></RouterLink></div>
            <!-- This should be the corresponding bio for the user that is logged in-->
            <div class = "item4">Hi I'm Timmy and I really enjoy mobile games!</div>
        </div>
        <div class = "profile-break"></div>
        <h1 id = "myTopGames">My Top Games</h1>
        <div class = "profile-break"></div>

        <!--Each user's top games should be displayed here -->
        <div class = "top-games">
            <div class = "games-container-profile">
                <div class = "gameIcon1"><img src = "../components/icons/marioIcon.jpg" id ="marioIcon"></div>
                <div class = "gameTitle1">Evil Mario </div>
                <div class = "gameTags1">Horror, Thriller</div>
                <div class = "gameIcon2"><img src = "../components/icons/taurean.jpg" id ="taureanIcon"></div>
                <div class = "gameTitle2">Taurean </div>
                <div class = "gameTags2">Adventure, Action</div>
            </div>
        </div>

    </div>
    </body>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>