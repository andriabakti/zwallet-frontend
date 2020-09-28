<template>
  <div>
    <CardMainRight title="How To Top Up">
      <template #body>
        <button
          type="button"
          v-b-modal.modal-topup
          class="btn btn-primary btn-sm shadow mb-3"
          @click="changeStatusPin(false)"
        >
          Top Up
        </button>
        <div class="row">
          <CardInfo
            label="Step 1"
            main="Pergi ke ATM terdekat atau Anda dapat menggunakan E-Banking"
          />
          <CardInfo
            label="Step 2"
            main="Transfer nominal topup ke rek ini: 1188992211"
          />
          <CardInfo label="Step 3" main="Foto / screenshot bukti transfer" />
          <CardInfo
            label="Step 4"
            main="Isi form topup dengan mengirimkan bukti transfer"
          />
        </div>
      </template>
    </CardMainRight>
    <ModalTopUp />
  </div>
</template>

<script>
import ModalTopUp from '@/components/ModalTopUp'
import CardMainRight from '@/components/CardMainRight'
import CardInfo from '@/components/CardInfo'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Personal',
  components: {
    CardInfo,
    CardMainRight,
    ModalTopUp
  },
  methods: {
    ...mapActions(['changeStatusPin'])
  },
  computed: {
    ...mapGetters('user', ['getMyProfile'])
  }
}
</script>

<style scoped>
</style>
