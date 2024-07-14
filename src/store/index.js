import Vue from 'vue';
import localforage from 'localforage';
import Vuex from 'vuex';
import userModule from './modules/user';
import VuexPersistence from 'vuex-persist'
import AllChannels from './modules/AllChannels';
import AllMessages from './modules/AllMessages';

Vue.use(Vuex);

const vuexlocal = new VuexPersistence({
    storage: localforage,
    asyncStorage:true
})

export default new Vuex.Store({
  modules: {
    userModule,
    AllChannels,
    AllMessages,
    },
  plugins: [vuexlocal.plugin]   

});