# Theme Settings Interface Extension for Directus v10+

Choose harmonized primary &amp; accent colors, font pairings, shadows, rounded corners and more.

## ✨ Features

This extension provides a user-friendly interface within Directus to configure various aspects of your frontend's theme:

- **Color Theme Picker**: Select accent and primary colors to define your project's color palette.
- **Font Pair Picker**: Choose from a curated list of font pairings for headings and body text.
- **Rounded Corner Radius Picker**: Define the default border radius for UI elements.
- **Spacing Picker**: Set the base spacing unit, affecting margins, padding, and layout.
- **Letter Spacing (Tracking) Picker**: Adjust the letter spacing for text elements.
- **Shadow Picker**: Select from predefined shadow styles for depth and emphasis.

The interface allows enabling/disabling each of these pickers individually based on your project's needs.

## ⚙️ Installation

1.  Navigate to the **App Marketplace** in your Directus project.
2.  Search for "**Theme Settings**" extension.
3.  Click "Install".

Alternatively, you can install this extension manually by downloading the latest release and placing it in your Directus project's `extensions/` directory.

## 🚀 Usage

Once installed, you can add the "Theme Settings" interface to a JSON field in any of your collections.

1.  Create a new field in your desired collection (e.g., a "Global Settings" collection).
2.  Set the field type to **JSON**.
3.  Under "Interface", select "**Theme Settings**".
4.  Configure the interface options to enable/disable specific pickers (e.g., Color Theme Picker, Font Pair Picker).

The extension will store its output as a JSON object in this field. This JSON object includes:

- Selected values for colors, fonts, radius, spacing, tracking, and shadows.
- A `cssText` property containing a string of CSS custom properties (variables) that can be injected into your project's global stylesheet.

### Integrating with Tailwind CSS, shadcn, and Nuxt UI

The generated CSS variables are designed to be compatible with Tailwind CSS. You can map these variables in your `tailwind.config.js` file.

For **shadcn/ui** or **Nuxt UI** (which often use Tailwind), you can use these CSS variables to theme your components. Refer to their respective documentation on theming with CSS variables.

**Example `cssText` output:**

```css
:root {
  --theme--primary-50: /* ... */ ;
  --theme--primary-100: /* ... */ ;
  /* ... more color shades ... */
  --theme--accent-50: /* ... */ ;
  /* ... more color shades ... */
  --theme--font-body: /* ... */ ;
  --theme--font-heading: /* ... */ ;
  --theme--radius: /* ... */ ;
  --theme--spacing-base: /* ... */ ;
  /* ... and other theme variables ... */
}
```

You would typically take this `cssText` and include it in a global CSS file or a `<style>` tag in your application's main layout.

## 📸 Screenshots

_(We encourage you to add screenshots of the extension in action if you are contributing or forking this repository. Images can be hosted on `raw.githubusercontent.com`.)_

<!-- Example:
![Theme Settings Interface](https://raw.githubusercontent.com/your-username/your-repo/main/path/to/screenshot.png)
-->

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bugs, feature requests, or improvements.

## 📄 License

This extension is licensed under the [MIT License](LICENSE).
