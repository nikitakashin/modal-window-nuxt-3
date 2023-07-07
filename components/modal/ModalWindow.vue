<template>
  <div v-click-outside="close" class="modal-window" @keyup.esc="close">
    <div class="title">
      <slot name="title"></slot>
      <base-icon v-if="!props.noClosable" :icon="mdiClose" class="button-close" @click="close" />
    </div>

    <div class="content">
      <div v-if="props.icon" class="icon">
        <base-icon :icon="props.icon" :size="48" />
      </div>

      <div v-if="$slots.subtitle" class="subtitle">
        <slot name="subtitle"></slot>
      </div>

      <div v-if="$slots.text" class="text">
        <slot name="text"></slot>
      </div>
      <slot></slot>
    </div>

    <div v-if="$slots.actions" class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiClose } from '@mdi/js';
import { useModal } from '@/composables/modal';
import { vClickOutside } from '@/directives/clickOutside';

interface IProps {
  id: string;
  noClosable: boolean;
  icon?: string;
  autoClose: boolean;
  autoTimer?: number;
}

const props = defineProps<IProps>();

const modal = useModal();

const close = () => {
  modal.hide(props.id);
};
</script>

<style lang="scss" scoped>
.modal-window {
  position: relative;
  width: 400px;
  background: #04143c;
  border-radius: 16px;
  color: #a1b1d1;
  overflow: hidden;
  border: 3px solid #13224a;

  .title {
    display: flex;
    color: #a1b1d1;
    height: 40px;
    font-weight: bold;
    font-size: 140%;
    justify-content: center;
    align-items: center;

    .button-close {
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #030b23;
    padding: 16px;
    min-height: 136px;

    .icon {
      display: flex;
      justify-content: center;
      margin-top: 24px;
    }

    .subtitle {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin-top: 24px;
      color: #bacbee;
    }

    .text {
      display: flex;
      justify-content: center;
      text-align: center;
      font-weight: 700;
      font-size: 14px;
      margin-top: 12px;
    }
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
</style>
