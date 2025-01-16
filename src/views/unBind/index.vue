<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('设备无法绑定') }}</div>
    <div class="title-content">
      {{ t('可以尝试以下方式，设置后重试：') }}
      <br />
      {{ t('重新打开手机蓝牙。') }}
      <br />
      {{ t('确保手机有电并靠近手机。') }}
      <br />
      {{ t('在设备点击“恢复出厂设置”后，重新连接。') }}
      <br />
      {{ t('在手机蓝牙界面“忽略此设备”，再重新配对。') }}
    </div>
    <div class="title-content-sec">
      {{ t('1、打开“设置>蓝牙”，找到此设备；') }}
      <br />
      {{ t('2、在设备页面，点击“忽略此设备”；') }}
    </div>
    <div class="title-content-thr">
      <img class="trump" src="../../../public/trumpet.png" alt="" />
      <div class="ad-content">
        {{ t('如设备连接过其他手机，请在原手机蓝牙中选 择“忽略此设备”后，重新连接。') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>