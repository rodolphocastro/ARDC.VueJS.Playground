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
                <input disabled type="number" v-model="review.score" />
            </label>
            <br/>
            <label>
                Game:
                <input disabled type="text" v-model="review.subject.name"/>
            </label>
            <br/>
            <label>
                Review:
                <textarea disabled v-model="review.reviewText" />
            </label>
            <br/>
            <router-link :to="{ name: 'reviewsEdit', params: { id: review.id} }">Edit</router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ReviewDetails',
    methods: {
        getReview(){
            this.$store.dispatch('getReview', this.$route.params.id);
        },
    },
    mounted: function() {
        this.getReview();
    },
    computed: {
        review(){
            return this.$store.getters.currentReview;
        }
    }
}
</script>

<style>

</style>
