<template>
  <div class="F-AfterPin">
    <mt-header title="复销金额" fixed  class="F-top-return">
    <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="fanhui"></mt-button>
    </router-link>
    </mt-header>
    <p class="F-AfterPin-money">12313123</p>
    <span class="F-AfterPin-yuan">复销金额（元）</span>
    <!-- 我的收益 -->
    <p class="F-AfterPin-withd">提现</p>
    <div class="F-AfterPin-earnings">
      <p>
        <span>工资收益</span>
        <b>111111111.00</b>
      </p>
      <i></i>
      <p>
        <span>团队奖励</span>
        <b>111111111.00</b>
      </p>
      <i></i>
      <p>
        <span>销售奖励</span>
        <b>111111111.00</b>
      </p>
    </div>
    <!-- 团队奖励 -->
    <div class="F-AfterPin-team">
      <div class="number-of">
        <p>累计邀请人数</p>
        <span>111111人</span>
      </div>
      <ul>
        <li>
          <p>累计团队业绩（元）</p>
          <span>1231231.00</span>
        </li>
        <li>
          <p>累计获得奖励（元）</p>
          <span>1231231.00</span>
        </li>
      </ul>
    </div>
    <div class="F-AfterPin-list">
      <ul>
        <li>
          <div>
            <p>系统赠送<i class="successful">成功</i></p>
            <span>2021-22-22</span>
          </div>
          <p>+200</p>
        </li>
        <li>
          <div>
            <p>系统赠送<i class="failure">失败</i></p>
            <span>2021-22-22</span>
          </div>
          <p>+200</p>
        </li>
        <li>
          <div>
            <p>系统赠送</p>
            <span>2021-22-22</span>
          </div>
          <p>+200</p>
        </li>
        <li>
          <div>
            <p>系统赠送</p>
            <span>2021-22-22</span>
          </div>
          <p>+200</p>
        </li>
        <li>
          <div>
            <p>系统赠送</p>
            <span>2021-22-22</span>
          </div>
          <p>+200</p>
        </li>
      </ul>
    </div>
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
    fanhui: function () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='less' scoped>
@import './salesAmount.less';
</style>
