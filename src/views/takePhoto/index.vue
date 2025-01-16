<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('如何使用拍照功能') }}</div>
    <div class="title-content">
      {{ t('您可以先打开手机的相机，然后将手机置于远处，点击手表相机图标即可进行拍照。（手表为控制拍照的设备，无法作为摄影工具）') }}
      <br />
      <br />

      {{ t('1.需保持设备和手机的蓝牙连接；') }}
      <br />

      {{ t('2.APP需获取调用系统相机的权限；') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>