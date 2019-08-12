<template>
  <div id="review-detail" class="row">
    <form class="col-sm-12" v-if="review">
      <div class="form-group">
        <label for="inputAuthor">Author</label>
        <input
          id="inputAuthor"
          class="form-control"
          disabled
          type="text"
          v-model="review.authorName"
        />
      </div>
      <div class="form-group">
        <label for="inputScore">Score</label>
        <input id="inputScore" class="form-control" disabled type="number" v-model="review.score" />
      </div>
      <div class="form-group">
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
        <textarea id="inputText" class="form-control" disabled v-model="review.reviewText" />
      </div>
    </form>
    <ul class="col-sm-12 nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'reviewsList' }">Return to List</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'reviewsEdit', params: { id: review.id }}">Edit</router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click="deleteReview(review.id)">Delete</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ReviewDetails",
  methods: {
    getReview() {
      this.$store.dispatch("getReview", this.$route.params.id);
    },
    deleteReview(reviewId) {
      this.$store.dispatch("deleteReview", reviewId);
      alert("Review deleted");
      this.$router.push({ name: 'reviewsList' });
    }
  },
  mounted: function() {
    this.getReview();
  },
  computed: {
    review() {
      return this.$store.getters.currentReview;
    }
  }
};
</script>

<style>
</style>
