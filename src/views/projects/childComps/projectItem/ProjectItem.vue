<template>
  <div class="project">
    <img class="img" :src="item.imgPath" alt="">
    <p class="title">{{ item.title }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    props: {
      item: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

<style scoped>
  .project {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  .img {
    width: 100%;
  }

  .title {
    margin: 10px;
  }
</style>