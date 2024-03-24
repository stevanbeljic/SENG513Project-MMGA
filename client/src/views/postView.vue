<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/postview.css";
    import { onMounted, ref } from 'vue';
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from '@/components/bottomNavbarView.vue';
    let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
    let username = ref(sessionStorage.getItem('loggedInAs'));

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
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap" rel="stylesheet">
  </head>
  <header class="header-section">
    <navbar></navbar>
  </header>

  <body>
    <div id="discussionContent">
        <div id="backButton">
            <a><p>◁ Back to <span>Evil Mario</span></p></a>
        </div>
        <div id="postTitle">
            <h1>Keep Losing to Luigi >:(</h1>
        </div>
        <div id="postContent">
            <p>Luigi is seriously not fair to play against! His abilities are way too strong. I need some serious tips if anyone has any. Please help me out!</p>
        </div>
        <hr/>
        <div id="responseDiv">
            <h2>Replies</h2>
            <p><a>+ Add a Response</a></p>
        </div>
        <div id="replies">
            <ul>
                <li class="replyItem">
                    <div class="replierName">
                        <p>LuigiH8er27</p>
                    </div>
                    <div class="replyMessage">
                        <p>Ugh, Luigi in this Evil mario game is the absolute worst! Always lurking around with his creepy grin, waiting to strike.</p>
                    </div>
                </li>
                <li class="replyItem">
                    <div class="replierName">
                        <p>G0DG4mer</p>
                    </div>
                    <div class="replyMessage">
                        <p>LOL You must be a serious noob XD Let me teach you how to get past Luigi. First you need to pick up the red shell, not the green. Then, continously strike until he trips, then jump on his head and you win. Wasnt that hard...</p>
                    </div>
                </li>
                <li class="replyItem">
                    <div class="replierName">
                        <p>LikeAbO55</p>
                    </div>
                    <div class="replyMessage">
                        <p>Don't worry, it should be pretty easy once you learn how the AI works.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </body>

  <footer class="footer-section">
    <bottomNavbar></bottomNavbar>
  </footer>
</template>