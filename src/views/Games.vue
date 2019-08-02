<template>
    <div id="games-home">
        <p>
            <router-link to="/">Home</router-link>
        </p>
        <img class="page-logo" alt="a dualshock 4 controller" src="@/assets/games_logo.png">
        <h3>Games</h3>
        <gamesList  />
    </div>
</template>

<script>
import GamesList from "@/components/GamesList";

export default {
    name: 'games',
    components: {
        GamesList,
    }
}
</script>

<style>

</style>
