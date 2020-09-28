<template>
  <div class="col-md-5" id="right">
    <label id="right-subtitle">
      Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In
      a Minutes.
    </label>
    <label id="right-description">
      Now you can create a new password for your Zwallet account. Type your
      password twice so we can confirm your new password.
    </label>
    <div id="main">
      <form @submit.prevent="handleNewPassword">
        <div class="form">
          <div class="form-group">
            <input
              type="password"
              v-model="newPassword"
              placeholder="Create new password"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="confirmPassword"
              placeholder="Create new password"
            />
          </div>
        </div>
        <div class="button">
          <button
            class="btn"
            :disabled="!checkFilled"
            :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewPassword',
  data() {
    return {
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions('auth', ['verifyResetPassword', 'resetPassword']),
    handleNewPassword() {
      if (!this.newPassword) {
        this.$toast.error('New password required')
      } else if (!this.confirmPassword) {
        this.$toast.error('Confirm new password required')
      } else if (this.newPassword.length < 6) {
        this.$toast.error('New password min 6 character')
      } else if (this.newPassword !== this.confirmPassword) {
        this.$toast.error(
          'New password with password confirmation is not the same'
        )
      } else {
        const token = this.$route.query.token
        this.resetPassword({
          token,
          password: this.newPassword,
          confirmPassword: this.confirmPassword
        })
          .then((response) => {
            this.$toast.success(response.message)
            this.$router.push({ name: 'Login' })
          })
          .catch((err) => {
            this.$toast.error(err.data.message)
            this.newPassword = ''
            this.confirmPassword = ''
          })
      }
    }
  },
  mounted() {
    const token = this.$route.query.token
    if (!token) {
      this.$router.push({ name: 'Login' })
    } else {
      this.verifyResetPassword({ token })
        .then((response) => {
          this.$toast.success('Token OK')
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
          this.$router.push({ name: 'Login' })
        })
    }
  },
  computed: {
    checkFilled() {
      return !!this.newPassword && this.confirmPassword
    }
  }
}
</script>

<style scoped>
#right {
  padding: 100px 40px 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background: #fafcff;
}
#right-subtitle {
  font-weight: bold;
  font-size: 24px;
  color: #3a3d42;
}
#right-description {
  font-size: 16px;
  color: rgba(58, 61, 66, 0.6);
  margin-top: 20px;
  line-height: 30px;
}

/* Form */
.form-group input {
  width: 100%;
  height: 37px;
  font-size: 16px;
  border-style: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  background: #fafcff;
  margin-top: 40px;
}
#forgot {
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  color: rgba(58, 61, 66, 0.8);
  cursor: pointer;
}

/* Button */
.button {
  margin-top: 70px;
}
.button button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
/* Inactive Button */
#submit-btn {
  background: #dadada;
  color: #88888f;
}
/* Active Button */
/* .button-hover {
  background-color: #6379F4 !important;
  color: #ffffff !important;
} */
</style>
