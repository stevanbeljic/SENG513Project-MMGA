<script setup>
  import { onMounted, ref } from 'vue';

  let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
  let username = ref(sessionStorage.getItem('loggedInAs'));

  const updateSessionData = () => {
    loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
    username.value = sessionStorage.getItem('loggedInAs');
  };

  onMounted(async () => {
    updateSessionData();
  });

  window.addEventListener('storage', updateSessionData);
  defineExpose({loggedIn, username});
</script>

Vue.component('bottomNavbar', {
    <template>
        <div class = "flex-navbar-foot">
            <RouterLink to="/"><img src = "../components/icons/home.svg" id ="home-icon"></RouterLink>
            <RouterLink to = "/catalog"><img src = "../components/icons/catalogue.svg" id = "catalogue-icon"></RouterLink>
            <RouterLink :to="`/profile/${username}`"><img src = "../components/icons/user.svg" id = "user-icon"></RouterLink>
            <RouterLink to ="/friends"><img src = "../components/icons/friends.svg" id = "friends-icon"></RouterLink>
            <RouterLink to ="/discussions"><img src = "../components/icons/chat.svg" id = "chat-icon"></RouterLink>
        </div>
    </template>
})
