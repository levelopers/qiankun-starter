import './public-path';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app = null;
let router = null;
let history = null;
function render(props = {}) {
  const { container, routerBase } = props;
  app = createApp(App);
  history = createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL
  );
  router = createRouter({
    history,
    routes,
  });
  app.use(router);
  app.use(ElementPlus)
  app.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  app.unmount();
  router = null;
  history.destroy();
}
