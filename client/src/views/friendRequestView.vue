<script setup>
    import "../assets/footer.css";
import "../assets/header.css";
import "../assets/home.css";
import "../assets/friends.css";
import navbar from "../components/navbarView.vue";
import bottomNavbar from '@/components/bottomNavbarView.vue';
import "../assets/friendRequest.css"

</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>
    <div class="page-container">
        <div class = "top-section">
            <img src = "../components/icons/user.svg" id = "friends-loggedin-user-icon">
            <!--This should instead say the logged in user's username-->
            <h1>Timmy1234</h1>
        </div>
        <div class = "section-break">
            <button class ="friends-btn"><RouterLink to = "/friends">Friends</RouterLink> </button>
            <button class ="friends-btn" id ="request-btn"><RouterLink to = "/friendRequest">Requests</RouterLink></button>
            <button class ="friends-btn"> <RouterLink to = "/addFriend">Add A Friend</RouterLink></button>
        </div>
        <h2 id = "friends-title">Friend Requests</h2>

        <div class = "request-section">
            <!--Incoming friend requests-->
            <div><img src = "../components/icons/user.svg"class = "friends-user-icon"></div>
            <p class = "friendReq1">TheLegend27</p>
            <button class = "confirm">Confirm</button>
            <button class = "deny">Deny</button>
        </div>
    </div>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>