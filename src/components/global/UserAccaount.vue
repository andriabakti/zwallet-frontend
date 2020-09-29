<template>
  <div class="d-flex align-items-center">
    <div class="mr-3">
      <b-avatar
        v-if="getMyProfile.image"
        rounded="lg"
        :src="getMyProfile.image"
        size="50px"
      ></b-avatar>
      <b-avatar v-if="!getMyProfile.image" rounded="lg" size="50px"></b-avatar>
    </div>
    <div class="mr-5">
      <router-link
        class="d-block"
        v-if="!getMyProfile.fullName"
        :to="{ name: 'Personal' }"
      >
        Nama belum di setting
      </router-link>

      <div class="name" v-if="getMyProfile.fullName">
        <router-link
          class="d-block text-dark text-decoration-none"
          :to="{ name: 'Personal' }"
        >
          {{ getMyProfile.fullName }}
        </router-link>
      </div>
      <div class="phone" v-if="getMyProfile.phoneNumber">
        +62 {{ getMyProfile.phoneNumber }}
      </div>
      <router-link
        class="d-block"
        v-if="!getMyProfile.phoneNumber"
        :to="{ name: 'Personal' }"
      >
        No tlp belum di setting
      </router-link>
    </div>
    <b-icon icon="bell"></b-icon>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserAccount',
  computed: {
    ...mapGetters('user', ['getMyProfile'])
  }
}
</script>

<style scoped>
.col-lg-3 {
  padding: 0;
}
.img-container {
  height: 50px;
  width: 50px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-blend-mode: normal;
  border-radius: 10px;
}
.name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 31px;
  color: #3a3d42;
}
.phone {
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: rgba(58, 61, 66, 0.9);
}
</style>
