<template>
  <div class="nav-wrapper">
    <div class="back"></div>
  </div>
  <div class="nav">帮助</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  width: 100%;
  height: 36px;
  top: 0;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .back {
    width: 9px;
    height: 9px;
    border-top: 2px solid #333333;
    border-right: 2px solid #333333;
    transform: rotate(225deg);
  }
}
.nav {
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 18px;
  color: #000000;
}
</style>
