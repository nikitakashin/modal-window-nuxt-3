<template>
  <svg
    class="base-icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    v-bind="$attrs"
  >
    <g fill="currentColor">
      <path :d="props.icon" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  icon: string;
  size?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  size: 24
});
</script>

<style lang="scss" scoped>
.base-icon {
  vertical-align: bottom;
}
</style>
