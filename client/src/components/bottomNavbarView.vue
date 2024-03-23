Vue.component('bottomNavbar', {
    <template>
        <div class = "flex-navbar-foot">
            <!-- Link to appropriate pages once created-->
            <RouterLink to="/"><img src = "../components/icons/home.svg" id ="home-icon"></RouterLink>
            <img src = "../components/icons/catalogue.svg" id = "catalogue-icon">
            <img src = "../components/icons/user.svg" id = "user-icon">
            <img src = "../components/icons/friends.svg" id = "friends-icon">
            <img src = "../components/icons/chat.svg" id = "chat-icon">   
        </div>
    </template>
})
