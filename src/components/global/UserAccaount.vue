<template>
  <div class="d-flex align-items-center">
    <div class="mr-3">
      <b-avatar
        v-if="getMyProfile.image"
        rounded="lg"
        :src="getMyProfile.image"
        size="50px"
      ></b-avatar>
      <b-avatar v-if="!getMyProfile.image" rounded="lg" size="50px"></b-avatar>
    </div>
    <div class="mr-3">
      <router-link
        class="d-block"
        v-if="!getMyProfile.fullName"
        :to="{ name: 'Personal' }"
      >
        Nama belum di setting
      </router-link>

      <div class="name" v-if="getMyProfile.fullName">
        <router-link
          class="d-block text-dark text-decoration-none"
          :to="{ name: 'Personal' }"
        >
          {{ getMyProfile.fullName }}
        </router-link>
      </div>
      <div class="phone" v-if="getMyProfile.phoneNumber">
        +62 {{ getMyProfile.phoneNumber }}
      </div>
      <router-link
        class="d-block"
        v-if="!getMyProfile.phoneNumber"
        :to="{ name: 'Personal' }"
      >
        No tlp belum di setting
      </router-link>
    </div>
    <b-dropdown
      right
      size="sm"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
    >
      <template v-slot:button-content>
        <span class="text-dark" @click="bellShow">
          <b-icon icon="bell"></b-icon>
        </span>
      </template>
      <div class="cus-class">
        <!-- <b-dropdown-item style="min-width: 400px" class="border-0">
          <div class="card border-0 my-2 shadow-sm">
            <div class="card-body">
              <div class="d-flex">
                <div class="icon down mr-3">
                  <b-icon icon="arrow-down"></b-icon>
                </div>
                <div>
                  <p class="mb-1 text-muted">Transfered from juna</p>
                  <p class="mb-0 font-weight-bold font-18">Rp. 2000</p>
                </div>
              </div>
            </div>
          </div>
        </b-dropdown-item>
        <b-dropdown-item style="min-width: 400px" class="border-0">
          <div class="card border-0 my-2 shadow-sm">
            <div class="card-body">
              <div class="d-flex">
                <div class="icon up mr-3">
                  <b-icon icon="arrow-up"></b-icon>
                </div>

                <div>
                  <p class="mb-1 text-muted">Transfered from juna</p>
                  <p class="mb-0 font-weight-bold font-18">Rp. 2000</p>
                </div>
              </div>
            </div>
          </div>
        </b-dropdown-item> -->
        <div v-for="history in histories" :key="history.id">
          <b-dropdown-item style="min-width: 400px" class="border-0">
            <div class="card border-0 my-2 shadow-sm">
              <div class="card-body">
                <div class="d-flex">
                  <!-- <div class="icon up mr-3">
                    <b-icon icon="arrow-up"></b-icon>
                  </div> -->
                  <div
                    class="icon up mr-3"
                    v-if="
                      getMyProfile.id === history.senderId &&
                      history.status === 1
                    "
                  >
                    <b-icon icon="arrow-up"></b-icon>
                  </div>
                  <div
                    class="icon down mr-3"
                    v-if="getMyProfile.id === history.receiverId"
                  >
                    <b-icon icon="arrow-down"></b-icon>
                  </div>
                  <div
                    class="icon down mr-3"
                    v-if="
                      getMyProfile.id === history.senderId &&
                      history.status === 2
                    "
                  >
                    <b-icon icon="arrow-down"></b-icon>
                  </div>
                  <div>
                    <p class="mb-1 text-muted" v-if="history.status === 1">
                      {{
                        getMyProfile.id === history.senderId
                          ? `Transfer to ${history.receiverName}`
                          : `Transfered from ${history.senderName}`
                      }}
                    </p>
                    <p class="mb-1 text-muted" v-if="history.status === 2">
                      Top Up |
                      {{
                        history.statusTopup === 0
                          ? 'Pending'
                          : history.statusTopup === 1
                          ? 'Success'
                          : 'Rejected'
                      }}
                    </p>
                    <p
                      class="mb-0 font-weight-bold font-18"
                      v-if="history.status === 1"
                    >
                      {{ history.amount | currency }}
                    </p>
                    <p
                      class="mb-0 font-weight-bold font-18"
                      v-if="history.status === 2"
                      :class="history.statusTopup === 2 ? 'line-throught' : ''"
                    >
                      {{ history.amount | currency }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-dropdown-item>
        </div>
        <b-dropdown-item style="min-width: 400px" class="border-0">
          <infinite-loading
            class="text-center"
            @infinite="infiniteHandler"
            :identifier="infiniteId"
          ></infinite-loading>
        </b-dropdown-item>
      </div>
    </b-dropdown>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'UserAccount',
  data() {
    return {
      page: 1,
      histories: [],
      infiniteId: +new Date(),
      first: false
    }
  },
  methods: {
    ...mapActions('history', ['historyNotif']),
    bellShow() {
      this.page = 1
      this.histories = []
      this.infiniteId += 1
    },
    infiniteHandler($state) {
      const data = {
        page: this.page
      }
      this.historyNotif(data)
        .then((response) => {
          if (response.results.length) {
            if (this.first) {
              this.histories = []
              this.first = false
            }
            this.page += 1
            this.histories.push(...response.results)
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
    // this.histories = this.getMyHistory
  },
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    ...mapGetters('history', ['getMyHistory'])
  }
}
</script>

<style scoped>
.cus-class {
  max-height: 400px;
  overflow: auto;
}
.line-throught {
  text-decoration: line-through;
}
.icon.down {
  color: #4cc15f;
}
.icon.up {
  color: #ea5433;
}
.col-lg-3 {
  padding: 0;
}
.img-container {
  height: 50px;
  width: 50px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-blend-mode: normal;
  border-radius: 10px;
}
.name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 31px;
  color: #3a3d42;
}
.phone {
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: rgba(58, 61, 66, 0.9);
}
</style>
