<template>
    <div>
      <h3 class="header">头部组件---{{title}}</h3>
      <button @click="run('123')">执行父组件的方法</button>
      <button @click="showParentData()">执行父组件的方法</button>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
              msg : 'msg'
          }
        },
        methods: {
          showHeader(){
            alert("Header 的run方法")
          },
          showParentData(){
            this.$parent.run();
          }
        },
        props: ['title','run']

    }
</script>

<style scoped>
  .header{
    color: #5FB878;
  }
</style>
