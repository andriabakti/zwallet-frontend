<template>
        <b-row id="footer" class="no-gutters">
            <b-container>
                <b-row>
                    <b-col lg="7">
                        <b-col class="copyright">2020 Zwallet. All right reserved.</b-col>
                    </b-col>
                    <b-col lg="5">
                    <b-row>
                        <b-col class="phone">+62 5637 8882 9901</b-col>
                        <b-col class="mail">contact@zwallet.com</b-col>
                    </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </b-row>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer{
    padding: 20px 0;
    background: #6379F4;
}
.copyright{
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: rgba(239, 239, 239, 0.9);
}
.phone, .mail {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #EFEFEF;
}
</style>
