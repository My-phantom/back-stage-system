import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入 echarts 图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({


  router,
  store,
  render: h => h(App)
}).$mount('#app')
