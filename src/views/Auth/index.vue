<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-7" id="left">
                <div class="main-face">
                    <label id="title">Zwallet</label>
                    <img src="../../assets/images/authMain/phone.svg">
                    <label id="main-subtitle">App that Covering Banking Needs.</label>
                    <label id="main-description">
                        Zwallet is an application that focussing in banking needs for all users<br>
                        the world. Always updated and always following world trends.<br>
                        5000+ users registered in Zwallet everyday with worldwide<br>
                        users coverage.
                    </label>
                </div>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.row {
    font-family: Nunito Sans;
}
/* Left Side */
#left {
    background-image: url('../../assets/images/authMain/left-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 120px 50px 150px;
    display: flex;
    flex-direction: column;
    justify-content: left;
}
#title {
    font-weight: bold;
    font-size: 29px;
    color: #FFFFFF;
}
#left img {
    width: 500px;
    height: 530px;
    margin-left: -55px;
}
#main-subtitle {
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;
    margin-top: 20px;
}
#main-description {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 20px;
    line-height: 30px;
}
</style>
