<template>
  <div class="F-personal">
    <p class="F-personal-wo">我的</p>
    <div class="F-personal-role">
      <div class="F-role-top">
        <div class="F-portrait">
          <img src="../../../static/images/1.png" />
          <div>
            <p class="F-name">阿里的设计</p>
            <p class="F-level">
              <i></i>
              <span>代理等级：3</span>
            </p>
          </div>
        </div>
        <p class="F-SignIn">签到</p>
      </div>
      <div class="F-COINS">
        <p>
          <span>我的金币</span>
          <i>61251.00</i>
        </p>
        <b></b>
        <p>
          <span>复消金额</span>
          <i>221107.00</i>
        </p>
      </div>
    </div>
    <div class="F-earnings">
      <div>
         <i>我的余额</i>
         <span>11111111</span>
         <p>充值</p>
      </div>
      <div style="margin-left:16px;">
         <i>我的余额</i>
         <span>11111111</span>
         <p>提现</p>
      </div>
    </div>
    <mt-cell title="我的消息" to="//github.com" is-link class="F-meMessage">
      <img slot="icon" src="../../../static/icon/ld.png" width="20" height="20">
    </mt-cell>
    <div class="F-invitation">
      <div>
        <img src="../../../static/icon/jhy.png" />
        <p>
          <span>邀请好友</span>
          <i>获得更多奖励</i>
        </p>
      </div>
      <div style="margin-left:15px;">
        <img src="../../../static/icon/dr.png" />
        <p>
          <span>邀请好友</span>
          <i>获得更多奖励</i>
        </p>
      </div>
    </div>
    <mt-cell title="客服中心" to="//github.com" is-link class="F-meMessage">
      <img slot="icon" src="../../../static/icon/ej.png" width="20" height="20">
    </mt-cell>
    <mt-cell title="意见反馈" to="//github.com" is-link class="F-meMessage">
      <img slot="icon" src="../../../static/icon/wb.png" width="20" height="20">
    </mt-cell>
    <mt-cell title="设置" to="//github.com" is-link class="F-meMessage">
      <img slot="icon" src="../../../static/icon/sz.png" width="20" height="20">
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
@import './personal.less';
</style>
