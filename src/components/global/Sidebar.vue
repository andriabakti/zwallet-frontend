<template>
    <div>
    <b-nav vertical class="nav bg-white shadow-sm ml-auto mt-4">
        <b-nav-item active class="my-2"><b-icon icon="grid" class="mr-3"></b-icon> Dashboard</b-nav-item>
        <b-nav-item class="my-2"><b-icon icon="arrow-up" class="mr-3"></b-icon> Transfer</b-nav-item>
        <b-nav-item class="my-2"><b-icon icon="plus" class="mr-3"></b-icon> Top Up</b-nav-item>
        <b-nav-item class="my-2"><b-icon icon="person" class="mr-3"></b-icon> Profile</b-nav-item>
        <b-nav-item class="my-2 logout"><b-icon icon="box-arrow-right" class="mr-3"></b-icon> Logout</b-nav-item>
    </b-nav>
    </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.nav{
    width: 75%;
    height: 90vh;
    padding: 25px 0;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
a{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    letter-spacing: 1px;
    color: rgba(58, 61, 66, 0.8);
}
a:active {
    border-left: 4px solid#6379F4;
}
a:focus {
    border-left: 4px solid #6379F4;
    font-weight: 700;
    color: #6379F4;
}
.logout{
    position: absolute;
    bottom: 20px;
}
</style>
