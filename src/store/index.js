import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    resume: null,
    testimonials: null,
  },
  getters: {
  },
  mutations: {
    setProjects(state,payload){
      state.projects = payload
    },
    setResume(state,payload){
      state.resume = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    }
  },
  actions: {
    async getData({commit}){
      let fetchedData = await fetch('https://nikilitha26.github.io/firstAPI/data/jdata.json')
      let data = await fetchedData.json()
      let {projects, resume, testimonials} = data
      commit('setProjects', projects)
      commit('setResume', resume)
      commit('setTestimonials', testimonials)
    }
  },
  modules: {
  }
})
