<template>
  <div class="project">
    <!-- <img class="img" :src="projectItem.imgPath" alt="">
    <p class="title">{{ projectItem.title }}</p> -->
    <p>{{item}}</p>
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    // props: {
    //   projectItem: {
    //     type: Object,
    //     default: () => {}
    //   },
    // },
    props: {
      item: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style scoped>

</style>