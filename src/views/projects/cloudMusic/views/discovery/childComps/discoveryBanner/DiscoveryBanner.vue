<template>
  <van-swipe :autoplay="3000"
             indicator-color="#D32F2F"
             ref="swiper"
             class="swiper">
    <van-swipe-item class="swipe-item"
                    v-for="(banner, index) in banners"
                    :key="index">
      <a :href="banner.url || '#'">
        <img :src="banner.pic" @click="clickBanner(banner.song)" class="banner"/>
        <span :style="{ background: backgroundColor(banner.titleColor) }" class="title">{{ banner.typeTitle }}</span>
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import { getBanner, getPlayList } from 'network/cloudMusic'

  import { judgeCurrentDivice } from 'common/utils'

  export default {
    name: 'DiscoveryBanner',
    data() {
      return {
        banners: []
      }
    },
    mounted () {
      let type = 1
      if (judgeCurrentDivice() == 'pc') {
        type = 0
      } else if (judgeCurrentDivice() == 'android') {
        type = 1
      } else if (judgeCurrentDivice() == 'iphone') {
        type = 2
      }
      let params = {
        type
      }
      getBanner(params).then(res => {
        console.log(res);
        for (const item of res.banners) {
          this.banners.push(item)
        }
      })
    },
    methods: {
      clickBanner(song) {
        console.log(song);
      },
      backgroundColor(titleColor) {
        if (titleColor === 'blue') {
          return '#1E88E5'
        }
        if (titleColor === 'blue') {
          return '#FF5252'
        }
        return titleColor
      }
    },
  }
</script>

<style scoped>
  .swiper {
    width: 100%;
    margin-top: 15px;
  }

  .swipe-item img {
    margin-left: 3.2%;
    width: 93.6%;
  }

  .banner {
    border-radius: 10px;
  }

  .title {
    color: white;
    position: absolute;
    right: 3.2%;
    bottom: 4px;
    font-size: 0.8rem;
    padding: 5px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>