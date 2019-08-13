<template>
  <div id="review-detail" class="container" v-if="review">
    <div class="row">
      <form class="col-sm-12">
        <div class="form-group">
          <label for="inputAuthor">Author</label>
          <input
            id="inputAuthor"
            class="form-control"
            readonly
            type="text"
            v-model="review.authorName"
          />
        </div>
        <div class="form-group">
          <label for="inputScore">Score</label>
          <input id="inputScore" class="form-control" type="number" v-model="review.score" />
        </div>
        <div class="form-group" v-if="review.subject">
          <label for="inputGame">Game</label>
          <input
            id="inputGame"
            class="form-control"
            disabled
            type="text"
            v-model="review.subject.name"
          />
        </div>
        <div class="form-group">
          <label for="inputText">Review</label>
          <textarea id="inputText" class="form-control" v-model="review.reviewText" />
        </div>
        <button class="btn btn-primary" @click.prevent="saveChanges()">Save Changes</button>
      </form>
    </div>
    <div class="row">
      <ul class="col-sm-12 nav justify-content-center">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'reviewsDetail', params: { id: review.id }}"
          >Discard changes</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewEdit",
  computed: {
    review: {
      get() {
        return this.$store.getters.currentReview;
      },
      set(value) {
        this.$store.commit("updateReview", value);
      }
    }
  },
  methods: {
    getReview() {
      this.$store.dispatch("getReview", this.$route.params.id);
    },
    saveChanges() {
      this.$store.dispatch("updateReview", this.review);
      alert("The review was updated!");
    }
  },
  mounted() {
    this.getReview();
  }
};
</script>

<style>
</style>
