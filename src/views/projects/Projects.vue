<template>
  <div class="projects">
    <!-- <project-item :v-for="projects" :projects="projects" :key="index"/> -->
    <project-item v-for="(item, index) in projects" :key="index">{{item}}</project-item>
  </div>
</template>

<script>
  import ProjectItem from './childComps/projectItem/ProjectItem'

  export default {
    name: 'projects',
    components: {
      ProjectItem,
    },
    data() {
      return {
        projects: [
          {
            title: '网易云音乐',
            imgPath: '/src/assets/img/neteaseCloudMusic.jpg'
          }
        ]
      }
    },
  }
</script>

<style>

</style>