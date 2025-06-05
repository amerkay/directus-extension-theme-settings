// --------------------------------------------------------------
// A tiny helper library that converts named “shadow scales” into
// Tailwind-v4 compatible CSS custom-property declarations.
// --------------------------------------------------------------

export type ShadowStep =
  | "2xs"
  | "xs"
  | "sm"
  | "" // Tailwind’s plain `shadow` (alias for “base”)
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type ShadowScaleName =
  | "flat"
  | "neutral"
  | "softDiffuse"
  | "deepContrast"
  | "accentGlow"
  | "hard";

/* ----------------------------------------------------------------
 * Helper: build one box-shadow string
 * ----------------------------------------------------------------*/
function shadowValue(
  x: number,
  y: number,
  blur: number,
  spread: number,
  color: string,
  inset = false
): string {
  const pieces = [x, y, blur, spread]
    .map((v) => (v ? `${v}px` : "0"))
    .join(" ");
  const prefix = inset ? "inset " : "";
  return `${prefix}${pieces} ${color}`.replace(/\s0px/g, " 0"); // tidy zeros
}

/* ----------------------------------------------------------------
 * Data: every scale fully expanded.
 * Numbers chosen based on modern UI trends, design system best practices,
 * and a focus on subtlety and natural light diffusion.
 * Color slots that need brand tint use hsl(var(--theme-accent-9) / alpha).
 * ----------------------------------------------------------------*/
const SCALES: Record<ShadowScaleName, Record<ShadowStep, string>> = {
  flat: {
    "2xs": shadowValue(0, 1, 2, 0, "hsl(0 0% 0% / 0.02)"),
    xs: shadowValue(0, 1, 3, 0, "hsl(0 0% 0% / 0.03)"),
    sm: shadowValue(0, 2, 4, -1, "hsl(0 0% 0% / 0.04)"),
    "": shadowValue(0, 2, 6, -1, "hsl(0 0% 0% / 0.05)"), // base
    md: shadowValue(0, 3, 8, -2, "hsl(0 0% 0% / 0.05)"),
    lg: shadowValue(0, 4, 12, -2, "hsl(0 0% 0% / 0.06)"),
    xl: shadowValue(0, 6, 16, -3, "hsl(0 0% 0% / 0.06)"),
    "2xl": shadowValue(0, 8, 24, -4, "hsl(0 0% 0% / 0.07)"),
  },

  neutral: {
    "2xs": shadowValue(0, 1, 2, 0, "hsl(0 0% 0% / 0.04)"),
    xs: shadowValue(0, 1, 3, 0, "hsl(0 0% 0% / 0.05)"),
    sm: `${shadowValue(0, 1, 2, 0, "hsl(0 0% 0% / 0.05)")}, ${shadowValue(
      0,
      2,
      4,
      -1,
      "hsl(0 0% 0% / 0.04)"
    )}`,
    "": `${shadowValue(0, 2, 4, -1, "hsl(0 0% 0% / 0.06)")}, ${shadowValue(
      0,
      4,
      6,
      -2,
      "hsl(0 0% 0% / 0.05)"
    )}`, // base
    md: `${shadowValue(0, 3, 5, -1, "hsl(0 0% 0% / 0.07)")}, ${shadowValue(
      0,
      6,
      10,
      -2,
      "hsl(0 0% 0% / 0.06)"
    )}`,
    lg: `${shadowValue(0, 4, 6, -2, "hsl(0 0% 0% / 0.08)")}, ${shadowValue(
      0,
      10,
      15,
      -3,
      "hsl(0 0% 0% / 0.07)"
    )}`,
    xl: `${shadowValue(0, 8, 10, -4, "hsl(0 0% 0% / 0.09)")}, ${shadowValue(
      0,
      20,
      25,
      -5,
      "hsl(0 0% 0% / 0.08)"
    )}`,
    "2xl": `${shadowValue(0, 12, 15, -6, "hsl(0 0% 0% / 0.1)")}, ${shadowValue(
      0,
      25,
      50,
      -12,
      "hsl(0 0% 0% / 0.1)"
    )}`,
  },

  softDiffuse: {
    "2xs": shadowValue(0, 2, 4, 0, "hsl(0 0% 0% / 0.03)"),
    xs: shadowValue(0, 2, 6, 0, "hsl(0 0% 0% / 0.04)"),
    sm: `${shadowValue(0, 2, 8, -1, "hsl(0 0% 0% / 0.04)")}, ${shadowValue(
      0,
      1,
      4,
      0,
      "hsl(0 0% 0% / 0.03)"
    )}`,
    "": `${shadowValue(0, 3, 10, -1, "hsl(0 0% 0% / 0.05)")}, ${shadowValue(
      0,
      2,
      6,
      -1,
      "hsl(0 0% 0% / 0.04)"
    )}`, // base
    md: `${shadowValue(0, 4, 12, -2, "hsl(0 0% 0% / 0.05)")}, ${shadowValue(
      0,
      3,
      8,
      -2,
      "hsl(0 0% 0% / 0.04)"
    )}`,
    lg: `${shadowValue(0, 6, 16, -2, "hsl(0 0% 0% / 0.06)")}, ${shadowValue(
      0,
      4,
      10,
      -3,
      "hsl(0 0% 0% / 0.05)"
    )}`,
    xl: `${shadowValue(0, 8, 24, -3, "hsl(0 0% 0% / 0.06)")}, ${shadowValue(
      0,
      6,
      16,
      -4,
      "hsl(0 0% 0% / 0.05)"
    )}`,
    "2xl": `${shadowValue(0, 12, 32, -4, "hsl(0 0% 0% / 0.07)")}, ${shadowValue(
      0,
      8,
      24,
      -5,
      "hsl(0 0% 0% / 0.06)"
    )}`,
  },

  deepContrast: {
    "2xs": shadowValue(0, 1, 2, 0, "hsl(0 0% 0% / 0.10)"),
    xs: `${shadowValue(0, 1, 2, 0, "hsl(0 0% 0% / 0.08)")}, ${shadowValue(
      0,
      2,
      4,
      -1,
      "hsl(0 0% 0% / 0.10)"
    )}`,
    sm: `${shadowValue(0, 2, 3, -1, "hsl(0 0% 0% / 0.10)")}, ${shadowValue(
      0,
      4,
      6,
      -2,
      "hsl(0 0% 0% / 0.12)"
    )}`,
    "": `${shadowValue(0, 3, 4, -1, "hsl(0 0% 0% / 0.12)")}, ${shadowValue(
      0,
      6,
      8,
      -2,
      "hsl(0 0% 0% / 0.14)"
    )}`, // base
    md: `${shadowValue(0, 4, 5, -2, "hsl(0 0% 0% / 0.14)")}, ${shadowValue(
      0,
      8,
      12,
      -3,
      "hsl(0 0% 0% / 0.16)"
    )}`,
    lg: `${shadowValue(0, 6, 8, -3, "hsl(0 0% 0% / 0.16)")}, ${shadowValue(
      0,
      12,
      16,
      -4,
      "hsl(0 0% 0% / 0.18)"
    )}`,
    xl: `${shadowValue(0, 8, 10, -4, "hsl(0 0% 0% / 0.18)")}, ${shadowValue(
      0,
      16,
      24,
      -5,
      "hsl(0 0% 0% / 0.20)"
    )}`,
    "2xl": `${shadowValue(0, 12, 16, -5, "hsl(0 0% 0% / 0.20)")}, ${shadowValue(
      0,
      24,
      32,
      -6,
      "hsl(0 0% 0% / 0.22)"
    )}`,
  },

  accentGlow: {
    "2xs": shadowValue(0, 0, 4, 0, "hsl(var(--theme-accent-9) / 0.10)"),
    xs: shadowValue(0, 1, 6, 0, "hsl(var(--theme-accent-9) / 0.12)"),
    sm: shadowValue(0, 1, 8, 0, "hsl(var(--theme-accent-9) / 0.14)"),
    "": shadowValue(0, 1, 10, 0, "hsl(var(--theme-accent-9) / 0.16)"), // base
    md: shadowValue(0, 2, 12, 1, "hsl(var(--theme-accent-9) / 0.18)"),
    lg: shadowValue(0, 2, 16, 1, "hsl(var(--theme-accent-9) / 0.20)"),
    xl: shadowValue(0, 2, 24, 2, "hsl(var(--theme-accent-9) / 0.22)"),
    "2xl": shadowValue(0, 2, 32, 2, "hsl(var(--theme-accent-9) / 0.24)"),
  },

  hard: {
    "2xs": shadowValue(1, 1, 0, 0, "hsl(0 0% 0% / 0.75)"),
    xs: shadowValue(2, 2, 0, 0, "hsl(0 0% 0% / 0.80)"),
    sm: shadowValue(3, 3, 0, 0, "hsl(0 0% 0% / 0.85)"),
    "": shadowValue(4, 4, 0, 0, "hsl(0 0% 0% / 0.90)"), // base
    md: shadowValue(5, 5, 0, 0, "hsl(0 0% 0% / 0.92)"),
    lg: shadowValue(6, 6, 0, 0, "hsl(0 0% 0% / 0.94)"),
    xl: shadowValue(7, 7, 0, 0, "hsl(0 0% 0% / 0.96)"),
    "2xl": shadowValue(8, 8, 0, 0, "hsl(0 0% 0% / 0.98)"),
  },
};

/* ----------------------------------------------------------------
 * Helper: turn a step map into CSS variable declarations
 * ----------------------------------------------------------------*/
function buildCssVars(
  steps: Record<ShadowStep, string>,
  cssPrefix = "theme-"
): string {
  const order: ShadowStep[] = ["2xs", "xs", "sm", "", "md", "lg", "xl", "2xl"];
  return order
    .map((key) => {
      const baseVarName = `--${cssPrefix}shadow`;
      const varName = key ? `${baseVarName}-${key}` : baseVarName;
      return `${varName}: ${steps[key]};`;
    })
    .join("\n");
}

/* ----------------------------------------------------------------
 * Public API
 * ----------------------------------------------------------------*/
export function getShadowVariablesCss(
  scale: ShadowScaleName,
  cssPrefix = "theme-"
): string {
  const map = SCALES[scale];
  if (!map) throw new Error(`Unknown shadow scale: ${scale}`);
  return buildCssVars(map, cssPrefix);
}
