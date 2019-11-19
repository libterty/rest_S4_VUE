import Vue from 'vue'
import Vuex from 'vuex'
import Request from '../api';
const request = new Request();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser 
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await request.getCurrentUser();
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        commit('setCurrentUser', {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.image,
          isAdmin: data.isAdmin
        })
        return true
      } catch (error) {
        // commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
