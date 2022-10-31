<template>
  <div class="F-agentDetail">
    <mt-header title="代理详情" fixed  class="F-top-return">
    <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="fanhui"></mt-button>
    </router-link>
    </mt-header>
    <img class="F-agentDetail-img" src="../../../static/images/1.png" />
    <h3 class="F-agentDetail-name">我的名字</h3>
    <p class="F-agentDetail-level">
      <i></i>
      <span>代理等级：3</span>
    </p>
    <span class="F-agentDetail-up">再充值300元，即可享受xx+1级的待遇</span>
    <div class="F-agentDetail-table">
      <h4>权益说明</h4>
      <table>
        <tr>
          <th>代理名称</th>
          <th>代理等级</th>
          <th>代购总金额</th>
          <th>每日工资收益</th>
          <th>团队业绩奖励占比</th>
        </tr>
        <tr>
          <td>11</td>
          <td>1111</td>
          <td>1111</td>
          <td>1111</td>
          <td>10%</td>
        </tr>
      </table>
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
@import './personal.less';
</style>
