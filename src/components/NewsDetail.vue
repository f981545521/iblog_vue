<template>
    <div id="content">
      我是详情页面
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
        data(){
          return{
            msg: '详情页面'
          }
        },
        mounted(){
          console.log(this.$route.params)//获取动态路由传值
        }
    }
</script>

<style scoped>

</style>
