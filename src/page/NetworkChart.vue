<template>
<chart :fileName='fileName' :dataName='dataName' :chartName='chartName'></chart>
</template>

<script>

import chart from '../components/BpsChart' 
export default {
  data() {
    return {
      fileName:"zThrputOff",
      dataName:"整网",
      chartName:"整网吞吐量表"
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
