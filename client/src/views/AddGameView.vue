<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/addGame.css";
    import { onMounted, ref } from 'vue';
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from "../components/bottomNavbarView.vue";

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
        document.getElementById('ag-image-upload').addEventListener('change', function(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = function() {
                document.getElementById('ag-preview-image').src = reader.result;
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
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" rel="stylesheet">
    </head>
    <header class ="header-section">
        <navbar></navbar>
    </header>
    <body>
        <div class="ag-body-container">
            <form class="ag-form">
                <div class="ag-basic-grid">
                    <div class="ag-title-section">
                        <input id="ag-title" type="text" placeholder="enter title here...">
                    </div>
                    <div class="ag-preview-section">
                        <img id="ag-preview-image" src="../components/icons/placeholder-img.png"><br>
                        <input type="file" id="ag-image-upload" name="ag-image-upload" accept="image/png, image/jpeg, image/svg">
                    </div>
                    <div class="ag-description-section">
                        <textarea id="ag-description" placeholder="Description"></textarea>
                    </div>
                </div>
                <div class="ag-advanced-flex">
                    <div class="ag-advanced-inputs">
                        <input id="ag-link" type="text" placeholder="enter link here...">
                        <input id="ag-google-play" type="text" placeholder="$0.00">
                        <input id="ag-app-store" type="text" placeholder="$0.00">
                        <select id="ag-genre">
                            <option disable selected value>genre</option>
                            <option value="adventure">adventure</option>
                            <option value="horror">horror</option>
                            <option value="rpg">rpg</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" id="ag-submit-button" value="SUBMIT">
                    </div>
                </div>
            </form>
        </div>
    </body>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>