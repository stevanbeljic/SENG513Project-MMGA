Vue.component('bottomNavbar', {
    <template>
        <div class = "flex-navbar-foot">
            <RouterLink to="/"><img src = "../components/icons/home.svg" id ="home-icon"></RouterLink>
            <RouterLink to = "/catalog"><img src = "../components/icons/catalogue.svg" id = "catalogue-icon"></RouterLink>
            <RouterLink to ="/profile"><img src = "../components/icons/user.svg" id = "user-icon"></RouterLink>
            <RouterLink to ="/friends"><img src = "../components/icons/friends.svg" id = "friends-icon"></RouterLink>
            <RouterLink to ="/discussions"><img src = "../components/icons/chat.svg" id = "chat-icon"></RouterLink>
        </div>
    </template>
})
