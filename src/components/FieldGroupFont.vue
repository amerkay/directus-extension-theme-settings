<template>
  <div class="font-fields-wrapper">
    <h2 style="margin-top: 32px; font-weight: bold">Font Settings</h2>

    <div class="selector-row">
      <label class="theme-label-style">Font Style</label>
      <VFancySelect
        :model-value="selectedFontStyle"
        :items="fontFontStylesForFancySelect"
        item-text="text"
        item-value="value"
        :disabled="disabled"
        @update:model-value="updateFontStyle"
      />
    </div>

    <div class="selector-row">
      <label class="theme-label-style">Heading Font</label>
      <div v-if="!selectedFontStyle" class="prompt-message">
        Choose a font style to start.
      </div>
      <PickerFonts
        v-else
        :model-value="selectedHeadingFont"
        :font-options="availableHeadingFontsForPicker"
        placeholder="Select Heading Font"
        :disabled="disabled || !selectedFontStyle"
        @update:model-value="updateHeadingFont"
      />
    </div>

    <div class="selector-row">
      <label class="theme-label-style">Body Font</label>
      <div v-if="!selectedFontStyle" class="prompt-message">
        Choose a font style to start.
      </div>
      <div v-else-if="!selectedHeadingFont" class="prompt-message">
        Choose a heading font to continue.
      </div>
      <PickerFonts
        v-else
        :model-value="selectedBodyFont"
        :font-options="availableBodyFontsForPicker"
        placeholder="Select Body Font"
        :disabled="disabled || !selectedHeadingFont"
        @update:model-value="updateBodyFont"
      />
    </div>

    <div class="selector-row">
      <label class="theme-label-style">Font Preview</label>
      <div v-if="!selectedFontStyle" class="prompt-message">
        Choose a font style to start.
      </div>
      <div v-else-if="!selectedHeadingFont" class="prompt-message">
        Choose a heading font to continue.
      </div>
      <div v-else-if="!selectedBodyFont" class="prompt-message">
        Choose a body font to see the preview.
      </div>

      <FontPreviewCard
        v-else-if="selectedHeadingFont && selectedBodyFont"
        :selected-heading-font="selectedHeadingFont"
        :selected-body-font="selectedBodyFont"
        :selected-pairing-why="selectedPairingWhy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { FONT_PAIRING_DATA } from "../lib/font-pairing";
import type { FontPairing } from "../lib/font-pairing";
import type { FontOption } from "./PickerFonts.vue";
import PickerFonts from "./PickerFonts.vue";
import VFancySelect from "./directus/v-fancy-select.vue";
import type { FancySelectItem } from "./directus/v-fancy-select.vue";
import FontPreviewCard from "./FontPreviewCard.vue";

export interface FontSelection {
  fontFontStyle: string | null;
  fontHeading: string | null;
  fontHeadingSource: string | null;
  fontBody: string | null;
  fontBodySource: string | null;
}

const props = defineProps<{
  value: FontSelection | null;
  disabled?: boolean;
}>();

const emit = defineEmits(["update:value"]);

const fontPairings: FontPairing[] = FONT_PAIRING_DATA;

const selectedFontStyle = ref<string | null>(null);
const selectedHeadingFont = ref<string | null>(null);
const selectedHeadingFontSource = ref<string | null>(null);
const selectedBodyFont = ref<string | null>(null);
const selectedBodyFontSource = ref<string | null>(null);

const currentPairing = computed(() => {
  if (
    selectedFontStyle.value &&
    selectedHeadingFont.value &&
    selectedBodyFont.value
  ) {
    return fontPairings.find(
      (p) =>
        p.style === selectedFontStyle.value &&
        p.heading.font_face === selectedHeadingFont.value &&
        p.body.font_face === selectedBodyFont.value
    );
  }
  return undefined;
});

const selectedPairingWhy = computed(() => {
  return currentPairing.value?.why ?? "The brown fox jumps over the lazy dog.";
});

const fontFontStylesForFancySelect = computed((): FancySelectItem[] => {
  const fontStyleCounts: Record<string, number> = {};
  fontPairings.forEach((p) => {
    fontStyleCounts[p.style] = (fontStyleCounts[p.style] || 0) + 1;
  });

  return Object.entries(fontStyleCounts)
    .sort((a, b) => b[1] - a[1]) // Sort by count, descending (large to small)
    .map(([fontStyle, count]) => ({
      icon: "font_download",
      value: fontStyle,
      text: `${fontStyle} (${count})`,
    }));
});

const availableHeadingFontsForPicker = computed((): FontOption[] => {
  if (!selectedFontStyle.value) return [];

  const headingFontsWithDetails: {
    text: string;
    value: string;
    source: string;
    frequency: number;
  }[] = [];
  const seenFonts = new Set<string>();

  fontPairings
    .filter((p) => p.style === selectedFontStyle.value)
    .forEach((p) => {
      if (!seenFonts.has(p.heading.font_face)) {
        headingFontsWithDetails.push({
          text: p.heading.font_face,
          value: p.heading.font_face,
          source: p.heading.source,
          frequency: p.recommended_frequency ?? 0,
        });
        seenFonts.add(p.heading.font_face);
      }
    });

  return headingFontsWithDetails
    .sort((a, b) => b.frequency - a.frequency)
    .map(({ text, value, source }) => ({ text, value, source }));
});

const availableBodyFontsForPicker = computed((): FontOption[] => {
  if (!selectedHeadingFont.value || !selectedFontStyle.value) return [];

  const bodyFontsWithDetails: {
    text: string;
    value: string;
    source: string;
    frequency: number;
  }[] = [];
  const seenFonts = new Set<string>();

  fontPairings
    .filter(
      (p) =>
        p.style === selectedFontStyle.value &&
        p.heading.font_face === selectedHeadingFont.value
    )
    .forEach((p) => {
      if (!seenFonts.has(p.body.font_face)) {
        bodyFontsWithDetails.push({
          text: p.body.font_face,
          value: p.body.font_face,
          source: p.body.source,
          frequency: p.recommended_frequency ?? 0,
        });
        seenFonts.add(p.body.font_face);
      }
    });

  return bodyFontsWithDetails
    .sort((a, b) => b.frequency - a.frequency)
    .map(({ text, value, source }) => ({ text, value, source }));
});

const updateFontStyle = (fontStyle: string | null) => {
  selectedFontStyle.value = fontStyle;
  selectedHeadingFont.value = null;
  selectedHeadingFontSource.value = null;
  selectedBodyFont.value = null;
  selectedBodyFontSource.value = null;
};

const updateHeadingFont = (fontName: string | null) => {
  selectedHeadingFont.value = fontName;
  selectedBodyFont.value = null;
  selectedBodyFontSource.value = null;

  if (fontName) {
    const headingFontData = availableHeadingFontsForPicker.value.find(
      (f) => f.value === fontName
    );
    selectedHeadingFontSource.value = headingFontData?.source ?? null;
  } else {
    selectedHeadingFontSource.value = null;
  }

  // If there is only one availableBodyFontsForPicker, by default pick it.
  if (
    availableBodyFontsForPicker.value &&
    availableBodyFontsForPicker.value.length === 1
  ) {
    const bodyFontData = availableBodyFontsForPicker.value[0];
    if (bodyFontData) {
      selectedBodyFont.value = bodyFontData.value;
      selectedBodyFontSource.value = bodyFontData.source;
    }
  }
};

const updateBodyFont = (fontName: string | null) => {
  selectedBodyFont.value = fontName;
  if (fontName) {
    const bodyFontData = availableBodyFontsForPicker.value.find(
      (f) => f.value === fontName
    );
    selectedBodyFontSource.value = bodyFontData?.source ?? null;
  } else {
    selectedBodyFontSource.value = null;
  }
};

watch(
  () => props.value,
  (newValue) => {
    let newFontStyle = newValue?.fontFontStyle ?? null;
    let newHeadingFont = newValue?.fontHeading ?? null;
    let newHeadingSource = newValue?.fontHeadingSource ?? null;
    let newBodyFont = newValue?.fontBody ?? null;
    let newBodySource = newValue?.fontBodySource ?? null;

    // Validate Font Style
    if (
      newFontStyle &&
      !fontFontStylesForFancySelect.value.some((f) => f.value === newFontStyle)
    ) {
      newFontStyle = null; // Invalid style
    }
    selectedFontStyle.value = newFontStyle;

    // Validate Heading Font (only if fontStyle is valid)
    if (newFontStyle) {
      if (
        newHeadingFont &&
        !availableHeadingFontsForPicker.value.some(
          (f) => f.value === newHeadingFont
        )
      ) {
        newHeadingFont = null; // Invalid heading for the style
      }
    } else {
      newHeadingFont = null; // No style, so no heading
    }
    selectedHeadingFont.value = newHeadingFont;
    selectedHeadingFontSource.value = newHeadingFont ? newHeadingSource : null;

    // Validate Body Font (only if fontStyle and headingFont are valid)
    if (newHeadingFont) {
      if (
        newBodyFont &&
        !availableBodyFontsForPicker.value.some((f) => f.value === newBodyFont)
      ) {
        newBodyFont = null; // Invalid body for the style/heading
      }
    } else {
      newBodyFont = null; // No heading, so no body
    }
    selectedBodyFont.value = newBodyFont;
    selectedBodyFontSource.value = newBodyFont ? newBodySource : null;
  },
  { immediate: true, deep: true }
);

watch(
  [
    selectedFontStyle,
    selectedHeadingFont,
    selectedHeadingFontSource,
    selectedBodyFont,
    selectedBodyFontSource,
  ],
  ([fontStyle, head, headSource, body, bodySource]) => {
    emit("update:value", {
      fontFontStyle: fontStyle,
      fontHeading: head,
      fontHeadingSource: headSource,
      fontBody: body,
      fontBodySource: bodySource,
    });
  },
  { deep: true }
);
</script>

<style scoped>
.prompt-message {
  padding: var(--theme--form--field--input--padding, 10px 12px);
  background-color: var(
    --theme--form--field--input--background,
    var(--theme--background-subdued)
  );
  border: var(--theme--border-width) solid
    var(
      --theme--form--field--input--border-color-disabled,
      var(--theme--border-color-subdued)
    );
  border-radius: var(--theme--border-radius);
  color: var(
    --theme--form--field--input--placeholder-color,
    var(--theme--foreground-subdued)
  );
  font-size: var(
    --theme--form--field--input--font-size,
    var(--theme--font-size-regular)
  );
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  line-height: var(--theme--line-height-normal);
}
</style>
