import Vue from 'vue'
import App from './App'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import router from './router/index.js'
import './style/element-variables.scss'
import './router/premisson.js'
import FullCalendar from 'vue-fullcalendar'

import './assets/icons/iconfont.css';

import router from './router'
Vue.use(ElementUI)
Vue.use(FullCalendar)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
