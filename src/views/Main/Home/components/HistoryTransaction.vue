<template>
    <b-row class="no-gutters history mx-3 p-4">
        <b-col lg="10">
            <div class="title">Transaction History</div>
        </b-col>
        <b-col lg="2">
            <router-link to="/foo">See all</router-link>
        </b-col>
        <b-col lg="12 mt-3">
            <CardTransaction/>
        </b-col>
    </b-row>
</template>

<script>
import CardTransaction from './CardTransaction'
export default {
  name: 'historyTransaction',
  components: {
    CardTransaction
  }
}
</script>

<style scoped>
.history{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.title{
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  letter-spacing: 1px;
}
</style>
