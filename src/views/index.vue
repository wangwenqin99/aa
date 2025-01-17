<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="top-content">
        <div class="content">老王与狗子的纪念日</div>
        <div class="content">加微信：2024年6月17日，距今 <span class="color-green">{{ a }}</span> 天</div>
        <div class="content">初见面：2024年6月30日，距今 <span class="color-green">{{ b }}</span> 天</div>
        <div class="content">在一起：2024年8月10日，距今 <span class="color-green">{{ c }}</span> 天</div>
      </div>

      <!-- <div class="item-wrap" v-for="item in helpList" @click="toNext(item.url)">
        <div class="left">{{ item.name }}</div>
        <div class="right"></div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import  dayjs from 'dayjs'
// 设置语言

const router = useRouter()
// ref(0)

 
// 创建一个Day.js对象
let a = dayjs().diff(dayjs('2024-06-17'), 'day');
let b = dayjs().diff(dayjs('2024-06-30'), 'day');
let c = dayjs().diff(dayjs('2024-08-10'), 'day');

const originList = [
  {
    name: '设备通话/音乐播放音质不好',
    url: '/call'
  },
  {
    name: '如何设置单位',
    url: '/setUnit'
  },
  
]
const list = JSON.parse(JSON.stringify(originList))


const helpList = ref(list)
const toNext = (url: string) => {
  router.push({
    path: url
  })
}
</script>

<style lang="scss" scoped>
.wrapper {
  /* 设置背景图片，记得替换为你的图片路径 */
  background-image: url('/public/b.png');
  
  /* 设置其他样式，比如背景大小覆盖等 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* 其他样式，比如定义高度、宽度等 */
  height: 100vh; /* 根据需要设置高度 */
  width: 100%;
  
  .wrap{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    .top-content{
      padding:20px 15px;
      color:#ffffff;
      .content{
        line-height: 50px;
        .color-green{
          color: greenyellow;
        }
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

 
}
</style>
