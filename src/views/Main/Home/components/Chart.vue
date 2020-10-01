<template>
  <div class="row mt-3">
    <div class="col-lg-6 mb-3">
      <ChartTransaction />
    </div>
    <div class="col-lg-6 mb-3">
      <HistoryTransaction />
    </div>
  </div>
</template>

<script>
import ChartTransaction from './ChartTransaction'
import HistoryTransaction from './HistoryTransaction'
export default {
  name: 'Chart',
  components: {
    ChartTransaction,
    HistoryTransaction
  }
}
</script>

<style scoped>
</style>
