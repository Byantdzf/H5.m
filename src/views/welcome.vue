<template>
  <div class='welcome'>
    <div class="box">
      <i><span></span></i>
      <img class='fulllinkIcon' src='https://images.ufutx.com/202106/23/ab8fdffd6308ca2d632ebcafe14bf909.png' alt=''>
      <div class='fulllinkText font15 color3'>福恋</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoPage',
  data() {
    return {
      openid: '',
      user_id: '',
      time: 3,
      timeFn: null,
      z_share_bg: 'https://images.ufutx.com/202004/08/da7e431fb417c5530585bcc3b4efd4e3.png'
      // title: '福恋友约直播'
    }
  },
  methods: {
    hideValidation() {
      clearInterval(this.timeFn)
      this.timeFn = null
      this.time = 3
      this.$router.replace({
        name: 'homeV2'
      })
    },
    onload() {
      // this.timeFn = setInterval(() => {
      //   this.time--
      //   if (this.time === 0) {
      //     clearInterval(this.timeFn)
      //     this.$router.replace({
      //       name: 'homeV2'
      //     })
      //   }
      // }, 1000)
      setTimeout(() => {
        this.$router.replace({
          name: 'homeV2'
        })
      }, 1500)
    }
  },
  mounted() {
    this.onload()
  }
}
</script>

<style lang="scss" scoped>
.welcome{
  width: 100vw;
  min-height: 100vh;
  background: #ffffff;
}
.box{
  position: relative;
  width: 60px;
  height: 60px;
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  top: 28vh;
  left: 50%;
  transform: translate(-50%);
}
.fulllinkIcon{
  position: absolute;
  width: 44px;
  height: 44px;
  left: 50%;
  top: 50%;
  margin-left: -22px;
  margin-top: -22px;
}
.fulllinkText{
  position: absolute;
  bottom: -30px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.box i{
  width: 60px;
  height: 60px;
  position: absolute;
  animation: circleRoate 2s infinite linear;
}
.box i span{
  position: absolute;
  left: 17px;
  top: 0;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background:#27f38a;
}
@keyframes circleRoate{
  from{transform: rotate(0deg);}
  to{transform: rotate(360deg);}
}
</style>
