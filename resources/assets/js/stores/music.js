import Vue from 'vue'
import Vuex from 'vuex'

import scroll from './modules/scroll'
import music from './modules/music'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        scroll,
        music
    }
})