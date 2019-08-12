<template>
    <div id="game-detail" class="row">
        <form class="col-sm-12">
            <div class="form-group">
                <label for="inputGameName">Title</label>
                <input id="inputGameName" class="form-control" type="text" readonly v-model="currentGame.name"/>
            </div>
            <div class="form-group">
                <label for="inputGameRelease">Release Date</label>
                <input id="inputGameRelease" class="form-control" type="datetime-local" readonly v-model="currentGame.releasedOn"/>
            </div>            
        </form>
        <ul class="col-sm-12 nav justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'gameslist' }">Return to List</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'gameedit', params: { id: currentGame.id }}">Edit this game</router-link>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" @click="deleteGame(currentGame.id)">Delete this game</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "gameDetails",
    methods: {
        getGame(){
            this.$store.dispatch('getGame', this.$route.params.id);
        },
        deleteGame(gameId){
            this.$store.dispatch('deleteGame', gameId);
            alert("Game deleted");
            this.$router.push({ name: 'gameslist' });
        },
    },
    mounted: function() {
        this.getGame();
    },
    computed: {
        currentGame(){
            return this.$store.getters.currentGame;
        }
    }
}
</script>

<style>

</style>
