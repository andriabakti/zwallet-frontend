<template>
  <b-row id="footer" class="no-gutters">
    <b-container
      class="mobile-footer d-flex justify-content-between align-items-center"
    >
      <div class="copyright">2020 Zwallet. All right reserved.</div>
      <div class="d-flex f-2">
        <div class="phone mr-3">+62 5637 8882 9901</div>
        <div class="mail">contact@zwallet.com</div>
      </div>
    </b-container>
  </b-row>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.mobile-footer {
  flex-direction: row;
}
@media screen and (max-width: 768px) {
  .mobile-footer {
    flex-direction: column !important;
  }
  .f-2 {
    flex-direction: column !important;
  }
}
#footer {
  padding: 20px 0;
  background: #6379f4;
}
.copyright {
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: rgba(239, 239, 239, 0.9);
}
.phone,
.mail {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #efefef;
}
</style>
