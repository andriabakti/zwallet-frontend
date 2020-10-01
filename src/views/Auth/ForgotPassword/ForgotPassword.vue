<template>
  <div class="col-md-5" id="right">
    <div>
      <router-link
        :to="{ name: 'Login' }"
        class="btn btn-sm btn-primary btn-shadow mb-3"
        >Back to login</router-link
      >
    </div>

    <label id="right-subtitle">
      Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In
      a Minutes.
    </label>
    <label id="right-description">
      Now you can create a new password for your Zwallet account. Type your
      password twice so we can confirm your new password.
    </label>
    <div id="main">
      <form @submit.prevent="handleForgotPassword">
        <div class="form">
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Enter your e-mail"
            />
          </div>
        </div>
        <div class="button">
          <button
            type="submit"
            class="btn"
            :disabled="!checkFilled"
            :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapActions('auth', ['forgotPassword']),
    handleForgotPassword() {
      this.forgotPassword({ email: this.email })
        .then((response) => {
          this.$toast.success(
            'A link to change the password has been sent to your email'
          )
          this.email = ''
          this.$router.push({ name: 'Login' })
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
          this.email = ''
        })
    }
  },
  computed: {
    checkFilled() {
      return !!this.email
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
