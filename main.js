import Vue from 'vue'
import App from './App'
import store from './store'
import commonFuc from './utils/commonFuc.js'

Vue.prototype.$store = store
Vue.prototype.$util = commonFuc

import playingBox from './components/playingBox.vue'
Vue.component('playing-box', playingBox)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
