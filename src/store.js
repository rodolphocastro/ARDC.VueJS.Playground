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
            gamesList: []
        }
    },
    mutations: {
        setGames(state, payload){
            state.games.gamesList = payload;
        },
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
        }
    }
})
