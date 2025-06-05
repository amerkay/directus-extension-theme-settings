import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "interface-theme-settings",
  name: "Theme Settings",
  icon: "palette",
  description: "Choose colors, font pairings, spacing, shadows and more.",
  component: InterfaceComponent,
  options: [
    {
      field: "enableColorThemePicker",
      name: "Enable Color Theme Picker",
      type: "boolean",
      meta: {
        interface: "boolean",
        width: "half",
        note: "Show/hide the color theme selection (accent and primary colors).",
        options: {
          label: "Enable Color Theme Picker",
        },
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "enableFontPairPicker",
      name: "Enable Font Pair Picker",
      type: "boolean",
      meta: {
        interface: "boolean",
        width: "half",
        note: "Show/hide the font pair selector",
        options: {
          label: "Enable Font Pair Picker",
        },
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "enableRadiusPicker",
      name: "Enable Rounded Corner Radius Picker",
      type: "boolean",
      meta: {
        interface: "boolean",
        width: "half",
        note: "Show/hide the border radius selection.",
        options: {
          label: "Enable Rounded Corner Radius Picker",
        },
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "enableSpacingPicker",
      name: "Enable Spacing Picker",
      type: "boolean",
      meta: {
        interface: "boolean",
        width: "half",
        note: "Show/hide the spacing scale selection (affects margins, padding, width, etc).",
        options: {
          label: "Enable Spacing Picker",
        },
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "enableTrackingPicker",
      name: "Enable Letter Spacing (Tracking) Picker",
      type: "boolean",
      meta: {
        interface: "boolean",
        width: "half",
        note: "Show/hide the letter spacing selection.",
        options: {
          label: "Enable Letter Spacing (Tracking) Picker",
        },
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "enableShadowPicker",
      name: "Enable Shadow Picker",
      type: "boolean",
      meta: {
        interface: "boolean",
        width: "half",
        note: "Show/hide the shadow style selection.",
        options: {
          label: "Enable Shadow Picker",
        },
      },
      schema: {
        default_value: true,
      },
    },
  ],
  types: ["json"], // Store the selection as a JSON object
  group: "selection", // Group it with other selection interfaces
});
