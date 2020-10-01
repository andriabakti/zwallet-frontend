<template>
  <CardMainRight title="Transfer Money">
    <template #description>
      <CardContact :user="getDetailTransaction" />
      <button
        @click="cleardetailTransaction"
        class="btn btn-sm btn-primary mt-3 shadow"
      >
        Select another user
      </button>
    </template>
    <template #body>
      <p class="mt-4">
        Type the amount you want to transfer and then press continue to the next
        steps.
      </p>
      <div class="row mt-5 mb-5">
        <div class="col-md-8 mx-auto">
          <div class="form-group">
            <input
              type="number"
              v-model="amount"
              placeholder="0"
              class="form-control"
            />
          </div>
          <p class="text-center font-weight-bold mt-4">
            {{ getMyProfile.balance | currency }} Available
          </p>
          <div class="form-group mt-4">
            <input
              v-model="notes"
              type="text"
              placeholder="Add some notes"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="float-right">
        <button @click="handleContinue" class="btn btn-primary">
          Continue
        </button>
      </div>
    </template>
  </CardMainRight>
</template>

<script>
import CardMainRight from '@/components/CardMainRight'
import { mapActions, mapGetters } from 'vuex'
import CardContact from '../../../components/global/CardContact'
export default {
  name: 'Transfer',
  data() {
    return {
      amount: null,
      notes: ''
    }
  },
  methods: {
    ...mapActions('user', ['detailTransaction', 'cleardetailTransaction']),
    handleSelect(val) {
      if (!val.fullName || !val.phoneNumber) {
        this.$toast.error('The selected user profile is incomplete')
      } else {
        this.detailTransaction(val)
      }
    },
    handleContinue() {
      if (!this.amount) {
        this.$toast.error('Amount transfer required')
      } else if (this.amount < 5000) {
        this.$toast.error('Min transfer 5000')
      } else if (this.amount > this.getMyProfile.balance) {
        this.$toast.error('Your balance is less')
        this.amount = ''
      } else {
        this.detailTransaction({
          ...this.getDetailTransaction,
          amount: this.amount,
          notes: this.notes
        })
      }
    }
  },
  components: {
    CardContact,
    CardMainRight
  },
  computed: {
    ...mapGetters('user', [
      'getAllUser',
      'getDetailTransaction',
      'getMyProfile'
    ])
  }
}
</script>

<style scoped>
.transfer {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3a3d42;
  letter-spacing: 1px;
}
.form-text {
  background: rgba(58, 61, 66, 0.1);
  border-radius: 12px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: rgba(58, 61, 66, 0.4);
  letter-spacing: 1px;
  position: relative;
}
</style>
