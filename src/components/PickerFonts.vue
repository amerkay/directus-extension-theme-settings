<template>
  <VFancySelect
    class="picker-fonts"
    :items="fontOptions"
    :modelValue="modelValue"
    @update:modelValue="handleUpdateModelValue"
    :disabled="disabled"
    :clearable="clearable"
    itemText="text"
    itemValue="value"
  >
    <template #item-content="{ item }">
      <div
        :ref="(el) => registerFontItemElement(el, item)"
        class="picker-fonts__option-content"
        :style="{ 'font-family': item.value, fontSize: '1.5rem' }"
      >
        {{ item.text }}
      </div>
    </template>
  </VFancySelect>
</template>

<script setup lang="ts">
import { ref, watch, PropType } from "vue";
import { useFontLoader } from "../composables/useFontLoader";
import VFancySelect from "./directus/v-fancy-select.vue";
import { useIntersectionObserver } from "@vueuse/core";

export interface FontOption {
  // `text` and `value` are the font's name with spaces and capitalization
  // done this way to be compatible with FancySelectItem type
  text: string;
  value: string;
  source: string;
}

const { loadFont } = useFontLoader();

const props = defineProps({
  modelValue: {
    type: String as PropType<string | null>,
    default: null,
  },
  placeholder: {
    type: String,
    default: "Select Font",
  },
  fontOptions: {
    type: Array as PropType<FontOption[]>,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fontItemElements = ref(new Map());

const registerFontItemElement = (el: any, item: any) => {
  if (el && item) {
    const element = el.$el || el;
    fontItemElements.value.set(item.value, element);
    const fontOption = props.fontOptions.find(
      (opt) => opt.value === item.value
    );
    if (fontOption) {
      useIntersectionObserver(
        element,
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            loadFont(fontOption.value, fontOption.source);
          }
        },
        { threshold: 1.0 } // Load when fully visible
      );
    }
  } else if (item) {
    fontItemElements.value.delete(item.value);
  }
};

const handleUpdateModelValue = (value: string | null) => {
  emit("update:modelValue", value);
  if (value) {
    const selectedOpt = props.fontOptions.find((opt) => opt.value === value);
    if (selectedOpt) {
      loadFont(value, selectedOpt.source);
    }
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      const selectedOpt = props.fontOptions.find(
        (opt) => opt.value === newValue
      );
      if (selectedOpt) {
        loadFont(newValue, selectedOpt.source);
      }
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.picker-fonts {
  width: 100%;
}

.picker-fonts__option-content {
  padding: 8px 0;
  line-height: var(--theme--line-height-normal);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
</style>
