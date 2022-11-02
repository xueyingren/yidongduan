import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import homedl from '@/components/home/homedl'
import agent from '@/components/agent/agent'
import pay from '@/components/agent/pay'
import personal from '@/components/personalCenter/personal'
import setUpThe from '@/components/personalCenter/setUpThe'
import agentDetail from '@/components/personalCenter/agentDetail'
import ranking from '@/components/ranking/ranking'
import salesAmount from '@/components/salesAmount/salesAmount'

export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/homedl',
    name: 'homedl',
    meta: { requieAuth: true },
    component: homedl
  },
  {
    path: '/agent',
    name: 'agent',
    meta: { requieAuth: true },
    component: agent
  },
  {
    path: '/pay',
    name: 'pay',
    meta: { requieAuth: true },
    component: pay
  },
  {
    path: '/personal',
    name: 'personal',
    meta: { requieAuth: true },
    component: personal
  },
  {
    path: '/setUpThe',
    name: 'setUpThe',
    meta: { requieAuth: true },
    component: setUpThe
  },
  {
    path: '/ranking',
    name: 'ranking',
    meta: { requieAuth: true },
    component: ranking
  },
  {
    path: '/agentDetail',
    name: 'agentDetail',
    meta: { requieAuth: true },
    component: agentDetail
  },
  {
    path: '/salesAmount',
    name: 'salesAmount',
    meta: { requieAuth: true },
    component: salesAmount
  },
  {
    path: '/403',
    component: () => import('@/components/error-page/403')
  },
  {
    path: '*',
    component: () => import('@/components/error-page/404')
  }
]
