<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('APP版本更新') }}</div>
    <div class="title-content">{{ t('打开APP进入“我的>关于”页面，点击【版本更新】可跳转到更新页面。') }}</div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>