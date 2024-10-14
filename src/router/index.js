import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
// import TestimonialsView from '../views/TestimonialsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },

  {
    path: '/education',
    name: 'education',
    component: ResumeView
  },

  // {
  //   path: '/testimonial',
  //   name: 'testimonials',
  //   component: TestimonialsView
  // },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },



//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
