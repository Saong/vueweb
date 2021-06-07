<template>
<chart :fileName='fileName' :dataName='dataName' :chartName='chartName'></chart>
</template>

<script>

import chart from '../components/dataChart' 
export default {
  data() {
    return {
      fileName:"ztfTime",
      dataName:"PathDelay",
      chartName:"业务端到端时延"
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
