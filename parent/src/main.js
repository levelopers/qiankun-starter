import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'child',
    entry: '//localhost:8081',
    container: '#qiankun-container',
    activeRule: '/child',
  }
]);
// 启动 qiankun
start();