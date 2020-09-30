<template>
  <b-modal id="modal-user" size="lg" hide-footer title="Update User">
    <form @submit.prevent="handleUpdateUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="">First Name</label>
            <input type="text" v-model="firstName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" class="form-control" v-model="lastName" />
          </div>
          <div class="form-group">
            <label for="">Username</label>
            <input type="text" class="form-control" v-model="username" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Image</label>
            <b-form-file
              accept="image/*"
              class="border-0"
              v-model="fileImage"
              :state="Boolean(fileImage)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </div>
          <div class="form-group" v-if="getMyProfile.image">
            <label for="" class="d-block">Old Image</label>
            <b-avatar
              rounded="lg"
              :src="getMyProfile.image"
              size="140px"
            ></b-avatar>
          </div>
        </div>
      </div>
      <div class="border-top pt-3">
        <div class="d-flex justify-content-end">
          <button
            type="button"
            @click="$bvModal.hide('modal-user')"
            class="btn mr-2 btn-info"
          >
            Cancel
          </button>
          <g-button
            type="submit"
            class="btn btn-primary"
            :isLoading="getLoading"
            >Update</g-button
          >
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      fileImage: null,
      firstName: 'asd',
      lastName: '',
      username: ''
    }
  },
  methods: {
    ...mapActions('auth', ['interceptorsRequest', 'interceptorsResponse']),
    ...mapActions('user', ['myProfile', 'updateUser']),
    handleUpdateUser() {
      const formData = new FormData()
      if (this.fileImage) {
        if (this.fileImage.size > 2097152) {
          return this.$toast.error('Max file size 2MB')
        }
      }
      formData.append('image', this.fileImage)
      formData.append('firstName', this.firstName)
      formData.append('lastName', this.lastName)
      formData.append('username', this.username)
      this.updateUser({ id: this.getMyProfile.id, data: formData })
        .then((response) => {
          this.$toast.success('Profile updated successfully')
          this.$bvModal.hide('modal-user')
          this.myProfile()
        })
        .catch((err) => {
          this.$toast.error(err.data.message)
        })
    }
  },
  mounted() {
    this.interceptorsRequest()
    this.interceptorsResponse()
    if (this.getMyProfile.email) {
      this.firstName = this.getMyProfile.firstName
      this.lastName = this.getMyProfile.lastName
      this.username = this.getMyProfile.username
    } else {
      this.myProfile().then((response) => {
        this.firstName = response.results.firstName
        this.lastName = response.results.lastName
        this.username = response.results.username
      })
    }
  },
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    ...mapGetters(['getLoading'])
  }
}
</script>

<style scoped>
</style>
