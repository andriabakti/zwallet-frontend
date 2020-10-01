<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <div class="img-container mr-3">
        <b-avatar
          rounded="lg"
          size="60px"
          :src="
            getMyProfile.id === data.receiverId
              ? data.senderImage
              : data.receiverImage
          "
        ></b-avatar>
      </div>
      <div class="d-flex flex-column">
        <div class="title">
          {{
            getMyProfile.id === data.receiverId
              ? data.senderName
              : data.receiverName
          }}
        </div>
        <div class="type">
          {{ filterStatus }}
          <span class="text-muted" v-if="data.status === 2">
            |
            {{
              data.statusTopup === 0
                ? 'Pending'
                : data.statusTopup === 1
                ? 'Success'
                : 'Rejected'
            }}</span
          >
        </div>
        <span class="font-12">{{
          new Date(data.date) | dateFormat('MMM DD, YYYY - HH.mm')
        }}</span>
      </div>
    </div>
    <div
      v-if="data.status === 1"
      class="font-weight-bold"
      :class="[
        getMyProfile.id === data.receiverId ? 'text-success' : 'text-danger'
      ]"
    >
      {{ getMyProfile.id === data.receiverId ? '+' : '-'
      }}{{ data.amount | currency }}
    </div>
    <div
      v-if="data.status === 2"
      class="font-weight-bold"
      :class="[
        data.statusTopup === 0
          ? 'text-info'
          : data.statusTopup === 1
          ? 'text-success'
          : 'text-dark line-throught'
      ]"
    >
      {{ data.amount | currency }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CardTransaction',
  props: ['data'],
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    filterStatus() {
      let status = ''
      if (this.data.status === 1) {
        status = 'Transfer'
      } else if (this.data.status === 2) {
        status = 'Top Up'
      }
      return status
    }
  }
}
</script>

<style scoped>
.img-container {
  width: 60px;
  height: 60px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-blend-mode: normal;
  border-radius: 10px;
}
.line-throught {
  text-decoration: line-through;
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #4d4b57;
  letter-spacing: 1px;
}
.type {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #7a7886;
  letter-spacing: 1px;
}
.amount {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #1ec15f;
  letter-spacing: 1px;
}
</style>
