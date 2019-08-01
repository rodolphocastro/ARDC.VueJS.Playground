<template>
    <div id="home-content">
        <img class="page-logo" alt="Stick figure in a swing" src="@/assets/home_logo.png">
        <h3>Welcome to ARDC's VueJS Playground Client</h3>
        <div id="home-links">
            <a href="#">Games</a>
            <a href="#">Reviews</a>
            <router-link to="/docs">API Docs</router-link>
            <a href="#">About</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    methods: {
        goToApiDocs(){
            this.$router.push('/docs');
        }
    }
}
</script>

<style>

#home-links{
    width: auto;
}

#home-links > a {
    margin: 20px;
}

</style>
