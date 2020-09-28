import {
  mapActions
} from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['logoutUser']),
    ...mapActions('user', ['clearProfile', 'cleardetailTransaction']),
    logoutMixin() {
      this.confirmSwal('Logout', 'Are you sure you want to log out ?', 'warning', () => {
        this.logoutUser()
        this.$router.push({
          name: 'Login'
        })
        this.clearProfile()
        this.cleardetailTransaction()
        this.$toast.success('Logout success')
      })
    }
  }
}
