<template>
  <CardMainRight title="Change Password">
    <template #description>
      You must enter your current password and then type your new password
      twice.
    </template>
    <template #body>
      <div class="row mt-5">
        <div class="col-md-8 mx-auto">
          <form @submit.prevent="handleChangePassword">
            <div class="form-group">
              <input
                v-model="currentPassword"
                type="password"
                class="form-control"
                placeholder="Current Password"
              />
            </div>
            <div class="form-group">
              <input
                v-model="newPassword"
                type="password"
                class="form-control"
                placeholder="New Password"
              />
            </div>
            <div class="form-group">
              <input
                v-model="repeatNewPassword"
                type="password"
                class="form-control"
                placeholder="Repeat New Password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-block mt-5"
              :disabled="!checkFilled"
              :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </template>
  </CardMainRight>
</template>

<script>
import CardMainRight from '@/components/CardMainRight'
import { mapActions } from 'vuex'
export default {
  name: 'ChangePassword',
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: ''
    }
  },
  components: {
    CardMainRight
  },
  methods: {
    ...mapActions('user', ['changePassword']),
    handleChangePassword() {
      const dataPassword = {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
        confirmPassword: this.repeatNewPassword
      }
      this.changePassword(dataPassword)
        .then((response) => {
          this.$toast.success('Password changed successfully')
          this.$router.push({ name: 'Profile' })
          this.currentPassword = ''
          this.newPassword = ''
          this.repeatNewPassword = ''
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
        })
    }
  },
  computed: {
    checkFilled() {
      return !!(
        this.currentPassword &&
        this.newPassword &&
        this.repeatNewPassword
      )
    }
  }
}
</script>

<style scoped>
</style>
