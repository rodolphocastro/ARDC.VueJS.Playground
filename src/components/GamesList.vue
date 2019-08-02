<template>
    <div id="games-list">
        <table id="games-table">
            <th>Title</th>
            <th>Actions</th>
            <tr v-for="game in games" :key="game.id">
                <td>{{ game.name }}</td>
                <td>View | Edit | Delete</td>
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
        }
    },
    computed: {
        games(){
            return this.$store.state.games.gamesList;
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
