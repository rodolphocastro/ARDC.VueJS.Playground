<template>
    <div id="review-list" class="container">
        <ul class="list-group row">
            <review-list-item v-for="reviewItem in reviews" :key="reviewItem.id" :review="reviewItem"/>
        </ul>
    </div>
</template>

<script>
import ReviewListItem from './ReviewListItem.vue';

export default {
    name: 'ReviewList',
    components: {
        ReviewListItem
    },
    methods: {
        getReviews() {
            this.$store.dispatch('getReviews');
        },
    },
    computed: {
        reviews() {
            return this.$store.getters.reviews;
        },
    },
    mounted(){
        this.getReviews();
    }
}
</script>

<style>

</style>
