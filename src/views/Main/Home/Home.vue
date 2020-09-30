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
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Header,
    Chart
  },
  methods: {
    ...mapActions('history', ['myHistory'])
  },
  mounted() {
    this.myHistory({ page: 1 })
  }
}
</script>

<style scoped>
</style>
