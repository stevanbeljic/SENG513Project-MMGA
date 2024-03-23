Vue.component('navBar', {
    <template>
        <div class = "flex-navbar">
          <ul>
            <div class ="img-container">
              <li><img src ="../components/icons/mmga.svg" id = "mmga"/></li>
            </div>
            <div class = "right-container">
              <li id = "home"><RouterLink to="/">Home</RouterLink></li>
              <!--change these to the appropriate pages after they've been made-->
              <li><RouterLink to="/catalog">Catalog</RouterLink></li>
              <li><RouterLink to="/friends">Friends</RouterLink></li>
              <li><RouterLink to="/discussions">Discussions</RouterLink></li>
              <li ><RouterLink to="/profile"><img src = "../components/icons/user.svg" id = "user"/></RouterLink></li>
            </div>
          </ul>
        </div>
    </template>
})

