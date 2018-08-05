### VUE使用说明

1.安装node.js(http://www.runoob.com/nodejs/nodejs-install-setup.html)

2.基于node.js,利用淘宝npm镜像安装相关依赖

> 在cmd里直接输入：`npm install -g cnpm --registry=https://registry.npm.taobao.org`，回车，等待安装...

3.安装全局vue-cli脚手架,用于帮助搭建所需的模板框架

1. 输入：cnpm install -g vue-cli，回车，等待安装...

2. 输入：vue，回车，若出现vue信息说明表示成功

### 创建项目

在cmd里输入：`vue init webpack iblog_vue(项目文件夹名)`，回车，等待一小会儿，依次出现‘git’下的项，可按下图操作

`PS G:\GitHub> vue init webpack iblog_vue`

```
  ? Project name iblog_vue
  ? Project description iblog vue project
  ? Author youfang <981545521@qq.com>
  ? Vue build standalone
  ? Install vue-router? Yes
  ? Use ESLint to lint your code? No
  ? Set up unit tests Yes
  ? Pick a test runner jest
  ? Setup e2e tests with Nightwatch? No
  ? Should we run `npm install` for you after the project has been created? (recommended) npm
  
     vue-cli · Generated "iblog_vue".
  
  
  # Installing project dependencies ...
  # ========================
  waiting complete ...
  
  # Project initialization finished!
  # ========================
  
  To get started:
  
    cd iblog_vue
    npm run dev
  
  Documentation can be found at https://vuejs-templates.github.io/webpack
```
### 安装依赖

1. 输入：cd iblog_vue（项目名），回车，进入到具体项目文件夹

2. 输入：cnpm install，回车，等待一小会儿

回到项目文件夹，会发现项目结构里，多了一个node_modules文件夹（该文件里的内容就是之前安装的依赖）
### 测试环境是否搭建成功

1. 在cmd里输入：cnpm run dev

2. 在浏览里输入：localhost:8080(默认端口为8080)
















