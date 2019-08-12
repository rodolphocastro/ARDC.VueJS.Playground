<template>
    <div id="games-list">
        <ul class="list-group">
            <li class="list-group-item list-group-item-action" v-for="game in games" :key="game.id" @click="detailGame(game.id)">
                {{ game.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'gamesList',
    methods: {
        getGames(){
            this.$store.dispatch('getGames');
        },
        deleteGame(gameId){
            this.$store.dispatch('deleteGame', gameId);
        },
        detailGame(gameId){
            this.$router.push({ name: 'gamedetail', params: { id: gameId}});
        }
    },
    computed: {
        games(){
            return this.$store.getters.games;
        }
    },
    mounted: function () {
        this.getGames();
    }
}
</script>

<style>

#games-table{
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
}

</style>
