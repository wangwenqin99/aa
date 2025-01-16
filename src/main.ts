import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import '@/assets/common.scss'
import "./utils/rem"
import App from './App.vue'
import pinia from './stores'  //引入store仓库
import i18n from './lang/i18n'; // 引入多语言
import router from './router/index'

const app = createApp(App)
app.use(pinia).use(router).use(i18n).mount('#app')
