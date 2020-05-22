import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portrait: true
  },
  mutations: {
    setView(state, mob) {
      if(mob && window.innerHeight > window.innerWidth) {
        state.portrait = true
      }
      else {
        state.portrait = false
      }
    }
  },
  actions: {
    checkView({commit}, mob) {
      commit("setView", mob)
    }
  },
  modules: {

  }
})
