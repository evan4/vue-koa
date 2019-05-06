import Vue from 'vue';
import Vuex from 'vuex';

import pictures from './Modules/pictures';
import videos from './Modules/videos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pictures,
    videos,
  },
});
