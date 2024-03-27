<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/discussion.css";
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from "../components/bottomNavbarView.vue";
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>
    <div class="discussion-body-container">
        <!-- Could likely automate the creation of discussion cards with loops -->
        <div class="discussion-card">
            <div class="discussion-game-section">
                <img src="../components/icons/mario.jpg">
                <h1>Evil Mario</h1>
            </div>
            <div class="discussion-list-section">
                <!-- Could automate the entry of discussion boxes using loops -->
                <div class="discussion-list-box">
                    <div>
                        <h3>Mario has to be the most overpowered character in the game.</h3>
                    </div>
                    <div>
                        <button class="discussion-like-button">❤︎</button>
                    </div>
                </div>
                <div class="discussion-list-box">
                    <div>
                        <h3>So I found a bug in Princess Peach's Castle...</h3>
                    </div>
                    <div>
                        <button class="discussion-like-button">❤︎</button>
                    </div>
                </div>
                <div class="discussion-list-box">
                    <div>
                        <h3>Evil Mario: Everything You Need To Know Before Starting</h3>
                    </div>
                    <div>
                        <button class="discussion-like-button">❤︎</button>
                    </div>
                </div>
            </div>
            <div class="discussion-view-all-section">
                <button id="discussion-view-all-button">↪ VIEW ALL</button>
            </div>
        </div>
        <div class="discussion-card">
            <div class="discussion-game-section">
                <img src="../components/icons/mario.jpg">
                <h1>Evil Mario</h1>
            </div>
            <div class="discussion-list-section">
                <!-- Could automate the entry of discussion boxes using loops -->
                <div class="discussion-list-box">
                    <div>
                        <h3>Mario has to be the most overpowered character in the game.</h3>
                    </div>
                    <div>
                        <button class="discussion-like-button">❤︎</button>
                    </div>
                </div>
                <div class="discussion-list-box">
                    <div>
                        <h3>So I found a bug in Princess Peach's Castle...</h3>
                    </div>
                    <div>
                        <button class="discussion-like-button">❤︎</button>
                    </div>
                </div>
                <div class="discussion-list-box">
                    <div>
                        <h3>Evil Mario: Everything You Need To Know Before Starting</h3>
                    </div>
                    <div>
                        <button class="discussion-like-button">❤︎</button>
                    </div>
                </div>
            </div>
            <div class="discussion-view-all-section">
                <button class="discussion-view-all-button">↪ VIEW ALL</button>
            </div>
        </div>
    </div>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>