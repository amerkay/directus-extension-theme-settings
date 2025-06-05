<template>
  <div class="" :style="themeStyles">
    <div class="theme-preview-card">
      <div class="preview-content-wrapper">
        <div class="preview-column">
          <p><strong>Selected:</strong></p>
          <div class="color-swatch-info" v-if="primaryItem">
            <span class="color-swatch primary-swatch"></span>
            <span>Primary: {{ primaryItem.text }}</span>
          </div>
          <div class="color-swatch-info" v-if="accentItem">
            <span class="color-swatch accent-swatch"></span>
            <span>Accent: {{ accentItem.text }}</span>
          </div>
        </div>
        <div class="preview-column">
          <p><strong>Inferred:</strong></p>
          <div class="color-swatch-info" v-if="baseItem">
            <span class="color-swatch base-swatch"></span>
            <span>Base: {{ baseItem.text }}</span>
          </div>
          <div class="color-swatch-info" v-if="destructiveItem">
            <span class="color-swatch destructive-swatch"></span>
            <span>Destructive: {{ destructiveItem.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ColorItem } from "./ColorSwatches.vue";
import { getThemeColors } from "../lib/colors";
import { colorsMap } from "../lib/color-data";

const props = defineProps<{
  primaryItem: ColorItem | undefined;
  accentItem: ColorItem | undefined;
  baseItem: ColorItem | null | undefined;
  destructiveItem: ColorItem | null | undefined;
  isDarkMode: boolean;
}>();

const themeStyles = computed(() => {
  if (!props.primaryItem || !props.accentItem) return;

  const primaryShade = colorsMap[props.primaryItem.value];
  const accentShade = colorsMap[props.accentItem.value];

  try {
    return getThemeColors(accentShade, primaryShade);
  } catch (error) {
    console.error("ThemePreviewCard: Error generating theme styles:", error);
    return;
  }
});
</script>

<style scoped>
.theme-preview-card {
  flex: 1;
  min-width: 320px;
  padding: 15px;
  border: 1px solid hsl(var(--theme-base-400));
  border-radius: var(--theme-radius, 8px);
  background-color: hsl(var(--theme-base-100));
  color: hsl(var(--theme-base-950));
}

.preview-content-wrapper {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.preview-column {
  flex: 1;
}

.preview-column p {
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: 500;
}

.color-swatch-info {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 0.9em;
}

.color-swatch {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 8px;
  border: 1px solid hsl(var(--theme-base-600));
}

.color-swatch.primary-swatch {
  background-color: hsl(var(--theme-primary-500));
}
.color-swatch.accent-swatch {
  background-color: hsl(var(--theme-accent-500));
}
.color-swatch.base-swatch {
  background-color: hsl(var(--theme-base-100));
}
.color-swatch.destructive-swatch {
  background-color: hsl(var(--theme-destructive-500));
}
</style>
