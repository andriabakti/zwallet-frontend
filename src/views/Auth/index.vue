<template>
  <b-overlay :show="getLoading" rounded="sm">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7" id="left">
          <div class="main-face pb-5">
            <div
              class="d-flex justify-content-center align-items-center flex-column"
            >
              <p id="title" class="pt-4">Zwallet</p>
              <img
                src="../../assets/images/authMain/phone.svg"
                class="img-fluid"
              />
              <div id="main-subtitle">App that Covering Banking Needs.</div>
              <div id="main-description">
                Zwallet is an application that focussing in banking needs for
                all users<br />
                the world. Always updated and always following world trends.<br />
                5000+ users registered in Zwallet everyday with worldwide<br />
                users coverage.
              </div>
            </div>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </b-overlay>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Auth',
  computed: {
    ...mapGetters(['getLoading'])
  }
}
</script>

<style scoped>
.row {
  font-family: Nunito Sans;
}
/* Left Side */
#left {
  background-image: url('../../assets/images/authMain/left-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
#title {
  font-weight: bold;
  font-size: 29px;
  color: #ffffff;
}
#left img {
  width: 500px;
  height: 530px;
  margin-left: -55px;
}
#main-subtitle {
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  margin-top: 20px;
}
#main-description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  line-height: 30px;
}
</style>
