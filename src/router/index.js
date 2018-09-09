import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import News from '@/components/News'
import NewsDetail from '@/components/NewsDetail'

Vue.use(Router);

export default new Router({
  mode: 'history',//地址栏history模式，默认：hash模式
  routes: [
    {path: '*', redirect: '/home'},//默认调整路由
    {path: '/', redirect: '/home'},
    {path: '/hello', name: 'HelloWorld', component: HelloWorld},
    {path: '/home', name: 'Home', component: Home},
    {path: '/news', name: 'News', component: News},
    {path: '/new-detail/:id', name: 'NewsDetail', component: NewsDetail}//动态
  ]
})
