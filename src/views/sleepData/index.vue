<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('睡眠数据无法同步或不准确') }}</div>
    <div class="title-content">
      {{ t('1.是否佩戴设备睡觉，未佩戴设备睡觉同步后，APP将不产生睡眠数据；') }}
      <br />
      <br />

      {{ t('2.睡眠算法是24小时侦测，不分白天晚上，睡眠需要超过三小时才会被记录。起床后接着睡、赖床、玩手机等会影响睡眠数据的记录；') }}
      <br />
      <br />

      {{ t('3.睡觉前未佩戴设备，或者起床后直接摘下设备，会导致睡眠时间延长不准确；') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
