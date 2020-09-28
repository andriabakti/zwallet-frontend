<template>
  <div
    @click="$emit('select-user', user)"
    class="d-flex align-items-center px-3 mt-3 mx-1 py-3 contact"
  >
    <div class="img-container mr-3">
      <b-avatar
        rounded="lg"
        size="60px"
        v-if="user.image"
        :src="user.image"
      ></b-avatar>
      <b-avatar rounded="lg" v-if="!user.image" size="60px"></b-avatar>
    </div>
    <div>
      <div class="title mb-1">
        {{ user.fullName ? user.fullName : user.username }}
      </div>
      <div class="number">
        {{ user.phoneNumber ? '+62 ' + user.phoneNumber : 'Belum di set' }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CardContact',
  props: ['user'],
  computed: {
    ...mapGetters(['getLoading'])
  }
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
