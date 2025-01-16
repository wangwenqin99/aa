<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('佩戴设备手机蓝牙需要一直开启吗') }}</div>
    <div class="title-content">
      {{ t('1.计步、睡眠监测、闹钟这三个功能不需要一直连着手机。如您锻炼时只需要佩戴设备，锻炼完成后将设备和手机连接同步查看数据即可；') }}
      <br />
      <br />

      {{ t('2.闹钟：在宜准智能APP设置时写入设备，设置成功后使用闹钟不需要保持蓝牙连接手机；') }}
      <br />
      <br />

      {{ t('3.来电提醒、寻找手机需要打开手机蓝牙，并保持与手机的连接；') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
