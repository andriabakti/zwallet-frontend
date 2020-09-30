<template>
  <div class="col-md-5" id="right">
    <label id="right-subtitle">
      Start Accessing Banking Needs<br />
      With All Devices and All Platforms<br />
      With 30.000+ Users
    </label>
    <label id="right-description">
      Transferring money is eassier than ever, you can access Zwallet wherever
      you are. Desktop, laptop, mobile phone? we cover all of that for you!
    </label>
    <div id="main">
      <form @submit.prevent="handleLogin">
        <div class="form">
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Enter your e-mail"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="password"
              placeholder="Enter your password"
            />
          </div>
          <p id="forgot" @click="toForgotPassword">Forgot Password?</p>
        </div>
        <div class="button">
          <g-button
            class="btn"
            :disabled="!checkFilled"
            :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
            :isLoading="getLoading"
            type="submit"
            >Login</g-button
          >
          <div class="register">
            <span>
              Don't have an account? Let's
              <span id="link" @click="toRegister">Sign Up</span>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    handleLogin() {
      const dataLogin = {
        email: this.email,
        password: this.password
      }
      this.login(dataLogin)
        .then((response) => {
          this.$toast.success('Login success')
          this.password = ''
          this.email = ''
          this.$router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          this.password = ''
          this.$toast.error(err.data.message)
        })
    },
    toRegister() {
      this.$router.push('sign-up')
    },
    toCreatePin() {
      this.$router.push('create-pin')
    },
    toForgotPassword() {
      this.$router.push('forgot-password')
    }
  },
  computed: {
    ...mapGetters(['getLoading']),
    checkFilled() {
      return !!(this.email && this.password)
    }
  }
}
</script>

<style scoped>
/* Right Side */
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
#forgot,
#pin {
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

/* Register */
.register {
  font-size: 16px;
  color: rgba(58, 61, 66, 0.8);
  text-align: center;
  margin-top: 40px;
}
#link {
  color: #6379f4;
  font-weight: 600;
  cursor: pointer;
}
</style>
