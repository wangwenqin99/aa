<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('蓝牙连接经常断开') }}</div>
    <div class="title-content">
      {{ t('1.设备和手机距离是否过远：7米以外蓝牙连接效果会减弱；') }}
      <br />
      <br />

      {{ t('2.设备和手机之间是否有遮挡物，人体、佩戴的金属首饰等，会干扰蓝牙的连接；') }}
      <br />
      <br />

      {{ t('3.设备电量是否充足，足以打开蓝牙，点亮屏幕；') }}
      <br />
      <br />

      {{ t('4.手机蓝牙功能是否异常，建议关闭程序并重启蓝牙；') }}
      <br />
      <br />

      {{ t('5.当APP退出到后台时，系统可能会自动杀死程序系统，导致蓝牙连接断开；') }}
      <br />
      <br />

      {{ t('6.手机黑屏之后蓝牙自动断开，可能是因为手机的省电模式或手机助手自动关闭蓝牙，可设置手机后重试。') }}
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
