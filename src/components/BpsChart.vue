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
        props: ['dataName', 'fileName','chartName'],
        data(){
            return{
                data:{},
                series:[],
                option:{},
                name:['前向（站→用）', '返向（用→站）', '用-用'],
                index: [0,1,2]
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
                        left: 'center',
                        type: 'scroll',
                        //orient: 'vertical',
                        selected:{'TF-001':false},
                        
                    },
                    grid: {
                        left: '7%',
                        right: '4%',
                        bottom: '3%',
                        top: '10%',
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
                    console.log(data);

                    
                }).then(function(data){
                    for(var i = 0; i < that.name.length; i++){
                        var name = that.name[i];
                        that.data[name] = [];
                        var item = {
                            'name':name,
                            'type':'line',
                            'smooth': true,
                            'data':that.data[name],
                        }
                        
                        that.series.push(item);
                        that.option.legend.data.push(name)
                    }
                    that.option.legend.selected[name] = true;
                })
                this.myChart.on('legendselectchanged',function(params){
                    that.option.legend.selected = params.selected;
                })
            },
            async loadData(time){
                var that = this;
                return d3.csv('./static/'+this.fileName+'-'+time+'.csv',function(data){
                    //that.data[data['Name']].push(parseFloat(data[that.dataName]));
                    return data;
                }).then(function(data) {
                    for(var i = 0; i < that.name.length; i++){
                        var name = that.name[i];   
                        that.data[name].push(parseFloat(data[that.index[i]]['0']))
                    }
                    
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
