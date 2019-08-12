<template>
    <div id="reviews-home">
        <img class="page-logo" alt="a dualshock 4 controller" src="@/assets/reviews_logo.png">
        <h3>Reviews</h3>
        <p class="lead">Create, view and edit Reviews</p>
        <div class="row">
            <ul class="col-sm-2 nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Return Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'reviewsList' }">All Reviews</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'reviewsCreate' }">Add a Review</router-link>
                </li>
            </ul>
            <router-view class="col-sm-10">
            </router-view>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Reviews',
}
</script>

<style>

</style>
