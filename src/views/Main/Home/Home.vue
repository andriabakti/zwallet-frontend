<template>
  <b-col lg="9">
    <Header/>
    <Chart/>
  </b-col>
</template>

<script>
import Header from './components/Header'
import Chart from './components/Chart'
export default {
  name: 'Home',
  components: {
    Header,
    Chart
  }
}
</script>

<style scoped>

</style>
