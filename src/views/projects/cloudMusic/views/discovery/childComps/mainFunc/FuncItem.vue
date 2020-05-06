
<template>
  <a class="funcItem" :href="func.path">
    <div class="icon">
      <i class="iconfont" :class="func.icon"></i>
      <span>{{ date }}</span>
    </div>
    <span class="title">{{ func.text }}</span>
  </a>
</template>

<script>
  export default {
    name: 'FuncItem',
    props: {
      func: {
        type: Object,
        default: {}
      },
    },
    computed: {
      date() {
        if (this.func.text === '每日推荐') {
          return new Date().getDate()
        }
      }
    },
  }
</script>

<style scoped>
  .funcItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    width: 12vw;
    height: 12vw;
    text-align: center;
    background: linear-gradient(to right, #EF5350, #FF1744);
    border-radius: 50%;
    position: relative;
  }

  .icon i {
    width: 12vw;
    height: 12vw;
    line-height: 12vw;
    font-size: 2rem;
    color: white;
  }

  .icon span {
    position: absolute;
    left: 50%;
    top: 56%;
    transform: translate(-50%, -50%);
    font-size: 0.4rem;
    color: white;
  }

  .funcItem .title {
    font-size: 0.5rem;
    margin-top: 5px;
  }
</style>