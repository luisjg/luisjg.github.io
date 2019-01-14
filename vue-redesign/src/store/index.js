import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    experience: null,
    school: null,
    work: null,
    errors: []
  },
  actions: {
    retrieveExperienceData: function (context) {
      if (!sessionStorage.getItem('experience')) {
        axios
          .get('https://luisjg.io/json/experience.json')
          .then(response => {
            context.commit('storeExperienceData', response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      } else {
        context.commit('storeExperienceData', JSON.parse(sessionStorage.getItem('experience')))
      }
    },
    retrieveSchoolData: function (context) {
      if (!sessionStorage.getItem('school')) {
        axios
          .get('https://luisjg.io/json/education.json')
          .then(response => {
            context.commit('storeSchoolData', response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      } else {
        context.commit('storeSchoolData', JSON.parse(sessionStorage.getItem('school')))
      }
    },
    retrieveWorkData: function (context) {
      if (!sessionStorage.getItem('work')) {
        axios
          .get('https://luisjg.io/json/work.json')
          .then(response => {
            context.commit('storeWorkData', response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      } else {
        context.commit('storeWorkData', JSON.parse(sessionStorage.getItem('work')))
      }
    }
  },
  getters: {
    experienceData: function (state) {
      return state.experience
    },
    schoolData: function (state) {
      return state.school
    },
    workData: function (state) {
      return state.work
    }
  },
  mutations: {
    storeExperienceData: function (state, data) {
      sessionStorage.setItem('experience', JSON.stringify(data))
      state.experience = data
    },
    storeSchoolData: function (state, data) {
      sessionStorage.setItem('school', JSON.stringify(data))
      state.school = data
    },
    storeWorkData: function (state, data) {
      sessionStorage.setItem('work', JSON.stringify(data))
      state.work = data
    }
  }
})
