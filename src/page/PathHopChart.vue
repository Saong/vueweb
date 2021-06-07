<template>
<chart :fileName='fileName' :dataName='dataName' :chartName='chartName'></chart>
</template>

<script>

import chart from '../components/dataChart' 
export default {
  data() {
    return {
      fileName:"ztfTime",
      dataName:"PathHopNum",
      chartName:"业务端到端跳数"
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
