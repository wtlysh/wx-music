import Vue from 'vue'
import App from './App'
import store from './store'
import commonFuc from './utils/commonFuc.js'

Vue.prototype.$store = store
Vue.prototype.$util = commonFuc

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
