<template>
<b-col lg="9" class="mt-4">
    <b-row class="no-gutters transfer mx-4 p-4">
        <b-col lg="12">
            <div class="title">Search Receiver</div>
        </b-col>
        <b-col lg="12 mt-2">
            <b-form-input  class="form-text" v-model="text" placeholder="Search receiver here"></b-form-input>
        </b-col>
        <b-col lg="12 mt-2">
            <CardContact/>
        </b-col>
    </b-row>
</b-col>
</template>

<script>
import CardContact from '../../../components/global/CardContact'
export default {
  name: 'Transfer',
  components: {
    CardContact
  }
}
</script>

<style scoped>
.transfer{
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
.form-text{
    background: rgba(58, 61, 66, 0.1);
    border-radius: 12px;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: rgba(58, 61, 66, 0.4);
    letter-spacing: 1px;
    position: relative;
}
</style>
