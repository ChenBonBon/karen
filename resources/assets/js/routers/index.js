window.Vue = require('vue');

import VueRouter from 'vue-router'
import Index from '~pages/index/index.vue'
import Music from '~pages/music/music.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/music', component: Music, name: 'music' },
]

const router = new VueRouter({
    routes
})

export default router