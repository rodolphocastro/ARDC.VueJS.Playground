<template>
    <div id="games-home">
        <p>
            <router-link to="/">Home</router-link>
        </p>
        <img class="page-logo" alt="a dualshock 4 controller" src="@/assets/games_logo.png">
        <h3>Games</h3>
        <button @click="showGames()">Load Games</button>
    </div>
</template>

<script>
export default {
    name: 'games',
    methods: {
        showGames(){
            this.$store.dispatch('getGames');
        }
    },
    computed: {
        games(){
            return this.$store.state.games.gamesList;
        }
    }
}
</script>

<style>

</style>
