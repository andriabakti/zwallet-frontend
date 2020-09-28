<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <div class="img-container mr-3">
        <img src="../../assets/avatar.jpg" alt="" />
      </div>
      <div class="d-flex flex-column">
        <div class="title">Samuel Suhi</div>
        <div class="type">Transfer</div>
      </div>
    </div>
    <div class="amount">+Rp50.00000</div>
  </div>
</template>

<script>
export default {
  name: 'CardTransaction'
}
</script>

<style scoped>
.img-container {
  width: 60px;
  height: 60px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-blend-mode: normal;
  border-radius: 10px;
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #4d4b57;
  letter-spacing: 1px;
}
.type {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #7a7886;
  letter-spacing: 1px;
}
.amount {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #1ec15f;
  letter-spacing: 1px;
}
</style>
