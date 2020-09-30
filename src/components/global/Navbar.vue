<template>
  <div>
    <nav class="navbar py-4 navbar-expand-md navbar-light">
      <div class="container">
        <router-link :to="{ name: 'Dashboard' }" class="navbar-brand"
          >Zwallet</router-link
        >
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <div class="ml-auto">
            <div class="d-flex mobile-link-sidebar flex-column mt-4 mb-4">
              <router-link
                :to="{ name: 'Login' }"
                active
                class="my-2 font-17 text-dark text-decoration-none"
              >
                <b-icon icon="grid" class="mr-3"></b-icon>
                Dashboard</router-link
              >
              <router-link
                :to="{ name: 'Transfer' }"
                class="my-2 font-17 text-dark text-decoration-none"
              >
                <b-icon icon="arrow-up" class="mr-3"></b-icon>
                Transfer</router-link
              >
              <router-link
                v-if="getMyProfile.roleId === 2"
                :to="{ name: 'TopUp' }"
                class="my-2 font-17 text-dark text-decoration-none"
              >
                <b-icon icon="plus" class="mr-3"></b-icon> Top Up</router-link
              >

              <router-link
                v-if="getMyProfile.roleId === 1"
                :to="{ name: 'DataTopUp' }"
                class="my-2 font-17 text-dark text-decoration-none"
              >
                <b-icon icon="shift" class="mr-3"></b-icon> Data Top
                Up</router-link
              >

              <router-link
                :to="{ name: 'Profile' }"
                class="my-2 font-17 text-dark text-decoration-none"
              >
                <b-icon icon="person" class="mr-3"></b-icon>
                Profile</router-link
              >
              <span
                class="my-2 d-inline logout cursor-pointer font-17 text-dark"
                @click="handleLogout"
              >
                <b-icon icon="box-arrow-right" class="mr-3"></b-icon> Logout
              </span>
            </div>
            <UserAccount />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserAccount from '../global/UserAccaount'
export default {
  name: 'Navbar',
  components: {
    UserAccount
  },
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
.navbar {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.navbar-light .navbar-brand {
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  color: #6379f4;
}
.mobile-link-sidebar {
  display: none !important;
}
@media screen and (max-width: 767px) {
  .mobile-link-sidebar {
    display: flex !important;
  }
}
</style>
