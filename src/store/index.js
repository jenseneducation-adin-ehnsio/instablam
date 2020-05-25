import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portrait: true,
    isMirrored: true,
    brightness: 50,
    contrast: 50,
  },
  mutations: {
    setView(state, mob) {
      if(mob && window.innerHeight > window.innerWidth) {
        state.portrait = true
      }
      else {
        state.portrait = false
      }
    },
    flipImage(state) {
      state.isMirrored = !state.isMirrored
    },
    saveBrightness(state, val){
      state.brightness = val
    },
    saveContrast(state, val){
      state.contrast = val
    },


  },
  actions: {
    checkView({commit}, mob) {
      commit("setView", mob)
    },
    flipCamera({commit}) {
      commit("flipImage")
    },
    slideBrightness({commit}, val) {
      commit('saveBrightness', val)
    },
    slideContrast({commit}, val) {
      commit('saveContrast', val)
    },
  },
  modules: {

  }
})
