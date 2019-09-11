import Vue from 'vue'
import Router from 'vue-router'
const BlogHome = () => import('../components/BlogHome')
const BlogPost = () => import('../components/BlogPost')
const ComingSoon = () => import('../components/ComingSoon')
const Education = () => import('../components/Education')
const Experience = () => import('../components/Experience')
const Hobbies = () => import('../components/Hobbies')
const Home = () => import('../components/Home')
const NotFound = () => import('../components/NotFound')
const Portfolio = () => import('../components/Portfolio')
const Skills = () => import('../components/Skills')

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
      component: BlogHome
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/projects',
      name: 'projects',
      component: ComingSoon
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
