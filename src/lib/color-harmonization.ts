import chroma from "chroma-js";
import { colorsMap, type ColorShade, grayscaleColors } from "./color-data";

// Define a simple HSL type for our needs
interface SimpleHSL {
  h: number;
  s: number;
  l: number;
}

const accentColors = Object.values(colorsMap).filter(({ accent }) => accent);

// Defines the minimum difference in hue (0-360 degrees) for a color to be considered "not similar".
// This helps filter out colors like "blue" and "indigo" which are perceptually close.
const MIN_HUE_DIFFERENCE_THRESHOLD = 60;

// Gets a representative color string (OKLCH from Tailwind) for hue calculation.
// Uses the '500' step as a mid-tone representative.
function getRepresentativeColorString(
  colorShade: ColorShade | null | undefined
): string | null {
  if (!colorShade) return null;
  return colorShade?.paletteLight?.["500"] ?? null;
}

// Helper to calculate hue difference
function calculateHueDifference(hue1: number, hue2: number): number {
  const diff = Math.abs(hue1 - hue2);
  return diff > 180 ? 360 - diff : diff;
}

// Get HSL from a color name, returns null if errors occur
function getHslFromColorName(
  colorName: string | null | undefined
): SimpleHSL | null {
  if (!colorName || !colorsMap[colorName]) {
    console.warn(`Color ${colorName} is not defined in colorsMap.`);
    return null;
  }

  const colorShade = colorsMap[colorName];
  const representativeColorStr = getRepresentativeColorString(colorShade);

  if (!representativeColorStr) {
    console.warn(
      `Color ${colorName} missing representative color string for HSL calculation.`
    );
    return null;
  }

  const color = chroma(representativeColorStr);
  const [h, s, l] = color.hsl();
  // Handle NaN hue for achromatic colors (saturation is 0, or lightness is 0 or 1)
  return { h: isNaN(h) ? 0 : h, s, l };
}

export function getCombinedHarmonizedAccentColorNames(
  primaryColorName: string | null | undefined
): { recommended: string[]; other: string[] } {
  // Combine accent and grayscale keys, then filter out excluded names.
  const allPotentialCandidateKeys = [
    ...accentColors.map((c) => c.key),
    ...grayscaleColors,
  ];

  const primaryHsl = getHslFromColorName(primaryColorName);

  // Fallback: if no valid primary HSL, recommend nothing, list all potential
  // candidates (excluding primary itself).
  if (!primaryHsl) {
    return {
      recommended: [],
      other: rainbowSortColorNames(
        allPotentialCandidateKeys.filter((k) => k !== primaryColorName)
      ),
    };
  }

  const recommendedNames: string[] = [];
  const otherNames: string[] = [];

  for (const candidateKey of allPotentialCandidateKeys) {
    if (candidateKey === primaryColorName) {
      continue; // Skip the primary color itself
    }

    const candidateShade = colorsMap[candidateKey];
    if (!candidateShade) {
      otherNames.push(candidateKey);
      continue;
    }

    // Grayscale colors always go to "otherNames"
    if (candidateShade.grayscale) {
      otherNames.push(candidateKey);
      continue;
    }

    // For non-grayscale (true accent) colors:
    const candidateHsl = getHslFromColorName(candidateKey);
    if (!candidateHsl) {
      otherNames.push(candidateKey);
      continue;
    }

    const hueDifference = calculateHueDifference(primaryHsl.h, candidateHsl.h);

    if (hueDifference > MIN_HUE_DIFFERENCE_THRESHOLD) {
      recommendedNames.push(candidateKey);
    } else {
      otherNames.push(candidateKey);
    }
  }

  return {
    recommended: rainbowSortColorNames(recommendedNames),
    other: rainbowSortColorNames(otherNames),
  };
}

// Sorts by hue in descending order (e.g., reds before oranges, oranges before yellows)
export function rainbowSortColorNames(colorNames: string[]): string[] {
  return [...colorNames].sort((a, b) => {
    const colorA = colorsMap[a];
    const colorB = colorsMap[b];
    if (!colorA || !colorB) return 0;

    // Use representative color string (e.g., '500' step) for hue calculation
    const colorStrA = getRepresentativeColorString(colorA);
    const colorStrB = getRepresentativeColorString(colorB);

    if (!colorStrA || !colorStrB) return 0;

    const hslA = chroma(colorStrA).hsl();
    const hslB = chroma(colorStrB).hsl();

    // chroma.js returns h as NaN for achromatic colors. Default to 0.
    const hueA = isNaN(hslA[0]) ? 0 : hslA[0];
    const hueB = isNaN(hslB[0]) ? 0 : hslB[0];

    return hueA - hueB;
  });
}
