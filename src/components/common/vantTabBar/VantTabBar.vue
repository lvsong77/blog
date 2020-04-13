<template>
  <van-tabbar v-model="active">
    <van-tabbar-item  v-for="tab in tabs" :key="tab.name" :icon="tab.icon" :to="tab.name" :replace="true">
      {{ tab.name }}
    </van-tabbar-item >
  </van-tabbar>
</template>

<script>
  export default {
    name: 'VantTabBar',
    props: {
      active: {
        type: String,
        default: 'index'
      },
      tabs: {
        type: Array,
        default: []
      },
    },
  }
</script>

<style>

</style>