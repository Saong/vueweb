<template>
    <div class="chart">
        <div id="chart" class="" style="width: 90%;height:450px;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts';
    // 引入柱状图
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/toolbox';
    import 'echarts/lib/component/markPoint';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legendScroll';
    import 'echarts/lib/component/dataZoom';
    import 'echarts/lib/component/markLine'
    import * as d3 from 'd3';
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('chart'));
            this.initData();
            for(let num = 0; num < 168; num+=2 ){
                setTimeout(() => {
                    this.changeData(num)
                },num/2*1000)
            }
        },
        data(){
            return{
                data:{},
                series:[],
                option:{},
                fileName:"ztfTime",
                chartName:"业务需求/实传速率"
            }
        },
        methods: {
            async changeData(num){
                await this.loadData(this.prefixZero(num,5));
                this.myChart.setOption(this.option, true);
            },
            async initData(){
                var that = this;
                this.option = {
                    title: {
                        text: that.chartName
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: [],
                        top: 50,
                        left: 10,
                        type: 'scroll',
                        orient: 'vertical',
                        selected:{'TF-001':false},
                        
                    },
                    grid: {
                        left: '7%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        scale: true
                    },
                    series: this.series,
                    dataZoom: [
                        {
                            id: 'dataZoomY',
                            type: 'slider',
                            yAxisIndex: [0],
                            filterMode: 'empty'
                        }
                    ],
                };
                d3.csv('./static/'+this.fileName+'-00000.csv',function(data,i){
                  console.log(data)
                    var name = data['Name']
                    var name1 = name+"需求";
                    var name2 = name+"实传";
                    that.data[name1] = [];
                    that.data[name2] = [];
                    var item1 = {
                        'name':name1,
                        'type':'line',
                        'smooth': true,
                        'data':that.data[name1],
                        'symbol':'circle'
                    }
                    var item2 = {
                        'name':name2,
                        'type':'line',
                        'smooth': true,
                        'data':that.data[name2],
                        'symbol':'triangle'
                    }
                    that.series.push(item1);
                    that.series.push(item2);
                    that.option.legend.data.push(name1)
                    that.option.legend.data.push(name2)
                    that.option.legend.selected[name1] = false;
                    that.option.legend.selected[name2] = false;
                    if(i == 0) {
                      that.option.legend.selected[name1] = true;
                      that.option.legend.selected[name2] = true;
                      }
                })
                console.log(that.option.series)
                this.myChart.on('legendselectchanged',function(params){
                    that.option.legend.selected = params.selected;
                })
            },
            async loadData(time){
                var that = this;
                return d3.csv('./static/ztfTime-'+time+'.csv',function(data){
                    that.data[data['Name']+"需求"].push(parseFloat(data["BpsReq"]));
                    that.data[data['Name']+"实传"].push(parseFloat(data["BpsOff"]));
                    return data;
                }).then(function(data) {
                    that.option.xAxis.data=that.xAxisData();
                    //that.option.legend.selected = {};
                })

            },
            prefixZero(num, n) {
                return (Array(n).join(0) + num).slice(-n);
            },
            xAxisData(){
                return this.series[0].data.map(function (item,i) {
                    return i;
                });
            }
        }
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .chart{
        display: flex;
        justify-content: center;
    }
</style>
