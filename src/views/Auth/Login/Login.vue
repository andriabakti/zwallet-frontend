<template>
  <div class="col-md-5" id="right">
    <label id="right-subtitle">
      Start Accessing Banking Needs<br>
      With All Devices and All Platforms<br>
      With 30.000+ Users
    </label>
    <label id="right-description">
      Transferring money is eassier than ever, you can access
      Zwallet wherever you are. Desktop, laptop, mobile phone?
      we cover all of that for you!
    </label>
    <div id="main">
      <div class="form">
        <div class="form-group">
          <input type="email" v-model="email" aria-describedby="emailHelp" placeholder="Enter your e-mail">
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Enter your password">
        </div>
        <p id="forgot" @click="toForgotPassword">Forgot Password?</p>
        <p id="pin" @click="toCreatePin">Set up your PIN here!</p>
      </div>
      <div class="button">
        <button id="submit-btn">Login</button>
        <div class="register">
          <span>
            Don't have an account? Let's
            <span id="link" @click="toRegister">Sign Up</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    toRegister () {
      this.$router.push('sign-up')
    },
    toCreatePin () {
      this.$router.push('create-pin')
    },
    toForgotPassword () {
      this.$router.push('forgot-password')
    }
  }
}
</script>

<style scoped>
/* Right Side */
#right {
  padding: 100px 100px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background:#FAFCFF;
}
#right-subtitle {
  font-weight: bold;
  font-size: 24px;
  color: #3A3D42;
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
  background: #FAFCFF;
  margin-top: 40px;
}
#forgot, #pin {
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
  background: #DADADA;
  color: #88888F;
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
  color: #6379F4;
  font-weight: 600;
  cursor: pointer;
}
</style>
