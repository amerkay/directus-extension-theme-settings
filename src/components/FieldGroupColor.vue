<template class="color-fields-wrapper">
  <div>
    <!-- Primary Color Selector -->
    <div class="selector-row">
      <label class="theme-label-style">Primary Color</label>
      <PickerColors
        :swatch-colors="primaryColorItems"
        :select-items="primaryColorItems"
        v-model:selected-value="selectedPrimary"
        :selected-item-display="selectedPrimaryItem"
        placeholder="Select Primary Color"
        :disabled="disabled"
      />
    </div>

    <!-- Accent Color Selector -->
    <div class="selector-row">
      <label class="theme-label-style">Accent Color</label>
      <PickerColors
        :swatch-colors="accentRecommendedColorItems"
        :select-items="accentColorItemsForSelect"
        v-model:selected-value="selectedAccent"
        :selected-item-display="selectedAccentItem"
        placeholder="Select Accent Color"
        :disabled="disabled || !selectedPrimary"
      />
    </div>

    <!-- Preview Cards -->
    <div
      class="selector-row theme-preview-cards-wrapper"
      v-if="selectedPrimary && selectedAccent"
    >
      <label class="theme-label-style">Color Preview</label>
      <div class="previews-container">
        <div>
          <ThemePreviewCard
            :primaryItem="selectedPrimaryItem"
            :accentItem="selectedAccentItem"
            :baseItem="inferredBaseColorItem"
            :destructiveItem="inferredDestructiveColorItem"
            :isDarkMode="false"
          />
        </div>
        <!-- <div>
          <ThemePreviewCard
            title="Dark Mode"
            :primaryItem="selectedPrimaryItem"
            :accentItem="selectedAccentItem"
            :baseItem="inferredBaseColorItem"
            :destructiveItem="inferredDestructiveColorItem"
            :isDarkMode="true"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, PropType } from "vue";
import PickerColors from "./PickerColors.vue";
import ThemePreviewCard from "./ThemePreviewCard.vue";
import {
  getInferredBaseColorName,
  getAutoDestructiveColorName,
} from "../lib/colors";
import {
  colorsMap,
  grayscaleColors,
  recommendedPrimaryColors,
} from "../lib/color-data";
import {
  rainbowSortColorNames,
  getCombinedHarmonizedAccentColorNames,
} from "../lib/color-harmonization";
import type { ColorItem } from "./ColorSwatches.vue";

export interface Color {
  name: string;
  color: string;
}
export interface ColorsSelection {
  colorAccent: Color | null;
  colorPrimary: Color | null;
}

const props = defineProps({
  value: {
    type: Object as PropType<ColorsSelection | null>,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:value"]);

const formatColorKeysToItems = (
  keys: string[],
  isRecommendedList = false
): ColorItem[] =>
  keys
    .filter((key) => colorsMap[key])
    .map((key): ColorItem => {
      const color = colorsMap[key];
      const text = key.charAt(0).toUpperCase() + key.slice(1);

      let colorValue, borderColor;
      if (color) {
        // Use Tailwind step '500' for swatch color (mid-tone)
        colorValue = color.paletteLight?.["500"];
        // Use Tailwind step '600' for the swatch's border color
        borderColor = color.paletteLight?.["600"];
      }

      // If colorValue or borderColor is not defined, throw an error
      if (!colorValue || !borderColor) {
        throw new Error(
          `Color value or border color not found for key: ${key}`
        );
      }

      return {
        text: isRecommendedList ? `${text} ✨` : text,
        value: key,
        colorValue,
        borderColor,
      };
    });

// Primary Color Items options
const primaryColorItems = computed(() => {
  return formatColorKeysToItems(
    rainbowSortColorNames(recommendedPrimaryColors)
  );
});

// The primary color selected
const selectedPrimary = ref<string | null>(null);
const selectedPrimaryItem = computed(() =>
  primaryColorItems.value.find((item) => item.value === selectedPrimary.value)
);

// Get the harmonized accent colors options
const harmonizedAccentData = computed(() => {
  return getCombinedHarmonizedAccentColorNames(selectedPrimary.value);
});
// The recommended accent colors
const accentRecommendedColorItems = computed(() => {
  return formatColorKeysToItems(harmonizedAccentData.value.recommended);
});
// The combined accent colors for select options, recommended first
const accentColorItemsForSelect = computed(() => {
  const recommendedItems = formatColorKeysToItems(
    harmonizedAccentData.value.recommended,
    true
  );
  const otherItems = formatColorKeysToItems(harmonizedAccentData.value.other);
  return [...recommendedItems, ...otherItems];
});

// The accent color selected
const selectedAccent = ref<string | null>(null);
const selectedAccentItem = computed(() => {
  return accentColorItemsForSelect.value.find(
    (item) => item.value === selectedAccent.value
  );
});

const allGrayscaleColorItems = computed(() =>
  formatColorKeysToItems(grayscaleColors)
);

// The Base Color is inferred from the primary color
const inferredBaseName = computed(() => {
  if (!selectedPrimary.value) return null;
  return getInferredBaseColorName(selectedPrimary.value);
});

const inferredBaseColorItem = computed(() => {
  if (!inferredBaseName.value) return null;
  return allGrayscaleColorItems.value.find(
    (item) => item.value === inferredBaseName.value
  );
});

// The Destructive Color is inferred from the primary and accent colors not to clash
const inferredDestructiveName = computed(() => {
  return getAutoDestructiveColorName(
    selectedPrimary.value,
    selectedAccent.value
  );
});
const inferredDestructiveColorItem = computed(() => {
  if (!inferredDestructiveName.value) return null;
  return primaryColorItems.value.find(
    (item) => item.value === inferredDestructiveName.value
  );
});

// Watch props.value to initialize/update state
watch(
  () => props.value,
  (newValue: ColorsSelection | null) => {
    selectedPrimary.value = newValue?.colorPrimary?.name ?? null;
    selectedAccent.value = newValue?.colorAccent?.name ?? null;
  },
  { immediate: true, deep: true }
);

// Watch selectedPrimary and selectedAccent to update inferred values and emit changes
watch(
  [selectedPrimary, selectedAccent],
  ([newPrimaryName, newAccentName]) => {
    const newOutput: ColorsSelection = {
      colorPrimary:
        newPrimaryName && selectedPrimaryItem.value
          ? {
              name: newPrimaryName,
              color: selectedPrimaryItem.value.colorValue,
            }
          : null,
      colorAccent:
        newAccentName && selectedAccentItem.value
          ? { name: newAccentName, color: selectedAccentItem.value.colorValue }
          : null,
    };
    emit("update:value", newOutput);
  },
  { immediate: true }
);
</script>

<style scoped>
.theme-preview-cards-wrapper {
  margin-top: 20px;
}

.previews-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
