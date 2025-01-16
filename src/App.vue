<template>
  <div class="home">
    <router-view />
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();
import { onMounted, ref } from 'vue';
onMounted(() => {
  // 设置语言
  let url = window.location.href
    if (url.indexOf("zh_CN")>-1) {
    locale.value = 'zhCN'
  } else if (url.indexOf("zh_TW")>-1 || url.indexOf("zh_HK")>-1) {
    locale.value = 'zhTW'
  } else {
    locale.value = 'en'
  }
  
  // let language = navigator.language
  // if (language === "zh-CN") {
  //   locale.value = 'zhCN'
  // } else if (language === "zh-TW" || language === "zh-HK") {
  //   locale.value = 'zhTW'
  // } else {
  //   locale.value = 'en'
  // }
  // locale.value = navigator.language.slice(0, 2);
  document.title = t('帮助'); // 设置页面标题
});

</script>

<style scoped lang="scss">
.home {
  font-size: 17px;
}
</style>
