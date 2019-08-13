<template>
  <div id="games-home">
    <img class="page-logo" alt="a dualshock 4 controller" src="@/assets/games_logo.png" />
    <h3>Games</h3>
    <p class="lead">Create, view and edit Games.</p>
    <div class="row">
      <ul class="col-sm-2 nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Return Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'gameslist' }">All Games</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'gamecreate' }">Add a Game</router-link>
        </li>
      </ul>
      <router-view class="col-sm-10"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "games"
};
</script>

<style>
</style>
