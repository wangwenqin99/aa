import { createI18n } from "vue-i18n";
import en from './en'//英文
import zhCN from './zhCN'; // 中文简体
import zhTW from './zhTW'; // 中文繁体

const i18n = createI18n({
  locale:localStorage.getItem('language') || 'zh', // 默认是中文
  globalInjection:true,//全局配置$t
  legacy:false,
  messages:{en,zhCN,zhTW}// 需要做国际化的语种
 
})
 
export default i18n
