<template>
  <div id="features">
    <div class="container">
      <div class="row">
        <div class="col-md-6 image-left">
          <g-image url="feature.svg" class="img-fluid" />
        </div>
        <div class="col-md-6 right d-flex justify-content-center flex-column">
          <div class="feature-header mb-5">
            <h2 class="text-dark">
              All The <span style="color: #6379f4">Great</span><br />
              Zwallet Features.
            </h2>
          </div>
          <div class="list-feature">
            <div class="row">
              <div class="col-md-12 mb-4">
                <div class="card py-2 card-feature">
                  <div class="card-body">
                    <p class="font-18 font-weight-bold color-dra mb-2">
                      <span class="color-pri mr-2">1.</span> Small Free
                    </p>
                    <p class="mb-0 color-dra">
                      We only charge 5% of every success transaction done in
                      Zwallet app.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mb-4">
                <div class="card py-2 card-feature">
                  <div class="card-body">
                    <p class="font-18 font-weight-bold color-dra mb-2">
                      <span class="color-pri mr-2">2.</span> Data Secured
                    </p>
                    <p class="mb-0 color-dra">
                      All your data is secured properly in our system and it’s
                      encrypted.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mb-4">
                <div class="card py-2 card-feature">
                  <div class="card-body">
                    <p class="font-18 font-weight-bold color-dra mb-2">
                      <span class="color-pri mr-2">3.</span> User Friendly
                    </p>
                    <p class="mb-0 color-dra">
                      Zwallet come up with modern and sleek design and not
                      complicated.
                    </p>
                  </div>
                </div>
              </div>
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
#features {
  background: rgba(71, 58, 209, 0.06);
}
.feature-header h2 {
  font-size: 50px;
  font-weight: 800;
}
.card-feature {
  border: none;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
@media screen and (max-width: 988px) {
  .feature-header h2 {
    font-size: 40px;
  }
}
@media screen and (max-width: 766px) {
  .image-left {
    display: none;
  }
  .right {
    padding: 100px 20px;
  }
}
</style>
