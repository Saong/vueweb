<template>
<chart :seriesName='seriesName' :chartsName='chartsName' :yAxisName='yAxisName' 
:xAxisName='xAxisName'  :dataPos='dataPos'></chart>
</template>

<script>

import chart from '../components/throughChart' 
export default {
  data() {
    return {
      seriesName:["馈电下行","馈电上行"],
      chartsName:["关口站吞吐量表","关口站吞吐量表"],
      yAxisName:"单关口站吞吐量",
      xAxisName:["关口站ID","时间/s"],
      dataPos:[7,8]
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
