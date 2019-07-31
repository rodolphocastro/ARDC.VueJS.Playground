import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiUrl: "http://localhost:5000/",
        swaggerUiUrl: "http://localhost:5000/index.html",
        swaggerDocUrl: "http://localhost:5000/swagger/v1/swagger.json"
    },
    mutations: {

    },
    actions: {

    }
})
