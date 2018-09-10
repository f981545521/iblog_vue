<template>
  <!--所有节点要被根节点包起来-->
    <div id="life">
        <h2>生命周期演示 -- {{msg}}</h2>
        <button @click="setMsg()">改变MSG</button>
    </div>
</template>

<script>
    export default {
        name: "Life",
        data(){
          return {
            msg: '生命周期MSG'
          }
        },
        methods: {
          setMsg(){
            this.msg = 'has changed'
          }
        },
        beforeCreate(){
          console.log("实例创建之前")
        },
        created(){
          console.log("实例创建完成")
        },
        beforeMount(){
          console.log("模板渲染之前")
        },
        mounted(){/*请求数据， 操作DOM放在这个里面*/
          console.log("模板渲染完成")
        },
        beforeUpdate(){
          console.log("数据更新之前")
        },
        updated(){
          console.log("数据更新完成")
        },
        beforeDestroy(){/*页面销毁的时候，要保Vue.component存一些数据，在这里保存*/
          console.log("实例销毁之前")
        },
        destroyed(){
          console.log("实例销毁完成")
        }
    }
</script>

<style scoped>

</style>
