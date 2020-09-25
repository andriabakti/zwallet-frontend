<template>
  <div id="testimoni">
    <div class="container text-center">
      <div class="feature-header">
        <h2 class="color-dra mb-4">
          What Users are <span style="color: #6379f4">Saying</span>.
        </h2>
        <p class="color-dra font-18">
          We have some great features from the application and it’s totally
          free<br />
          to use by all users around the world.
        </p>
      </div>
      <CarouselTestimoni />
    </div>
  </div>
</template>

<script>
import CarouselTestimoni from './CarouselTestimoni'

export default {
  components: {
    CarouselTestimoni
  }
}
</script>

<style scoped>
#testimoni {
  padding: 120px 0 150px 0;
  background: #fafafa;
}
.feature-header {
  margin-bottom: 75px;
}
.feature-header h2 {
  font-size: 50px;
  font-weight: 800;
}
.card-testimoni {
  border: 0;
  border-radius: 25px;
  box-shadow: 0px 5px 70px rgba(197, 197, 197, 0.15);
}
.user-avatar {
  width: 90px;
  height: 90px;
  border-radius: 15px !important;
}
.text-description {
  color: #676a71;
}
@media screen and (max-width: 550px) {
  .feature-header h2 {
    font-size: 40px;
  }
}
</style>
