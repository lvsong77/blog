import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件
import { Tabbar, TabbarItem } from 'vant'
// 引入flexibel
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

Vue.use(Tabbar);
Vue.use(TabbarItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
