<!-- VUE 组件包括：视图：template 逻辑：script 样式：style -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ 1+1 }}</h2>
    <h2>{{ "哈哈" }}</h2>
    <h2>{{ 0>10? '对的':'错的'}}</h2>
    <p v-html="msg"></p><!--支持标签渲染-->
    <p v-text="msg"></p>
    <p v-bind:class="ha">哈哈哈</p><!--v-bind 用来绑定动态内容-->
    <!-- v条件指令 -->
    <div>
      <p v-if="isShow">我是否能被看见</p>
      <template v-else>if为false才能看到这个。</template><!--template不会被解析-->
    </div>

    <!--循环 , 列表渲染要注意增加key-->
    <div id="list">
      <ul>
        <li v-for="(item, index) in names" v-bind:key="index">{{index}} - {{ item }}</li>
      </ul>
    </div>

    <!--事件-->
    <button v-on:click="++num">累加器</button>
    <p>{{num}}</p>
    <!-- `greet` 是在下面定义的方法名 -->
    <button v-on:click="greet">Greet</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '<p>Hello Vue.js ...</p>',
      ha: 'ha1',
      isShow: false,
      names: ["张三","李四","王五","赵六"],
      num: 1
    }
  },  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例(当前组件)
      alert('Hello ' + this.msg + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
      this.isShow = !this.isShow;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ha{
  color: red;
}
</style>
