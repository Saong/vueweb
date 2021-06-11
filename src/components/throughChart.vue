<template>


    <div class="chart" style="margin-top:20px">
<div>
<el-dropdown size="medium" @command="handleCommand" style="display:none">
  <span class="el-dropdown-link">
    选择终端<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item v-for="item in terminals" :key="item" :command="item">terminal{{item}}</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>
        <div ref="leftChart" class="" style="width: 50%;height:450px;float:left"></div>
        <div ref="rightChart" class="" style="width: 50%;height:450px;float:left"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts';
    // 引入柱状图
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/toolbox';
    import 'echarts/lib/component/markPoint';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/legendScroll';
    import 'echarts/lib/component/dataZoom';
    import 'echarts/lib/component/markLine'
    import * as d3 from 'd3';
    export default {
        mounted(){
            this.myChart = echarts.init((this.$refs.leftChart));
            this.leftChart = echarts.init((this.$refs.rightChart));
            this.initData();
            this.initLeftData();

        },
        props: ['seriesName', 'chartsName','yAxisName', 'xAxisName','dataPos'],
        data(){
            return{
                data:{},
                series:[],
                terminals:['1','2','3','4','5'],
                option:{},
                terminalSDatas:[],
                terminalXDatas:[],
                leftOption:{},
                terminalSData:[],
                terminalXData:[],

            
            }
        },
        methods: {
            async changeData(num){
                await this.loadData(this.prefixZero(num,5));
                this.myChart.setOption(this.option);
            },
            async initData(){
                var that = this;
                this.option = {
                    title: {
                        text: that.chartsName[0],
                        left:'center'
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    legend: {
                        data:that.seriesName,
                        right: 10,
                        top: 20,
                        bottom: 20,
                    },
                    grid: {
                        left: '4%',
                        right: '5%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        name:that.xAxisName[0],
                        nameLocation:"start",
                        nameGap:"20",
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        name: that.yAxisName,
                        type: 'value',
                        scale: true
                    },
                    series: [{
                        'name':that.seriesName[0],
                        'type':'line',
                        'smooth': true,
                        'data':[],
                    },{
                        'name':that.seriesName[1],
                        'type':'line',
                        'smooth': true,
                        'data':[],
                    }],
                };

                d3.csv('./static/zThrputOff-00000.csv',function(data,i){
                    return data;
                }).then(function(data){
                    console.log(data)
                    for(var i = 1; i<5; i++){
                        if(data[that.dataPos[0]][i]=="NaN") break;
                        that.terminalSDatas.push([]);
                        that.terminalXDatas.push([]);
                    }
                })
                for(let num = 0; num < 12; num+=2 ){
                    await this.loadData(num,this.prefixZero(num,5));
                }
                this.option.series[0].data = this.computeData(this.terminalSDatas);
                this.option.series[1].data = this.computeData(this.terminalXDatas);
                this.option.xAxis.data=that.xAxisData(this.option);
                this.myChart.on('legendselectchanged',function(params){
                    that.option.legend.selected = params.selected;
                })
                this.myChart.setOption(this.option);
            },
            async loadData(time){
                var that = this;
                return d3.csv('./static/zThrputOff-'+that.prefixZero(time,5)+'.csv',function(data){
                    return data;
                }).then(function(data) {
                    
                    for(var i = 1;i<5; i++){
                        if(data[that.dataPos[0]][i]=="NaN") break;
                        that.terminalSDatas[i-1].push(parseInt(data[that.dataPos[0]][i]));
                        that.terminalXDatas[i-1].push(parseInt(data[that.dataPos[1]][i]));
                    }
                    that.option.xAxis.data=that.xAxisData(that.option);
                    //console.log(that.terminalSDatas)
                    //that.option.legend.selected = {};
                })

            },
             async initLeftData(){
                var that = this;
                this.leftOption = {
                    title: {
                        text: that.chartsName[1],
                        left: "center"
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    legend: {
                        show:true,
                        data: [],
                        top: 50,
                        left: 10,
                        type: 'scroll',
                        orient: 'vertical',
                        selected:{}
                    },
                    grid: {
                        left: '15%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        name:that.xAxisName[1],
                        nameLocation:"start",
                        nameGap:"20",
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        
                    },
                    yAxis: {
                        name:that.yAxisName,
                        type: 'value',
                        scale: true
                    },
                    series: [],
                };
                d3.csv('./static/zThrputReq-00000.csv',function(data,i){
                    return data;
                }).then(function(data){
                    console.log(data)
                    
                    for(var i = 0;i<5; i++){
                        if(data[that.dataPos[0]][i]=="NaN") break;
                        for(var k = 0; k < that.seriesName.length; k++ ){
                            var name = "Ter"+(i+1).toString()+that.seriesName[k];
                            var item = {
                                'name':name,
                                'type':'line',
                                'smooth': true,
                                'data':[]
                            }
                            that.leftOption.series.push(item);
                            that.leftOption.legend.data.push(name)
                            that.leftOption.legend.selected[name] = false;
                        }



                    }
                })
                for(let num = 0; num < 12; num+=2 ){
                    await this.loadLeftData(num,1);
                }

                this.leftChart.setOption(this.leftOption, true);
            },
            async loadLeftData(time,id){
                var that = this;
                return d3.csv('./static/zThrputReq-'+that.prefixZero(time,5)+'.csv',function(data){
                    return data;
                }).then(function(data) {
                    for(var i = 0;i<5; i++){
                        if(data[that.dataPos[0]][i]=="NaN") break;
                        that.leftOption.series[i*2].data.push(parseInt(data[that.dataPos[0]][i]));
                        that.leftOption.series[i*2+1].data.push(parseInt(data[that.dataPos[1]][i]));
                    }
                    that.leftOption.xAxis.data=that.xAxisData(that.leftOption,'left');
                })

            },
            prefixZero(num, n) {
                return (Array(n).join(0) + num).slice(-n);
            },
            xAxisData(option, position){
                position = position || 'right';
                return option.series[0].data.map(function (item,i) {
                    if(position=='left')
                        return i;
                    else{
                        return i+1;
                    }
                });
            },
            computeData(nums){
                let res = []
                for(var i = 0; i < nums.length; i++){
                    res.push(this.average(nums[i]));
                }
                return res;
            },
            average(nums){
                return nums.reduce((a, b) => a + b) / nums.length;
            },
            handleCommand(command) {
                this.$message('click on item ' + command);
                this.terminalSData = [];
                this.terminalXData = [];
                for(let num = 0; num < 12; num+=2 ){
                    this.loadLeftData(num,command);
                }
                this.leftChart.setOption(this.leftOption, true);

            }
        }
    }
</script>

<style lang="less">
	@import '../style/mixin';

      .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
