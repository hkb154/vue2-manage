<template>
  <div class="home">
    <div class="content">
      <!-- .box$*8{第$个} 快捷生成8个盒子 -->
      <div class="box1">
        <h2>小焦的奇妙数据</h2>
      </div>
      <div class="box2">
        <dv-border-box-1 ref="borderBox1">
          <h3>POP</h3>
          <dv-active-ring-chart :key="key" :config="config" style="width:100%; height:100%" />
        </dv-border-box-1>
      </div>
      <div class="box3">
        <dv-border-box-6 ref="borderBox2">
          <ve-pie :data="chartData" :key="key" :extend="pieExtend" height="100%"></ve-pie>
        </dv-border-box-6>
      </div>
      <div class="box4">
        <dv-border-box-1 ref="borderBox3">
          <dv-percent-pond class="pond" :key="key" :config="config2" style="width:50%; height:50%;" />
        </dv-border-box-1>
      </div>
      <div class="box5">
        <dv-border-box-6 ref="borderBox4">
          <dv-water-level-pond class="pond" :key="key" :config="config3" style="width:30%; height:90%" />
        </dv-border-box-6>
      </div>
      <div class="box6">
        <dv-border-box-1 ref="borderBox5">
          <dv-capsule-chart class="pond" :key="key" :config="config4" style="width:90%; height:90%;" />
        </dv-border-box-1>
      </div>
      <div class="box7">
        <dv-border-box-6 ref="borderBox6">
          <ve-line :key="key" :extend="lineExtend" width="100%" height="100%"></ve-line>
        </dv-border-box-6>
      </div>
      <div class="box8">
        <dv-border-box-9 ref="borderBox7">
          <ve-histogram class="his" :key="key" :data="chartData2" :extend="histogramExtend" width="95%" height="95%"></ve-histogram>
        </dv-border-box-9>
      </div>
      <div class="box9">
        <dv-border-box-9 ref="borderBox8">
          <dv-charts :key="key" :option="option" style="width:100%; height:100%;"/>
        </dv-border-box-9>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      key: 0,
      // DataV的数据
      config: {
        data: [
          {
            name: 'MOLLY',
            value: 55
          },
          {
            name: 'DIMOO',
            value: 120
          },
          {
            name: 'LABUBU',
            value: 78
          },
          {
            name: 'HACI',
            value: 66
          },
          {
            name: 'KUBO',
            value: 80
          }
        ],
        lineWidth: 10,
        radius: '60%',
        activeRadius: '65%',
        digitalFlopStyle: {
          fontSize: 18,
          fill: '#fff',
        }
      },
      config2: {
        value: 52,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
        colors: ['#01c4f9', '#c135ff'],
        localGradient: true
      },
      config3: {
        data: [24, 45],
        shape: 'roundRect',
        colors: ['#89f7fe', '#66a6ff']
      },
      config4: {
        data: [
          {
            name: 'MOLLY',
            value: 55
          },
          {
            name: 'DIMOO',
            value: 120
          },
          {
            name: 'LABUBU',
            value: 78
          },
          {
            name: 'HACI',
            value: 66
          },
          {
            name: 'KUBO',
            value: 80
          }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
      },

      option: {
        series: [
          {
            type: 'gauge',
            data: [ { name: 'itemA', value: 35 } ],
            center: ['50%', '50%'],
            axisLabel: {
              formatter: '{value}%',
              style: {
                fill: '#fff'
              }
            },
            axisTick: {
              style: {
                stroke: '#fff'
              }
            },
            animationCurve: 'easeInOutBack'
          }
        ]
      },

      // v-Charts的数据
      chartData: {
        columns: ['date', 'PV'],
        rows: [
          {'date': '01-01', 'PV': 1231},
          {'date': '01-02', 'PV': 6451},
          {'date': '01-03', 'PV': 2343},
          {'date': '01-04', 'PV': 1323},
          {'date': '01-05', 'PV': 4321},
          {'date': '01-06', 'PV': 2152},
        ]
      },

      chartData2: {
        columns: ['category', 'value'],
        rows: [
          {'category': 'Mon', 'value': 120},
          {'category': 'Tue', 'value': 200},
          {'category': 'Wed', 'value': 150},
          {'category': 'Thu', 'value': 80},
          {'category': 'Fri', 'value': 70},
          {'category': 'Sat', 'value': 110},
          {'category': 'Sun', 'value': 130},
        ]
      },
      // 专门给我们改配置用
      pieExtend: { // v-charts专门开放给我们来书写e-charts的属性
        legend: {
          textStyle: {
            color: '#fff'
          }
        },
        series: {
          radius: '65%',
          center: ['50%', '50%'],
          label: {
            show: false
          }
        }
      },

      lineExtend: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        },
        grid: {
          height: '90%',
          width: '90%',
          bottom: '5px'
        },
        textStyle: {
          color: '#fff'
        },
      },

      histogramExtend: {
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        series: {
          label: {
            color: '#fff',
          },
          select: {
            itemStyle: {
              color: '#212121'
            }
          }
        },
        textStyle: {
          color: '#fff'
        },
        grid: {
          height: '90%',
          width: '100%',
          bottom: '0px'
        },
        legend: {
          textStyle: {
            color: '#fff'
          }
        },
      }
    }
  },
  computed: {
    ...mapState('navCollapse', ['isCollapse'])
  },
  watch: {
    isCollapse() {
      setTimeout(() => {
        this.$nextTick(()=>{
          this.key++
          this.$refs.borderBox1.initWH();
          this.$refs.borderBox2.initWH();
          this.$refs.borderBox3.initWH();
          this.$refs.borderBox4.initWH();
          this.$refs.borderBox5.initWH();
          this.$refs.borderBox6.initWH();
          this.$refs.borderBox7.initWH();
          this.$refs.borderBox8.initWH();
        });
      }, 500)
      
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  .content{
    width: 100%;
    height: 100%;
    // 设置网格布局
    display: grid;
    // 设置列数 每列所占空间的份数
    grid-template-columns: repeat(3, 1fr);
    // 设置行数 每行所占空间的份数
    // grid-template-rows: repeat(3, 1fr);
    grid-template-rows: 50px 1fr 1fr 1fr;
    // 网格间距
    gap: 10px;

    h3{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      letter-spacing: 2px;
      color: #fff;
    }

    .box1{
      grid-column: span 3;
      h2{
        margin: 0;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        line-height: 50px;
        letter-spacing: 2px;
      }
    }

    .box8{
      // 跨列
      grid-column: span 2;
    }
  }
}

.pond{
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
}

.his{
  // margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>