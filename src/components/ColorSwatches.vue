<template>
  <div class="color-swatches-wrapper">
    <button
      v-for="color in colors"
      :key="color.value"
      type="button"
      class="color-swatch-button"
      :class="{ selected: color.value === selectedValue }"
      :title="color.text"
      @click="handleClick(color.value)"
    >
      <span
        class="color-swatch color-swatch"
        :style="{
          backgroundColor: color.colorValue,
          borderColor: color.borderColor,
        }"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

export interface ColorItem {
  text: string;
  value: string;
  colorValue: string;
  borderColor: string;
  isRecommended?: boolean;
}

defineProps({
  colors: {
    type: Array as PropType<ColorItem[]>,
    required: true,
  },
  selectedValue: {
    type: String as PropType<string | null>,
    default: null,
  },
});

const emit = defineEmits(["update:selectedValue"]);

function handleClick(value: string) {
  emit("update:selectedValue", value);
}
</script>

<style scoped>
.color-swatches-wrapper {
  margin-left: -4px;
  padding: 4px;
  display: flex;
  gap: 6px; /* Spacing between swatches */
  padding-bottom: 4px;
  overflow-x: auto;
  white-space: nowrap;
}

.color-swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid;
  display: block;
}

.color-swatch-button {
  padding: 2px; /* Provides focus ring space */
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  line-height: 0; /* Prevent button height issues */
  display: inline-flex; /* Align swatch correctly */
  align-items: center;
  justify-content: center;
  transition: outline 0.1s ease-in-out;
}

.color-swatch-button:focus {
  outline: 2px solid var(--theme--primary);
  outline-offset: 1px;
}

.color-swatch-button.selected {
  outline: 2px solid var(--theme--primary);
  outline-offset: 1px;
}
</style>
