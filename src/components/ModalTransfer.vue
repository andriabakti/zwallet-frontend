<template>
  <b-modal id="modal-transfer" hide-footer title="Enter PIN to Transfer">
    <div v-if="!getStatusPin">
      <p>
        Enter your 6 digits PIN for confirmation to continue transferring money.
      </p>
      <form @submit.prevent="checkPin" class="text-center">
        <PincodeInput v-model="pin" :length="6" placeholder="_" />
        <g-button
          :isLoading="getLoading"
          type="submit"
          class="btn btn-block mt-5"
          :disabled="!checkFilled"
          :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
        >
          Continue
        </g-button>
      </form>
    </div>
  </b-modal>
</template>

<script>
import PincodeInput from 'vue-pincode-input'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      pin: ''
    }
  },
  props: ['isStatusOk'],
  components: {
    PincodeInput
  },
  methods: {
    ...mapActions('user', [
      'myProfile',
      'updateUser',
      'cleardetailTransaction'
    ]),
    ...mapActions('history', ['transfer', 'myHistory']),
    checkPin() {
      if (this.pin !== this.getMyProfile.pin) {
        this.$toast.error('PIN wrong!')
        this.pin = ''
      } else {
        const dataTransfer = {
          notes: this.getDetailTransaction.notes,
          amount: this.getDetailTransaction.amount,
          receiverId: this.getDetailTransaction.id,
          pin: this.pin
        }
        this.transfer(dataTransfer)
          .then((response) => {
            this.$toast.success('Transfer successful')
            this.myProfile()
            this.myHistory()
            this.cleardetailTransaction()
            this.$router.push({ name: 'Dashboard' })
          })
          .catch((err) => {
            this.$toast.error(err.data.message)
          })
      }
    }
  },
  computed: {
    ...mapGetters('user', ['getMyProfile', 'getDetailTransaction']),
    ...mapGetters(['getStatusPin', 'getLoading']),
    checkFilled() {
      return !!this.pin
    }
  }
}
</script>

<style scoped>
</style>
