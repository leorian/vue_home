// main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import VueResource from 'vue-resource'
import iView from 'iview';
import 'assets/sass/index.scss'
import 'assets/less/common.less'

Vue.config.debug = true; // 开启错误提示
Vue.use(VueResource)
Vue.use(iView);
Vue.http.options.emulateHTTP = true
new Vue({
  router,
  el: '#appIndex',
  render: h => h(App)
})
