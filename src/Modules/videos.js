import axios from 'axios';

const videos = {
  namespaced: true,
  state: {
    videos: [],
  },
  getters: {
    videos( state ) {

      return state.videos;

    },
  },
  mutations: {
    getVideos( state, payload ) {

      state.videos = payload;

    },
  },
  actions: {

    // получить список видео посредством api youtube
    getVideos( { commit }, payload ) {

      const limit = !Number.isNaN( Number( payload.limit ) ) ? payload.limit : 0;
      axios.get( `http://127.0.0.1:3000/videos?limit=${limit}` )
        .then( ( response ) => {

          commit( 'getVideos', response.data );

        } )
        .catch( ( error ) => {

          console.log( error );

        } );

    },
  },
};

export default videos;
