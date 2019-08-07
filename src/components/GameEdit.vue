<template>
    <div id="game-edit">
        <form>
            <label>
                Title:
                <input type="text" v-model="currentGame.name"/>
            </label>
            <br/>
            <label>
                Release Date:
                <input type="datetime-local" v-model="currentGame.releasedOn"/>
            </label>
            <br/>
            <button @click.prevent="saveChanges()">Save Changes</button>
        </form>
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
