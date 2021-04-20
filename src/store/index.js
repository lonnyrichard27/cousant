import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects
    }
  },
  actions: {
    async fetchProjects({ commit }){
      try{
        const {data} = await axios.get("https://244b8df3-7491-4cfd-a48b-267f19446372.mock.pstmn.io/")
        commit('SET_PROJECTS', data.data)
        return data
      } catch (error){
        console.log(error);
      }
    }
  },
  modules: {
  }
})
