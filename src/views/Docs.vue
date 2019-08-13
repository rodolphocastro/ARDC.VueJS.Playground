<template>
    <div id="api-docs">
      <img class="page-logo" alt="a book in black and white" src="@/assets/docs_logo.png">
      <h3>Playground API Documentation</h3>
      <p class="lead">Here you can find all the documentation about the API backing this client</p>
      <div class="row">
        <ul class="nav col-sm-3 flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="gitHubUrl">Source Code</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="swaggerDocUrl">Swagger Doc</a>
          </li>
          <li class="nav-item">
            <a :href="swaggerUiUrl" class="nav-link">Swagger UI</a>
          </li>
        </ul>
        <div class="col-sm-9">
          <div class="jumbotron">
            <h4>Source Code</h4>
            <p class="lead">All the source code for the API can be found on GitHub!</p>
            <hr class="my-4">
            <a class="btn btn-success" :href="gitHubUrl">Take me to GitHub</a>
          </div>
          <div class="jumbotron">
            <h4>Swagger UI</h4>
            <p class="lead">The API provides a SwaggerUi for you to play around!</p>
            <hr class="my-4">
            <a class="btn btn-primary" :href="swaggerUiUrl">Take me to the UI</a>
          </div>
          <div class="jumbotron">
            <h4>Swagger Doc</h4>
            <p class="lead">If you wish to use the API with another client, the OpenAPI specification is also available!</p>
            <hr class="my-4">
            <a class="btn btn-info" :href="swaggerDocUrl">Take me to the Docs</a>
          </div>
        </div>
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
