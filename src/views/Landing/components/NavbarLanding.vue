<template>
  <nav class="navbar navbar-expand-sm navbar-dark pt-4">
    <div class="container">
      <a class="navbar-brand font-weight-bold" href="#">Zwallet</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
      <button
        class="btn btn-outline-light2 mr-3 px-3 rounded-2 border-2"
        @click="toLogin"
      >
        Login
      </button>
      <button
        class="btn btn-light2 px-3 rounded-2 border-2"
        @click="toRegister"
      >
        Sign Up
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push('auth/login')
    },
    toRegister() {
      this.$router.push('auth/sign-up')
    }
  }
}
</script>

<style scoped>
</style>
