<template>
  <div class="col-md-5" id="right">
    <label id="right-subtitle">
      Secure Your Account, Your Wallet,<br>
      and Your Data With 6 Digits PIN<br>
      That You Created Yourself.
    </label>
    <label id="right-description">
      Create 6 digits pin to secure all your money and your data in
      Zwallet app. Keep it secret and don't tell anyone about your
      Zwallet account password and the PIN.
    </label>
    <div id="main">
      <form>
        <div class="form-row">
          <div class="col">
            <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          </div>
          <div class="col">
            <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          </div>
          <div class="col">
            <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          </div>
          <div class="col">
            <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          </div>
          <div class="col">
            <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          </div>
          <div class="col">
            <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          </div>
        </div>
      </form>
      <div class="button">
        <button id="submit-btn">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePin'
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
.col input {
  width: 53px;
  height: 65px;
  border-radius: 10px;
  border: 1px solid rgba(169, 169, 169, 0.6);
  background: #FFFFFF;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #3A3D42;
  margin-top: 40px;
}
.col input::-webkit-outer-spin-button,
.col input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Button */
.button {
  margin-top: 90px;
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
</style>
