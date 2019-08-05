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
        games: {
            gamesList: [],
            currentGame: {}
        }
    },
    mutations: {
        setGames(state, payload){
            state.games.gamesList = payload;
        },
        appendGame(state, payload){
            state.games.gamesList.push(payload);
        },
        setGame(state, payload){
            state.games.currentGame = payload;
        }
    },
    actions: {
        async getGames({state, commit}) {
            try {
                let response = await axios.get(`${state.apiUrl}/games`);
                commit('setGames', response.data);
            }
            catch(error){
                commit('setGames', []);
            }
        },
        async getGame({state, commit}, gameId) {
            try {
                let response = await axios.get(`${state.apiUrl}/games/${gameId}`);
                commit('setGame', response.data);
            }
            catch(error){
                console.log(error);
            }
        },
        async addGame({state, commit}, newGame) {
            try {
                let response = await axios.post(`${state.apiUrl}/games`, newGame);
                commit('appendGame', response.data)
            }
            catch(error){
                console.log(error);
            }
        }
    }
})
