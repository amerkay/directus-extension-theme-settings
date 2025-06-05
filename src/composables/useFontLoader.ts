const fontsLoaded = new Set<string>();

// Helper function to convert font names to kebab-case
const toKebabCase = (str: string): string => {
  if (!str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .toLowerCase();
};

export function useFontLoader() {
  const loadFont = (
    fontName: string | null,
    source: string | null | undefined
  ) => {
    if (!fontName || fontsLoaded.has(fontName)) return;

    const kebabCaseFontName = toKebabCase(fontName);

    let href = "";
    if (source === "bunny") {
      const bunnyFontName = fontName.replace(/\s+/g, "+");
      href = `https://fonts.bunny.net/css?family=${bunnyFontName}:400,700`;
    } else if (source === "fontshare") {
      href = `https://api.fontshare.com/v2/css?f[]=${kebabCaseFontName}@400,700&display=swap`;
    } else {
      // google / default
      href = `https://cdn.jsdelivr.net/npm/@fontsource/${kebabCaseFontName}/index.css`;
    }

    if (href) {
      fontsLoaded.add(fontName); // Still use original fontName for the loaded set
      const head = document.getElementsByTagName("HEAD")[0];
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = href;

      if (head) {
        head.appendChild(link);
      }
    } else {
      console.warn(
        `URL generation failed for font ${fontName} with source ${source}.`
      );
    }
  };

  return {
    loadFont,
  };
}
