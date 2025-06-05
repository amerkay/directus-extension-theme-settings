# Theme Settings Interface Extension for Directus v10+

Interface for chosing harmonized primary &amp; accent colors, font pairings, shadows, rounded corners and more.

## ✨ Features

This extension provides a user-friendly interface within Directus to configure your frontend's theme:

- **Color Theme Picker**: Select accent and primary colors to define your project's color palette. Uses TailwindCSS v4 color shades. Recommends best color pairings for beautiful color harmony.
- **Font Pair Picker**: Choose from a curated list of font pairings for headings and body text.
- **Rounded Corner Radius Picker**: Define the default border radius for UI elements.
- **Spacing Picker**: Set the base spacing unit, affecting margins, padding, and layout.
- **Letter Spacing (Tracking) Picker**: Adjust the letter spacing for text elements.
- **Shadow Picker**: Select from predefined shadow styles for depth and emphasis.

## ⚙️ Installation

1.  Navigate to the **App Marketplace** in your Directus project.
2.  Search for "**Theme Settings**" extension.
3.  Click "Install".

Alternatively, you can install this extension manually by downloading the latest release and placing it in your Directus project's `extensions/` directory.

## 🚀 Usage

Once installed, you can add the "Theme Settings" interface to a JSON field in any of your collections.

1.  Create a new field in your desired collection (e.g., a "Global Settings" collection).
2.  Set the field type to **JSON**. I like to call it `theme_settings`.
3.  Under "Interface", select "**Theme Settings**".
4.  Configure the interface options to enable/disable specific pickers (e.g., Color Theme Picker, Font Pair Picker).

The extension will store its output as a JSON object in this field, which includes:

- Selected values for colors, fonts, radius, spacing, tracking, and shadows.
- On save, the `cssText` value is generated and saved inside the JSON object of `theme_settings` field (or the field name you chose). For example generated CSS, see [`theme-generated-example.css`](./docs/theme-generated-example.css).

**Example `cssText` generated:**

```css
:root {
  /* Base theme colors */
  --theme-base-50: 0 0% 98%;
  --theme-base-100: 0 0% 96%;
  /* ... from -50 to -950 and -text */
  --theme-base-950: 0 0% 4%;
  /* For each color, -text color is black for "sky", "lime", "yellow", "amber", white for the rest to maintain high contrast such as text on buttons */
  --theme-base-text: 0 0% 100%;

  /* Primary, Accent and Destructive (error) color shades as defined in TailwindCSS v4 */
  --theme-primary-50: 78 92% 95%;
  --theme-accent-50: 226 100% 97%;
  --theme-destructive-50: 0 86% 97%;
  /* ... 11 steps per color from "-50" to "-950" and contrasting "-text" */

  /* Font Pairing */
  --theme-font-family-heading: "Archivo Black";
  --theme-font-family-body: "Roboto";
  /* Text letter spacing */
  --theme-tracking: -0.05em;

  /* Border radius */
  --theme-radius: 0rem;

  /* Spacing */
  --theme-spacing: 0.25rem;

  /* Shadows, calculated based on user selection */
  --theme-shadow-2xs: 1px 1px 0 0 hsl(0 0% 0% / 0.75);
  --theme-shadow-xs: 2px 2px 0 0 hsl(0 0% 0% / 0.8);
  --theme-shadow-sm: 3px 3px 0 0 hsl(0 0% 0% / 0.85);
  --theme-shadow: 4px 4px 0 0 hsl(0 0% 0% / 0.9);
  --theme-shadow-md: 5px 5px 0 0 hsl(0 0% 0% / 0.92);
  --theme-shadow-lg: 6px 6px 0 0 hsl(0 0% 0% / 0.94);
  --theme-shadow-xl: 7px 7px 0 0 hsl(0 0% 0% / 0.96);
  --theme-shadow-2xl: 8px 8px 0 0 hsl(0 0% 0% / 0.98);
}
```

### Integrating with Tailwind CSS

TODO

## 📸 Screenshots

_(We encourage you to add screenshots of the extension in action if you are contributing or forking this repository. Images can be hosted on `raw.githubusercontent.com`.)_

<!-- Example:
![Theme Settings Interface](https://raw.githubusercontent.com/your-username/your-repo/main/path/to/screenshot.png)
-->

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bugs, feature requests, or improvements.

## 📄 License

This extension is licensed under the [MIT License](LICENSE).
