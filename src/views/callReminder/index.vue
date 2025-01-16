<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('使用来电提醒') }}</div>
    <div class="title-content">
      {{ t('1.需保持设备和手机的蓝牙配对连接；') }}
      <br />
      <br />
      {{ t('2.手表支持接通与挂断；') }}
      <br />
      <br />
      {{ t('3.没有备注的将直接显示电话号码；') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
