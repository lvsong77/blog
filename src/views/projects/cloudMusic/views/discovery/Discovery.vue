<template>
  <div>
    discovery
  </div>
</template>

<script>
  import { getBanner, getPlayList } from 'network/cloudMusic'

  export default {
    name: 'Discovery',
    data() {
      return {
        list: []
      }
    },
    mounted () {
      // 获取banner
      let type = 0
      let params = {
        type
      }
      getBanner(params).then(res => {
        console.log(res);
        
      })





      // 获取歌单列表
      // let account = JSON.parse(localStorage.account);
      // let uid = account.id

      // let params = {
      //   uid
      // }
      // getPlayList(params).then(res => {
      //   console.log(res)
      // })
    },
  }
</script>

<style>

</style>