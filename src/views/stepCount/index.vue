<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('哪些因素会影响计步的准确性') }}</div>
    <div class="title-content">
      {{ t('设备内置的传感器和算法是极其微妙的东西。总体上来说，大家在拿到设备第一次设定时，一定要诚实准确填写各项信息！包括性别、身高、体重、年龄，这些稍微不准都会直接影响到传感器的数据捕捉，进一步影响到算法运算，导致的结果则是计步不准、距离数据不对、消耗卡路里数值准度下降，从而得出不理想的数据，影响到您的个人运动数据。另外您的摆臂姿势、步幅、身形、路面的平整度、上下坡都会影响到计步数值。') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>