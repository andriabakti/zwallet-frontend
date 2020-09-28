<template>
  <div>
    <Header />
    <div class="mt-4">
      <Chart />
    </div>
  </div>
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
