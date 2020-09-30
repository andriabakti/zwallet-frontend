<template>
  <div class="card chart px-2 py-3 border-0">
    <div class="card-body">
      <b-row>
        <div class="col-md-6 mb-3">
          <div class="icon down"><b-icon icon="arrow-down"></b-icon></div>
          <div class="title my-2">Income</div>
          <div class="amount">{{ income | currency }}</div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="icon up"><b-icon icon="arrow-up"></b-icon></div>
          <div class="title my-2">Expense</div>
          <div class="amount">{{ outcome | currency }}</div>
        </div>
        <b-col lg="12" class="mt-3">
          <ChartDashboard />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ChartDashboard from './ChartDashboard'
import { mapActions } from 'vuex'
export default {
  name: 'ChartTransaction',
  data() {
    return {
      income: 0,
      outcome: 0
    }
  },
  components: {
    ChartDashboard
  },
  methods: {
    ...mapActions('history', ['myIncome', 'myOutcome'])
  },
  mounted() {
    this.myIncome().then((response) => {
      this.income = response.results.income
    })
    this.myOutcome().then((response) => {
      this.outcome = response.results.outcome
    })
  }
}
</script>

<style scoped>
.chart {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}
.icon {
  font-size: 20px;
}
.icon.down {
  color: #4cc15f;
}
.icon.up {
  color: #ea5433;
}
.title {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #6a6a6a;
  letter-spacing: 1px;
}
.amount {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3a3d42;
  letter-spacing: 1px;
}
</style>
