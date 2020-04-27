import Vue from 'vue'
import VueRouter from 'vue-router'

// blog主界面路由
const Home = () => import('views/home/Home')
const Projects = () => import('views/projects/Projects')
const About = () => import('views/about/About')

// project界面路由
const ProjectList = () => import('views/projects/childComps/projectList/ProjectList')
// 云音乐
const CloudMusic = () => import('views/projects/neteaseCloudMusic/CloudMusic')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/projects',
    component: Projects,
    meta: {
      showTab: true
    },
    children: [
      {
        path: '',
        component: ProjectList,
        meta: {
          showTab: true
        }
      },
      {
        path: '/projects/cloud_music',
        component: CloudMusic,
        meta: {
          showTab: false
        }
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      showTab: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
