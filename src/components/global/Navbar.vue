<template>
  <div>
    <nav class="navbar py-4 navbar-expand-sm navbar-light">
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
            <UserAccount />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import UserAccount from '../global/UserAccaount'
export default {
  name: 'Navbar',
  components: {
    UserAccount
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
</style>
