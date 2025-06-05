import { createError } from "@directus/errors";
import { getThemeColors } from "./colors";
import { colorsMap, type ColorShade } from "./color-data";
import {
  getShadowVariablesCss,
  type ShadowScaleName,
} from "./css-shadow-scales";
import type { ColorsSelection, Color } from "../components/FieldGroupColor.vue";
import type { FontSelection } from "../components/FieldGroupFont.vue";

export interface ThemeValue extends ColorsSelection, FontSelection {
  radiusStyle?: string | null;
  spacingStyle?: string | null;
  trackingStyle?: string | null;
  shadowStyle?: string | null;
  cssText?: string | null;
}

// Main function to build the theme CSS
export function buildThemeCss(themeConfig: ThemeValue): string {
  const {
    colorAccent: accentName,
    colorPrimary: primaryName,
    fontHeading,
    fontBody,
    radiusStyle,
    spacingStyle,
    trackingStyle,
    shadowStyle,
  } = themeConfig;

  let rootCssLines: string[] = [];

  // Validate required color names and get their ColorShade objects:
  const accentColor = validateColor(accentName, "Accent");
  const primaryColor = validateColor(primaryName, "Primary");

  // Add theme color variables
  const colorCss = getThemeColorsCSS(accentColor, primaryColor);
  if (colorCss.trim()) {
    colorCss
      .split("\n")
      .filter((l) => l.trim())
      .forEach((line) => rootCssLines.push(line));
  }

  // Add font, radius, spacing, tracking variables
  if (fontHeading && typeof fontHeading === "string")
    rootCssLines.push(`  --font-family-heading: '${fontHeading}';`);
  if (fontBody && typeof fontBody === "string")
    rootCssLines.push(`  --font-family-body: '${fontBody}';`);
  if (radiusStyle && typeof radiusStyle === "string")
    rootCssLines.push(`  --radius: ${radiusStyle};`);
  if (spacingStyle && typeof spacingStyle === "string")
    rootCssLines.push(`  --spacing: ${spacingStyle};`);
  if (trackingStyle && typeof trackingStyle === "string")
    rootCssLines.push(`  --tracking: ${trackingStyle};`);

  // Add shadow styles
  if (shadowStyle && typeof shadowStyle === "string") {
    try {
      const shadowVarsRaw = getShadowVariablesCss(
        shadowStyle as ShadowScaleName
      );
      shadowVarsRaw
        .split("\n")
        .filter((l) => l.trim())
        .forEach((line) => rootCssLines.push(`  ${line.trim()}`));
    } catch (e: any) {
      // Log to console and re-throw as a generic error for the interface to catch
      console.warn(
        `Invalid shadowStyle provided: '${shadowStyle}'. Error: ${e.message}`
      );
      throw new (createError(
        "INVALID_CONFIG",
        `Invalid shadowStyle: ${shadowStyle}. ${e.message}`,
        400
      ))();
    }
  }

  let finalCss = "";
  if (rootCssLines.length > 0) {
    finalCss += `:root {\n${rootCssLines.join("\n")}\n}\n`;
  }

  return finalCss.trim();
}

// Helper function to validate color names
function validateColor(
  colorQuery: Color | null,
  colorName: string
): ColorShade {
  if (!colorQuery) {
    const message = `No ${colorName.toLowerCase()} color value provided`;
    throw new (createError("INVALID_CONFIG", message, 400))();
  }

  const colorShade: ColorShade | undefined = colorsMap[colorQuery.name];
  if (!colorShade) {
    const message = `Invalid ${colorName.toLowerCase()} color value provided: ${colorQuery}`;
    throw new (createError("INVALID_CONFIG", message, 400))();
  }

  return colorShade;
}

// Helper function to generate CSS for theme colors
function getThemeColorsCSS(
  accentColor: ColorShade,
  primaryColor: ColorShade
): string {
  const colorThemeVariables = getThemeColors(accentColor, primaryColor);
  return Object.entries(colorThemeVariables)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");
}
