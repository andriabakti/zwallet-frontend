<template>
  <CardMainRight title="Information">
    <template #description
      >We got your personal information from the sign up proccess. If you want
      to make changes on your information, contact our support.</template
    >
    <template #body>
      <router-link
        class="btn btn-primary shadow btn-sm mr-2 mb-3"
        :to="{ name: 'Profile' }"
        >Back</router-link
      >
      <button
        type="button"
        v-b-modal.modal-user
        class="btn btn-primary btn-sm shadow mb-3"
      >
        Update Profile
      </button>
      <div class="row">
        <CardInfo
          label="First Name"
          :main="
            getMyProfile.firstName
              ? getMyProfile.firstName
              : 'First name is not set'
          "
        />
        <CardInfo
          label="Last Name"
          :main="
            getMyProfile.lastName
              ? getMyProfile.lastName
              : 'Last name is not set'
          "
        />
        <CardInfo label="Verified E-mail" :main="getMyProfile.email" />
        <div class="col-md-12">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <label for="" class="font-14">Phone Number</label>
              <div class="d-flex justify-content-between">
                <p class="mb-0 font-15 font-weight-bold">
                  {{
                    getMyProfile.phoneNumber
                      ? getMyProfile.phoneNumber
                      : 'No phone number yet, please add a new one'
                  }}
                </p>
                <router-link :to="{ name: 'ManageNumber' }">Manage</router-link>
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
import CardInfo from '@/components/CardInfo'
import { mapGetters } from 'vuex'
export default {
  name: 'Personal',
  components: {
    CardInfo,
    CardMainRight
  },
  computed: {
    ...mapGetters('user', ['getMyProfile'])
  }
}
</script>

<style scoped>
</style>
