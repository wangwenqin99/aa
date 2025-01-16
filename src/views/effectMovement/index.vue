<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('有效运动') }}</div>
    <div class="title-content">
      {{ t('在运动中，所有运动需要达到最低运动记录标准才会保存，否则不作保存处理。所有运动达到1分钟后保存数据并产生运动记录。') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
