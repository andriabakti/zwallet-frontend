<template>
  <CardMainRight title="Manage Phone Number">
    <template #description
      >You can only delete the phone number and then you must add another phone
      number.</template
    >
    <template #body>
      <router-link
        :to="{ name: 'AddNumber' }"
        type="button"
        class="btn btn-primary btn-sm shadow mb-3"
      >
        Add
      </router-link>
      <p
        class="mb-0 font-weight-bold text-danger font-20"
        v-if="getListMyPhone.length === 0"
      >
        No phone number yet
      </p>
      <div class="row" v-if="getListMyPhone.length > 0">
        <div
          class="col-md-12 mb-3"
          v-for="phone in getListMyPhone"
          :key="phone.id"
        >
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <label for="" class="font-14">{{
                phone.status === 1 ? 'Primary' : 'Not Primary'
              }}</label>
              <div class="d-flex justify-content-between">
                <p class="mb-0 font-15 font-weight-bold">
                  +62 {{ phone.phoneNumber }}
                </p>
                <div>
                  <button
                    v-if="phone.status !== 1"
                    @click="handlePrimaryPhone(phone.id)"
                    class="btn btn-success btn-sm"
                  >
                    Select Primary
                  </button>
                  <button
                    v-if="phone.status !== 1"
                    @click="handleDelete(phone.id)"
                    type="button"
                    class="btn btn-danger btn-sm ml-2"
                  >
                    <b-icon icon="trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CardMainRight>
</template>

<script>
import CardMainRight from '@/components/CardMainRight'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    CardMainRight
  },
  methods: {
    ...mapActions('phone', ['allMyPhone', 'deletePhone', 'selectPrimaryPhone']),
    ...mapActions('user', ['myProfile']),
    handleDelete(id) {
      this.confirmDelete('phone', () => {
        this.deletePhone(id)
          .then((response) => {
            this.$toast.success('Phone number deleted successfully')
            this.allMyPhone()
          })
          .catch((err) => {
            this.$toast.error(err.data.message)
          })
      })
    },
    handlePrimaryPhone(id) {
      this.selectPrimaryPhone(id)
        .then((response) => {
          this.$toast.success('Primary phone is selected')
          this.allMyPhone()
          this.myProfile()
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
        })
    }
  },
  mounted() {
    this.allMyPhone()
  },
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    ...mapGetters('phone', ['getListMyPhone'])
  }
}
</script>

<style scoped>
</style>
