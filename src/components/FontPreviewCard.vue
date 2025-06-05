<template>
  <VCard class="font-preview-card">
    <VCardTitle>
      <p
        class="preview-heading-text"
        :style="{ fontFamily: selectedHeadingFont || 'inherit' }"
      >
        {{ selectedHeadingFont }} &amp; {{ selectedBodyFont }}
      </p>
    </VCardTitle>
    <VCardText>
      <span
        class="preview-body-text"
        :style="{ fontFamily: selectedBodyFont || 'inherit' }"
      >
        {{ selectedPairingWhy }}
      </span>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
defineProps<{
  selectedHeadingFont: string | null;
  selectedBodyFont: string | null;
  selectedPairingWhy: string;
}>();
</script>

<style scoped>
.font-preview-card {
  max-width: 500px;
  padding-top: 12px;
  padding-bottom: 16px;
}

.preview-heading-text {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1em;
}

.preview-body-text {
  font-size: 1.2rem;
}
</style>
