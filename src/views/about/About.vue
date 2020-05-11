<template>
  <div class="aboutContent">
    <img src="~assets/img/QRCode.png" alt="" class="qrCode">
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style>
  .aboutContent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .qrCode {
    width: 40vw;
  }
</style>