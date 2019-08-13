<template>
  <div id="review-create" class="container">
    <div class="row">
      <p class="lead col-sm-12">Provide the necessary information</p>
    </div>
    <div class="row">
      <form class="col-sm-12">
        <div class="form-group">
          <label for="inputAuthor">Author</label>
          <input type="text" id="inputAuthor" class="form-control" v-model="newReview.authorName" />
        </div>
        <div class="form-group">
          <label for="inputScore">Score</label>
          <input type="number" id="inputScore" class="form-control" v-model="newReview.score" />
        </div>
        <div class="form-group">
          <label for="inputGame">Game</label>
          <select id="inputGame" class="form-control" v-model="newReview.subjectId">
            <option v-for="game in games" :key="game.id" :value="game.id">{{ game.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <textarea id="inputText" class="form-control" v-model="newReview.reviewText" />
        </div>
        <button class="btn btn-primary" @click.prevent="postReview()">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCreate",
  data: () => ({
    newReview: {
      authorName: "",
      reviewText: "",
      score: 0,
      subjectId: ""
    }
  }),
  methods: {
    getGames() {
      this.$store.dispatch("getGames");
    },
    postReview() {
      this.$store.dispatch("addReview", this.newReview);
      alert("The review was created!");
    }
  },
  computed: {
    games() {
      return this.$store.getters.games;
    }
  },
  mounted: function() {
    this.getGames();
  }
};
</script>

<style>
</style>
