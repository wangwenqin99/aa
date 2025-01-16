import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import '@/assets/common.scss'
import "./utils/rem"
import App from './App.vue'
import pinia from './stores'  //引入store仓库
import router from './router/index'

const app = createApp(App)
app.use(pinia).use(router).mount('#app')
