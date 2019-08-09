<template>
    <li>
        {{ review.subjectName }}
        <router-link :to="{ name: 'reviewsDetail', params: { id: review.id }}">View</router-link> |
        <router-link :to="{ name: 'reviewsEdit', params: { id: review.id }}">Edit</router-link> |
        <a href="#" @click="deleteReview(review.id)">Delete</a>
    </li>
</template>

<script>
export default {
    name: 'ReviewListItem',
    props: {
        review: {}
    },
    methods: {
        deleteReview(){
            // TODO: Do something
        }
    }
}
</script>

<style>

</style>
