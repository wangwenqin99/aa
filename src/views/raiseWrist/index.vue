<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('抬腕亮屏不灵敏') }}</div>
    <div class="title-content">
      {{ t('考虑到使用过程中您的无意识抬腕，如睡觉时伸胳膊，我们对抬腕亮屏进行了部分限制。手表屏幕向下时，扭动手腕使屏幕向上可正常点亮屏幕。建议您多尝试几次，掌握最佳的抬腕角度。') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
