<template>
  <div>
    <img class="page-logo" alt="Stick figure in a swing" src="@/assets/home_logo.png" />
    <h3>Welcome to ARDC's VueJS Playground Client</h3>
    <p class="lead">This client aims to provide a baseline for VueJS testing</p>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'gameslist' }">Games</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'reviewsList'}">Reviews</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/docs">API Docs</router-link>
      </li>
      <li>
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
</style>
