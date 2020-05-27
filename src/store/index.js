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
    exposure: 0,
    vibrance: 0,
    sepia: 0,
    filters: ['normal', 'vintage', 'clarity', 'lomo', 'love', 'sunrise', 'nostalgia', 'hazyDays'],
    effects: ['brightness', 'contrast', 'exposure', 'vibrance', 'sepia', 'hue'],
    chosenFilter: 'normal'
  },
  getters: {
    effectValue: (state) => (id) => {
      return state[id]
    },
    activeFilter: (state) => (filter) => {
      if(state.chosenFilter == filter) {
        return true
      }
      else {
        return false
      }
    }
  },
  
  mutations: {
    applyFilters(state) {

      window.Caman("#canvas", function () {
        
        this.revert()

        if(state.chosenFilter != 'normal') {
          this[state.chosenFilter]()
        }
        
        let num = parseInt(state.contrast)
        this.contrast(num)
        this.brightness(state.brightness)
        this.hue(state.hue)
        this.exposure(state.exposure)
        this.sepia(state.sepia)
        this.vibrance(state.vibrance)
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
    saveExposure(state, val){
      state.exposure = val
    },
    saveSepia(state, val){
      state.sepia = val
    },
    saveVibrance(state, val){
      state.vibrance = val
    },
    savePreset(state, filter){
      state.chosenFilter = filter
    }


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

    exposure({commit}, val) {
        commit('saveExposure', val)
        commit('applyFilters')
    },

    vibrance({commit}, val) {
        commit('saveVibrance', val)
        commit('applyFilters')
    },

    sepia({commit}, val) {
        commit('saveSepia', val)
        commit('applyFilters')
    },

    presetChosen({commit}, filter) {
      commit('savePreset', filter)
      commit('applyFilters')
    }
  },

})
