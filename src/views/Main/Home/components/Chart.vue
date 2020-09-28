<template>
    <b-row class="no-gutters mx-4 mt-3">
        <b-col lg="7">
            <ChartTransaction/>
        </b-col>
        <b-col lg="5">
            <HistoryTransaction/>
        </b-col>
    </b-row>
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
