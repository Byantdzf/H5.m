<template>
  <div class="setting animation-slide-top">
    <div class="alignment font15 listBox">
      <div class="color3">账号-ID</div>
      <div class="color9">{{ id }}</div>
    </div>
    <!-- <div style="background:#fff" @click="goToUrl('guide')">
      <div class="alignment listBoxV2 font15">
        <div class="color3">福恋指南</div>
        <img
          class="triangleIcon"
          src="https://images.ufutx.com/202003/23/3dbd6cf89a117a0f0a1c79d0204b557d.png"
          alt=""
        />
      </div>
    </div> -->
    <div class="alignment font15 listBox" @click="removeCache">
      <div class="color3">清除缓存</div>
      <img class="triangleIcon" src="https://images.ufutx.com/202003/23/3dbd6cf89a117a0f0a1c79d0204b557d.png" alt="" />
    </div>
  </div>
</template>

<script>
import { $toastText } from '@/config/toast'

export default {
  computed: {},
  components: {},
  data() {
    return {
      id: ''
    }
  },
  watch: {},
  methods: {
    removeCache() {
      const vm = this
      vm.$dialog
        .confirm({
          title: '提示',
          width: 300,
          message: '清除缓存需要重新登录\n是否清除缓存？'
        })
        .then(() => {
          // localStorage.removeItem('token')
          localStorage.clear()
          $toastText('缓存已清除')
          setTimeout(() => {
            window.location.replace(
              `https://love.ufutx.com/api/official/live/wechat/oauth?url=` +
                encodeURIComponent(`https://love.ufutx.com/h5/#/login`)
            )
          }, 300)
        })
        .catch(() => {
          // on cancel
        })
    },
    goToUrl(url) {
      this.$router.push({
        name: url
      })
    }
  },
  created() {},
  mounted() {
    const ScrollTop = document.getElementById('app')
    ScrollTop.scrollTop = 0
    this.id = this.$route.params.id
  }
}
</script>
<style lang="scss" scoped>
.setting {
  width: 100vw;
  min-height: 100vh;
  background: #f6f6f6;
}
.listBox {
  height: 40px;
  background: #ffffff;
  padding: 0 15px;
  margin-top: 4px;
}
.listBoxV2 {
  height: 40px;
  background: #ffffff;
  margin: 0 15px;
  border-top: 1px solid #f5f5f5;
}
.triangleIcon {
  width: 14px;
}
</style>
