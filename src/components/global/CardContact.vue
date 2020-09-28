<template>
<b-row class="d-flex align-items-center mt-3 mx-1 py-3 contact">
    <b-col lg="1">
        <div class="img-container">
            <img src="../../assets/avatar.jpg" alt="">
        </div>
    </b-col>
    <b-col lg="11">
        <b-row class="no-gutters">
            <b-col lg="12">
                <div class="title">Samuel Suhi</div>
            </b-col>
            <b-col lg="12 my-2">
                <div class="number">+62 813-8492-9994</div>
            </b-col>
        </b-row>
    </b-col>
</b-row>
</template>

<script>
export default {
  name: 'CardContact'
}
</script>

<style scoped>
.contact{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    cursor: pointer;
}
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
.number{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #7A7886;
    letter-spacing: 1px;
}
</style>
