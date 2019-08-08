<template>
    <div id="games-list">
        <table id="games-table">
            <th>Title</th>
            <th>Actions</th>
            <tr v-for="game in games" :key="game.id">
                <td>{{ game.name }}</td>
                <td>
                    <router-link :to="{ name: 'gamedetail', params: { id: game.id} }">View</router-link> |
                    <router-link :to="{ name: 'gameedit', params: { id: game.id} }">Edit</router-link> |
                    <a href="#" @click="deleteGame(game.id)">Delete</a>
                </td>
            </tr>
        </table>
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
