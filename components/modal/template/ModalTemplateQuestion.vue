<template>
  <modal-window
    :id="props.id"
    :no-closable="props.noClosable"
    :auto-close="props.autoClose"
    :icon="props.icon"
  >
    <template #title> {{ props.title }} </template>
    <template #subtitle> {{ props.subtitle }} </template>
    <template #text> {{ props.text }} </template>
    <template #actions>
      <base-button
        v-for="(button, index) in props.additional.actions"
        :key="index"
        :color="button.color"
        square
        block
        @click="button.handler(props.id)"
      >
        {{ button.text }}
      </base-button>
    </template>
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
