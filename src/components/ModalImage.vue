<template>
  <b-modal id="modal-image" hide-footer>
    <img :src="image" class="img-fluid" alt="image" />
  </b-modal>
</template>

<script>
export default {
  props: ['image']
}
</script>

<style scoped>
</style>
