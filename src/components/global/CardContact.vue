<template>
  <div class="d-flex align-items-center px-3 mt-3 mx-1 py-3 contact">
    <div class="img-container mr-3">
      <img src="../../assets/avatar.jpg" alt="" />
    </div>
    <div>
      <div class="title">Samuel Suhi</div>
      <div class="number">+62 813-8492-9994</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContact'
}
</script>

<style scoped>
.contact {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
}
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
.number {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #7a7886;
  letter-spacing: 1px;
}
</style>
