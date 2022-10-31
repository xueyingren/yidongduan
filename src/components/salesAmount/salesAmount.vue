<template>
  <div class="F-AfterPin">
    <mt-header title="复销金额" fixed  class="F-top-return">
    <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="fanhui"></mt-button>
    </router-link>
    </mt-header>
    <p class="F-AfterPin-money">12313123</p>
    <spam class="F-AfterPin-yuan">复销金额（元）</spam>
    <!-- 我的收益 -->
    <p class="F-AfterPin-withd">提现</p>
    <div class="F-AfterPin-list">
      <ul>
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
