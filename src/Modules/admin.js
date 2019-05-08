import axios from 'axios';
import router from '../router';

const admin = {
  namespaced: true,
  state: {
    email: '',
    token: '',
    users: [],
    authFailed: false,
  },
  getters: {
    isAuth(state){
      return state.token ? true : false;
    },
    authFailed(state) {
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
      const {email} = authData.user;
      const { token, type } = authData;

      state.token = token;
      state.email = email;

      if (type === 'singin') {
        router.push('dashboard');
      }
    },
    authFailed(state, type) {
      if (type === 'reset') {
        state.authFailed = false;
      } else {
        state.authFailed = true;
      }
    },
    logoutuser(state) {
      state.token = '';
      state.email = '';

      localStorage.removeItem('token');
      localStorage.removeItem('email');
      router.push('/');
    },
    refreshToken(state, payload){
      state.token = localStorage.getItem('token');
      state.email = localStorage.getItem('email');
    }
  },
  actions: {
    refreshToken({ commit }) {
      const token = localStorage.getItem('token');
      
      if (token) {
        
        axios.post('http://127.0.0.1:3000/verify',{
          headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
          if(response === false){
            commit('logoutuser');
          }else{
            commit('refreshToken');
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
    },

    // получение списка пользователей
    getUsers({ commit }) {
      axios.get('http://127.0.0.1:3000/users')
        .then((response) => {
          commit('getUsers', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // аунтефикация пользователя в системе
    singin({ commit }, payload) {
      axios.post('http://127.0.0.1:3000/user', {
        ...payload,
      })
        .then((response) => {
          if (response.data) {
            commit('authuser', {
              ...response.data,
              type: 'singin',
            });

            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('token', response.data.token);

          } else {
            commit('authFailed');
          }
        })
        .catch((error) => {
          commit('authFailed');
        });
    },

    // создание нового пользователя
    singup({ commit }, payload) {
      axios.post('http://127.0.0.1:3000/singup', {
        ...payload,
      })
        .then((response) => {
          if (response.data) {
            commit('authuser', {
              ...response.data,
              type: 'singin',
            });
            localStorage.setItem('email', response.data.email);
          } else {
            commit('authFailed');
          }
        })
        .catch((error) => {
          commit('authFailed');
        });
    },
  },
};

export default admin;
