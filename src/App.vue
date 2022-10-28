<template>
  <div id="app">
    <router-view/>
    <!-- <ul class="F-bot-menu">
      <li class="selected">
        <i class="icon-sy"></i>
        <p>首页</p>
      </li>
      <li>
        <i class="icon-sc"></i>
        <p>商城</p>
      </li>
      <li>
        <i class="icon-yl"></i>
        <p>娱乐</p>
      </li>
      <li>
        <i class="icon-wd"></i>
        <p>我的</p>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  padding-bottom: 50px;
}

@import './app.less';
</style>
