import axios from 'axios';

const pictures = {
  namespaced: true,
  state: {
    pictures: [],
  },
  getters: {
    pictures(state) {
      return state.pictures;
    },
  },
  mutations: {
    getPictures(state, payload) {
      state.pictures = payload.map(item => item);
    },
  },
  actions: {

    // получить списка картинок из БД
    getPictures({ commit }, payload) {
      const limit = !Number.isNaN(Number(payload.limit)) ? payload.limit : 0;
      axios.get(`http://127.0.0.1:3000/pictures?limit=${limit}`)
        .then((response) => {
          commit('getPictures', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

     // получить всех картинок из БД
     getAllPictures({ commit }) {
      
      axios.get(`http://127.0.0.1:3000/pictures`)
        .then((response) => {
          commit('getPictures', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

export default pictures;
