<template>
  <div class="theme-selector-wrapper">
    <!-- Color Selectors -->
    <FieldGroupColor
      v-if="props.enableColorThemePicker"
      v-model:value="colorSelections"
      :disabled="props.disabled"
    />

    <!-- Font Selector -->
    <FieldGroupFont
      v-if="props.enableFontPairPicker"
      v-model:value="selectedFontConfig"
      :disabled="props.disabled"
    />

    <!-- Tracking Selector -->
    <FieldGroupTracking
      v-if="props.enableTrackingPicker"
      v-model:value="selectedTrackingStyle"
      :disabled="props.disabled"
    />

    <!-- Radius Selector -->
    <FieldGroupRadius
      v-if="props.enableRadiusPicker"
      v-model:value="selectedRadiusStyle"
      :disabled="props.disabled"
    />

    <!-- Spacing Selector -->
    <FieldGroupSpacing
      v-if="props.enableSpacingPicker"
      v-model:value="selectedSpacingStyle"
      :disabled="props.disabled"
    />

    <!-- Shadow Selector -->
    <FieldGroupShadow
      v-if="props.enableShadowPicker"
      v-model:value="selectedShadowStyle"
      :disabled="props.disabled"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, PropType } from "vue";
import FieldGroupFont from "./components/FieldGroupFont.vue";
import FieldGroupColor from "./components/FieldGroupColor.vue";
import FieldGroupRadius from "./components/FieldGroupRadius.vue";
import FieldGroupSpacing from "./components/FieldGroupSpacing.vue";
import FieldGroupTracking from "./components/FieldGroupTracking.vue";
import FieldGroupShadow from "./components/FieldGroupShadow.vue";
import type { ColorsSelection } from "./components/FieldGroupColor.vue";
import type { FontSelection } from "./components/FieldGroupFont.vue";
import { buildThemeCss, type ThemeValue } from "./lib/build-css";
import { createError } from "@directus/errors";

const props = defineProps({
  value: {
    type: Object as PropType<ThemeValue | null>,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },

  // Props from interface options
  enableColorThemePicker: {
    type: Boolean,
    default: true,
  },
  enableFontPairPicker: {
    type: Boolean,
    default: true,
  },
  enableRadiusPicker: {
    type: Boolean,
    default: true,
  },
  enableSpacingPicker: {
    type: Boolean,
    default: true,
  },
  enableTrackingPicker: {
    type: Boolean,
    default: true,
  },
  enableShadowPicker: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["input"]);

const colorSelections = ref<ColorsSelection | null>(null);
const selectedFontConfig = ref<FontSelection>({
  fontFontStyle: null,
  fontHeading: null,
  fontHeadingSource: null,
  fontBody: null,
  fontBodySource: null,
});
const selectedRadiusStyle = ref<string | null>(null);
const selectedSpacingStyle = ref<string | null>(null);
const selectedTrackingStyle = ref<string | null>(null);
const selectedShadowStyle = ref<string | null>(null);

// Watch props.value to initialize/update state
watch(
  () => props.value,
  (newValue: ThemeValue | null) => {
    if (newValue) {
      colorSelections.value = {
        colorAccent: newValue.colorAccent ?? null,
        colorPrimary: newValue.colorPrimary ?? null,
      };
      selectedFontConfig.value = {
        fontFontStyle: newValue.fontFontStyle ?? null,
        fontHeading: newValue.fontHeading ?? null,
        fontHeadingSource: newValue.fontHeadingSource ?? null,
        fontBody: newValue.fontBody ?? null,
        fontBodySource: newValue.fontBodySource ?? null,
      };
      selectedRadiusStyle.value = newValue.radiusStyle ?? "0.5rem";
      selectedSpacingStyle.value = newValue.spacingStyle ?? "0.25rem";
      selectedTrackingStyle.value = newValue.trackingStyle ?? "0em";
      selectedShadowStyle.value = newValue.shadowStyle ?? "small-card";
    } else {
      colorSelections.value = null;
      selectedFontConfig.value = {
        fontFontStyle: null,
        fontHeading: null,
        fontHeadingSource: null,
        fontBody: null,
        fontBodySource: null,
      };
      selectedRadiusStyle.value = "0.5rem";
      selectedSpacingStyle.value = "0.25rem";
      selectedTrackingStyle.value = "0em";
      selectedShadowStyle.value = "small-card";
    }
  },
  { immediate: true, deep: true }
);

// Watch individual refs to emit combined value
watch(
  [
    colorSelections,
    selectedFontConfig,
    selectedRadiusStyle,
    selectedSpacingStyle,
    selectedTrackingStyle,
    selectedShadowStyle,
  ],
  ([colors, fonts, radius, spacing, tracking, shadow]) => {
    const newOutput: ThemeValue = {
      colorAccent: colors?.colorAccent ?? null,
      colorPrimary: colors?.colorPrimary ?? null,
      fontFontStyle: fonts?.fontFontStyle ?? null,
      fontHeading: fonts?.fontHeading ?? null,
      fontHeadingSource: fonts?.fontHeadingSource ?? null,
      fontBody: fonts?.fontBody ?? null,
      fontBodySource: fonts?.fontBodySource ?? null,
      radiusStyle: radius ?? null,
      spacingStyle: spacing ?? null,
      trackingStyle: tracking ?? null,
      shadowStyle: shadow ?? null,
    };

    try {
      if (colors?.colorAccent && colors?.colorPrimary) {
        newOutput.cssText = buildThemeCss(newOutput);
      } else {
        newOutput.cssText = null;
      }
    } catch (error: any) {
      console.error("Error generating theme CSS in interface:", error);
      throw new (createError(
        "theme_css_generation_error",
        `Error generating theme CSS: ${error.message}`,
        500
      ))();
    }

    emit("input", newOutput);
  },
  { deep: true }
);
</script>

<style>
.theme-label-style {
  font-weight: 600;
  font-size: var(--theme--input--label--font-size);
  margin-bottom: 4px;
  display: block;
}

.selector-row {
  margin-top: 20px;
}

.selector-row > label.theme-label-style {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
