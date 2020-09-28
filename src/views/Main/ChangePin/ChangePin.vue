<template>
  <div>
    <CardMainRight title="Change PIN" v-if="!isOk">
      <template #description>
        Enter your current 6 digits Zwallet PIN below to continue to the next
        steps.
      </template>
      <template #body>
        <div class="row mt-5">
          <div class="col-md-8 mx-auto">
            <form @submit.prevent="checkPin" class="text-center">
              <PincodeInput v-model="oldPin" :length="6" placeholder="_" />

              <button
                type="submit"
                class="btn btn-block mt-5"
                :disabled="!checkFilled"
                :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </template>
    </CardMainRight>
    <CardMainRight title="Change PIN" v-if="isOk">
      <template #description>
        Type your new 6 digits security PIN to use in Zwallet.
      </template>
      <template #body>
        <div class="row mt-5">
          <div class="col-md-8 mx-auto">
            <form @submit.prevent="handleChangePin" class="text-center">
              <PincodeInput v-model="newPin" :length="6" placeholder="_" />

              <button
                type="submit"
                class="btn btn-block mt-5"
                :disabled="!checkFilled"
                :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </template>
    </CardMainRight>
  </div>
</template>

<script>
import CardMainRight from '@/components/CardMainRight'
import PincodeInput from 'vue-pincode-input'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      oldPin: '',
      newPin: '',
      isOk: false
    }
  },
  components: {
    CardMainRight,
    PincodeInput
  },
  methods: {
    ...mapActions('user', ['changePin', 'myProfile']),
    checkPin() {
      if (this.oldPin !== this.getMyProfile.pin) {
        this.$toast.error('Current PIN wrong')
        this.oldPin = ''
        this.isOk = false
      } else {
        this.isOk = true
        this.$toast.success('Current PIN ok, please change your PIN')
      }
    },
    handleChangePin() {
      const dataPin = {
        pin: this.oldPin,
        newPin: this.newPin
      }
      this.changePin(dataPin)
        .then((response) => {
          this.$toast.success('PIN changed successfully')
          this.$router.push({ name: 'Profile' })
          this.myProfile()
          this.oldPin = ''
          this.newPin = ''
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
          this.oldPin = ''
          this.newPin = ''
        })
    }
  },
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    checkFilled() {
      return !!this.oldPin
    }
  }
}
</script>

<style scoped>
</style>
