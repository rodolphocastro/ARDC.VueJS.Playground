<template>
    <div id="reviews-home">
        <p>
            <router-link to="/">Home</router-link>
        </p>
        <img class="page-logo" alt="a dualshock 4 controller" src="@/assets/reviews_logo.png">
        <h3>Reviews</h3>
        <div id="reviews-navigation">
            <router-link :to="{ name: 'reviewsList' }">All Reviews</router-link>
            <router-link :to="{ name: 'reviewsCreate' }">Add a Review</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Reviews',
}
</script>

<style>

#reviews-navigation > a {
    margin: 20px;
}

</style>
