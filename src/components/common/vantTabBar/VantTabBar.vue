<template>
  <van-tabbar v-model="active">
    <van-tabbar-item  v-for="tab in tabs" :key="tab.name" :icon="tab.icon" :to="tab.name" replace>
      {{ tab.text }}
    </van-tabbar-item >
  </van-tabbar>
</template>

<script>
  export default {
    name: 'VantTabBar',
    props: {
      tabs: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        active: 0
      }
    },
  }
</script>

<style>

</style>