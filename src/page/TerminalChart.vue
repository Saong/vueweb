<template>
<chart :seriesName='seriesName' :chartsName='chartsName' :yAxisName='yAxisName' 
:xAxisName='xAxisName'  :dataPos='dataPos'></chart>
</template>

<script>

import chart from '../components/throughChart' 
export default {
  data() {
    return {
      seriesName:["用户下行","用户上行"],
      chartsName:["终端吞吐量表","单终端吞吐量表"],
      yAxisName:"单终端吞吐量",
      xAxisName:["终端ID","时间/s"],
      dataPos:[9,10]
    }
  },
  created() {
    
  },
  computed: {
  },
  components: {
    chart
  },
  methods: {

  },
};
</script>
