<template>
  <div class="help-wrapper">
    <!-- <backNav /> -->
    <div class="search-wrapper">
      <input
        class="search"
        v-model="searchQuery"
        @input="changeList"
        :placeholder="placeholderText"
        type="text"
      />
      <img src="../../public/search.png" width="20px" height="20px" alt="" />
    </div>
    <div class="item-wrap" v-for="item in helpList" @click="toNext(item.url)">
      <div class="left">{{ item.name }}</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {  ref } from 'vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
// 设置语言

const router = useRouter()
let searchQuery = ref('')

const originList = [
  {
    name: t('设备通话/音乐播放音质不好'),
    url: '/call'
  },
  // {
  //   name: t('如何设置单位'),
  //   url: '/setUnit'
  // },
  {
    name: t('设备无法绑定'),
    url: '/unBind'
  },
  {
    name: t('蓝牙连接经常断开'),
    url: '/btDisconnect'
  },
  {
    name: t('蓝牙同步数据时间长或不成功'),
    url: '/btSyncData'
  },
  {
    name: t('睡眠数据无法同步或不准确'),
    url: '/sleepData'
  },
  {
    name: t('抬腕亮屏不灵敏'),
    url: '/raiseWrist'
  },
  {
    name: t('设备背面自动发绿光是为什么'),
    url: '/giveoutLight'
  },
  {
    name: t('设备如何充电'),
    url: '/reCharge'
  },
  {
    name: t('如何使用拍照功能'),
    url: '/takePhoto'
  },
  {
    name: t('佩戴设备手机蓝牙需要一直开启吗'),
    url: '/btOpen'
  },
  {
    name: t('哪些因素会影响心率测试结果'),
    url: '/changeResult'
  },
  {
    name: t('哪些因素会影响计步的准确性'),
    url: '/stepCount'
  },
  {
    name: t('为什么设备上天气数据不同步或不准确'),
    url: '/weatherData'
  },
  {
    name: t('使用来电提醒'),
    url: '/callReminder'
  },
  {
    name: t('使用信息提醒'),
    url: '/mesReminder'
  },
  {
    name: t('有效运动'),
    url: '/effectMovement'
  }
  // {
  //   name: t('APP版本更新'),
  //   url: '/versionUpdate'
  // }
]
const list = JSON.parse(JSON.stringify(originList))


const helpList = ref(list)
const placeholderText = ref(t('快速搜索问题关键字'))
const toNext = (url: string) => {
  router.push({
    path: url
  })
}
const changeList = () => {
  let newList = originList.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
  helpList.value = newList
}
</script>

<style lang="scss" scoped>
.help-wrapper {
  user-select: none;
  padding: 30px 15px 0;
  .search-wrapper {
    padding: 0 17px;
    height: 46px;
    // box-sizing: border-box;
    border-radius: 15px;
    font-size: 0;
    border: 3px solid #666666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .search {
      outline: none;
      border: 0;
      height: 38px;
      width: 80%;
      color: #999999;
      font-size: 16px;
    }
  }
  .item-wrap {
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42.5px;
    .left {
      font-size: 17px;
      color: #000000;
      width: 90%;
    }
    .right {
      width: 9px;
      height: 9px;
      border-top: 2px solid #000000;
      border-right: 2px solid #000000;
      transform: rotate(45deg);
      margin-right: 7px;
    }
  }
}
</style>
