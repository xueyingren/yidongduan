<template>
  <div class="F-framework">
    <div class="home-name">
      <h2>Hello,Jason</h2>
      <p class="home-name-level">3级代理</p>
    </div>
    <div class="F-agent F-ag">
      <div class="F-agent-L">
        <p class="F-agent-Ltotal">总收益</p>
        <p class="F-agent-Lmoney">
          <span>11，111.00</span>
          <i></i>
        </p>
      </div>
      <div class="F-agent-R">
        <p>提现</p>
        <span>累计收益</span>
      </div>
    </div>
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
    <a href="" class="F-img"><img src="../../../static/images/1.png"></a>
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
    <div class="F-amount">
      <p class="F-elimination">复销金额</p>
      <p class="F-elimi">
        <span>￥78,128.00</span>
        <i>></i>
      </p>
    </div>
    <div class="F-amount F-cumulative">
      <p class="F-elimination">累计提现</p>
      <p class="F-elimi">
        <span>￥78,128.00</span>
        <i>></i>
      </p>
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
    <div class="F-echarts">
      <p class="F-echarts-yearFormat">
        <span>2012年12月</span>
        <i v-on:click="openPicker"></i>
      </p>
      <div id="main"></div>
    </div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      @confirm="handleConfirm"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="1 日"
      :endDate="endDate">
    </mt-datetime-picker>
  </div>

</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'homedl',
  data () {
    return {
      images: '',
      endDate: new Date()
    }
  },
  mounted () {
    this.echartsInit()
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm: function (val) {
      console.log(val)
    },
    echartsInit: function () {
      let myChart = echarts.init(document.getElementById('main'))
      let Option = {
        title: {
          text: '收支走势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['收入', '支出'],
          y: 'bottom'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '收入',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '支出',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310],
            areaStyle: {}
          }
        ]
      }
      myChart.setOption(Option)
    }

  }
}
</script>
<style lang='less' scoped>
@import './home.less';
</style>
