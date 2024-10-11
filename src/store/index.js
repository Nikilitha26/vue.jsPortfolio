import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    education: null,
    technicalskills: null,
    softskills: null,
    mybadges: null,
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
    setTechnicalskills(state, payload) {
      state.technicalskills = payload
    },
    setSoftskills(state, payload) {
      state.softskills = payload
    },
    setMybadges(state, payload) {
      state.mybadges = payload
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
        console.log("Fetching data...");
        let fetchedData = await fetch('https://nikilitha26.github.io/vue.js-API/API/data.json')
        let data = await fetchedData.json()
        console.log("Data fetched:", data);
        let { projects, education, technicalskills, softskills, mybadges, testimonials, experience } = data
        commit('setProjects', projects)
        commit('setEducation', education)
        commit('setTechnicalskills', technicalskills)
        commit('setSoftskills', softskills)
        commit('setMybadges', mybadges)
        commit('setTestimonials', testimonials)
        commit('setExperience', experience)
        console.log("Data committed to store");
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  modules: {
  }
})
