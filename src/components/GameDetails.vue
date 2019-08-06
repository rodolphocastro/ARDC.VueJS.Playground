<template>
    <div id="game-detail">
        <form>
            <label>
                Title:
                <input type="text" disabled v-model="currentGame.name"/>
            </label>
            <br/>
            <label>
                Release Date:
                <input type="date" disabled v-model="currentGame.releasedOn"/>
            </label>
            <br/>
        </form>
    </div>
</template>

<script>
export default {
    name: "gameDetails",
    methods: {
        getGame(){
            this.$store.dispatch('getGame', this.$route.params.id);
        }
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
