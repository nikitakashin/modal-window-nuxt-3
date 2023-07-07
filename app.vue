<template>
  <modal-provider />
  <nuxt-layout>
    <NuxtPage />
  </nuxt-layout>
</template>

<script setup>
import ModalProvider from '@/components/modal/ModalProvider.vue';
</script>

<style lang="scss">
.jks {
  display: none;
  // Это нужно чтобы импортировались стили, смотреть nuxt.config.ts 29 строка
}
</style>
