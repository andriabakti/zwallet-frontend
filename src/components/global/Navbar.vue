<template>
    <b-navbar>
        <b-container>
        <b-navbar-brand class="mb-0 mx-3">Zwallet</b-navbar-brand>
        <b-col col lg="3">
            <UserAccount/>
        </b-col>
        </b-container>
    </b-navbar>
</template>

<script>
import UserAccount from '../global/UserAccaount'
export default {
  name: 'Navbar',
  components: {
    UserAccount
  }
}
</script>

<style scoped>
.navbar{
    height: 15vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 20px 20px;
}
.navbar-light .navbar-brand{
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;
    color: #6379F4;
}
</style>
