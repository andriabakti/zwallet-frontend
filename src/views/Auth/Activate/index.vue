<template>
  <span class="d-none"></span>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['verifyAccount'])
  },
  mounted() {
    const token = this.$route.query.token
    this.verifyAccount({ token })
      .then((response) => {
        this.toast.success(
          'Account has been successfully activated, please login'
        )
        this.$toast.error({ name: 'Login' })
      })
      .catch((err) => {
        this.$toast.error(err.data.message)
        this.$router.push({ name: 'Login' })
      })
  }
}
</script>
