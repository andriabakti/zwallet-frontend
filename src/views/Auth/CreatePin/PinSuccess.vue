<template>
  <div class="col-md-5" id="right">
    <img src="../../../assets/images/success.png" alt="succes" />
    <label id="right-subtitle"> Your PIN Was Successfully Created </label>
    <label id="right-description">
      Your PIN was successfully created and you can now access all the features
      in Zwallet. Login to Your new account and start exploring!
    </label>
    <div class="button">
      <button id="submit-btn" @click="toLogin">Login Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinSuccess',
  methods: {
    toLogin() {
      this.$router.push('login')
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
#right img {
  width: 70px;
}
#right-subtitle {
  font-weight: bold;
  font-size: 24px;
  color: #3a3d42;
  margin-top: 50px;
}
#right-description {
  font-size: 16px;
  color: rgba(58, 61, 66, 0.6);
  margin-top: 20px;
  line-height: 30px;
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
  background: #6379f4;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
</style>
