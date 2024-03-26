<script setup>
    import "../assets/footer.css";
import "../assets/header.css";
import "../assets/home.css";
import "../assets/friends.css";
import "../assets/addFriend.css"
import navbar from "../components/navbarView.vue";
import bottomNavbar from '@/components/bottomNavbarView.vue';

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
        <div class = "addFriend-section">
            <form id="addFriend-form" @submit.prevent="getFormValues">
            <div id="addFriend-header">
                <h2 id = "addFriend-text">Add Friend</h2>
            </div>
            <div class = "profile-break"></div>
            <div class="addFriendForm-inputs">
                <p>Username </p>
                <input type="text" v-model="username" placeholder="Username">
            </div>

            <div id="search">
                <!-- Call to search sql tables -->
                <button type="submit" id = "search-btn">Add</button>
            </div>
        </form>
        </div>
    </div>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>