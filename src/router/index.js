import Vue from 'vue'
import Router from 'vue-router'
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
import '../../static/base.css'

Vue.use(Router)

export default new Router({
  routes: [
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
      component: homedl
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/setUpThe',
      name: 'setUpThe',
      component: setUpThe
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/agentDetail',
      name: 'agentDetail',
      component: agentDetail
    },
    {
      path: '/salesAmount',
      name: 'salesAmount',
      component: salesAmount
    }
  ]
})
