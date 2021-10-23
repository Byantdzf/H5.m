<template>
  <div id="app">
    <div class="app-container">
      <div class="layout-content">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
      <div class="layout-footer" v-show="!isTabbarDemo">
        <TabBar @change="handleChange" :toName="toName" />
      </div>
    </div>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar'
import { mapState } from 'vuex'
import { $toastClear } from '@/config/toast'

export default {
  name: 'App',
  components: {
    TabBar
  },
  data() {
    return {
      toName: ''
    }
  },
  watch: {
    $route(to, from) {
    }
  },
  computed: {
    ...mapState({
    }),
    isTabbarDemo() {
      if (this.$route.path === '/homeV2') return false
      if (this.$route.path === '/discover') return false
      if (this.$route.path === '/makeFriends') return false
      if (this.$route.path === '/my') return false
      return true
    }
  },
  methods: {
    shareInfo(to) {
      const vm = this
      for (let item = 0; item < vm.customShare.length; item++) {
        if (location.href.includes(vm.customShare[item])) {
          return false
        }
      }
      setTimeout(() => {
        const url = `https://love.ufutx.com/api/official/live/wechat/oauth?from_openid=${localStorage.getItem('openid')}&url=` + encodeURIComponent(`https://love.ufutx.com/h5/#${to.path}`)
        this.$shareList('https://images.ufutx.com/201904/19/80a9db83c65a7c81d95e940ef8a2fd0e.png', url, '倡导正确的婚姻观，推进单身进入婚恋，组建和谐家庭，幸福一生！', '【福恋】婚恋社交平台')
      })
    },
    handleChange(v) {
      console.log('tab value:', v)
    }
  },
  mounted() {
    localStorage.removeItem('one_first')
  }
}
</script>
<style lang="scss">
@import '../src/assets/style/reset';
#app {
  width: 100vw;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0;
  height: 0;
}
body {
  margin: 0;
  font-size: 14px;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
  background-color: #fff;
}
::-webkit-scrollbar-track {
  background-color: #fff;
}
::-webkit-scrollbar-thumb {
  background-color: #fff;
}
.prism-big-play-btn {
  position: absolute !important;
  left: 0 !important;
  bottom: 0 !important;
  top: 0 !important;
  right: 0 !important;
  margin: auto !important;
  width: 45px !important;
  height: 45px !important;
  background: url('https://images.ufutx.com/202101/29/fef68b642b5954d015f6d2740864e75d.png') !important;
  background-size: contain !important;
  display: block;
}
.outter {
  width: initial !important;
  height: initial !important;
  border: initial !important;
}
.van-swipe__indicator {
  background: #ffffff !important;
  opacity: 0.59 !important;
}
.van-swipe__indicator--active {
  opacity: 1 !important;
  width: 10px !important;
  border-radius: 4px !important;
}
.van-list__finished-text {
  background: #fff !important;
}
.van-toast {
  top: 42% !important;
  z-index: 200000002 !important;
}
.van-dialog {
  z-index: 100000001 !important;
}
.van-popup {
  top: 42% !important;
  border-radius: 12px !important;
  overflow-y: initial !important;
  z-index: 100000001 !important;
}
.van-picker {
  border-radius: 12px !important;
}
.van-overlay {
  z-index: 100000001;
}
.inexa {
  z-index: 200000002 !important;
}
</style>
