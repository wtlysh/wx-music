import Vue from 'vue'
import App from './App'
import store from './store'
import commonFuc from './utils/commonFuc.js'

Vue.prototype.$store = store
Vue.prototype.$util = commonFuc

import playingBox from './components/playingBox.vue'
import NavBar from './components/nav-bar/nav-bar.vue'
import UniIcons from './components/uni-icons/uni-icons.vue'
import UniPopup from './components/uni-popup/uni-popup.vue'
Vue.component('playing-box', playingBox)
Vue.component('nav-bar', NavBar)
Vue.component('uni-icons', UniIcons)
Vue.component('uni-popup', UniPopup)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
