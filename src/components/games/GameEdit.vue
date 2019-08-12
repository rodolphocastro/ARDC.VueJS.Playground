<template>
    <div id="game-edit" class="row" v-if="currentGame">
        <form class="col-sm-12">
            <div class="form-group">
                <label for="inputGameName">Title</label>
                <input id="inputGameName" class="form-control" type="text" v-model="currentGame.name"/>
            </div>
            <div class="form-group">
                <label for="inputGameRelease">Release Date</label>                
                <input id="inputGameRelease" class="form-control" type="datetime-local" v-model="currentGame.releasedOn"/>
            </div>
            <button class="btn btn-primary" @click.prevent="saveChanges()">Save Changes</button>
        </form>
        <ul class="col-sm-12 nav justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'gameslist' }">Return to List</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'gamedetail', params: { id: currentGame.id } }">Discard Changes</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'gameEdit',
    methods: {
        getGame: function(){
            this.$store.dispatch('getGame', this.$route.params.id);
        },
        saveChanges: function(){
            this.$store.dispatch('updateGame', this.currentGame);
            alert("The game was updated!");
        }
    },
    mounted: function(){
        this.getGame();
    },
    computed: {
        currentGame: {
            get(){
                return this.$store.getters.currentGame;
            },
            set(value){
                this.$store.commit('updateGame', value);
            }
        }
    }
}
</script>

<style>

</style>
