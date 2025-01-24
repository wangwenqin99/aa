<template>
  <div class="wrapper">
    <div class="wrap2" ref="snowfallContainer" ></div>
    <div class="wrap" >
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
import { onMounted, ref } from 'vue'
import  dayjs from 'dayjs'
// 设置语言

const router = useRouter()
// ref(0)

 
// 创建一个Day.js对象
let a = dayjs().diff(dayjs('2024-06-17'), 'day');
let b = dayjs().diff(dayjs('2024-06-30'), 'day');
let c = dayjs().diff(dayjs('2024-08-10'), 'day');

import JParticles from "jparticles";
 
const snowfallContainer = ref(null);
 
onMounted(() => {
  // 文档 https://jparticles.js.org/#/examples/snow
  if (snowfallContainer.value) {
    new JParticles.Snow(snowfallContainer.value, {
      // JParticles 的雪花配置项
      num: 2, // 数量
      color: "#FFF", // 颜色
      maxR: 1, // 最小尺寸
      minR: 5, // 最大尺寸
      opacity:0.9,
      maxSpeed: 0.15, // 雪花飘落最大运动速度
      minSpeed: 0.02, // 雪花飘落最小运动速度
      // duration:3000,
      shape: [
        'circle',
        // 'triangle',
        // 'star'
        // 'https://img0.baidu.com/it/u=3485414744,2885040284&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422',
        // 'https://img0.baidu.com/it/u=3485414744,2885040284&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422',
        // require('../../public/xh1.png'),
        // require('../../public/xh1.png'),

      ],//雪花图片地址，我这个链接一天后失效，请换成自己的图片链接
    });
  }
})

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
  position: relative;
  /* 设置背景图片，记得替换为你的图片路径 */
  background-image: url('/public/b.png');
  /* 设置其他样式，比如背景大小覆盖等 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* 其他样式，比如定义高度、宽度等 */
  height: 100vh; /* 根据需要设置高度 */
  width: 100%;
  .wrap2{
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
  }
  
  .wrap{
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    
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
