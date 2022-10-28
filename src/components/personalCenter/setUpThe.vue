<template>
  <div class="F-setUpThe">
    <mt-header title="设置" fixed  class="F-top-return">
      <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="fanhui"></mt-button>
      </router-link>
    </mt-header>
    <p class="F-setUpThe-title">基础</p>
    <mt-cell title="头像设置" value="说明文字" class="F-setUpThe-cl">
      <span class="F-setUpThe-img"><i></i></span>
    </mt-cell>
    <mt-cell title="个人昵称" is-link class="F-setUpThe-cl">
    </mt-cell>
    <p class="F-setUpThe-title">安全</p>
    <mt-cell title="修改密码" is-link class="F-setUpThe-cl">
    </mt-cell>
    <mt-cell title="指纹/面容登陆验证" class="F-setUpThe-cl">
      <mt-switch v-model="value"></mt-switch>
    </mt-cell>
    <mt-cell title="邮箱绑定" is-link class="F-setUpThe-cl">
    </mt-cell>
    <mt-cell title="手机绑定" is-link class="F-setUpThe-cl">
    </mt-cell>
    <p class="F-setUpThe-title">其它</p>
    <mt-cell title="收货地址" is-link class="F-setUpThe-cl">
    </mt-cell>
    <mt-cell title="清理缓存" value="999M" is-link class="F-setUpThe-cl">
    </mt-cell>
    <mt-cell title="帮助中心" is-link class="F-setUpThe-cl">
    </mt-cell>
    <mt-cell title="版本检测" value="999M" is-link class="F-setUpThe-cl">
    </mt-cell>
    <mt-cell title="隐私政策" is-link class="F-setUpThe-cl">
    </mt-cell>
    <mt-cell title="关于我们" is-link class="F-setUpThe-cl">
    </mt-cell>
    <p class="F-setUpThe-exit">退出登录</p>
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
