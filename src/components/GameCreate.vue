<template>
    <div id="game-create">
        <h3>Create a new game</h3>
        <form>
            <label>
                Title:
                <input type="text" v-model="newGame.name"/>
            </label>
            <label>
                Release Date:
                <input type="date" v-model="newGame.releasedOn"/>
            </label>
            <button @click="postGame()">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'gameCreate',
    methods: {
        postGame(){
            this.$store.dispatch('addGame', this.newGame);
            // TODO: SHow some feedback to the user
        }
    },
    data: () => ({
        newGame: {
            name: "",
            releasedOn: "",
        },
    })
}
</script>

<style>

</style>
