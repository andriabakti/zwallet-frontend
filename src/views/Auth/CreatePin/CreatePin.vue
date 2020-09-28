<template>
  <div class="col-md-5" id="right">
    <div v-if="isSuccess">
      <img
        src="../../../assets/images/success.png"
        alt="succes"
        class="d-block mb-4"
      />
      <label id="right-subtitle"> Your PIN Was Successfully Created </label>
      <label id="right-description">
        Your PIN was successfully created and you can now access all the
        features in Zwallet. Login to Your new account and start exploring!
      </label>
      <div class="button">
        <button
          class="btn btn-primary"
          @click="$router.push({ name: 'Dashboard' })"
        >
          Go To Dashboard
        </button>
      </div>
    </div>
    <div v-if="!isSuccess">
      <label id="right-subtitle">
        Secure Your Account, Your Wallet,<br />
        and Your Data With 6 Digits PIN<br />
        That You Created Yourself.
      </label>
      <label id="right-description">
        Create 6 digits pin to secure all your money and your data in Zwallet
        app. Keep it secret and don't tell anyone about your Zwallet account
        password and the PIN.
      </label>
      <div id="main">
        <form @submit.prevent="handleSetPin">
          <div class="text-center mt-4">
            <PincodeInput v-model="code" :length="6" placeholder="_" />
          </div>
          <div class="button">
            <button
              type="submit"
              class="btn"
              :disabled="!checkFilled"
              :class="[checkFilled ? 'btn-primary' : 'btn-secondary']"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PincodeInput from 'vue-pincode-input'
export default {
  name: 'CreatePin',
  data() {
    return {
      code: '',
      isSuccess: false
    }
  },
  methods: {
    ...mapActions('auth', ['interceptorsRequest', 'interceptorsResponse']),
    ...mapActions('user', ['myProfile', 'setPin']),
    handleSetPin() {
      this.setPin({ pin: this.code })
        .then((response) => {
          this.$toast.success('Pin created successfully')
          this.isSuccess = true
        })
        .catch((err) => {
          this.isSuccess = false

          this.$toast.error(err.data.message)
          this.code = ''
        })
    }
  },
  mounted() {
    this.interceptorsRequest()
    this.interceptorsResponse()
    this.myProfile().then((response) => {
      if (response.results.pin) {
        this.isSuccess = true
        this.$router.push({ name: 'Dashboard' })
      } else {
        this.isSuccess = false
      }
    })
  },
  components: {
    PincodeInput
  },

  computed: {
    ...mapGetters('user', ['getMyProfile']),
    checkFilled() {
      return !!this.code
    }
  }
}
</script>

<style scoped>
#right {
  padding: 100px 40px 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background: #fafcff;
}
#right-subtitle {
  font-weight: bold;
  font-size: 24px;
  color: #3a3d42;
}
#right-description {
  font-size: 16px;
  color: rgba(58, 61, 66, 0.6);
  margin-top: 20px;
  line-height: 30px;
}

/* Form */
.col input {
  width: 53px;
  height: 65px;
  border-radius: 10px;
  border: 1px solid rgba(169, 169, 169, 0.6);
  background: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #3a3d42;
  margin-top: 40px;
}
.col input::-webkit-outer-spin-button,
.col input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Button */
.button {
  margin-top: 90px;
}
.button button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
/* Inactive Button */
#submit-btn {
  background: #dadada;
  color: #88888f;
}
/* Active Button */
/* .button-hover {
  background-color: #6379F4 !important;
  color: #ffffff !important;
} */
</style>
