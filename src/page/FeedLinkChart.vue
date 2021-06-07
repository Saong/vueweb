<template>
<div>
  <chart :seriesName='seriesName' :chartsName='chartsName' :yAxisName='yAxisName' 
:xAxisName='xAxisName'  :dataPos='dataPos'></chart>
<div></div>
  <chart2 :seriesName='seriesName2' :chartsName='chartsName2' :yAxisName='yAxisName2' 
  :xAxisName='xAxisName2'  :dataPos='dataPos2'></chart2>
</div>

</template>

<script>

import chart from '../components/throughChart' 
import chart2 from '../components/throughChart' 
export default {
  data() {
    return {
      seriesName:["馈电下行","馈电上行"],
      chartsName:["卫星用户链路测吞吐量表","单卫星吞吐量表"],
      yAxisName:"单卫星吞吐量",
      xAxisName:["卫星ID","时间/s"],
      dataPos:[3,4],
      seriesName2:["馈电下行","馈电上行"],
      chartsName2:["卫星馈电链路策吞吐量表","单卫星吞吐量表"],
      yAxisName2:"单卫星吞吐量",
      xAxisName2:["卫星ID","时间/s"],
      dataPos2:[5,6]
    }
  },
  created() {
    
  },
  computed: {
  },
  components: {
    chart,
    chart2
  },
  methods: {

  },
};
</script>
