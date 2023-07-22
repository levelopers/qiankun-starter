import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue3-child',
    entry: '//localhost:10001',
    container: '#qiankun-container',
    activeRule: '/vue3-child',
    props: {
      routerBase: '/vue3-child',
    },
  },
  {
    name: 'vue2-child',
    entry: '//localhost:10002',
    container: '#qiankun-container',
    activeRule: '/vue2-child',
    props: {
      routerBase: '/vue2-child',
    },
  },
]);
// 启动 qiankun
start();
