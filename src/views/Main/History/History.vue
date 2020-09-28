<template>
  <div>
    <div class="title mb-4">Transaction History</div>
    <div class="row">
      <div
        class="col-md-12 mb-5"
        v-for="history in getMyHistory"
        :key="history.id"
      >
        <CardTransaction :data="history" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CardTransaction from '../../../components/global/CardTransaction'
export default {
  name: 'History',
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
.filter {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #7a7886;
}
</style>
