<template>
  <div class="selector-row">
    <label class="theme-label-style">Letter Spacing (Tracking)</label>
    <VSelect
      :model-value="value"
      :items="trackingOptions"
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

interface TrackingOption {
  text: string;
  value: string;
}

defineProps({
  value: {
    type: String as PropType<string | null>,
    default: "0em", // Default to Normal
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:value"]);

const trackingOptions = ref<TrackingOption[]>([
  { text: "Tighter (-0.05em)", value: "-0.05em" },
  { text: "Tight (-0.025em)", value: "-0.025em" },
  { text: "Normal (0em)", value: "0em" },
  { text: "Wide (0.025em)", value: "0.025em" },
  { text: "Wider (0.05em)", value: "0.05em" },
  { text: "Widest (0.1em)", value: "0.1em" },
]);

function emitUpdate(newValue: string | null) {
  emit("update:value", newValue);
}
</script>
