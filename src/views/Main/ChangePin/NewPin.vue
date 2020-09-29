<template>
  <div class="col-md-9" id="main">
    <div id="card">
      <div class="head">
        <label class="title">Change PIN</label>
        <p class="describe">
          Type your new 6 digits security PIN to use in<br>
          Zwallet.
        </p>
      </div>
      <div class="body">
        <div class="pin-form">
          <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
          <input type="number" class="form-control-lg" maxlength="1" placeholder="__">
        </div>
        <div class="button">
          <button id="submit-btn">Change PIN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPin'
}
</script>

<style scoped>
/* Main Card */
#card {
  height: 110vh;
  background: #FFFFFF;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  margin: 25px 120px 20px 20px;
  padding: 30px 30px 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
/* Head Title */
.title {
  font-weight: bold;
  font-size: 18px;
  color: #3A3D42;
}
/* Head Describe */
.describe {
  font-size: 16px;
  line-height: 30px;
  color: #7A7886;
  margin-top: 15px;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
/* Form */
.pin-form {
  width: 430px;
  display: flex;
  justify-content: space-between;
}
.pin-form input {
  width: 53px;
  height: 65px;
  border-radius: 10px;
  border: 1px solid rgba(169, 169, 169, 0.6);
  background: #FFFFFF;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #3A3D42;
}
.pin-form input::-webkit-outer-spin-button,
.pin-form input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Button */
.button {
  margin-top: 70px;
}
.button button {
  width: 430px;
  height: 50px;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  background: #7E98DF;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
</style>
