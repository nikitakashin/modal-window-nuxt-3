<template>
  <Teleport v-if="modals.length" to="body">
    <div class="modal-container">
      <component
        v-for="modal in modals"
        :is="modal.component"
        :id="modal.id"
        :title="modal.props.title"
        :subtitle="modal.props.subtitle"
        :text="modal.props.text"
        :no-closable="modal.props.noClosable || false"
        :icon="modal.props.icon"
        :auto-close="modal.props.autoClose || false"
        :auto-timer="modal.props.autoTimer"
        :additional="modal.props.additional"
        :key="modal.id"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useModalStore, IModal } from '@/composables/modal';

const modalStore = useModalStore();
const modals: Ref<IModal[]> = ref([]);

watch(
  () => modalStore,
  (first, second) => {
    modals.value = [];

    second.value.forEach((modal) => {
      modals.value.push(modal);
    });
  },
  {
    deep: true
  }
);
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  display: flex;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgba($color: #000000, $alpha: 0.3);
  z-index: 1000;
}
</style>
