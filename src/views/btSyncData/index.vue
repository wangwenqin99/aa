<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('蓝牙同步数据时间长或不成功') }}</div>
    <div class="title-content">
      {{ t('1.蓝牙是否正常连接，如不能，请参考【蓝牙连接经常断开】；') }}
      <br />
      <br />

      {{ t('2.同步数据需在设备页面下拉页面或刷新数据才能开始；') }}
      <br />
      <br />

      {{ t('3.蓝牙连接是否因超时已断开；') }}
    </div>
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
