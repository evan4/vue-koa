import axios from 'axios';
import router from '../router';

const admin = {
  namespaced: true,
  state: {
    email: '',
    token: '',
    refresh: '',
    users: [],
    refreshLoading: true,
    authFailed: false,
  },
  getters: {
    email(state){
      return state.email;
    },
    authFailed(state){
      return state.authFailed;
    },
    users(state) {
      return state.users;
    },
    
  },
  mutations: {
    getUsers(state, payload) {
      state.users = payload;
    },
    authuser(state, authData) {
      const {email, type } = authData;
      state.email = email;
      
      if (type === 'singin') {
        router.push('dashboard');
      }
    },
    authFailed(state, type){
      if (type === 'reset') {
          state.authFailed = false;
      }else{
          state.authFailed = true;
      }
    },
    logoutuser(state){
      state.email = '';
      localStorage.removeItem('email');
      router.push('/')
    },
  },
  actions: {
    getUsers({ commit }) {
      axios.get('http://127.0.0.1:3000/users')
        .then((response) => {
          commit('getUsers', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    singin({ commit }, payload) {
      axios.post('http://127.0.0.1:3000/user',  {
        ...payload
      })
        .then((response) => {
          if(response.data){
            commit("authuser", {
              ...response.data,
              type: 'singin'
            });
            localStorage.setItem('email', response.data.email);
          }else{
            commit('authFailed');
          }
        })
        .catch((error) => {
            commit('authFailed');
        });
    }
  },
};

export default admin;
