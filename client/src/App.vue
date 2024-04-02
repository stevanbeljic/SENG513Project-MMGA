<script setup>
import { RouterLink, RouterView } from 'vue-router'
console.log('dockerized version');
</script>

<template>
  <header>

    <div class="wrapper">

        <!----<RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink> --->
    </div>
  </header>

  <RouterView />
</template>
