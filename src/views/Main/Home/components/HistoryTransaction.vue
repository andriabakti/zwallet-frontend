<template>
  <div class="card history px-2 py-3 border-0">
    <div class="card-body">
      <div class="d-flex justify-content-between mb-4">
        <div class="title">Transaction History</div>
        <router-link :to="{ name: 'History' }">See all</router-link>
      </div>
      <div
        v-if="getMyHistory.length === 0"
        class="font-weight-bold text-center font-18"
      >
        History is empty
      </div>
      <div v-if="getMyHistory.length > 0">
        <div
          class="mb-4"
          v-for="history in getMyHistory.slice(0, 5)"
          :key="history.id"
        >
          <CardTransaction :data="history" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardTransaction from '../../../../components/global/CardTransaction'
export default {
  name: 'historyTransaction',
  components: {
    CardTransaction
  },
  computed: {
    ...mapGetters('history', ['getMyHistory'])
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
