<template>
  <div>
    <NavbarLanding />
    <div id="header">
      <div class="container">
        <div class="row header-content">
          <div class="col-lg-6 col-md-12">
            <div class="header-left">
              <h1>Awesome App For Saving Time.</h1>
              <p class="text-white mt-4 font-18">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <button class="btn btn-light2 px-4 py-2 rounded-2 mt-3">
                Try It Free
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <g-image url="png-phone.png" class="img-fluid img-phone" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLanding from './NavbarLanding'
export default {
  components: {
    NavbarLanding
  }
}
</script>

<style scoped>
#header {
  max-height: 900px;
  overflow: hidden;
  background-color: #6379f4;
  margin-top: -75px;
  background-image: url('../../../assets/images/tes.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-content {
  padding-top: 200px;
}

.header-left h1 {
  font-size: 50px;
  font-weight: 800;
  color: white;
}

.img-phone {
  margin-top: -100px;
}

@media screen and (max-width: 988px) {
  .header-left {
    margin-bottom: 90px;
  }
}
@media screen and (max-width: 550px) {
  .header-left h1 {
    font-size: 40px;
  }
}
</style>
