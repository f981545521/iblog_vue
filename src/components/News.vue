<template>
    <div>
      <v-header ref="header" :title="title" :run="run"></v-header>
      <button @click="getChildData()">获取子组件的数据和 方法</button>
      <v-life v-if="flag"></v-life>
      <h4>新闻组件</h4>
      <ul>
        <li>1111</li>
        <li>2222</li>
        <li>3333</li>
      </ul>

      <button @click="flag = !flag">挂载卸载Life组件</button>

      <button @click="getNewsData()">请求数据</button>
      <button @click="getNewsDataUseAxios()">Axios请求数据</button>
    </div>
</template>

<script>
  import Header from './Header';
  import Life from './LifeCycle'
  import Axios from 'axios';
  import VueEvent from '../model/vueEvent.js';

    export default {
        name: "News",
        data(){
          return {
            msg: '我是一个新闻组件',
            title: '标题：新闻',
            flag:true,
            list: []
          }
        },
        methods: {
          run(data){
            alert(this.msg + data)
          },
          getNewsData(){
              var url = 'http://m.jxedt.com/questioncomment?page=1&pagesize=2&id=2600001';
              this.$http.jsonp(url).then(function (response) {
                console.log(response)
              },function (err) {
                console.log(err)
              })
          },
          getNewsDataUseAxios(){
            var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            Axios.get(url).then(response => {
              console.log(response);
              this.list = response.data.result;
            }).catch(error => {
              console.log(error)
            })
          },
          getChildData(){
            //alert(this.$refs.header.msg);
            this.$refs.header.showHeader()
          }
        },
      components: {
          'v-header': Header,
          'v-life': Life
      },
      mounted() {
        VueEvent.$on('to-news', function (data) {
          console.log(data)
        })
    }
    }
</script>

<style scoped>

</style>
