import Vue from 'vue'
import Router from 'vue-router'
import Chat from "@/components/Chat";

Vue.use(Router)

export default new Router({
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/dialog/:id',
      name: 'Dialog',
      component: Chat
    },
  ]
})
