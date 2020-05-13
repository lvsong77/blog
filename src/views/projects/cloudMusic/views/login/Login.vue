<template>
  <div class="loginPage">
    <img src="~assets/img/neteaseCloudMusic.jpg" alt="" srcset="" class="logo">
    <van-form class="loginPart" @submit="login">
      <van-field
        v-model="phone"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }, { validator: checkPhone, message: '请输入正确手机号' }]"
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

  import { checkPhone } from 'common/utils'

  export default {
    name: 'Login',
    data() {
      return {
        phone: '',
        password: ''
      }
    },
    methods: {
      checkPhone(phone) {
        let isMobilePhone = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[1-9])[0-9]{8}$/;
        let isFixMob = /^0?1[3|4|5|8][0-9]\d{8}$/;

        if (isFixMob.test(phone) || isMobilePhone.test(phone)) {
          return true;
        } else {
          return false;
        }
      },
      login(values) {
        let phone = this.phone
        let password = this.password
        
        let params = { phone, password }
        cloudMusicLogin(params).then(res => {
          console.log(res);
          if (res === undefined) {
            this.$toast({
              message: '账号不存在',
              position: 'bottom',
              duration: 1000
            })
            return
          }
          if (res.code === 200) {
            this.$toast({
              message: '登陆成功',
              position: 'bottom',
              duration: 1000
            })
            this.$router.replace('/projects/cloud_music/discovery')
          } else if (res.code === 502) {
            this.$toast({
              message: res.msg,
              position: 'bottom',
              duration: 1000
            })
          }
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