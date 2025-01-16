<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('使用信息提醒') }}</div>
    <div class="title-content">
      {{ t('设备支持接收微信、短信、QQ、日历、邮件等信息提醒，请在连接APP后在“设备>通知提醒”中开启或关闭相关通知：') }}
      <br />
      <br />
      {{ t('1.需保持设备和手机的蓝牙配对连接；') }}
      <br />
      <br />
      {{ t('2.有信息时，设备上最多可查看最近5条信息；') }}
      <br />
      <br />
      {{ t('3.左滑信息内容可删除信息；') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
