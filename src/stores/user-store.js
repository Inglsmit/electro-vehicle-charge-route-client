import { defineStore } from 'pinia'
import { server } from 'boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    firstName: null,
    lastName: null,
    email: null
  }),
  getters: {
    getId: (state) => state.id,
    getFirstName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
    getEmail: (state) => state.email
  },
  actions: {
    async login (email, password) {
      try {
        await server.post('login', { email, password })
      } catch (error) {
        if (error) throw error
      }
    },

    async getSanctumCookie () {
      try {
        await server.get('/sanctum/csrf-cookie')
      } catch (error) {
        if (error) throw error
      }
    },

    async getUser () {
      try {
        return await server.get('/api/user')
      } catch (error) {
        if (error) throw error
      }
    },

    setUser (payload) {
      if (payload.id) this.id = payload.id
      if (payload.firstName) this.firstName = payload.firstName
      if (payload.lastName) this.lastName = payload.lastName
      if (payload.email) this.email = payload.email
    },

    clearUser () {
      this.id = null
      this.firstName = null
      this.lastName = null
      this.email = null
    }
  }
})
