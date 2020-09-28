<template>
  <div class="col-md-12 mb-2">
    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <label for="" class="font-14">{{ label }}</label>
        <p class="mb-0 font-15 font-weight-bold">{{ main }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['label', 'main']
}
</script>

<style scoped>
</style>
