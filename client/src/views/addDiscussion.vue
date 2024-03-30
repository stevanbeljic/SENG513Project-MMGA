<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/addDiscussion.css";
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from "../components/bottomNavbarView.vue";
    import { onMounted, ref } from "vue";
    import router from "@/router";

    const fetchGame = async (id) => {
        const response = await fetch('http://localhost:7003/discussion/getDiscussionsByGame?id='+id);
        return await response.json();
    }

    const handleDiscussionClick = (id) =>{
        router.push({ name: 'discussionpost', params: { discussionId: id }})
    }

    onMounted(async () =>{
        try {
            fetchGame();
        } catch (error) {
            console.log(error);
            router.push("/");
            alert("Unable to post at this time");
        }
    });

    defineExpose({handleDiscussionClick});
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
    </head>
    <header class = "header-section">
        <navbar></navbar>
    </header>

    <body>
        <div id="newDiscussionDiv">
            <span>
                <div id="gameDiv">
                    <h1>Posting in Evil Mario</h1>
                    <img src="../components/icons/mario.jpg">
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