<template>
  <div>
    <div class="title mb-3">Search Receiver</div>
    <b-form-input
      class="form-text mb-4"
      v-model="text"
      placeholder="Search receiver here"
    ></b-form-input>
    <CardContact />
  </div>
</template>

<script>
import CardContact from '../../../components/global/CardContact'
export default {
  name: 'Transfer',
  data() {
    return {
      text: ''
    }
  },
  components: {
    CardContact
  }
}
</script>

<style scoped>
.transfer {
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
.form-text {
  background: rgba(58, 61, 66, 0.1);
  border-radius: 12px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: rgba(58, 61, 66, 0.4);
  letter-spacing: 1px;
  position: relative;
}
</style>
