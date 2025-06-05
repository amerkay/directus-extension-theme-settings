<template>
  <div class="selector-row">
    <label class="theme-label-style">Shadow Style</label>
    <VSelect
      :model-value="value"
      :items="shadowOptions"
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

interface ShadowOption {
  text: string;
  value: string;
}

defineProps({
  value: {
    type: String as PropType<string | null>,
    default: "neutral", // Default to Neutral
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:value"]);

const shadowOptions = ref<ShadowOption[]>([
  { text: "Flat", value: "flat" },
  { text: "Neutral", value: "neutral" },
  { text: "Soft Diffuse", value: "softDiffuse" },
  { text: "Deep Contrast", value: "deepContrast" },
  { text: "Accent Color Glow", value: "accentGlow" },
  { text: "Hard Shadow", value: "hard" },
]);

function emitUpdate(newValue: string | null) {
  emit("update:value", newValue);
}
</script>
