<template>
  <div>
    <CardMainRight title="Transfer To">
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
        <p class="mt-4">Details</p>
        <div class="row mb-4">
          <CardInfo
            label="Amount"
            :main="getDetailTransaction.amount | currency"
          />
          <CardInfo
            label="Balance Left"
            :main="
              (getMyProfile.balance - getDetailTransaction.amount) | currency
            "
          />
          <CardInfo label="Date & time" :main="new Date()" />
          <CardInfo label="Notes" :main="getDetailTransaction.notes" />
        </div>
        <div class="float-right">
          <button v-b-modal.modal-transfer class="btn btn-primary">
            Continue
          </button>
        </div>
      </template>
    </CardMainRight>
    <ModalTransfer />
  </div>
</template>

<script>
import ModalTransfer from '@/components/ModalTransfer'
import CardMainRight from '@/components/CardMainRight'
import CardInfo from '@/components/CardInfo'
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
    CardMainRight,
    CardInfo,
    ModalTransfer
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
