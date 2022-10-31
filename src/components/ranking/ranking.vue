<template>
  <div class="F-ranking">
    <mt-header title="排行榜" fixed  class="F-top-return">
      <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="fanhui"></mt-button>
      </router-link>
    </mt-header>
    <div class="F-ranking-classification">
      <p class="left selected">团队奖</p>
      <p class="center">销售奖</p>
      <p class="right">总收益</p>
    </div>
    <ul class="F-ranking-onelist">
      <li class="one">
        <i></i>
        <img src="../../../static/images/1.png" />
        <p class="name">张三</p>
        <p class="number">12000</p>
        <p class="complete">已完成</p>
      </li>
      <li class="two">
        <i></i>
        <img src="../../../static/images/1.png" />
        <p class="name">张三</p>
        <p class="number">12000</p>
        <p class="complete">已完成</p>
      </li>
      <li class="three">
        <i></i>
        <img src="../../../static/images/1.png" />
        <p class="name">张三</p>
        <p class="number">12000</p>
        <p class="complete">已完成</p>
      </li>
    </ul>
    <ul class="F-ranking-list">
      <li>
        <p class="serial-number">1</p>
        <div>
          <p class="list-left">
            <img src="../../../static/images/1.png" />
            <span>我去</span>
          </p>
          <p  class="list-right">已完成<span>111</span>单</p>
        </div>
      </li>
      <li>
        <p class="serial-number">1</p>
        <div>
          <p class="list-left">
            <img src="../../../static/icon/tx1.png" />
            <span>我去</span>
          </p>
          <p  class="list-right">已完成<span>111</span>单</p>
        </div>
      </li>
      <li>
        <p class="serial-number">1</p>
        <div>
          <p class="list-left">
            <img src="../../../static/icon/tx2.png" />
            <span>我去</span>
          </p>
          <p  class="list-right">已完成<span>111</span>单</p>
        </div>
      </li>
      <li>
        <p class="serial-number">1</p>
        <div>
          <p class="list-left">
            <img src="../../../static/images/1.png" />
            <span>我去</span>
          </p>
          <p  class="list-right">已完成<span>111</span>单</p>
        </div>
      </li>
    </ul>
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
@import './ranking.less';
</style>
