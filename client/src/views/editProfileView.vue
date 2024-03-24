<script setup>
    import "../assets/footer.css";
import "../assets/header.css";
import "../assets/home.css";
import "../assets/editProfileView.css"
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

    <body>
        <div class="page-container">
            <div class ="back-arrow"><RouterLink to = "/profile"> <img src = "../components/icons/backArrow.svg" id = "arrow-img"> </RouterLink></div>
            <RouterLink to ="/profile"><p class = "back-text"> Back to User Profile</p></RouterLink>

            <form id="editProfile-form" @submit.prevent="getFormValues">
            <div id="editProfile-header">
                <h2 id = "editProfile-text">Edit Profile</h2>
            </div>
            <div class = "profile-break"></div>

            <div class="form-inputs">
                <p>Username </p>
                <!-- Placeholder could instead say the user's actual username -->
                <input type="text" v-model="username" placeholder="Username">
            </div>
            <div class = "profile-break"></div>

            <div class="form-inputs">
                <p>Password </p>
                <input type="password" v-model="password" placeholder="Password">
            </div>
            <div id="update">
                <!-- Call to update sql tables -->
                <button type="submit" id = "update-btn">Update</button>
            </div>
        </form>

        </div>
    </body>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>