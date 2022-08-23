import axios from 'axios'
import { error } from '@/utils/error'

export default {
  namespaced: true,
  state () {
    return {
      token: localStorage.getItem('token')
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
      localStorage.setItem('token', JSON.stringify(payload))
    },
    logout (state) {
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    async login ({ commit, dispatch }, payload) {
      const key = process.env.VUE_APP_FB_API_KEY
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
      try {
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
        commit('setToken', data.idToken)
      } catch (e) {
        await dispatch('setMessage', error(e.response.data.error.message), { root: true })
      }
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    isAuthenticated (_, getters) {
      return !!getters.token
    }
  }
}
