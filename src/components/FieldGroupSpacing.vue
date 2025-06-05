<template>
  <div class="selector-row">
    <label class="theme-label-style">Spacing Scale</label>
    <VSelect
      :model-value="value"
      :items="spacingOptions"
      :disabled="disabled"
      item-text="text"
      item-value="value"
      clearable
      @update:model-value="emitUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";

interface SpacingOption {
  text: string;
  value: string;
}

defineProps({
  value: {
    type: String as PropType<string | null>,
    default: "0.25rem", // Default to Medium
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:value"]);

const spacingOptions = ref<SpacingOption[]>([
  { text: "Small (0.22rem)", value: "0.22rem" },
  { text: "Medium (0.25rem)", value: "0.25rem" },
  { text: "Large (0.28rem)", value: "0.28rem" },
  { text: "XL (0.31rem)", value: "0.31rem" },
  { text: "XXL (0.34rem)", value: "0.34rem" },
]);

function emitUpdate(newValue: string | null) {
  emit("update:value", newValue);
}
</script>
