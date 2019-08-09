<template>
    <div id="review-detail">
        <form>
            <label>
                Author:
                <input disabled type="text" v-model="review.authorName" />
            </label>
            <br/>
            <label>
                Score:
                <input type="number" v-model="review.score" />
            </label>
            <br/>
            <label>
                Game:
                <input disabled type="text" v-model="review.subject.name"/>
            </label>
            <br/>
            <label>
                Review:
                <textarea v-model="review.reviewText" />
            </label>
            <br/>
            <button @click.prevent="saveChanges()">Save Changes</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ReviewEdit',
    computed: {
        review: {
            get(){
                return this.$store.getters.currentReview;
            },
            set(value){
                this.$store.commit('updateReview', value);
            }
        }
    },
    methods: {
        getReview(){
            this.$store.dispatch('getReview', this.$route.params.id);
        },
        saveChanges(){
            this.$store.dispatch('updateReview', this.review);
            alert("The review was updated!");
        }
    },
    mounted(){
        this.getReview();
    }
}
</script>

<style>

</style>
