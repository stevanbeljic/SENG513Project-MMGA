<script setup>
  import { onMounted, ref } from 'vue';

  let loggedIn = ref(sessionStorage.getItem('loggedIn') === 'true');
  let username = ref(sessionStorage.getItem('loggedInAs'));
  let loggedInRole = ref(sessionStorage.getItem('loggedInRole'));

  const DEV_ROLE = "developer";

  const updateSessionData = () => {
    loggedIn.value = sessionStorage.getItem('loggedIn') === 'true';
    username.value = sessionStorage.getItem('loggedInAs');
    loggedInRole.value = sessionStorage.getItem('loggedInRole');
  };

  onMounted(async () => {
    updateSessionData();
  });

  window.addEventListener('storage', updateSessionData);
  defineExpose({loggedIn, username, loggedInRole, DEV_ROLE});
</script>

Vue.component('navBar', {
    <template>
        <div class = "flex-navbar">
          <ul>
            <div class ="img-container">
              <li><RouterLink to="/"><img src ="../components/icons/mmga.svg" id = "mmga"/></RouterLink></li>
            </div>
            <div class = "right-container">
              <li id = "home"><RouterLink to="/">Home</RouterLink></li>
              <li v-if="loggedInRole == DEV_ROLE"><RouterLink to="/addGame">Publish</RouterLink></li>
              <li><RouterLink to="/catalog">Catalog</RouterLink></li>
              <li><RouterLink to="/friends">Friends</RouterLink></li>
              <li><RouterLink to="/discussions">Discussions</RouterLink></li>
              <li ><RouterLink :to="`/profile/${username}`"><img src = "../components/icons/user.svg" id = "user"/></RouterLink></li>
            </div>
          </ul>
        </div>
    </template>
})

