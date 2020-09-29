<template>
  <b-overlay :show="getLoading" rounded="sm">
    <b-container fluid>
      <Navbar />
      <div class="container">
        <b-row class="text-left my-5">
          <div class="col-lg-3 col-md-4 col-sm-12 mb-3 mobile-sidebar">
            <div class="card shadow-cus border-0">
              <div class="card-body">
                <Sidebar />
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-sm-12">
            <div
              :class="[
                getCurrentRoute !== 'Dashboard'
                  ? 'card shadow-cus border-0'
                  : ''
              ]"
            >
              <div
                :class="[
                  getCurrentRoute !== 'Dashboard' ? 'card-body py-5' : ''
                ]"
              >
                <router-view />
              </div>
            </div>
          </div>
        </b-row>
      </div>
      <Footer />
    </b-container>
    <ModalUpdateUser />
  </b-overlay>
</template>

<script>
import ModalUpdateUser from '@/components/ModalUpdateUser'

import Sidebar from '../../components/global/Sidebar'
import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    Footer,
    ModalUpdateUser
  },
  methods: {
    ...mapActions('user', ['myProfile']),
    ...mapActions('auth', ['interceptorsRequest', 'interceptorsResponse']),
    ...mapActions('history', ['myHistory'])
  },
  mounted() {
    this.interceptorsRequest()
    this.interceptorsResponse()
    this.myHistory()
    this.myProfile()
      .then((response) => {
        if (!response.results.pin) {
          this.$router.push({ name: 'CreatePin' })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  computed: {
    ...mapGetters(['getLoading']),
    ...mapGetters('user', ['getMyProfile']),
    getCurrentRoute() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
}
.shadow-cus {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.col {
  height: 100vh;
}
@media screen and (max-width: 767px) {
  .mobile-sidebar {
    display: none;
  }
}
</style>
