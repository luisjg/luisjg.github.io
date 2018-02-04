import Vue from 'vue'
import Router from 'vue-router'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Hobbies from '@/components/Hobbies'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: Hobbies
    }
  ]
})
