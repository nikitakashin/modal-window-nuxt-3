<template>
  <modal-window :id="props.id" :no-closable="props.noClosable" :auto-close="props.autoClose">
    <template #title> {{ props.title }} </template>
    <template #text> {{ props.text }} </template>
  </modal-window>
</template>

<script setup lang="ts">
import { IModalProps } from '@/composables/modal';
import ModalWindow from '@/components/modal/ModalWindow.vue';

const props = withDefaults(defineProps<IModalProps>(), {
  id: '1',
  title: ''
});
</script>
