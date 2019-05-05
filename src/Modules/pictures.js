import Vue from 'vue';
import axios from 'axios';

const pictures = {
    namespaced: true,
    state: {
        pictures: []
    },
    getters: {
        pictures(state){
            return state.pictures;
        },
    },
    mutations: {
        getPictures(state, payload){
            state.pictures = payload.map(item => item);
        },
    },
    actions: {
        getPictures({commit}, payload){
            axios.get(`http://127.0.0.1:3000/pictures?limit=${payload.limit}`)
                .then((response) => {
                    commit('getPictures',  response.data);
                    console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
        }
    }
};

export default pictures;