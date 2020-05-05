<template>
  <div class="loginPage">
    <img src="~assets/img/neteaseCloudMusic.jpg" alt="" srcset="" class="logo">
    <van-form class="loginPart" @submit="login">
      <van-field
        v-model="phone"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" class="loginButton">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { cloudMusicLogin } from 'network/cloudMusic.js'

  export default {
    name: 'Login',
    data() {
      return {
        phone: '',
        password: ''
      }
    },
    methods: {
      login(values) {
        let phone = this.phone
        let password = this.password

        let params = { phone, password }
        cloudMusicLogin(params).then(res => {
          console.log(res);
          localStorage.account = JSON.stringify(res.account)
          localStorage.profile = JSON.stringify(res.profile)
          localStorage.token = JSON.stringify(res.token)

          this.$router.replace('/projects/cloud_music/discovery')
        })
      }
    },
  }
</script>

<style scoped>
  .loginPage {
    background-color: #c62828;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .logo {
    width: 25vw;
    border-radius: 50%;
    margin-top: 20vh;
  }

  .loginPart {
    margin-bottom: 15vh;
  }

  .loginButton {
    background-color: #fff;
    border: none;
    color: #E53935;
  }
</style>