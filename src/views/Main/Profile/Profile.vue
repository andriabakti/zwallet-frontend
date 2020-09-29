<template>
  <div class="row">
    <div class="col-md-8 mx-auto">
      <div class="text-center mb-4">
        <b-avatar
          v-if="getMyProfile.image"
          rounded="lg"
          :src="getMyProfile.image"
          size="80px"
        ></b-avatar>
        <b-avatar
          v-if="!getMyProfile.image"
          rounded="lg"
          size="80px"
        ></b-avatar>
        <router-link
          class="d-block text-muted mt-2 font-14 text-decoration-none"
          :to="{ name: 'Personal' }"
        >
          <b-icon icon="pen" /> Edit
        </router-link>
        <h5 class="mt-3 mb-0">
          <router-link
            class="d-block text-dark text-decoration-none font-weight-bold"
            :to="{ name: 'Personal' }"
          >
            {{
              getMyProfile.fullName
                ? getMyProfile.fullName
                : 'Nama belum di setting'
            }}
          </router-link>
        </h5>
        <p class="text-muted font-15 mt-2">
          {{
            getMyProfile.phoneNumber
              ? '+62 ' + getMyProfile.phoneNumber
              : 'No tlp belum di setting'
          }}
        </p>
      </div>
      <router-link
        class="btn btn-block btn-info align-items-center d-flex justify-content-between px-4 py-2"
        :to="{ name: 'Personal' }"
        ><span>Personal Information</span><b-icon icon="arrow-right"
      /></router-link>
      <router-link
        class="btn btn-block btn-info align-items-center d-flex justify-content-between px-4 py-2"
        :to="{ name: 'ChangePassword' }"
        ><span>Change Password</span> <b-icon icon="arrow-right"
      /></router-link>
      <router-link
        class="btn btn-block btn-info align-items-center d-flex justify-content-between px-4 py-2"
        :to="{ name: 'ChangePin' }"
        ><span>Change PIN</span> <b-icon icon="arrow-right"
      /></router-link>
      <button
        class="btn btn-block btn-info align-items-center d-flex justify-content-between px-4 py-2"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  methods: {
    handleLogout() {
      this.logoutMixin()
    }
  },
  computed: {
    ...mapGetters('user', ['getMyProfile'])
  }
}
</script>

<style scoped>
</style>
