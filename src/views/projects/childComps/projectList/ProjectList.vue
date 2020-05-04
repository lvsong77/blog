<template>
  <div class="projects">
    <project-item v-for="(item, index) in projects" :item="item" @click.native="goto(item.path)" :key="index"/>
  </div>
</template>

<script>
  import ProjectItem from '../projectItem/ProjectItem'

  export default {
    name: 'ProjectsList',
    components: {
      ProjectItem,
    },
    data() {
      return {
        projects: [
          {
            title: '云音乐',
            imgPath: require('@/assets/img/neteaseCloudMusic.jpg'),
            path: localStorage.token ? '/projects/cloud_music/discovery' : '/projects/cloud_music/login'
          }
        ]
      }
    },
    methods: {
      goto(path) {
        console.log("goto -> path", path)
        this.$router.push(path)
      }
    },
  }
</script>

<style scoped>
  .projects {
    width: 100vw;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>