<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('如何设置单位') }}</div>
    <div class="title-content">
      {{ t('打开“我的>单位设置”，在此设置你需要的单位。设置完成后，单位将会同步到设备') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>