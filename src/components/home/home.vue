<template>
  <div class="F-framework">
    <div class="home-name">
      <h2>Hello,Jason</h2>
      <p>非代理</p>
    </div>
    <div class="F-agent">
      <p class="F-agent-L">
        <i class="icon-tb"></i>
        <span>您尚未加入代理，赶快加入吧！</span>
      </p>
      <h3 class="F-agent-R"><router-link to="/homedl">个人中心</router-link></h3>
    </div>
    <a href="" class="F-img"><img src="../../../static/icon/home.png"></a>
    <div class="F-task">
      <h4 class="F-task-wo">我的任务</h4>
      <a class="F-task-all">全部 <i>></i></a>
    </div>
    <div class="F-earnings-outside">
      <p class="F-earnings-new">NEW</p>
      <ul class="F-earnings">
        <li class="F-earnings-1">
          <i class="F-earnings-icon2"></i>
          <p class="F-earnings-title">标题</p>
          <span class="F-earnings-earnings">收益0.5</span>
        </li>
        <li class="F-earnings-1">
          <i class="F-earnings-icon2"></i>
          <p class="F-earnings-title">标题</p>
          <span class="F-earnings-earnings">收益0.5</span>
        </li>
        <li class="F-earnings-1">
          <i class="F-earnings-icon3"></i>
          <p class="F-earnings-title">标题</p>
          <span class="F-earnings-earnings">收益0.5</span>
        </li>
      </ul>
    </div>
    <div class="F-earn">
      <h4 class="F-earn-h4">收益概览</h4>
      <ul class="income">
        <li>
          <p>工资收益</p>
          <span>00.00</span>
        </li>
        <li>
          <p>工资收益</p>
          <span>00.00</span>
        </li>
        <li>
          <p>工资收益</p>
          <span>00.00</span>
        </li>
      </ul>
    </div>
    <p class="F-prompt">加入代理，享受更多玩法和收益</p>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      images: ''
    }
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
@import './home.less';
</style>
