<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/addGame.css";
    import { onMounted, ref } from 'vue';
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from '@/components/bottomNavbarView.vue';
    let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
    let username = ref(sessionStorage.getItem('loggedInAs'));

    const updateSessionData = () => {
        //a session variable to check if logged in user is developer needed to access this page
        //implement later
        loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
        username.value = sessionStorage.getItem('loggedInAs'); 
        console.log(loggedIn.value);
        console.log(username.value);
    };

    onMounted(() => {
        updateSessionData();
        document.getElementById('gameImage').addEventListener('change', function(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = function() {
                document.getElementById('previewImage').src = reader.result;
            }
            reader.readAsDataURL(file);
        });
    });

    window.addEventListener('storage', updateSessionData);

    defineExpose({loggedIn, username});
</script>


<template>
    <head>
    <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap" rel="stylesheet">
  </head>
  <header class="header-section">
    <navbar></navbar>
  </header>

  <body id="addGameBody">
    <div id="addGameContent">
        <h1>Publish New Game</h1>
        <form id="gameSubmissionForm" action="/submit_game" method="post">
            <div id="gameDetails">
                <label for="gameTitle">Game Title</label>
                <input type="text" id="gameTitle" name="gameTitle" placeholder="Enter Game Title">
                <label for="gameImage">Game Media (PNG, JPEG, etc.)</label>
                <img id="previewImage">
                <input type="file" id="gameImage" name="gameImage" accept="image/png, image/jpeg, image/svg">
                <label for="gameDescription">Game Description</label>
                <textarea id="gameDescription" name="gameDescription" rows="8" cols="50" placeholder="Enter a description of your game"></textarea>
            </div>
            <div id="gameTagDetails">
                
                <label for="gameLink">Add a link</label>
                <div class="gameTagItem">
                    <p>🔗</p><input type="url" id="gameLink" name="gameLink" placeholder="Enter a URL">
                </div>
                <label for="appStorePrice">Enter AppStore price</label>
                <div class="gameTagItem">
                    <p>💰</p><input type="url" id="appStorePrice" name="appStorePrice" placeholder="x.xx">
                </div>
                <label for="playStorePrice">Enter PlayStore price</label>
                <div class="gameTagItem">
                    <p>💰</p><input type="url" id="playStorePrice" name="playStorePrice" placeholder="x.xx">
                </div>
            </div>
        </form>
    </div>
  </body>

  <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
</template>