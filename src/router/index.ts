import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
 
const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import("@/views/index.vue")
  },
  {
  //设备通话/音乐播放音质不好
    path: '/call',
    component: () => import("@/views/call/index.vue")
  },
  {
    // name: '如何设置单位',
    path: '/setUnit',
    component: () => import("@/views/setUnit/index.vue")
  },
  {
    // name: '设备无法绑定',
    path: '/unBind',
    component: () => import("@/views/unBind/index.vue")
  },
  {
    // name: '蓝牙连接经常断开',
    path: '/btDisconnect',
    component: () => import("@/views/btDisconnect/index.vue")
  },
  {
    // name: '蓝牙同步数据时间长或不成功',
    path: '/btSyncData',
    component: () => import("@/views/btSyncData/index.vue")
  },
  {
    // name: '睡眠数据无法同步或不准确',
    path: '/sleepData',
    component: () => import("@/views/sleepData/index.vue")
  },
  {
    // name: '抬腕亮屏不灵敏', 
    path: '/raiseWrist',
    component: () => import("@/views/raiseWrist/index.vue")
  },
  {
    // name: '设备背面自动发绿光是为什么'
    path: '/giveoutLight',
    component: () => import("@/views/giveoutLight/index.vue")
  },
  {
    // name: '设备如何充电',
    path: '/reCharge',
    component: () => import("@/views/reCharge/index.vue")
  },
  {
    // name: '如何使用拍照功能',
    path: '/takePhoto',
    component: () => import("@/views/takePhoto/index.vue")
  },
  {
    // name: '佩戴设备手机蓝牙需要一直开启吗',
    path: '/btOpen',
    component: () => import("@/views/btOpen/index.vue")
  },
  {
    // name: '哪些因素会影响心率测试结果',
    path: '/changeResult',
    component: () => import("@/views/changeResult/index.vue")
  },
  {
    // name: '哪些因素会影响计步的准确性',
    path: '/stepCount',
    component: () => import("@/views/stepCount/index.vue")
  },
  {
    // name: '为什么设备上天气数据不同步或不准确',
    path: '/weatherData',
    component: () => import("@/views/weatherData/index.vue")
  },
  {
    // name: '使用来电提醒',
    path: '/callReminder',
    component: () => import("@/views/callReminder/index.vue")
  },
  {
    // name: '使用信息提醒',
    path: '/mesReminder',
    component: () => import("@/views/mesReminder/index.vue")
  },
  {
    // name: '有效运动',
    path: '/effectMovement',
    component: () => import("@/views/effectMovement/index.vue")
  },
  {
    // name: 'APP版本更新',
    path: '/versionUpdate',
    component: () => import("@/views/versionUpdate/index.vue")
  }
];
 
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;