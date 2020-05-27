import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: '',
    portrait: true,
    isMirrored: true,
    brightness: 0,
    contrast: 0,
    hue: 0,

    

  },
  mutations: {
    applyFilters(state) {

      window.Caman("#canvas", function () {
        this.revert()
        let num = parseInt(state.contrast)
        this.contrast(num)
        this.brightness(state.brightness)
        this.hue(state.hue)
        this.render()
        }
      );

    },
    setView(state, mob) {
      if(mob && window.innerHeight > window.innerWidth) {
        state.portrait = true
      }
      else {
        state.portrait = false
      }
    },
    saveImg(state, img) {
      state.image = img
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
    saveHue(state, val){
      state.hue = val
    },


  },
  actions: {
    checkView({commit}, mob) {
      commit("setView", mob)
    },
    flipCamera({commit}) {
      commit("flipImage")
    },
    saveImage({commit}, img) {
      commit('saveImg', img)
    },


    brightness({commit}, val) {
        commit('saveBrightness', val)
        commit('applyFilters')
    },


    contrast({commit}, val) {
        commit('saveContrast', val)
        commit('applyFilters')
    },
    
    hue({commit}, val) {
        commit('saveHue', val)
        commit('applyFilters')
    },
  },

})
