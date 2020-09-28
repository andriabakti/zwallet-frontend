<template>
  <div class="col-lg-9" id="main">
    <div id="card">
      <div class="profile">
        <img src="../../../assets/images/photo.svg" alt="Photo Profile">
        <div id="edit">
          <img src="../../../assets/images/edit.svg" alt="Edit">
          <span class="edit">Edit</span>
        </div>
        <label class="name">Terra</label>
        <label class="phone-number">+62 813-9387-7946</label>
      </div>
      <div class="menu">
        <button id="btn-card" @click="toPersonal">
          <span>Personal Information</span><img src="../../../assets/images/arrow.svg" alt="Arrow">
        </button>
        <button id="btn-card" @click="toChangePass">
          <span>Change Password</span><img src="../../../assets/images/arrow.svg" alt="Arrow">
        </button>
        <button id="btn-card" @click="toChangePin">
          <span>Change PIN</span><img src="../../../assets/images/arrow.svg" alt="Arrow">
        </button>
        <button id="btn-card">
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    toPersonal () {
      this.$router.push('personal-info')
    },
    toChangePass () {
      this.$router.push('change-password')
    },
    toChangePin () {
      this.$router.push('change-pin')
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
  padding: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
/* Profile */
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile img {
  height: 80px;
  background-blend-mode: normal;
  border-radius: 10px;
}
/* Edit */
#edit {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
#edit img {
  height: 13px;
  border-radius: 0;
}
.edit {
  font-size: 16px;
  color: #7A7886;
  cursor: pointer;
  margin-left: 10px;
}
/* Name */
.name {
  font-weight: bold;
  font-size: 23px;
  color: #4D4B57;
  margin-top: 15px;
}
/* Phone Number */
.phone-number {
  font-size: 15px;
  color: #7A7886;
  margin-top: 5px;
}

/* Menu */
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
/* Button */
#btn-card {
  width: 440px;
  height: 60px;
  background: #E5E8ED;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0 0;
}
#btn-card span {
  font-size: 16px;
  font-weight: bold;
  color: #4D4B57;
}
#btn-card img {
  height: 20px;
}
</style>
