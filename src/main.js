import Vue from 'vue'
import App from './App.vue'

 import axios from 'axios';
 Vue.prototype.$axios = axios
 Vue.prototype.$author = () => {
   return 'yujian'
 }
// 这是一个函数来的
import VantIndex from './vantIndex';
 
VantIndex()

// 引入路由
import router from './routers';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  
  // 把router实例注入到vue实例中
  router,
}).$mount('#app')
