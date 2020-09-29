<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: 'Chart',
          backgroundColor: '#6379F4',
          data: [100000, 130000, 140000, 150000, 190000, 170000, 200000]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style scoped>
</style>
