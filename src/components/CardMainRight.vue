<template>
  <div>
    <h5 class="mb-3 font-weight-bold">{{ title }}</h5>
    <p class="text-muted">
      <slot name="description"></slot>
    </p>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
</style>
