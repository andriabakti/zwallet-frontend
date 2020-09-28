<template>
  <div class="card history border-0">
    <div class="card-body">
      <div class="d-flex justify-content-between mb-4">
        <div class="title">Transaction History</div>
        <router-link to="/foo">See all</router-link>
      </div>
      <CardTransaction />
    </div>
  </div>
</template>

<script>
import CardTransaction from '../../../../components/global/CardTransaction'
export default {
  name: 'historyTransaction',
  components: {
    CardTransaction
  }
}
</script>

<style scoped>
.history {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3a3d42;
  letter-spacing: 1px;
}
</style>
