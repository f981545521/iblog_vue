<template>
  <div id="home">
    <h4>首页组件</h4>

    <button @click="emitNews()">给New组件广播数据</button>
    <button @click="toHelloWorld()">去HelloWorld</button>
  </div>
</template>

<script>
    import VueEvent from '../model/vueEvent.js'
    export default {
        name: "Hemo",
        data(){
          return {
            msg: 'Home组件'
          }
        },
      methods: {
        emitNews(){
          VueEvent.$emit('to-news', this.msg);
        },
        toHelloWorld(){
          this.$router.push({ path: 'hello', params: {id: 123}});
        }
      }
    }
</script>

<style scoped>

</style>
