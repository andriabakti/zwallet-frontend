<template>
  <div>
    <CardMainRight title="Add Phone Number">
      <template #description>
        Add at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </template>
      <template #body>
        <div class="row mt-5">
          <div class="col-md-8 mx-auto">
            <form @submit.prevent="handleAddPhone" class="text-center">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">+62</span>
                </div>
                <input
                  v-model="number"
                  type="number"
                  class="form-control"
                  placeholder="Example: 0878xxxx / 878xxxx"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <button
                type="submit"
                class="btn btn-block mt-5"
                :disabled="!checkFilled"
                :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
              >
                Add Phone Number
              </button>
              <router-link class="mt-3 d-block" :to="{ name: 'ManageNumber' }"
                >Manage Phone</router-link
              >
            </form>
          </div>
        </div>
      </template>
    </CardMainRight>
  </div>
</template>

<script>
import CardMainRight from '@/components/CardMainRight'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      number: ''
    }
  },
  components: {
    CardMainRight
  },
  methods: {
    ...mapActions('phone', ['allMyPhone', 'addPhone']),
    handleAddPhone() {
      const phoneNum = this.number.split('')
      if (phoneNum[0] === '0') {
        phoneNum.shift()
      }
      if (this.number.split(' ').length > 1) {
        this.$toast.error('No space !!')
        this.number = ''
      } else {
        this.addPhone({ phoneNumber: phoneNum.join('') })
          .then((response) => {
            this.$toast.success('Phone number added successfully')
            this.number = ''
            this.allMyPhone()
            this.$router.push({ name: 'ManageNumber' })
          })
          .catch((err) => {
            this.$toast.error(err.data.message)
            this.number = ''
          })
      }
    }
  },
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    checkFilled() {
      return !!this.number
    }
  }
}
</script>

<style scoped>
</style>
