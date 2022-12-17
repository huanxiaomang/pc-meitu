import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search/:searchParams',
    name: 'searchMY',
    component: () => import('@/views/SearchView.vue')
  },
  {
    path: '/imgdetail/:imgLink',
    name: 'imgDetail',
    component: () => import('@/views/ImgModule/ImgItem.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('@/views/Music/MusicHome.vue')
  },
  {
    path: '/des',
    name: 'description',
    component: () => import('@/views/DescView.vue')
  }, {
    path: '/:path(.*)',
    component: () => import('@/views/NotFound.vue')
  },{
    path:'/phone',
    component: ()=> import('@/views/phone.vue')
  },{
    path:'/setting',
    name:'setting',
    component: ()=> import('@/views/setting/setting.vue')
  },{
    path:'/sports',
    name:'sports',
    component: ()=> import('@/views/Sports/SportView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router