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
      <form @submit.prevent="handleRegister">
        <div class="form">
          <div class="form-group">
            <input
              type="text"
              v-model="username"
              placeholder="Enter your username"
            />
          </div>
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
              placeholder="Create your password"
            />
          </div>
        </div>
        <div class="button">
          <g-button
            type="submit"
            class="btn"
            :disabled="!checkFilled"
            :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
            :isLoading="getLoading"
            >Sign Up</g-button
          >
          <div class="login">
            <span>
              Already have an account? Let's
              <span id="link" @click="toLogin">Login</span>
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
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    handleRegister() {
      const dataRegister = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.register(dataRegister)
        .then((response) => {
          this.$toast.success('Login success, please check your email!')
          this.email = ''
          this.password = ''
          this.username = ''
          this.$router.push({ name: 'Login' })
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
          this.password = ''
        })
    },
    toLogin() {
      this.$router.push('login')
    }
  },
  computed: {
    ...mapGetters(['getLoading']),
    checkFilled() {
      return !!(this.username && this.email && this.password)
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

/* Link to Login */
.login {
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
