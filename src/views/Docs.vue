<template>
    <div id="api-docs">
        <img alt="a book in black and white" src="@/assets/docs_logo.png">
        <h3>Playground API documentation</h3>
        <div id="doc-links">
            <a :href="gitHubUrl">Source Code</a>
            <a :href="swaggerDocUrl">Swagger Doc</a>
            <a :href="swaggerUiUrl">Swagger UI</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "docs",
    computed: {
        swaggerUiUrl(){
            return this.$store.state.swaggerUiUrl;
        },
        swaggerDocUrl(){
            return this.$store.state.swaggerDocUrl;
        },
        gitHubUrl(){
            return this.$store.state.gitHubRepoUrl;
        },
    }
}
</script>

<style>

#doc-links > a{
    margin: 20px;
}

</style>
