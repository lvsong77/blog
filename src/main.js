import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入vant组件
import { Tabbar, TabbarItem, Form, Field, Button } from 'vant'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
