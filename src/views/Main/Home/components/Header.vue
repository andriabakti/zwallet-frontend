<template>
    <b-row class="no-gutters mt-4 mx-4 p-4 header d-flex align-items-center">
        <b-col lg="9">
            <div class="title">Balance</div>
            <div class="amount my-2">Rp120.000</div>
            <div class="userPhone">+62 813-9387-7946</div>
        </b-col>
        <b-col lg="3">
            <b-button class="btn" variant="outline-primary"><b-icon icon="arrow-up" class="mr-2"></b-icon> Transfer</b-button>
            <b-button class="btn" variant="outline-primary"><b-icon icon="plus" class="mr-2"></b-icon> Top Up</b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header{
   background: #6379F4;
   border-radius: 20px;
}
.btn{
    width: 90%;
    display: block;
    margin: 15px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    letter-spacing: 1px;
}
.title{
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    color: #E0E0E0;
    letter-spacing: 1px;
}
.amount{
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    color: #FFFFFF;
    letter-spacing: 1px;
}
.userPhone{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #DFDCDC;
    letter-spacing: 1px;
}
</style>
