// Uses Tailwind CSS colors (OKLCH format)
// Tailwind Colors docs @ https://tailwindcss.com/docs/colors

import tailwindColorsRaw from "./tailwind-colors";

export const TW_COLOR_STEPS = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
];

// Define a type for the names of colors in tailwindColorsRaw that are scales
// Excludes 'black' and 'white' which are direct string values
type TailwindColorScaleName = {
  [K in keyof typeof tailwindColorsRaw]: (typeof tailwindColorsRaw)[K] extends Record<
    string,
    string
  >
    ? K
    : never;
}[keyof typeof tailwindColorsRaw];

export interface ColorPalette {
  [key: string]: string; // Steps '50'-'950' and a text color key
}

export interface ColorShade {
  key: string;
  label?: string;
  grayscale?: boolean;
  accent?: boolean;
  darkForeground?: boolean;
  paletteLight: ColorPalette; // Contains shades '50'-'950' and `${key}-text`
}

export const grayscaleColors = ["slate", "gray", "zinc", "neutral", "stone"];

// List of Tailwind colors that typically require a dark foreground when used as a solid background
const colorsWithDarkForegroundList = ["sky", "lime", "yellow", "amber"];

// Recommended primary colors for each Tailwind grayscale color
export const recommendedPrimaryColorGroupings: Record<string, string[]> = {
  gray: ["red", "rose", "pink", "fuchsia", "purple", "violet"],
  slate: ["indigo", "blue", "sky", "cyan"],
  zinc: ["green", "emerald", "teal"],
  neutral: ["lime", "yellow"],
  stone: ["amber", "orange"],
};

// Flatten the recommended primary colors into a single array
export const recommendedPrimaryColors: string[] = Object.keys(
  recommendedPrimaryColorGroupings
).reduce<string[]>((acc, key) => {
  return [...acc, ...(recommendedPrimaryColorGroupings[key] || [])];
}, []);

// Recommended destructive colors from Tailwind palette
export const recommendedDestructiveColors = ["red", "rose", "pink"];

const processedTailwindColors: Record<string, ColorShade> = (
  Object.keys(tailwindColorsRaw) as Array<keyof typeof tailwindColorsRaw>
)
  .filter((key) => typeof tailwindColorsRaw[key] === "object") // Process only color scales
  .reduce<Record<string, ColorShade>>((acc, key) => {
    const colorScale = tailwindColorsRaw[
      key as TailwindColorScaleName
    ] as Record<string, string>;

    const darkForeground = colorsWithDarkForegroundList.includes(key);
    const grayscale = grayscaleColors.includes(key);

    const newPaletteLight: ColorPalette = {};

    for (const step of TW_COLOR_STEPS) {
      newPaletteLight[step] = colorScale[step] || "#000000";
    }

    // Define text contrast colors
    newPaletteLight[`${key}-text`] = darkForeground ? "#000000" : "#FFFFFF";

    acc[key] = {
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1), // Auto-generate label
      grayscale,
      accent: !grayscale,
      darkForeground,
      paletteLight: newPaletteLight,
    };
    return acc;
  }, {});

export const colorsMap: Record<string, ColorShade> = {
  ...processedTailwindColors,
};
