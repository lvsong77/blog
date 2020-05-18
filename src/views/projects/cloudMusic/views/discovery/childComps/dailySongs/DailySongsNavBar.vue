<template>
  <van-nav-bar :border="false" class="navBar">
    <template #left>
      <i class="iconfont icon-back" @click="back"></i>
    </template>
    <template #title>
      <div class="title">
        每日推荐
      </div>
    </template>
    <template #right>
      <i class="iconfont icon-wenhao" @click="showExplain"></i>
    </template>
  </van-nav-bar>
</template>

<script>
  export default {
    name: 'DailySongsNavBar',
    methods: {
      back() {
        this.$router.go(-1)
      },
      showExplain() {
        location.href = 'https://music.163.com/m/topic?id=199003&commentId=174264190'
      }
    },
  }
</script>

<style scoped>
  .iconfont {
    font-size: 1.5rem;
    color: #FFF;
  }
  .navBar {
    background-color: #E53935;
  }
  .title {
    color: #FFF;
    display: flex;
    justify-content: flex-start;
  }
</style>