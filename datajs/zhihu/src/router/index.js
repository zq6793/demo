import Vue from 'vue'
import Router from 'vue-router'
import VsIndex from '../pages/VsIndex'
import VsIdear from '../pages/VsIdear'
import VsSchool from '../pages/VsSchool'
import VsInform from '../pages/VsInform'
import VsMy from "../pages/VsMy"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VsIndex',
      component: VsIndex
    },
    {
      path: '/VsIndex',
      name: 'VsIndex',
      component: VsIndex
    },
    {
      path: '/VsIdear',
      name: 'VsIdear',
      component: VsIdear
    },
    {
      path: '/VsSchool',
      name: 'VsSchool',
      component: VsSchool
    },
    {
      path: '/VsInform',
      name: 'VsInform',
      component: VsInform
    },
    {
      path: '/VsMy',
      name: 'VsMy',
      component: VsMy
    },
  ]
})
