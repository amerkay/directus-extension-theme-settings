import chroma from "chroma-js";
import {
  type ColorShade,
  colorsMap,
  TW_COLOR_STEPS,
  recommendedPrimaryColorGroupings,
  recommendedDestructiveColors,
} from "./color-data";

export function getThemeColors(
  accent: ColorShade | null | undefined,
  primary: ColorShade | null | undefined,
  cssPrefix = "theme-"
): Record<string, string> {
  if (!accent || !primary) {
    throw new Error(
      "getThemeColors Error: Accent and/or primary colors missing."
    );
  }

  const baseColorName = getInferredBaseColorName(primary.key);
  const baseShade = colorsMap[baseColorName];

  const destructiveColorName = getAutoDestructiveColorName(
    primary.key,
    accent.key
  );
  const destructiveShade = colorsMap[destructiveColorName];

  if (!baseShade) {
    throw new Error(
      `Theme Generation Error: Base color shade for '${baseColorName}' is missing from colorsMap.`
    );
  }
  if (!destructiveShade) {
    throw new Error(
      `Theme Generation Error: Destructive color shade for '${destructiveColorName}' is missing from colorsMap.`
    );
  }

  // Expand color swatches
  const theme = {
    ...expandColorSwatch("base", baseShade, cssPrefix),
    ...expandColorSwatch("primary", primary, cssPrefix),
    ...expandColorSwatch("accent", accent, cssPrefix),
    ...expandColorSwatch("destructive", destructiveShade, cssPrefix),
  };

  return theme;
}

// Base color is inferred from the primary color choice
export function getInferredBaseColorName(
  primaryColorName: string | null | undefined
): string {
  if (!primaryColorName) {
    throw new Error("Primary color name must be provided to infer base color.");
  }

  if (!colorsMap[primaryColorName]) {
    throw new Error(
      `Primary color '${primaryColorName}' not found in colorsMap.`
    );
  }

  // Iterate through the recommendedPrimaryColorGroupings map to find the associated grayscale.
  for (const grayscaleKey in recommendedPrimaryColorGroupings) {
    if (recommendedPrimaryColorGroupings.hasOwnProperty(grayscaleKey)) {
      const primaryList = recommendedPrimaryColorGroupings[grayscaleKey];
      if (primaryList?.includes(primaryColorName)) {
        if (colorsMap[grayscaleKey] && colorsMap[grayscaleKey].grayscale) {
          return grayscaleKey;
        }
      }
    }
  }

  throw new Error(
    `Could not infer a recommended base grayscale color for primary color '${primaryColorName}'.`
  );
}

// Destructive color is auto-selected, avoiding clashes with primary and accent
export function getAutoDestructiveColorName(
  primaryName?: string | null,
  accentName?: string | null
): string {
  for (const color of recommendedDestructiveColors) {
    if (colorsMap[color] && color !== primaryName && color !== accentName) {
      return color;
    }
  }
  throw new Error(
    `Could not automatically determine a suitable preferred destructive color ` +
      `that does not clash with primary '${primaryName}' or accent '${accentName}'.`
  );
}

function getHSLValue(colorString: string | undefined): string {
  if (typeof colorString === "undefined") {
    throw new Error("Color string is undefined.");
  }

  const color = chroma(colorString);
  const [h, s, l] = color.hsl();
  // chroma.js returns h as NaN for achromatic colors (s=0 or l=0 or l=1).
  // CSS hsl() treats NaN hue as 0.
  const hue = isNaN(h) ? 0 : Math.round(h);
  const saturation = Math.round(s * 100);
  const lightness = Math.round(l * 100);

  // Format to "H S% L%" (space separated values for CSS custom properties)
  return `${hue} ${saturation}% ${lightness}%`;
}

function cssVariableName(name: string, cssPrefix = "theme-"): string {
  return `--${cssPrefix}${name}`;
}

function expandColorSwatch(
  name: string, // e.g., "base", "primary", "accent"
  colorShade: ColorShade, // The ColorShade object for the chosen color
  cssPrefix = "theme-"
): Record<string, string> {
  const paletteToUse = colorShade.paletteLight;
  const swatchVariables: Record<string, string> = {};

  // Add step variables (e.g., --theme-primary-50, --theme-primary-100)
  // The CSS variable name always uses the standard step (e.g., --theme-primary-50).
  for (let i = 0; i < TW_COLOR_STEPS.length; i++) {
    const stepName = TW_COLOR_STEPS[i] || "";
    const colorValue = paletteToUse[stepName];

    swatchVariables[cssVariableName(`${name}-${stepName}`, cssPrefix)] =
      getHSLValue(colorValue);
  }

  // Add the text contrast color variable (e.g., --theme-primary-text)
  const textColorValue = paletteToUse[`${colorShade.key}-text`];
  swatchVariables[cssVariableName(`${name}-text`, cssPrefix)] =
    getHSLValue(textColorValue);

  return swatchVariables;
}
