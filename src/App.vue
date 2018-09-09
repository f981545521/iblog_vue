<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view/>-->
    <!--<Events />-->
    <v-news />
    <v-home />
  </div>
</template>

<script>
import Events from './components/Event';
import HelloWorld from './components/HelloWorld';
import storage from  './model/storage';
import News from './components/News';
import Home from './components/Home'

storage.set("name", "hello vue");
console.log(storage.get('name'));

export default {
  name: 'App',
  components: {
    Events,
    HelloWorld,
    'v-news': News,/*前面组件的名称不能和HTML标签相同*/
    'v-home': Home/*前面组件的名称不能和HTML标签相同*/
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
