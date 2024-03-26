<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/home.css";
    import "../assets/friends.css";
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from '@/components/bottomNavbarView.vue';
    import "../assets/friendRequest.css"
    import { onMounted, ref } from 'vue';
    import router from "@/router";

    let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
    let username = ref(sessionStorage.getItem('loggedInAs'));

    const updateSessionData = () => {
        loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
        username.value = sessionStorage.getItem('loggedInAs');
        console.log(loggedIn.value);
        console.log(username.value);
    };

    const incomingFriendsRequestList = ref([]);
    const fetchIncomingFriendRequests = async () => {
            const route = "http://localhost:7003/user/getIncomingFriendRequests?username=" + username.value;
            console.log(route);
            console.log(username.value);
            const response = await fetch(route, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
            });

            incomingFriendsRequestList.value = await response.json();
            console.log(incomingFriendsRequestList.value);
    };

    const outgoingFriendsRequestList = ref([]);
    const fetchOutgoingFriendRequests = async () => {
            const route = "http://localhost:7003/user/getOutgoingFriendRequests?username=" + username.value;
            console.log(route);
            console.log(username.value);
            const response = await fetch(route, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
            });

            outgoingFriendsRequestList.value = await response.json();
            console.log(outgoingFriendsRequestList.value);
    };

  onMounted(async () => {
        updateSessionData();
        if(loggedIn.value != true){
            router.push("/");
            alert("Please login to view your Friends List");
        } else {
            try {
                await fetchIncomingFriendRequests();
                //await fetchOutgoingFriendRequests();
            } catch (error){
                console.log(error);
            }
        }
    });

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
    <div class="page-container">
        <div class = "top-section">
            <img src = "../components/icons/user.svg" id = "friends-loggedin-user-icon">
            <!--This should instead say the logged in user's username-->
            <h1>Timmy1234</h1>
        </div>
        <div class = "section-break">
            <button class ="friends-btn"><RouterLink to = "/friends">Friends</RouterLink> </button>
            <button class ="friends-btn" id ="request-btn"><RouterLink to = "/friendRequest">Requests</RouterLink></button>
            <button class ="friends-btn"> <RouterLink to = "/addFriend">Add A Friend</RouterLink></button>
        </div>
        <h2 class = "friend-req-title">Incoming Friend Requests</h2>

        <div class = "request-section">
            <ul>
                <li v-if="incomingFriendsRequestList.length == 0">
                    <p class="friendReq1">No Incoming Request</p>
                </li>
                <li v-for="friend in incomingFriendsRequestList" :key="friend.username">
                    <div><img src = "../components/icons/user.svg" class = "friends-user-icon"></div>
                    <p class = "friendReq1">{{ friend.username }}</p>
                    <button class = "confirm">Confirm</button>
                    <button class = "deny">Deny</button>
                </li>
            </ul>
        </div>

        <h2 class = "friend-req-title">Outgoing Friend Requests</h2>
        <div class = "request-section">
            <div><img src = "../components/icons/user.svg" class = "friends-user-icon"></div>
            <p class = "friendReq1">TheLegend27</p>
            <button class = "deny">Cancel</button>
        </div>
    </div>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>