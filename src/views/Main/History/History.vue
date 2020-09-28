<template>
<b-col lg="9" class="mt-4">
    <b-row class="no-gutters history mx-4 p-4">
        <b-col lg="12">
            <div class="title">Transaction History</div>
        </b-col>
        <b-col lg="12 mt-4">
            <div class="filter">This Week</div>
        </b-col>
        <b-col lg="12 mt-1">
            <div class="filter">This Week</div>
        </b-col>
    </b-row>
</b-col>
</template>

<script>
export default {
  name: 'History'
}
</script>

<style scoped>
.history{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.title{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
    letter-spacing: 1px;
}
.filter{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #7A7886;
}
</style>
