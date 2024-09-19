import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    education: null,
    skills: null,
    testimonials: null,
    experience: null,
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
    },
    setExperience(state, payload) {
      state.experience = payload
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        let fetchedData = await fetch('https://nikilitha26.github.io/vue.js-API/API/data.json')
        let data = await fetchedData.json()
        let { projects, education, skills, testimonials, experience } = data
        commit('setProjects', projects)
        commit('setEducation', education)
        commit('setSkills', skills)
        commit('setTestimonials', testimonials)
        commit('setExperience', experience)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  modules: {
  }
})
