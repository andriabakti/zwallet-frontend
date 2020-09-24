<template>
  <carousel :autoplay="true" :nav="false" :items="1">
    <div class="card py-5 px-4 card-testimoni">
      <div class="card-body">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="user-avatar"
        ></b-avatar>
        <p class="mt-4 mb-2 color-dra font-weight-bold font-23">
          Alex Hansinburg
        </p>
        <span class="font-18 text-description">Designer</span>
        <p class="text-description mt-4 font-18 mb-0">
          “This is the most outstanding app that I’ve ever try in my live, this
          app is such an amazing masterpiece and it’s suitable for you who is
          bussy with their bussiness and must transfer money to another person
          aut there. Just try this app and see the power!”
        </p>
      </div>
    </div>
    <div class="card py-5 px-4 card-testimoni">
      <div class="card-body">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="user-avatar"
        ></b-avatar>
        <p class="mt-4 mb-2 color-dra font-weight-bold font-23">
          Alex Hansinburg
        </p>
        <span class="font-18 text-description">Designer</span>
        <p class="text-description mt-4 font-18 mb-0">
          “This is the most outstanding app that I’ve ever try in my live, this
          app is such an amazing masterpiece and it’s suitable for you who is
          bussy with their bussiness and must transfer money to another person
          aut there. Just try this app and see the power!”
        </p>
      </div>
    </div>
    <div class="card py-5 px-4 card-testimoni">
      <div class="card-body">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="user-avatar"
        ></b-avatar>
        <p class="mt-4 mb-2 color-dra font-weight-bold font-23">
          Alex Hansinburg
        </p>
        <span class="font-18 text-description">Designer</span>
        <p class="text-description mt-4 font-18 mb-0">
          “This is the most outstanding app that I’ve ever try in my live, this
          app is such an amazing masterpiece and it’s suitable for you who is
          bussy with their bussiness and must transfer money to another person
          aut there. Just try this app and see the power!”
        </p>
      </div>
    </div>
    <div class="card py-5 px-4 card-testimoni">
      <div class="card-body">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="user-avatar"
        ></b-avatar>
        <p class="mt-4 mb-2 color-dra font-weight-bold font-23">
          Alex Hansinburg
        </p>
        <span class="font-18 text-description">Designer</span>
        <p class="text-description mt-4 font-18 mb-0">
          “This is the most outstanding app that I’ve ever try in my live, this
          app is such an amazing masterpiece and it’s suitable for you who is
          bussy with their bussiness and must transfer money to another person
          aut there. Just try this app and see the power!”
        </p>
      </div>
    </div>
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  components: { carousel }
}
</script>

<style scoped>
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
  box-shadow: 0px 5px 20px rgba(197, 197, 197, 0.15);
  margin: 20px;
}
.user-avatar {
  width: 90px;
  height: 90px;
  border-radius: 15px !important;
}
.text-description {
  color: #676a71;
}
</style>
