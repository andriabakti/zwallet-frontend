<template>
  <div id="about">
    <div class="container">
      <div class="header-about text-center">
        <h2><span style="color: #6379f4">About</span> the Application.</h2>
        <p class="mt-4 font-18">
          We have some great features from the application and it’s totally<br />
          free to use by all users around the world.
        </p>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card card-about">
            <div class="card-body px-4 text-center">
              <div class="icon">
                <g-image url="icon/phone.svg" />
              </div>
              <h5 class="text-dark font-22 mt-1 font-weight-bold">
                24/7 Support
              </h5>
              <p class="mt-4 text-dark">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card card-about">
            <div class="card-body px-4 text-center">
              <div class="icon">
                <g-image url="icon/lock.svg" />
              </div>
              <h5 class="text-dark font-22 mt-1 font-weight-bold">
                Data Privacy
              </h5>
              <p class="mt-4 text-dark">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card card-about">
            <div class="card-body px-4 text-center">
              <div class="icon">
                <g-image url="icon/download.svg" />
              </div>
              <h5 class="text-dark font-22 mt-1 font-weight-bold">
                Easy Download
              </h5>
              <p class="mt-4 text-dark">
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#about {
  padding: 120px 0 150px 0;
  background-color: #fafafa;
}

.header-about {
  margin-bottom: 80px;
}

.header-about h2 {
  font-weight: 800;
  font-size: 50px;
  color: #3a3d42;
}

.card-about {
  border: none;
  border-radius: 25px;
  box-shadow: 0px 4px 12px rgba(172, 172, 172, 0.15);
}
@media screen and (max-width: 550px) {
  .header-about h2 {
    font-size: 40px;
  }
}
</style>
