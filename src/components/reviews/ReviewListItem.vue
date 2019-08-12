<template>
    <li class="list-group-item list-group-item-action" @click="detailReview(review.id)">
        {{ review.subjectName }}
    </li>
</template>

<script>
export default {
    name: 'ReviewListItem',
    props: {
        review: {}
    },
    methods: {
        detailReview(reviewId){
          this.$router.push({ name: 'reviewsDetail', params: { id: reviewId}});
        }
    }
}
</script>

<style>

</style>
