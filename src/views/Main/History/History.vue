<template>
  <div>
    <div class="title mb-4 d-flex justify-content-between">
      <span>Transaction History</span>
      <div>
        Short:
        <button
          @click="handleSort('desc')"
          class="btn btn-primary btn-sm shadow mr-2"
        >
          New
        </button>
        <button
          @click="handleSort('asc')"
          class="btn btn-primary btn-sm shadow"
        >
          Old
        </button>
      </div>
    </div>
    <div class="row card-history px-3">
      <div
        class="col-md-12 mb-5"
        v-for="history in histories"
        :key="history.id"
      >
        <CardTransaction :data="history" />
      </div>
      <div class="col-md-12">
        <infinite-loading
          class="text-center"
          @infinite="infiniteHandler"
          :identifier="infiniteId"
        ></infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CardTransaction from '../../../components/global/CardTransaction'
export default {
  name: 'History',
  data() {
    return {
      page: 1,
      histories: [],
      sort: null,
      infiniteId: +new Date()
    }
  },
  components: {
    CardTransaction
  },
  methods: {
    ...mapActions('history', ['myHistory']),
    handleSort(val) {
      this.page = 1
      this.histories = []
      this.sort = val
      this.infiniteId += 1
    },
    infiniteHandler($state) {
      const data = {
        page: this.page,
        sort: this.sort
      }
      this.myHistory(data)
        .then((response) => {
          if (response.results.length) {
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
  computed: {
    ...mapGetters('history', ['getMyHistory'])
  }
}
</script>

<style scoped>
.card-history {
  max-height: 100vh;
  overflow: auto;
}
.history {
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
.filter {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #7a7886;
}
</style>
