<template>
  <component
    :is="component"
    :class="['base-button', `color-${props.color}`, { square: props.square, block: props.block }]"
    :to="props.to"
    :href="props.href"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  to: String,
  href: String,
  color: String,
  square: Boolean,
  block: Boolean,
  disabled: Boolean
});

const handleClick = (evt) => {
  if (props.disabled) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

const component = computed(() => {
  if (props.to) return 'nuxt-link';
  if (props.href) return 'a';
  return 'button';
});
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  border-radius: 24px;
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: rgb(33, 33, 33);
  align-items: center;
  font-weight: 500;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
  padding: 8px 16px;
  font-size: 24px;

  &:hover {
    background: rgb(70, 70, 70);
  }

  &.square {
    border-radius: 4px;
  }
  &.block {
    width: 100%;
  }

  &.color-success {
    background: #5bc83e;
  }

  &.color-error {
    background: #a92931;
  }
}
</style>
