import Vue from 'vue'
import Router from 'vue-router'
import ComingSoon from '@/components/ComingSoon'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Hobbies from '@/components/Hobbies'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
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
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/blog',
      name: 'blog',
      component: ComingSoon
    },
    {
      path: '/resume',
      name: 'resume',
      component: ComingSoon
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
