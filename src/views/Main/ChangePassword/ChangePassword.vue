<template>
  <div class="col-md-9" id="main">
    <div id="card">
      <div class="head">
        <label class="title">Change Password</label>
        <p class="describe">
          You must enter your current password and then<br>
          type your new pasword twice.
        </p>
      </div>
      <div class="body">
        <div class="form">
          <div class="form-group">
            <input type="password" placeholder="Current password">
          </div>
          <div class="form-group">
            <input type="password" placeholder="New password">
          </div>
          <div class="form-group">
            <input type="password" placeholder="Repeat new password">
          </div>
        </div>
        <div class="button">
          <button id="submit-btn">Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword'
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
  justify-content: space-between;
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
}
/* Form */
.form {
  display: flex;
  flex-direction: column;
}
.form-group input {
  width: 430px;
  height: 37px;
  font-size: 16px;
  border-style: none;
  border-bottom: 2px solid #7E98DF;
  margin: 40px 0 0;
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
