import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

import router from '@/router.js';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://localhost:5000",
    gitHubRepoUrl: "https://github.com/rodolphocastro/ARDC.NetCore.Playground",
    swaggerUiUrl: "http://localhost:5000/index.html",
    swaggerDocUrl: "http://localhost:5000/swagger/v1/swagger.json",
    gitHubClientUrl: "https://github.com/rodolphocastro/ARDC.VueJS.Playground",
    games: {
      gamesList: [],
      currentGame: {}
    },
    reviews: {
      reviewsList: [],
      currentReview: {}
    }
  },
  getters: {
    games: state => {
      return state.games.gamesList;
    },
    currentGame: state => {
      return state.games.currentGame;
    },
    reviews: state => {
      return state.reviews.reviewsList;
    },
    currentReview: state => {
      return state.reviews.currentReview;
    }
  },
  mutations: {
    setGames(state, payload) {
      state.games.gamesList = payload;
    },
    appendGame(state, payload) {
      state.games.gamesList.push(payload);
    },
    setGame(state, payload) {
      state.games.currentGame = payload;
    },
    updateGame(state, payload) {
      let gameIndex = state.games.gamesList.findIndex(g => g.id == payload.id);
      state.games.gamesList[gameIndex] = payload;
      state.games.currentGame = payload;
    },
    deleteGame(state, payload) {
      let gameIndex = state.games.gamesList.findIndex(g => g.id == payload);
      state.games.gamesList.splice(gameIndex, 1);
    },
    setReviews(state, payload) {
      state.reviews.reviewsList = payload;
    },
    appendReview(state, payload) {
      state.reviews.reviewsList.push(payload);
    },
    setReview(state, payload) {
      state.reviews.currentReview = payload;
    },
    updateReview(state, payload) {
      let reviewIndex = state.reviews.reviewsList.findIndex(r => r.id == payload.id);
      state.reviews.reviewsList[reviewIndex] = payload;
      state.reviews.currentReview = payload;
    },
    deleteReview(state, payload) {
      let reviewIndex = state.reviews.reviewsList.findIndex(r => r.id == payload);
      state.reviews.reviewsList.splice(reviewIndex, 1);
    }
  },
  actions: {
    async getGames({ state, commit }) {
      try {
        let response = await axios.get(`${state.apiUrl}/games`);
        commit('setGames', response.data);
      }
      catch (error) {
        commit('setGames', []);
      }
    },
    async getGame({ state, commit }, gameId) {
      try {
        let response = await axios.get(`${state.apiUrl}/games/${gameId}`);
        commit('setGame', response.data);
      }
      catch (error) {
        console.log(error);
        commit('setGame', {});
      }
    },
    async addGame({ state, commit }, newGame) {
      try {
        let response = await axios.post(`${state.apiUrl}/games`, newGame);
        commit('appendGame', response.data);
        router.push({ name: 'gamedetail', params: { id: response.data.id } });
      }
      catch (error) {
        console.log(error);
      }
    },
    async updateGame({ state, commit }, updatedGame) {
      try {
        await axios.put(`${state.apiUrl}/games/${updatedGame.id}`, updatedGame);
        commit('updateGame', updatedGame);
        router.push({ name: 'gamedetail', params: { id: updatedGame.id } });
      }
      catch (error) {
        console.log(error);
      }
    },
    async deleteGame({ state, commit }, gameId) {
      try {
        await axios.delete(`${state.apiUrl}/games/${gameId}`);
        commit('deleteGame', gameId);
      }
      catch (error) {
        console.log(error);
      }
    },
    async getReviews({ state, commit }) {
      try {
        let response = await axios.get(`${state.apiUrl}/reviews`);
        commit('setReviews', response.data);
      }
      catch (error) {
        console.log(error);
        commit('setReviews', []);
      }
    },
    async getReview({ state, commit }, reviewId) {
      try {
        let response = await axios.get(`${state.apiUrl}/reviews/${reviewId}`);
        commit('setReview', response.data);
      }
      catch (error) {
        console.log(error);
        commit('setReview', {});
      }
    },
    async addReview({ state, commit }, newReview) {
      try {
        let response = await axios.post(`${state.apiUrl}/reviews`, newReview);
        commit('appendReview', response.data);
        router.push({ name: 'reviewsDetail', params: { id: response.data.id } });
      }
      catch (error) {
        console.log(error);
      }
    },
    async updateReview({ state, commit }, updatedReview) {
      try {
        let response = await axios.put(`${state.apiUrl}/reviews/${updatedReview.id}`, updatedReview);
        commit('updateReview', updatedReview);
        router.push({ name: 'reviewsDetail', params: { id: updatedReview.id } });
      }
      catch (error) {
        console.log(error);
      }
    },
    async deleteReview({ state, commit }, reviewId) {
      try {
        await axios.delete(`${state.apiUrl}/reviews/${reviewId}`);
        commit('deleteReview', reviewId);
      }
      catch (error) {
        console.log(error);
      }
    }
  }
})
