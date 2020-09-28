<template>
  <div class="col-lg-9" id="main">
    <div id="card">
      <div class="head">
        <label class="title">Personal Information</label>
        <p class="describe">
          We got your personal information from the sign<br>
          up process. If you want to make changes on<br>
          your information, contact our support.
        </p>
      </div>
      <div class="info">
        <div id="info-card">
          <div class="sub">
            <label class="heading">First Name</label>
            <span>Robert</span>
          </div>
        </div>
        <div id="info-card">
          <div class="sub">
            <label class="heading">Last Name</label>
            <span>Chandler</span>
          </div>
        </div>
        <div id="info-card">
          <div class="sub">
            <label class="heading">Verified E-mail</label>
            <span>pewdiepie1@gmail.com</span>
          </div>
        </div>
        <div id="info-card">
          <div class="sub">
            <label class="heading">Phone Number</label>
            <span>+62 813-9387-7946</span>
          </div>
          <div class="manage">
            <span @click="toManage">Manage</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  methods: {
    toManage () {
      this.$router.push('manage-number')
    }
  }
}
</script>

<style scoped>
/* Main Card */
#card {
  height: 110vh;
  background: #FFFFFF;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  margin: 25px 110px 20px 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* Head Title */
.title {
  font-weight: bolder;
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

/* Menu */
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#info-card {
  width: 100%;
  height: 95px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 17px 0 0;
}
.sub {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.heading {
  font-size: 16px;
  color: #7A7886;
}
.sub span {
  font-weight: bold;
  font-size: 19px;
  color: #514F5B;
}
.manage {
  font-weight: 600;
  font-size: 16px;
  color: #6379F4;
  cursor: pointer;
}
</style>
