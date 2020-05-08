<template>
  <div class="projects">
    <project-item v-for="(item, index) in projects" :item="item" @click.native="goto(item.path)" :key="index"/>
  </div>
</template>

<script>
  import ProjectItem from '../projectItem/ProjectItem'

  import { getLoginStatus } from 'network/cloudMusic'

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
            path: 'discoveryOrlogin'
          }
        ]
      }
    },
    methods: {
      goto(path) {
        if (path === 'discoveryOrlogin') {
          getLoginStatus().then(res => {
            let path
            // if (res.code === 200) {
            //   path = '/projects/cloud_music/discovery'
            // } else {
              path = '/projects/cloud_music/login'
            // }
            this.$router.push(path)
          })
        } else {
          this.$router.push(path)
        }
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