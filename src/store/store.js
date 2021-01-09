import Vue from 'vue';
import Vuex from "vuex";
import chat from "./modules/chat";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    chat,
  }
})

export default store
