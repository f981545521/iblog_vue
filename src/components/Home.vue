<template>
  <div id="home">
    <h4>首页组件</h4>

    <button @click="emitNews()">给New组件广播数据</button>
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
        }
      }
    }
</script>

<style scoped>

</style>
