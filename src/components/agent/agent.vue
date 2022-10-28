<template>
  <div class="F-agent">
    <mt-header title="申请代理" fixed class="F-top-return">
      <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="fanhui">返回</mt-button>
      </router-link>
    </mt-header>
    <ul class="F-agent-module">
      <li class="F-qx">
        <h4>代理级别</h4>
        <div>
          <p>
            <span>所属等级：1</span>
            <span>杠杆倍数：4.0</span>
            <span>工资收益：22212.00</span>
          </p>
          <div>
            <p>￥22212.00</p>
            <span class="F-qx-span" v-on:click="toApply">立即申请</span>
          </div>
        </div>
      </li>
      <li class="F-shj">
        <h4>代理级别</h4>
        <div>
          <p>
            <span>所属等级：1</span>
            <span>杠杆倍数：4.0</span>
            <span>工资收益：22212.00</span>
          </p>
          <div>
            <p>￥22212.00</p>
            <span class="F-shj-span">立即申请</span>
          </div>
        </div>
      </li>
      <li class="F-sj">
        <h4>代理级别</h4>
        <div>
          <p>
            <span>所属等级：1</span>
            <span>杠杆倍数：4.0</span>
            <span>工资收益：22212.00</span>
          </p>
          <div>
            <p>￥22212.00</p>
            <span class="F-sj-span">立即申请</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="F-alt" v-show="alt">
      <i class="F-alt-shut " v-on:click="toApply"></i>
      <p class="F-alt-title">请选择付款方式</p>
      <div class="F-alt-pay">
        <p class="F-alt-pay-wx">
          <i></i>
          <span>微信支付</span>
        </p>
        <p class="F-alt-pay-zfb">
          <i></i>
          <span>支付宝支付</span>
        </p>
      </div>
    </div>
    <div class="F-backj" v-show="alt"></div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      alt: false
    }
  },
  methods: {
    fanhui: function () {
      this.$router.go(-1)
    },
    toApply: function () {
      this.alt = !this.alt
    }
  }
}
</script>
<style lang='less' scoped>
@import './agent.less';
</style>
