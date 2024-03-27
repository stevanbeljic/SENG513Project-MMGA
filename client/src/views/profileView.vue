<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/home.css";
    import navbar from "../components/navbarView.vue";
    import "../assets/profileView.css";
    import bottomNavbar from '@/components/bottomNavbarView.vue';
    import { onMounted, ref } from 'vue';
    import router from "@/router";

    let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
    let username = ref(sessionStorage.getItem('loggedInAs'));
    let userBio = ref('');

    const updateSessionData = () => {
        loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
        username.value = sessionStorage.getItem('loggedInAs');
    };


    const userData = ref([]);
    const fetchUserInfo = async () => {
        const response = await fetch('http://localhost:7003/viewProfile/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username.value })
        });
        const data = await response.json();
        userData.value = data;
        username.value = data[0].username;
        userBio.value = data[0].bio;
    }

    onMounted(async () => {
        updateSessionData();
        if(loggedIn.value != true){
            router.push("/login");
        } else {
            try {
                await fetchUserInfo();
            } catch (error){
                console.log(error);
            }
        }
    });

    window.addEventListener('storage', updateSessionData);
    defineExpose({loggedIn, username, userBio});

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
            <div class = "item2" id="usernameDiv" v-text="username"></div>
            <div class = "item3"> <RouterLink to="/editProfile"><button class ="edit-btn">Edit Profile</button></RouterLink></div>
            <!-- This should be the corresponding bio for the user that is logged in-->
            <div class = "item4" id="bioDiv" v-text="userBio"></div>
            <div class = "item5"><RouterLink to = "/login"><button class = "logout-btn">Logout </button></RouterLink></div>
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