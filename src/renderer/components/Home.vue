<template>
   <el-container :style="{'height':pageHeight+'px'}" style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color:#dceafb;margin:0;padding:0">
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree> 
    </el-aside>
     <el-main>
       <div id="echartMap" style="width: 100%;height:100%;"></div>
         
     </el-main>
   </el-container>
</template>
<script>
export default {
    name:'home',
    data(){
        return {
            pageHeight:document.documentElement.clientHeight,
            treeData:[{
                label: '贵阳市',
                children: [{
                    label: '白云区',
                    children: [{
                        label: '云城尚品'
                    }]
                },{
                    label: '观山湖区',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
                }, {
                label: '遵义市',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '安顺市',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
            },{
                label: '毕节市',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
                },{
                label: '六盘水市',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
                }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    mounted(){
      window.onresize =()=>{
        this.pageHeight = document.documentElement.clientHeight
      }
     // this.initCharts()
       this.myChart()
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      myChart () {
        var myChart = this.echarts.init(document.getElementById('echartMap'));
        var option = {
            tooltip: {
                show: true,
                trigger: 'item',
                triggerOn: 'click',
                formatter: "名称:{b}<br />坐标:{c}"
            },
            series: [
                {
                    name: '送水量分布',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        emphasis: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: 10,
                    showEffectOn: 'render',
                    itemStyle: {
                        normal: {
                            color: '#46bee9'
                        }
                    }
                   // data: coldStore
                }, 
                {
                    name: "人员分布",
                    type: 'custom',//配置显示方式为用户自定义
                    coordinateSystem: 'geo',
                    itemStyle: {
                        normal: {
                            color: '#46bee9'
                        }
                    },
                    renderItem: function (params, api) {//具体实现自定义图标的方法
                        return {
                            type: 'image',
                            style: {
                                image: "../../Content/images/汽车.png",
                                x: api.coord([
                                    coldCar[params.dataIndex].value[0], coldCar[params.dataIndex]
                                        .value[1]
                                ])[0],
                                y: api.coord([
                                    coldCar[params.dataIndex].value[0], coldCar[params.dataIndex]
                                        .value[1]
                                ])[1]
                            }
                        }
                    }
                    //data: coldCar
                }
            ],
            legend: {
                type: "plain",
                show: true,
                orient: 'vertical',
                top: 'middle',
                left: 'left',
                data: [
                    {
                        name: "送水量分布",
                        icon: "circle",
                        textStyle: {
                            color: "#a9d6fa"
                        }
                    },
                    {
                        name: "人员分布",
                        icon: "circle",
                        textStyle: {
                            color: "#a9d6fa"
                        }
                    }
                ]
            },
            geo: {//引入贵州省的地图
                map: '贵州',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                zoom: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#387ba7',
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetX: 10
                    },
                    emphasis: {
                        areaColor: '#b3f3f3'
                    }
                },
                regions: [//对不同的区块进行着色
                    {
                        name: '毕节市',
                        itemStyle: {
                            normal: {
                                areaColor: '#2b97df'
                            }
                        }
                    }, {
                        name: '遵义市',
                        itemStyle: {
                            normal: {
                                areaColor: '#a9d6fd'
                            }
                        }
                    }, {
                        name: '铜仁市',
                        itemStyle: {
                            normal: {
                                areaColor: '#3497df'
                            }
                        }
                    }, {
                        name: '贵阳市',
                        itemStyle: {
                            normal: {
                                areaColor: '#0d4369'
                            }
                        }
                    }, {
                        name: '安顺市',
                        itemStyle: {
                            normal: {
                                areaColor: '#005c9b'
                            }
                        }
                    }, {
                        name: '黔西南布依族苗族自治州',
                        itemStyle: {
                            normal: {
                                areaColor: '#a9d6fd'
                            }
                        }
                    }, {
                        name: '六盘水市',
                        itemStyle: {
                            normal: {
                                areaColor: '#0d4369'
                            }
                        }
                    }, {
                        name: '黔东南苗族侗族自治州',
                        itemStyle: {
                            normal: {
                                areaColor: '#005c9b'
                            }
                        }
                    }, {
                        name: '黔南布依族苗族自治州',
                        itemStyle: {
                            normal: {
                                areaColor: '#2b97df'
                            }
                        }
                    }
                ]
            }
        };
        myChart.setOption(option);
    }
      
    //  , initCharts () {
    // 　　let myChart = this.$echarts.init(this.$refs.chart);
    //     　　console.log(this.$refs.chart)
    //     　　// 绘制图表
    //     　　myChart.setOption({
    //     　　title: { text: '在Vue中使用echarts' },
    //     　　tooltip: {},
    //     　　xAxis: {
    //     　　data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //     　　},
    //     　　yAxis: {},
    //     　　series: [{
    //     　　name: '销量',
    //     　　type: 'bar',
    //     　　data: [5, 20, 36, 10, 10, 20]
    //     　　}]
    // 　　});
    // 　　}
    }
}
</script>
<style>
    .el-tree{
        background:#dceafb!important;   
    }
</style>