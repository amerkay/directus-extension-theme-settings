<template>
  <div class="selector-row">
    <label class="theme-label-style">Rounded Corners</label>
    <VSelect
      :model-value="value"
      :items="radiusOptions"
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

interface RadiusOption {
  text: string;
  value: string;
}

defineProps({
  value: {
    type: String as PropType<string | null>,
    default: "0.5rem",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:value"]);

const radiusOptions = ref<RadiusOption[]>([
  { text: "None", value: "0rem" },
  { text: "Small", value: "0.35rem" },
  { text: "Medium", value: "0.5rem" },
  { text: "Large", value: "1rem" },
  { text: "XLarge", value: "1.5rem" },
]);

function emitUpdate(newValue: string | null) {
  emit("update:value", newValue);
}
</script>
