// var aa = {  // 定义变量，每个值后面要用逗号隔开
//   name: 'xiazhongliang',    // 定义一个name并赋值
//   age: 19,
//   nan:[1, 2, 3, 4], 
//   sex: 'nan',
//   obj: {    // 定义一个对象
//     name: 'xiazhongliang',  // 给对象赋值
//     age: 20,
//     nan: [1, 2, 3, 4],
//     sex: 'nan'
//   },
//   add: function (name) {    // 定义函数
//     console.log(name) 
//   },
//   key:'value',
//   'editor.fomt':'AAAA'  // 前面那个key都是字符串
// }

// console.log(aa.name)
// // console.log(aa.age)
// // console.log(aa.nan)
// // console.log(aa.sex)
// // console.log(aa.obj)
// // console.log(aa.obj.age)
// aa.add('xiazhonglaing');
// aa.add('xiahzongmmmm');
// aa.add('wodetiana'); // 调用函数



// 圆柱形
var myactr = echarts.init(document.getElementById('mod'))
var opect = {
  title: {
    text: '超市的销量'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['西瓜', '苹果', '梨子', '哈密瓜', '榴莲', '芒果','火龙果','a','b','s']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20,10,29,39,42]
  }]
}
myactr.setOption(opect);
myactr.on('click', function (params) {
    if (params.componentType === 'markPoint') {
        // 点击到了 markPoint 上
        if (params.seriesIndex === 5) {
            // 点击到了 index 为 5 的 series 的 markPoint 上。
        }
    }
    else if (params.componentType === 'series') {
        if (params.seriesType === 'graph') {
            if (params.dataType === 'edge') {
                // 点击到了 graph 的 edge（边）上。
            }
            else {
                // 点击到了 graph 的 node（节点）上。
            }
        }
    }

});
//圆形
var myChart = echarts.init(document.getElementById('mod1'))
roseType: 'angle'
myChart.setOption({
    backgroundColor: '#2c343c',
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    },
        normal: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ],
//     itemStyle: {
//     normal: {
//         // 阴影的大小
//         shadowBlur: 200,
//         // 阴影水平方向上的偏移
//         shadowOffsetX: 0,
//         // 阴影垂直方向上的偏移
//         shadowOffsetY: 0,
//         // 阴影颜色
//         shadowColor: 'rgba(0, 0, 0, 0.5)'
//     }
// },
itemStyle: {
    emphasis: {
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
},

});




//散点图
var myChart = echarts.init(document.getElementById('mod2'))
var option = {
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            start: 30,
            end: 80
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            start: 30,
            end: 80
        }
    ],
    series: [
        {
            type: 'scatter', // 这是个『散点图』
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"],["9.051","9.710","0.171"],["14.046","4.182","0.536"],["12.295","1.429","0.962"],["4.417","8.167","0.113"],["0.492","4.771","0.785"],["7.632","2.605","0.645"],["14.242","5.042","0.368"]]
        }
    ]
}
myChart.setOption(option);






var myChart = echarts.init(document.getElementById('mod3'))
var option = {
    baseOption: {
        title: {
          text: '超市的销量'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['西瓜', '苹果', '梨子', '哈密瓜', '榴莲', '芒果','火龙果','a','b','s']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20,10,29,39,42]
        }]
      },
    media: [ // 这里定义了 media query 的逐条规则。
            {
                query: {
                    maxAspectRatio: 1           // 当长宽比小于1时。
                },
                option: {
                    legend: {                   // legend 放在底部中间。
                        right: 'center',
                        bottom: 0,
                        orient: 'horizontal'    // legend 横向布局。
                    },
                    series: [                   // 两个饼图左右布局。
                        {
                            radius: [20, '50%'],
                            center: ['50%', '30%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['50%', '70%']
                        }
                    ]
                }
            },
        {
            query: {
                maxWidth: 500               // 当容器宽度小于 500 时。
            },
            option: {
                legend: {
                    right: 10,              // legend 放置在右侧中间。
                    top: '15%',
                    orient: 'vertical'      // 纵向布局。
                },
                series: [                   // 两个饼图上下布局。
                    {
                        radius: [20, '50%'],
                        center: ['50%', '30%']
                    },
                    {
                        radius: [30, '50%'],
                        center: ['50%', '75%']
                    }
                ]
            }
        },
        {                   // 这条里没有写规则，表示『默认』，
            option: {       // 即所有规则都不满足时，采纳这个option。
                legend: {
                    right: 10,              // legend 放置在右侧中间。
                    top: '15%',
                     },
            }
        }
    ]
}
myChart.setOption(option);





var aa = echarts.init(document.getElementById('main'));

        // 模拟数据
        function getVirtulData(year) {
            year = year || '2017';
            var date = +echarts.number.parseDate(year + '-01-01');
            var end = +echarts.number.parseDate(year + '-12-31');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time <= end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 10000)
                ]);
            }
            return data;
        }
        var option = {
            visualMap: {
                show: false,
                min: 0,
                max: 1000
            },
            calendar: {
                range: '2017'
            },
            series: {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: [['2017-01-02', 900], ['2017-01-02', 877], ['2017-01-02', 699]]
            }
        }
        aa.setOption(option);