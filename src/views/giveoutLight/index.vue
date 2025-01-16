<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('设备背面自动发绿光是为什么') }}</div>
    <div class="title-content">
      {{ t('绿光是设备尝试进行心率监测，如您开启了日常心率监测，设备就会自动发光。我们的设备采用的是目前主流的光学心率监测，请放心使用。') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
