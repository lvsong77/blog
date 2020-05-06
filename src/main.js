import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入iconfont
import 'assets/iconfont/iconfont.css'

// 按需引入vant组件
import { Icon, Tabbar, TabbarItem, Form, Field, Button, Swipe, SwipeItem, NavBar } from 'vant'

Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
