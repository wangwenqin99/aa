<template>
  <div class="page-wrapper">
    <div class="title-text">{{ t('为什么设备上天气数据不同步或不准确') }}</div>
    <div class="title-content">
      {{ t('设备本身并不会自动更新天气数据，需要将设备连接APP后，同步天气数据，确保宜准智能与设备处于连接状态：') }}
    </div>
    <div class="title-content-thr">
      <img class="trump" src="../../../public/trumpet.png" alt="" />
      <div class="ad-content">
        {{ t('1.当宜准智能定位权限开启时会自动定位当前所在城市，获取不到地理位置时会出现天气无数据情况，打开GPS开关会使定位和天气数据更加准确；') }}
        <br />
        <br />
        {{ t('2.当设备与宜准智能处于正常连接状态时，APP会定时发送天气预报信息给设备，当网络服务不佳时可能会导致天气数据不同步更新或显示无数据状态；') }}
        <br />
        <br />
        {{ t('3.当设备与宜准智能断开连接时，将不会同步更新天气数据，若有历史数据则显示历史数据，若无历史数据显示天气无数据状态；') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>