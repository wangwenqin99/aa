<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('哪些因素会影响心率测试结果') }}</div>
    <div class="title-content">
      {{ t('不标准的佩戴方式会影响心率信号的测量，比如不完全贴合导致的漏光、手臂的摆动以及设备在皮肤上的轻微移动等，设备佩戴得过紧、手臂抬高和握拳等会影响血液循环，同样可能影响到心率信号。正确的测量方式将手臂平放，放松并保持静止，同时保证设备贴紧手臂。') }}
    </div>
    <div class="title-content-thr">
      <img class="trump" src="../../../public/trumpet.png" alt="" />
      <div class="ad-content">
        {{ t('佩戴正确情况下，皮肤颜色、毛发、纹身以及伤疤等个体差异也可能会影响到心率信号。') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
