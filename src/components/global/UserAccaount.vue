<template>
            <b-row class="d-flex align-items-center">
                <b-col lg="3">
                    <div class="img-container mx-auto">
                    <img src="../../assets/avatar.jpg" alt="Avatar">
                    </div>
                </b-col>
                <b-col lg="7">
                    <b-row><div class="name">User</div></b-row>
                    <b-row><div class="phone">+62 567890</div></b-row>
                </b-col>
                <b-col lg="2">
                    <b-icon icon="bell"></b-icon>
                </b-col>
            </b-row>
</template>

<script>
export default {
  name: 'UserAccount'
}
</script>

<style scoped>
.col-lg-3{
    padding: 0;
}
.img-container{
    height: 50px;
    width: 50px;
}
.img-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-blend-mode: normal;
    border-radius: 10px;
}
.name{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 31px;
    text-align: center;
    color: #3A3D42;
}
.phone{
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;
    color: rgba(58, 61, 66, 0.9);
}
</style>
