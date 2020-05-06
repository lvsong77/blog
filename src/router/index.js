import Vue from 'vue'
import VueRouter from 'vue-router'

// blog主界面路由
const Home = () => import('views/home/Home')
const Projects = () => import('views/projects/Projects')
const About = () => import('views/about/About')

// project界面路由
const ProjectList = () => import('views/projects/childComps/projectList/ProjectList')
// 云音乐
const CloudMusic = () => import('views/projects/cloudMusic/CloudMusic')
const CMLogin = () => import('views/projects/cloudMusic/views/login/Login')
const CMMine = () => import('views/projects/cloudMusic/views/mine/Mine')
const CMDiscovery = () => import('views/projects/cloudMusic/views/discovery/Discovery')
const CMVillage = () => import('views/projects/cloudMusic/views/village/Village')
const CMVideo = () => import('views/projects/cloudMusic/views/video/Video')

const CMDailySongs = () => import('views/projects/cloudMusic/views/discovery/childComps/dailySongs/DailySongs')

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
        path: 'cloud_music',
        component: CloudMusic,
        children: [
          // {
          //   path: '',
          //   redirect: 'login'
          // },
          {
            path: 'login',
            component: CMLogin
          },
          {
            path: 'mine',
            component: CMMine
          },
          {
            path: 'discovery',
            component: CMDiscovery
          },
          {
            path: 'village',
            component: CMVillage
          },
          {
            path: 'video',
            component: CMVideo
          },
          {
            path: 'daily_songs',
            component: CMDailySongs
          },
        ]
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
