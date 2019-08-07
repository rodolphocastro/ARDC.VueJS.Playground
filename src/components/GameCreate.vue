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
            <button @click.prevent="postGame()">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'gameCreate',
    methods: {
        postGame(){
            this.$store.dispatch('addGame', this.newGame);
            alert("The game was created");
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
