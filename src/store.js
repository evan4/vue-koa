import Vue from 'vue';
import Vuex from 'vuex';

import pictures from './Modules/pictures';
import videos from './Modules/videos';
import admin from './Modules/admin';

Vue.use( Vuex );

export default new Vuex.Store( {
  modules: {
    pictures,
    videos,
    admin,
  },
} );
