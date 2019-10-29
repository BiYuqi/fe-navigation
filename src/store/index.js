import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lab: 'console'
}

const mutations = {
  setLab (state, lab) {
    state.lab = lab
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
