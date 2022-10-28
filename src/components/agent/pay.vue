<template>
  <div class="F-agent">
    <mt-header title="申请代理" fixed class="F-top-return">
      <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="fanhui">返回</mt-button>
      </router-link>
    </mt-header>
    <p class="F-pay-title">申请<span>4级</span>代理需要支付</p>
    <h4 class="F-pay-money">￥1000.00</h4>
    <p class="F-pay-way">当前付款方式：微信支付</p>
    <img src="../../../static/images/1.png" class="F-pay-img" />
    <p class="F-pay-prompt">扫描上方二维码付款并完成申请</p>
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
@import './agent.less';
</style>
