<template>
  <b-modal id="modal-topup" hide-footer title="Top Up">
    <div v-if="!getStatusPin">
      <form @submit.prevent="checkPin" class="text-center">
        <p>Enter your 6 digits PIN for confirmation</p>
        <PincodeInput v-model="pin" :length="6" placeholder="_" />

        <button
          type="submit"
          class="btn btn-block mt-5"
          :disabled="!checkFilled"
          :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
        >
          Confirm
        </button>
      </form>
    </div>
    <div v-if="getStatusPin">
      <form @submit.prevent="handleTopUp">
        <div class="form-group">
          <label for="">Amount</label>
          <input type="number" v-model="amount" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Bukti</label>
          <b-form-file
            accept="image/jpeg, image/png, image/jpg"
            class="border-0"
            v-model="fileImage"
            :state="Boolean(fileImage)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </div>
        <div class="border-top pt-3">
          <div class="d-flex justify-content-end">
            <button
              type="button"
              @click="$bvModal.hide('modal-topup')"
              class="btn mr-2 btn-info"
            >
              Cancel
            </button>
            <g-button
              type="submit"
              class="btn btn-primary"
              :isLoading="getLoading"
              >Top up</g-button
            >
          </div>
        </div>
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
      fileImage: null,
      amount: '',
      pin: ''
    }
  },
  props: ['isStatusOk'],
  components: {
    PincodeInput
  },
  methods: {
    ...mapActions('user', ['myProfile', 'updateUser']),
    ...mapActions('history', ['topup', 'myHistory']),
    ...mapActions(['changeStatusPin']),
    checkPin() {
      if (this.pin !== this.getMyProfile.pin) {
        this.$toast.error('Current PIN wrong')
        this.pin = ''
        this.changeStatusPin(false)
      } else {
        if (
          !this.getMyProfile.firstName ||
          !this.getMyProfile.lastName ||
          !this.getMyProfile.phoneNumber
        ) {
          this.$toast.error('Please complete your personal data first')
          this.pin = ''
        } else {
          this.changeStatusPin(true)

          this.$toast.success('Current PIN ok, please change your PIN')
        }
      }
    },
    handleTopUp() {
      const formData = new FormData()
      if (this.fileImage) {
        if (this.fileImage.size > 2097152) {
          return this.$toast.error('Max file size 2MB')
        }
      } else if (!this.amount) {
        return this.$toast.error('Amount required')
      } else if (this.amount < 5000) {
        return this.$toast.error('Min topup 5000')
      } else if (!this.fileImage) {
        return this.$toast.error('Bukti required')
      }
      formData.append('image', this.fileImage)
      formData.append('amount', this.amount)
      formData.append('pin', this.pin)
      this.topup(formData)
        .then((response) => {
          this.$toast.success('Top up request sent, please wait a few minutes')
          this.$bvModal.hide('modal-topup')
          this.myHistory({ page: 1 })
          this.$router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
        })
    }
  },
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    ...mapGetters(['getStatusPin', 'getLoading']),
    checkFilled() {
      return !!this.pin
    }
  }
}
</script>

<style scoped>
</style>
