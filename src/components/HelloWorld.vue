<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
      <img slot="icon" src="../../static/icon/new/sy.png">
      外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../../static/icon/new/sy.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../../static/icon/new/sy.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../static/icon/new/sy.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected" >
      <mt-tab-container-item id="外卖">
        <mt-datetime-picker
          ref="picker"
          type="date"
          year-format="{value} 年"
  month-format="{value} 月"
  date-format="1 日">
        </mt-datetime-picker>
        <div v-on:click="openPicker">11111111111111111</div>

      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell title="标题文字" icon="more" value="带 icon"><p>123</p></mt-cell>
        <mt-cell
  title="标题文字"
  to="//github.com"
  is-link
  value="带链接">
  <p>2131</p>
</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '外卖',
      active: '外卖'
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
