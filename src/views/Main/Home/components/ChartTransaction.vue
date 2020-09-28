<template>
<b-row class="no-gutters chart p-4">
    <b-col>
        <div class="icon down"><b-icon icon="arrow-down"></b-icon></div>
        <div class="title my-2">Income</div>
        <div class="amount">Rp2.120.000</div>
    </b-col>
    <b-col>
        <div class="icon up"><b-icon icon="arrow-up"></b-icon></div>
        <div class="title my-2">Expense</div>
        <div class="amount">Rp1.560.000</div>
    </b-col>
    <b-col lg="12">
        Chart Position
    </b-col>
</b-row>
</template>

<script>
export default {
  name: 'ChartTransaction'
}
</script>

<style scoped>
.chart{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.icon{
    font-size: 20px;
}
.icon.down{
    color: #4CC15F;
}
.icon.up{
    color: #EA5433;
}
.title{
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 19px;
   color: #6A6A6A;
   letter-spacing: 1px;
}
.amount{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
    letter-spacing: 1px;
}
</style>
