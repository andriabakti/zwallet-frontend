<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <div>Loremem</div>
    <router-link :to="{ name: 'Personal' }">Personal Information</router-link>
    <router-link :to="{ name: 'ChangePassword' }">Change Password</router-link>
    <router-link :to="{ name: 'ChangePin' }">Change PIN</router-link>
    <router-link :to="{ name: 'Personal' }">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
</style>
