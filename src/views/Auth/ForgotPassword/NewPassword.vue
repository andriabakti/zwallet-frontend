<template>
  <div class="col-md-5" id="right">
    <label id="right-subtitle">
      Did You Forgot Your Password?
      Don't Worry, You Can Reset Your
      Password In a Minutes.
    </label>
    <label id="right-description">
      Now you can create a new password for your Zwallet
      account. Type your password twice so we can confirm your
      new password.
    </label>
    <div id="main">
      <div class="form">
        <div class="form-group">
          <input type="password" placeholder="Create new password">
        </div>
        <div class="form-group">
          <input type="password" placeholder="Create new password">
        </div>
      </div>
      <div class="button">
        <button id="submit-btn">Reset Password</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPassword'
}
</script>

<style scoped>
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
    height: 45px;
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
    background-color: #7E98DF !important;
    color: #ffffff !important;
} */
</style>
