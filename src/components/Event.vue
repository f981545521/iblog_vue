<template>
    <!--在template中，只能存在一个根组件













    -->
    <div class="event">
        <ul>
            <li v-on:click.prevent="getItemInfo(index, $event)" v-for="(item, index) in names" v-bind:key="index">{{index}} - {{ item }}</li>
        </ul>
        <input type="text" v-on:keyup.enter="getKeyInfo(message)" v-model="message" /><!--enter:回车事件-->
        <!-- 缩写语法 -->
        <input @keyup.enter="submit">
    </div>
</template>

<script>
  export default {//导出可被外部访问
    name: "Event",
    data() {
      return {
        names: ["战神", "刘丽华", "水电工", "豆腐干"],
        message: ""
      }
    },
    methods: {
      getItemInfo(data, $event){
        console.log($event);
        console.log(data + " - " + this.names[data]);
      },
      getKeyInfo(message){
        this.names.push(message);
        console.log(message)
      }
    }
  }

</script>

<style scoped>

</style>
