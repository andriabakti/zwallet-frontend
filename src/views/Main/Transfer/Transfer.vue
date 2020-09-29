<template>
  <div>
    <TransferMoney
      v-if="getDetailTransaction.email && !getDetailTransaction.amount"
    />
    <Confirmation v-if="getDetailTransaction.amount" />
    <div v-if="!getDetailTransaction.email">
      <div class="title mb-3">
        Search Receiver
        <g-button
          :isLoading="getLoading"
          @cus-click="handleRefresh"
          class="btn btn-primary btn-sm shadow"
        >
          <b-icon icon="arrow-clockwise" />
        </g-button>
      </div>
      <div class="position-relative mb-4">
        <b-form-input
          class="form-text"
          @keypress.enter="handleSearch"
          v-model="text"
          style="padding-right: 45px"
          placeholder="Search receiver here"
        ></b-form-input>
        <span @click="handleSearch" class="search-ic"
          ><b-icon icon="search"
        /></span>
      </div>
      <div class="card-transfer">
        <CardContact
          @select-user="handleSelect"
          v-for="user in users"
          :key="user.id"
          :user="user"
        />
        <h5
          v-if="users.length === 0"
          class="text-center text-danger font-weight-bold"
        >
          Data Empty
        </h5>
      </div>
      <infinite-loading
        class="text-center"
        @infinite="infiniteHandler"
      ></infinite-loading>
    </div>
  </div>
</template>

<script>
import TransferMoney from './TransferMoney'
import Confirmation from './Confirmation'
import { mapActions, mapGetters } from 'vuex'
import CardContact from '../../../components/global/CardContact'
export default {
  name: 'Transfer',
  data() {
    return {
      text: '',
      page: 1,
      users: []
    }
  },
  methods: {
    ...mapActions('user', [
      'allUser',
      'detailTransaction',
      'cleardetailTransaction'
    ]),
    handleSearch() {
      this.allUser({ page: 1, search: this.text })
        .then((response) => {
          this.users = response.results
          this.text = ''
        })
        // eslint-disable-next-line handle-callback-err
        .catch((err) => {
          console.log(err)
          this.users = []
        })
      this.text = ''
    },
    handleRefresh() {
      this.allUser({ page: 1 })
        .then((response) => {
          this.users = response.results
        })
        // eslint-disable-next-line handle-callback-err
        .catch((err) => {
          console.log(err)
          this.users = []
        })
      this.text = ''
    },
    handleSelect(val) {
      if (!val.fullName || !val.phoneNumber) {
        this.$toast.error('The selected user profile is incomplete')
      } else {
        this.detailTransaction(val)
      }
    },
    infiniteHandler($state) {
      const data = {
        page: this.page
      }
      if (this.text) {
        data.search = this.text
      }
      this.allUser(data)
        .then((response) => {
          if (response.results.length) {
            this.page += 1
            this.users.push(...response.results)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch((err) => {
          $state.complete()
        })
    }
  },
  mounted() {
    this.cleardetailTransaction()
  },
  components: {
    CardContact,
    TransferMoney,
    Confirmation
  },
  computed: {
    ...mapGetters('user', ['getAllUser', 'getDetailTransaction']),
    ...mapGetters(['getLoading'])
  }
}
</script>

<style scoped>
.card-transfer {
  max-height: 100vh;
  overflow: auto;
}
.search-ic {
  position: absolute;
  right: 15px;
  top: 8px;
  cursor: pointer;
}
.transfer {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3a3d42;
  letter-spacing: 1px;
}
.form-text {
  background: rgba(58, 61, 66, 0.1);
  border-radius: 12px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: rgba(58, 61, 66, 0.4);
  letter-spacing: 1px;
  position: relative;
}
</style>
