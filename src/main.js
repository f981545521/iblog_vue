// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'//2. 引入

Vue.config.productionTip = false;

Vue.use(VueResource);//3. 使用

/** eslint-disable no-new
 * 每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的
 *
 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
