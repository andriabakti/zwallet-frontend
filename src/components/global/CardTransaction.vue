<template>
<b-row class="d-flex align-items-center">
    <b-col lg="1">
        <div class="img-container">
            <img src="../../assets/avatar.jpg" alt="">
        </div>
    </b-col>
    <b-col lg="7">
        <b-row class="no-gutters">
            <b-col lg="12">
                <div class="title">Samuel Suhi</div>
            </b-col>
            <b-col lg="12 my-2">
                <div class="type">Transfer</div>
            </b-col>
        </b-row>
    </b-col>
    <b-col lg="4">
        <div class="amount">+Rp50.000</div>
    </b-col>
</b-row>
</template>

<script>
export default {
  name: 'CardTransaction'
}
</script>

<style scoped>
.img-container{
    width: 60px;
    height: 60px;
}
.img-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-blend-mode: normal;
    border-radius: 10px;
}
.title{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #4D4B57;
    letter-spacing: 1px;
}
.type{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #7A7886;
    letter-spacing: 1px;
}
.amount{
   font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    color: #1EC15F;
    letter-spacing: 1px;
}
</style>
