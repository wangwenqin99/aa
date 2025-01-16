import { defineStore } from "pinia"
 
const mainInfoStore = defineStore('mainInfo', {
  // defineStore('mainInfo',{})  mainInfo就是这个仓库的名称name
  state: () => ({
    title: '',
    description: '',
    size: '466',
    version: '1.0.0'
  }),
  // persist: false, // 持久化（写入localStorage和sessiongStorage）全部
  persist: {
      key: 'piniaStore', //存储名称
      storage: sessionStorage, // 存储方式
      paths: ['title', 'description'], //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
  },
})
 
export default mainInfoStore