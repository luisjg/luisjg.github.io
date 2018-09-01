import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    work: null,
    school: null
  },
  actions: {
    retrieveWorkData: function (context) {
      if (!sessionStorage.getItem('work')) {
        axios
          .get('https://luisjg.io/json/work.json')
          .then(response => {
            context.commit('storeWorkData', response.data)
          })
          .catch(e => {
            // this.errors.push(e);
          })
      } else {
        context.commit('storeWorkData', JSON.parse(sessionStorage.getItem('work')))
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
            // this.errors.push(e);
          })
      } else {
        context.commit('storeSchoolData', JSON.parse(sessionStorage.getItem('school')))
      }
    }
  },
  getters: {
    schoolData: function (state) {
      return state.school
    },
    workData: function (state) {
      return state.work
    }
  },
  mutations: {
    storeWorkData: function (state, data) {
      sessionStorage.setItem('work', JSON.stringify(data))
      state.work = data
    },
    storeSchoolData: function (state, data) {
      sessionStorage.setItem('school', JSON.stringify(data))
      state.school = data
    }
  }
})
