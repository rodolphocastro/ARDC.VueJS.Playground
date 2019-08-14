<template>
  <div id="game-create" class="container">
    <div class="row">
      <p class="lead col-sm-12">Provide the necessary information:</p>
    </div>
    <div class="row">
      <form class="col-sm-12">
        <div class="form-group">
          <label for="inputGameName">Title</label>
          <input id="inputGameName" class="form-control" type="text" v-model="newGame.name" />
        </div>
        <div class="form-group">
          <label for="inputGameRelease">Release Date</label>
          <input
            id="inputGameRelease"
            class="form-control"
            type="date"
            v-model="newGame.releasedOn"
          />
        </div>
        <button class="btn btn-primary" @click.prevent="postGame()">Create</button>
      </form>
    </div>
    <div class="row">
      <ul class="col-sm-12 nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'gameslist' }">Return to List</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "gameCreate",
  methods: {
    postGame() {
      this.$store.dispatch("addGame", this.newGame);
      alert("The game was created");
    }
  },
  data: () => ({
    newGame: {
      name: "",
      releasedOn: ""
    }
  })
};
</script>

<style>
</style>
