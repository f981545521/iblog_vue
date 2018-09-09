

### VUE 


#### 生命周期
组件挂载、组件更新、组件销毁的时候出发的一系列的方法，这些方法叫做生命周期函数。

##### vue-resource

1. cnpm install vue-resource --save 
> save 参数会写入当前项目的package.json中
```
  F:\GitHub\iblog_vue>cnpm install vue-resource --save
  √ Installed 1 packages
  √ Linked 44 latest versions
  √ Run 0 scripts
  √ All packages installed (46 packages installed from npm registry, used 13s(network 13s), speed 34.9kB/s, json 45(188.3kB), tarball 275.59kB)
```
2. main.js 中引入vue-resource

3. Vue.use

4. 在组件中直接使用

##### axios

1. cnpm install axios --save 

2.  import Axios from 'axios'

3. 使用


#### 父组件给子组件传值
1. 父组件调用子组件的时候动态绑定属性
```
  <v-header :title="title"></v-header>
```
2. 子组件中通过props接收父组件传过来的数据
```
  props: ['title']
```
#### 子组件给父组件传值
1. 调用子组件的时候定义一个ref
```
  this.$refs.header.showHeader()
```

#### 非父子组件（通过广播的方式）
    VueEvent.$emit('to-news', this.msg);

    VueEvent.$on('to-news', function (data) {
       console.log(data)
     })
