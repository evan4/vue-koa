import axios from 'axios';

const admin = {
  namespaced: true,
  state: {
    user: null,
    users: [],
  },
  getters: {
    user(state) {
      return state.user;
    },
    users(state) {
      return state.users;
    },
  },
  mutations: {
    getUser(state, payload) {
      state.user = payload;
    },
    getUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUser({ commit }) {
      axios.post('http://127.0.0.1:3000/user', {
        email: 'eee',
      })
        .then((response) => {
          commit('getUser', response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUsers({ commit }) {
      axios.get('http://127.0.0.1:3000/users')
        .then((response) => {
          commit('getUsers', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

export default admin;
