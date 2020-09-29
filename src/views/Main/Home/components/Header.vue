<template>
  <div class="card header border-0">
    <div class="card-body">
      <b-row class="p-4 d-flex justify-content-between align-items-center">
        <div>
          <div class="title">Balance</div>
          <div class="amount my-2">{{ getMyProfile.balance | currency }}</div>
          <div class="userPhone">
            {{
              getMyProfile.phoneNumber
                ? '+62 ' + getMyProfile.phoneNumber
                : 'No tlp belum di setting'
            }}
          </div>
        </div>
        <div>
          <router-link
            :to="{ name: 'Transfer' }"
            class="btn"
            variant="outline-primary"
            ><b-icon icon="arrow-up" class="mr-2"></b-icon>
            Transfer</router-link
          >
          <router-link
            v-if="getMyProfile.roleId === 2"
            :to="{ name: 'TopUp' }"
            class="btn"
            variant="outline-primary"
            ><b-icon icon="plus" class="mr-2"></b-icon> Top Up</router-link
          >
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters('user', ['getMyProfile'])
  }
}
</script>

<style scoped>
.header {
  background: #6379f4;
  border-radius: 20px;
}
.btn {
  width: 90%;
  display: block;
  margin: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  letter-spacing: 1px;
}
.title {
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;
  color: #e0e0e0;
  letter-spacing: 1px;
}
.amount {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 55px;
  color: #ffffff;
  letter-spacing: 1px;
}
.userPhone {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #dfdcdc;
  letter-spacing: 1px;
}
</style>
