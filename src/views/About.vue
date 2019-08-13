<template>
  <div id="about-home">
    <img class="page-logo" alt="a book in black and white" src="@/assets/about_logo.png" />
    <h3>Playground API Documentation</h3>
    <p class="lead">Here you can find all the documentation about this client</p>
    <div class="row">
      <ul class="nav col-sm-3 flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <a :href="gitHubRepo" class="nav-link">GitHub Repository</a>
        </li>
        <li class="nav-item">
          <a :href="pixabayUrl" class="nav-link">Pixabay Website</a>
        </li>
        <li class="nav-item">
          <a :href="bootstrapUrl" class="nav-link">Bootstrap</a>
        </li>
      </ul>
      <div class="col-sm-9">
        <div class="jumbotron">
          <h4>Source Code</h4>
          <p class="lead">All the source code for this client can be found on GitHub!</p>
          <hr class="my-4">
          <a :href="gitHubRepo" class="btn btn-primary">Take me to GitHub</a>
        </div>
        <div class="jumbotron">
          <h4>Images</h4>
          <p class="lead">All the images for this client come from Pixabay!</p>
          <hr class="my-4">
          <a :href="pixabayUrl" class="btn btn-info">Take me to Pixabay</a>
        </div>
        <div class="jumbotron">
          <h4>Style</h4>
          <p class="lead">This client uses Bootstrap for its Styling!</p>
          <hr class="my-4">
          <a :href="bootstrapUrl" class="btn btn-success">Take me to Bootstrap</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed:{
    gitHubRepo(){
      return this.$store.state.gitHubClientUrl;
    },
    pixabayUrl(){
      return 'https://pixabay.com/';
    },
    bootstrapUrl(){
      return 'https://getbootstrap.com/';
    }
  }
};
</script>

<style>
</style>