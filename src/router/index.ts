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

];
 
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;