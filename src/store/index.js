import { createStore } from 'vuex'
import auth from './modules/auth.module'

export default createStore({
  state () {
    return {
      message: null
    }
  },
  getters: {
  },
  mutations: {
    setMessage (state, payload) {
      state.message = payload
    },
    clearMessage (state) {
      state.message = null
    }
  },
  actions: {
    setMessage ({ commit }, payload) {
      commit('setMessage', payload)
      setTimeout(() => {
        commit('clearMessage')
      }, 10000)
    }
  },
  modules: {
    auth
  }
})
