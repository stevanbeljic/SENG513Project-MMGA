<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/addDiscussion.css";
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from "../components/bottomNavbarView.vue";
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import router from "@/router";

    const game = ref([]);
    const route = useRoute();

    const fetchGame = async () => {
        const response = await fetch('http://localhost:7003/game/getGameById?id='+route.params.gameid);
        const games = await response.json();
        game.value = games[0];
    };

    const handleDiscussionClick = (id) =>{
        router.push({ name: 'discussionpost', params: { discussionId: id }})
    }

    onMounted(async () =>{
        try {
            fetchGame();
            console.log('here');
        } catch (error) {
            console.log(error);
            alert("Unable to post at this time");
        }
    });

    defineExpose({handleDiscussionClick, game});
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>

    <body id="addDiscBody">
        <div id="newDiscussionDiv">
            <span>
                <div id="gameDiv">
                    <h1 v-text="'Posting in '+game.name"></h1>
                    <img :src="'http://localhost:7003' + game.thumbnail" alt="Image Unavailable"/>
                </div>
                <div id="discussionContent">
                    <form>
                        <input class="newDiscussionData" type="text" placeholder="Enter a title">
                        <textarea class="newDiscussionData" rows="10" placeholder="What did you want to say..."></textarea>
                        <input class="newDiscussionData" id="submitDiscussion" type="submit" value="Post">
                    </form>
                </div>
            </span>
        </div>
    </body>

    

    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>