<template>
    <div id="games-home">
        <p>
            <router-link to="/">Home</router-link>
        </p>
        <img class="page-logo" alt="a dualshock 4 controller" src="@/assets/games_logo.png">
        <h3>Games</h3>
        <div id="games-navigation">
            <router-link :to="{ name: 'gameslist' }">All Games</router-link>
            <router-link :to="{ name: 'gamecreate' }">Add a Game</router-link>            
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import GamesList from "@/components/GamesList";

export default {
    name: 'games',
}
</script>

<style>

#games-navigation > a {
    margin: 20px;
}

</style>
