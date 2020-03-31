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
    retrieveBlogPosts: function ({commit, state}) {
      if (!sessionStorage.getItem('posts')) {
        state.butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          if (res.data.data.length > 0) {
            commit('storeBlogPosts', res.data.data)
          }
        })
      } else {
        commit('storeBlogPosts', JSON.parse(sessionStorage.getItem('posts')))
      }
    },
    retrieveBlogPost: function ({commit, state}, route) {
      if (!sessionStorage.getItem(route)) {
        state.butter.post.retrieve(route)
          .then(res => {
            commit('storeBlogPost', res.data)
          })
      } else {
        commit('storeBlogPost', JSON.parse(sessionStorage.getItem(route)))
      }
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
    butter: function (state) {
      if (state.butter == null) {
        return false
      } else {
        return true
      }
    },
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
      sessionStorage.setItem('posts', JSON.stringify(data))
      state.posts = data
    },
    storeBlogPost: function (state, data) {
      sessionStorage.setItem(data.data.slug, JSON.stringify(data))
      state.post = data
    }
  }
})
