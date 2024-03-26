<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/home.css";
    import "../assets/editProfileView.css"
    import { onMounted, ref } from 'vue';
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from '@/components/bottomNavbarView.vue';

    let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
    let username = ref(sessionStorage.getItem('loggedInAs'));
    
    let password = ref('');
    let userbio = ref('');
    const submitForm = async () => {
        const dataToSend = {
            password: password.value,
            userbio: userbio.value
        };

        console.log("Data to send:", dataToSend);

        const response = await fetch('http://localhost:7003/editProfile', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        const data = await response.text();
        console.log("Response data:", data);
    };

    const updateSessionData = () => {
        loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
        username.value = sessionStorage.getItem('loggedInAs');
        console.log(loggedIn.value);
        console.log(username.value);
    };

    onMounted(updateSessionData);
    window.addEventListener('storage', updateSessionData);

    defineExpose({loggedIn, username});

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

            <form id="editProfile-form" @submit.prevent="submitForm">
                <div id="editProfile-header">
                    <h2 id = "editProfile-text">Edit Profile</h2>
                </div>
                <div class = "profile-break"></div>
                <div class="form-inputs">
                    <p>Username </p>
                    <!-- Placeholder could instead say the user's actual username -->
                    <input type="text" v-model="username" placeholder="Username" disabled="true">
                </div>
                <div class = "profile-break"></div>

                <div class="form-inputs">
                    <p>Password </p>
                    <input type="password" v-model="password" placeholder="Password">
                </div>
                <div class="form-inputs">
                    <p>Biography</p>
                    <input type="text" v-model="userbio" placeholder="Stuff about you!">
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