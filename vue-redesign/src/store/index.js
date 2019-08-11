import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import Butter from 'buttercms'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    butter: null,
    posts: null,
    post: null,
    experience: null,
    school: null,
    work: null,
    errors: []
  },
  actions: {
    initializeButterCms: function (context) {
      context.commit('initButter', '2bc5de9c5ffa303c5928dfbc228ddb4d2073fe74')
    },
    retrieveBlogPosts: function ({context, state}) {
      state.butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        if (res.data.data.length > 0) {
          context.commit('storeBlogPosts', res.data.data)
        }
      })
    },
    retrieveBlogPost: function ({context, state}, route) {
      state.butter.post.retrieve(route)
        .then(res => {
          context.commit('storeBlogPost', res.data)
        })
    },
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
    posts: function (state) {
      return state.posts
    },
    post: function (state) {
      return state.post
    },
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
    initButter: function (state, data) {
      state.butter = Butter(data)
    },
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
    },
    storeBlogPosts: function (state, data) {
      state.posts = data
    },
    storeBlogPost: function (state, data) {
      state.post = data
    }
  }
})
