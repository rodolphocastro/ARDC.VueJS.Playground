<template>
    <div id="review-create">
        <h3>Create a new Review</h3>
        <form>
            <label>
                Author:
                <input type="text" v-model="newReview.authorName" />
            </label>
            <br/>
            <label>
                Score:
                <input type="number" v-model="newReview.score" />
            </label>
            <br/>
            <label>
                Game:
                <select v-model="newReview.subjectId">
                    <option v-for="game in games" :key="game.id" :value="game.id">
                        {{ game.name }}
                    </option>
                </select>
            </label>
            <br/>
            <label>
                Review:
                <textarea v-model="newReview.reviewText" />
            </label>
            <br/>
            <button @click.prevent="postReview">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ReviewCreate',
    data: () => ({
        selectedGame: {
            id: "",
            name: ""
        },
        newReview: {
            authorName: "",
            reviewText: "",
            score: 0,
            subjectId: ""
        }
    }),
    methods: {
        getGames(){
            this.$store.dispatch('getGames');
        },
        postReview(){
            this.$store.dispatch('addReview', this.newReview);
            alert('The review was created!');
        },
    },
    computed: {
        games(){
            return this.$store.getters.games;
        }
    },
    mounted: function() {
        this.getGames();
    }
}
</script>

<style>

</style>
