<template>
  <div class="container">
    <base-button square @click="createNotify">Create notify modal</base-button>
    <base-button square @click="createQuestion">Create question modal</base-button>
  </div>
</template>

<script setup lang="ts">
import { mdiTrashCan } from '@mdi/js';
import { useModal, modalComponents } from '@/composables/modal';

const modal = useModal();

const createNotify = () => {
  modal.show(modalComponents.notify, {
    title: 'Внимание',
    text: 'Недостаточно фишек для ставки'
  });
};

const exampleDeleteFile = (id: string) => {
  modal.hide(id);

  modal.show(modalComponents.notify, {
    title: 'Успех',
    noClosable: false,
    autoClose: false,
    text: 'Операция прошла успешно!'
  });
};

const createQuestion = () => {
  const exampleFileName = 'index.tsx';

  modal.show(modalComponents.question, {
    title: 'Подтверждение удаления',
    icon: mdiTrashCan,
    subtitle: `Вы действительно хотите удалить файл ${exampleFileName}`,
    text: 'После удаления это действие нельзя будет отменить',
    noClosable: false,
    autoClose: false,
    additional: {
      actions: [
        { text: 'Да', color: 'error', handler: exampleDeleteFile },
        { text: 'Нет', color: 'success', handler: modal.hide }
      ]
    }
  });
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .base-button:not(:first-child) {
    margin-top: 24px;
  }
}
</style>
