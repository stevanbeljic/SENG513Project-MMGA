<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/comment.css";
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from "../components/bottomNavbarView.vue";
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet">
    </head>
    <header class ="header-section">
        <navbar></navbar>
    </header>
    <body>
        <div class="comment-body-container">
            <div class="comment-back-section">
                <button id="comment-back-button">< Back to Evil Mario</button>
            </div>
            <div class="comment-header-section">
                <h1>Keep Losing to Luigi! >:(</h1>
                <h4>Posted in <u>Evil Mario</u></h4>
            </div>
            <div class="comment-user-section">
                <p>Replying to <u>LuigiH8er27</u>'s comment</p>
                <div class="comment-message-box">
                    <p>Ugh, Luigi in this Evil Mario game is the absolute worst! 
                        Always lurking around with that creepy grin, just waiting to jump scare you. 
                        Can't catch a break with him popping up everywhere. Wish he'd just stay out of my nightmares!
                        You can't have anything nice nowadays!</p>
                </div>
            </div>
            <div class="reply-section">
                <h3>Your Comment</h3>
                <form>
                    <textarea id="reply-message" placeholder="Enter comment"></textarea> <br>
                    <input type="submit" value="Reply">
                </form>
            </div>
        </div>
    </body>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>