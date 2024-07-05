import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    education: null,
    skills: null,
    testimonials: null,
  },
  getters: {
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload
    },
    setEducation(state, payload) {
      state.education = payload
    },
    setSkills(state, payload) {
      state.skills = payload
    },
    setTestimonials(state, payload) {
      state.testimonials = payload
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        let fetchedData = await fetch('https://nikilitha26.github.io/vue.js-API/API/data.json')
        let data = await fetchedData.json()
        let { projects, education, skills, testimonials } = data
        commit('setProjects', projects)
        commit('setEducation', education)
        commit('setSkills', skills)
        commit('setTestimonials', testimonials)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  modules: {
  }
})
