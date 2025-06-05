<template>
  <div>
    <ColorSwatches
      style="margin-bottom: 4px"
      :colors="swatchColors"
      :selected-value="selectedValue"
      @update:selected-value="$emit('update:selectedValue', $event)"
    />
    <v-select
      :model-value="selectedValue"
      @update:model-value="$emit('update:selectedValue', $event)"
      :items="selectItems"
      :placeholder="placeholder"
      :disabled="disabled"
    >
      <template #prepend>
        <span
          v-if="selectedItemDisplay"
          class="color-swatch"
          :style="{
            backgroundColor: selectedItemDisplay.colorValue,
            borderColor: selectedItemDisplay.borderColor,
          }"
        ></span>
      </template>
    </v-select>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import ColorSwatches from "./ColorSwatches.vue";
import type { ColorItem } from "./ColorSwatches.vue";

defineProps({
  swatchColors: {
    type: Array as PropType<ColorItem[]>,
    required: true,
  },
  selectItems: {
    type: Array as PropType<ColorItem[]>,
    required: true,
  },
  selectedValue: {
    type: String as PropType<string | null>,
    default: null,
  },
  selectedItemDisplay: {
    type: Object as PropType<ColorItem | null | undefined>,
    default: null,
  },
  placeholder: {
    type: String,
    default: "Select Color",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:selectedValue"]);
</script>

<style scoped>
.color-swatch {
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;

  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid;
}
</style>
