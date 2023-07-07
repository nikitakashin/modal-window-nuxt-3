# modal-window-nuxt-3

## Live demo => http://modal.commondev.ru/

# Installation

```bash
git clone https://github.com/nikitakashin/modal-window-nuxt-3.git
cd modal-window-nuxt-3
npm i
```

## Local dev server

```bash
npm run dev
```

## Build Setup

```bash
npm run build
```

## Build Setup with Docker

```bash
docker build . -t projectname
docker run -it -p 3000:3000 projectname
```

## Modal usage

```js
import { useModal, modalComponents } from '@/composables/modal';

const modal = useModal();

const modalWindowId = modal.show(modalComponents.notify, {
  title: 'Example title',
  text: 'Example text'
});

modal.hide(modalWindowId);
```

### Creating new modal templates

Create component that uses ModalWindow as root component and IModalProps interface for declaring props at /components/modal/template

For example:
/components/modal/template/ModalTemplateNotify.vue

```js
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
```

Then register this template at /composables/modal.ts in modalComponents constant

Example:

```js
import ModalTemplateNotify from '@/components/modal/template/ModalTemplateNotify.vue';

export const modalComponents: IModalComponents = {
  notify: ModalTemplateNotify
};
```
