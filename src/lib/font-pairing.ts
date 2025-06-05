export interface FontFace {
  font_face: string;
  category: string; // serif, sans-serif, script, display, slab-serif, monospace, handwriting
  source: string; // One of: "google", "bunny", "fontshare"
}
export interface FontPairing {
  heading: FontFace;
  body: FontFace;
  style: string; // One of: "Authoritative & Refined", "Modern & Clean", "Warm & Approachable", "Dynamic & Expressive", "Strong & Purposeful"
  why: string; // Explanation of the pairing
  source_pairing_url: string; // URL to the article recommending this pairing
  recommended_frequency: number;
}

export const FONT_PAIRING_DATA: FontPairing[] = [
  {
    heading: {
      font_face: "Playfair Display",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Playfair Display’s elegant, high-contrast strokes provide sophisticated headlines, balanced by Lato’s clean, neutral, and highly readable appearance for body text.",
    source_pairing_url:
      "https://www.commoninja.com/blog/guide-to-mastering-font-pairing",
    recommended_frequency: 4,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Oswald's bold, condensed style creates impactful headlines, paired with the highly readable and neutral Open Sans for clean content presentation.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 4,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Montserrat's clean, geometric sans-serif headings pair well with Merriweather's highly readable serif body text, creating a modern yet approachable feel.",
    source_pairing_url:
      "https://www.commoninja.com/blog/guide-to-mastering-font-pairing",
    recommended_frequency: 4,
  },
  {
    heading: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "The stylish, geometric Raleway header combined with the highly readable Merriweather serif body creates a feeling of honesty and user-friendliness, suitable for professional services.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 4,
  },
  {
    heading: {
      font_face: "Abril Fatface",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Abril Fatface's bold display serif headlines offer personality, complemented by Lato's warm, approachable sans-serif body for a friendly yet sharp look.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Playfair Display",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Source Sans Pro",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A classic pairing where the elegant serif Playfair Display heading contrasts beautifully with the clean, modern sans-serif Source Sans Pro body.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Smart and versatile, the readable Merriweather serif heading pairs effectively with the ubiquitous and neutral Open Sans body font.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Lora",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "A refined serif header (Lora) paired with a modern geometric sans body (Montserrat) creates a stunning, minimalist look where content shines.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "A clean and contemporary pairing of two popular sans-serif fonts. Raleway's elegance complements Roboto's neutrality.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "A bold and lively match. Oswald's tight tracking contrasts effectively with Lato's relaxed, readable structure.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Poppins",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Lora",
      category: "serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "The geometric, friendly Poppins pairs well with the calligraphic details of Lora, creating a balanced and inviting combination.",
    source_pairing_url:
      "https://www.natsuminishizumi.com/blog/5-best-font-combinations",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Bebas Neue",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Striking and contemporary. The condensed, bold Bebas Neue heading makes a statement, grounded by the approachable Roboto body.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "PT Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "PT Serif",
      category: "serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A harmonious superfamily pairing. PT Sans (used bold for heading) and PT Serif share metrics and design principles, ensuring cohesion and readability.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "A clean, contemporary sans-serif pairing. Montserrat's geometric style complements Roboto's neutral efficiency, versatile for tech and business.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Lobster",
      category: "script",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Lobster's bold script adds personality to headlines, balanced by the clean, readable, and neutral Open Sans for body text.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Bebas Neue",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Source Sans Pro",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "The clean, bold, condensed Bebas Neue headline contrasts positively with the safe and highly readable Source Sans Pro body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Arvo",
      category: "slab-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Arvo's geometric slab-serif presence (used bold for heading) creates noticeable headlines, paired effectively with the versatile and readable Roboto.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Abril Fatface",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Work Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Abril Fatface offers bold yet elegant headlines, while Work Sans provides a clean, Grotesque-inspired body text that maintains a slightly rounded feel.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Lora",
      category: "serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A pairing of two readable serifs. Merriweather (used Black for heading) provides strong headlines, complemented by Lora's delicate, calligraphic body text.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Nunito",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Oswald Bold headlines offer impact, while Nunito's rounded terminals provide a casual, delightful look for body text, creating a lively feel.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Archivo Black",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Archivo Black's grotesque style offers a slightly imperfect feel, harmonizing with Roboto's clean neo-grotesque geometry for a trustworthy vibe.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Bebas Neue",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Old Standard TT",
      category: "serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "The impactful, condensed Bebas Neue headline stands over the classic, old-world style of Old Standard TT, good for conveying authority or nostalgia.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Exo 2",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Alegreya Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "An eye-catching pair. Exo 2's futuristic header contrasts with Alegreya Sans' humanist feel, suitable for tech content needing a unique tone.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Fira Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "PT Serif",
      category: "serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Both fonts offer great readability. Fira Sans (used Black for heading) provides strong headlines, balanced by the sturdy PT Serif body.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Josefin Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Josefin Slab",
      category: "slab-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Sister families designed to pair. Both have a vintage feel (1920s Sans, 1930s Slab) and work well for retro-leaning designs.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Karla",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Spectral",
      category: "serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Both fonts possess unique quirks. Karla (used Bold for heading) and Spectral (used Light for body) create a friendly, honest, and relatable feel.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "A strong and welcoming pair. Both Lato and Merriweather are highly readable and sturdy, suitable for creating a strong first impression.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "A sharp and professional sans-serif pairing. Lato's warmth combined with Roboto's controlled efficiency works well for corporate sites needing trust.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "League Spartan",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Libre Baskerville",
      category: "serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "League Spartan's powerful sans-serif headlines combine with Libre Baskerville's refined serif body for a strong, authoritative, yet elegant tone.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Libre Baskerville",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Source Sans Pro",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Placing the serif Libre Baskerville as the header creates a classic feel, balanced by the modern, readable Source Sans Pro body.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Libre Franklin",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Libre Baskerville",
      category: "serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Based on classic typefaces, this pairing offers a friendly feel. Libre Franklin provides clear sans-serif headings, complemented by the readable Libre Baskerville serif body.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Lobster",
      category: "script",
      source: "google",
    },
    body: {
      font_face: "Roboto Condensed",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Lobster adds a fun, cursive flair to headlines, grounded by the neutral and space-efficient Roboto Condensed for body text.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Lora",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "A pairing of two popular serifs. Lora's calligraphic warmth in headings complements Merriweather's stable, screen-friendly body text.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Merriweather Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A harmonious superfamily pairing. Merriweather Sans (used Bold for heading) and its serif counterpart were designed to work together seamlessly on screens.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Source Sans Pro",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "A modern and versatile sans-serif pairing. Montserrat's geometric headings are complemented by the clean and highly legible Source Sans Pro body.",
    source_pairing_url:
      "https://www.commoninja.com/blog/guide-to-mastering-font-pairing",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Old Standard TT",
      category: "serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Oswald's authoritative condensed style pairs well with Old Standard TT's classic textbook feel, suitable for projecting authority or tradition.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Playfair Display",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A delicate yet strong combination. Playfair Display's elegance pairs with the thin, geometric lines of Raleway (used Thin for body) for fashion or retail.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Source Sans Pro",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Elegant and highly readable. Raleway's refined sans-serif headings combine with the clean, versatile Source Sans Pro body for clarity and sophistication.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Lora",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Warm and inviting. Lora's serif elegance in headings pairs with the clean, universally readable Open Sans body for a friendly atmosphere.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Nunito",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Source Sans Pro",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Nunito's rounded sans-serif headings create a friendly tone, complemented by the highly legible and versatile Source Sans Pro body.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Cormorant Garamond",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Cormorant Garamond adds luxury and classic serif style to headings, while Montserrat provides a clean, minimalist sans-serif body for a modern aesthetic.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Fira Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Merriweather Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Fira Sans offers contemporary, readable headings, paired with the screen-optimized Merriweather Sans for a clean, modern reading experience.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Playfair Display",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "The classic elegance of Playfair Display headings is balanced by the neutral and highly readable Open Sans body font.",
    source_pairing_url:
      "https://www.natsuminishizumi.com/blog/5-best-font-combinations",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Cormorant Garamond",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "The refined, luxurious Cormorant Garamond serif heading pairs well with the warm, approachable, and readable Lato sans-serif body.",
    source_pairing_url:
      "https://www.natsuminishizumi.com/blog/5-best-font-combinations",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Work Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Source Serif Pro",
      category: "serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "A versatile pairing using the Grotesque-inspired Work Sans for headings and the legible Source Serif Pro for body text.",
    source_pairing_url:
      "https://www.natsuminishizumi.com/blog/5-best-font-combinations",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Crimson Text",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Work Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "An unexpected but effective pairing. Crimson Text's classic serif elegance combines with the simple, modern Work Sans body.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Bebas Neue",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Nunito",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Contrast drives this pairing. The tall, tight Bebas Neue headline is balanced by the well-spaced, rounded Nunito body.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Josefin Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Quattrocento Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "A bold and powerful sans-serif pairing. Josefin Sans offers geometric elegance, while Quattrocento Sans provides a readable body.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Abril Fatface",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Asap",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "A quirky and fun pairing for creatives. The distinct Abril Fatface headline contrasts with the rounded Asap body, sharing similar size/tracking.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "A balanced sans-serif pairing. Montserrat (used Black for heading) offers strength, while Raleway provides elegant simplicity for body text.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Ubuntu",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Nanum Gothic",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Ubuntu (used Bold for heading) offers screen legibility, paired with the contemporary and friendly Nanum Gothic for digital spaces.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Monoton",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "Rubik",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "The retro, decorative Monoton headline is balanced by the readable, versatile Rubik sans-serif body with rounded corners.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "IBM Plex Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "IBM Plex Sans Condensed",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Pairing within the same family. IBM Plex Sans Bold heading and Condensed body create an appealing, consistent, yet hierarchical look.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Courgette",
      category: "script",
      source: "google",
    },
    body: {
      font_face: "Libre Baskerville",
      category: "serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "The elegant italic-script Courgette title is paired with the highly readable Libre Baskerville serif for a simple yet stylized combination.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto Mono",
      category: "monospace",
      source: "google",
    },
    style: "Modern & Clean",
    why: "A safe and stylish pairing within the Roboto family. Roboto Black heading offers impact, while Roboto Mono Light body provides a timeless, readable look.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Roboto Mono",
      category: "monospace",
      source: "google",
    },
    body: {
      font_face: "Spectral",
      category: "serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Roboto Mono Bold provides a digital, typewriter-like headline, contrasted by the elegant readability of Spectral Light for body text.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Permanent Marker",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "ABeeZee",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "The playful, marker-style Permanent Marker headline pairs well with the friendly, simple shapes of ABeeZee, designed for clarity.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Archivo Black",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Hind",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Archivo Black's grotesque headlines reminiscent of 19th-century titles pair neatly with Hind's clean, humanist style designed for UIs.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Gravitas One",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "Poppins",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Gravitas One's strong, Fat Face-inspired headline contrasts with the versatile, geometric, and readable Poppins body font.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Alfa Slab One",
      category: "slab-serif",
      source: "google",
    },
    body: {
      font_face: "Chivo",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "The bold, heavy Alfa Slab One title demands attention, augmented by the characterful but not overpowering Chivo grotesque body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Architects Daughter",
      category: "handwriting",
      source: "google",
    },
    body: {
      font_face: "Abel",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Architects Daughter's casual handwriting style creates engaging titles, paired with the adaptable Abel sans-serif for readable web body text.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Fjalla One",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Merriweather Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "The condensed, bold Fjalla One display headline provides a beautiful contrast with the readable, semi-condensed Merriweather Sans body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Rokkitt",
      category: "slab-serif",
      source: "google",
    },
    body: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Rokkitt Black adds charisma to headlines with its geometric slab-serif style, clearly distinguished from the elegant Raleway sans-serif body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Poiret One",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Didact Gothic",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Poiret One's elegant, Art Deco-inspired headline (used Bold) pairs with the simple, delicate, and legible Didact Gothic body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bangers",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "Playfair Display",
      category: "serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "The bold, comic book style of Bangers headlines contrasts sharply with the elegant, transitional Playfair Display body, creating a storytelling effect.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Ultra",
      category: "slab-serif",
      source: "google",
    },
    body: {
      font_face: "Slabo 13px",
      category: "serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "The ultra-bold Ultra slab headline commands attention, complemented by the soft, airy, size-specific Slabo 13px serif body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Francois One",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Karla",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Francois One's sharp, gothic-inspired display headline pairs with the versatile and highly legible Karla grotesque body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Fugaz One",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Fugaz One's dynamic, italic, decorative headline contrasts refreshingly with Lato's warm, rounded, and sturdy body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bevan",
      category: "slab-serif",
      source: "google",
    },
    body: {
      font_face: "Pontano Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Bevan's modernized traditional slab-serif display headline is complemented by the simple, light Pontano Sans body for readability.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Nixie One",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "Prompt",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Nixie One's light, typewriter-reminiscent headline pairs harmoniously with the geometric, condensed Prompt sans-serif body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Sacramento",
      category: "script",
      source: "google",
    },
    body: {
      font_face: "Barlow",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Sacramento's fine, 1950s-inspired hand-lettering headline offers grace, combined with the low-contrast, slightly rounded Barlow grotesque body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Sansita",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Overpass",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Sansita Black's playful, calligraphic headline provides a bold start, balanced by the well-proportioned, Highway Gothic-inspired Overpass body.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Vollkorn SC",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "PT Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Vollkorn SC Black offers robust, small-caps headlines, paired with the humanistic, highly readable PT Sans body designed for digital use.",
    source_pairing_url: "https://www.creatopy.com/blog/google-font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Alegreya Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Alegreya",
      category: "serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A superfamily pairing. Alegreya Sans (used Black for heading) provides a bold but not overpowering headline, complementing the literature-focused Alegreya serif body.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Droid Serif",
      category: "serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Montserrat headlines grab attention, while Droid Serif ensures comfortable reading on mobile devices, suitable for news/entertainment sites.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Source Sans Pro",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Both fonts have a neutral yet friendly appearance and extended character sets, useful for multilingual websites or global audiences.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "A showman-like feel. The tall Oswald header contrasts with the lighter Montserrat Extra Light body, effective for promoting events.",
    source_pairing_url: "https://elementor.com/blog/font-pairing/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Playfair Display",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Combines classic serif elegance (Playfair Display) with modern sans-serif clarity (Inter), ensuring sophisticated headings and readable body text.",
    source_pairing_url: "https://elementor.com/blog/font-pairing-chart/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Rufina",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A versatile serif/sans-serif combination suitable for branding and marketing collateral, leveraging Roboto's readability.",
    source_pairing_url:
      "https://www.natsuminishizumi.com/blog/5-best-font-combinations",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Poppins",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Muli", // Note: Muli is now Mulish
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "A subtle pairing of two sans-serifs. Similar at first glance, but engaging enough to keep readers interested.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Alegreya",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Cabin",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "A classic and graceful serif/sans-serif combination. Alegreya's tight tracking can add urgency to headings, balanced by Cabin's readability.",
    source_pairing_url:
      "https://www.sparkplugin.com/blog/14-best-squarespace-font-pairings-in-2024",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Oswald Medium's strong, clean lines are balanced by the modern and approachable Roboto Bold, suitable for business or tech.",
    source_pairing_url: "https://www.wix.com/blog/best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Fredoka One",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "Nunito",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "A playful pairing bringing youthful exuberance. Fredoka One's bold display is balanced by Nunito's straightforward, rounded approachability.",
    source_pairing_url: "https://removal.ai/font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Orbitron",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Precision meets human touch. Orbitron's angular, futuristic headline is softened by Roboto's user-friendly body, ideal for tech projects.",
    source_pairing_url: "https://removal.ai/font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Great Vibes",
      category: "script",
      source: "google",
    },
    body: {
      font_face: "Merriweather",
      category: "serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Whispers elegance. Great Vibes' delicate script headline pairs with Merriweather's balanced, readable serif body for romantic or upscale content.",
    source_pairing_url: "https://removal.ai/font-pairings/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Amulya",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "Synonym",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Modern & Clean",
    why: "A Fontshare pairing combining two sans-serifs for a contemporary feel. Amulya Bold provides a strong headline.",
    source_pairing_url: "https://www.fontshare.com/pairs",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Chubbo",
      category: "display",
      source: "fontshare",
    },
    body: {
      font_face: "Supreme",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Dynamic & Expressive",
    why: "Chubbo Bold's distinctive display style offers a playful headline, grounded by the versatile Supreme Regular sans-serif body.",
    source_pairing_url: "https://www.fontshare.com/pairs",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Excon",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "Ranade",
      category: "serif",
      source: "fontshare",
    },
    style: "Modern & Clean",
    why: "Excon Medium's modern sans-serif headline pairs with the lighter Ranade serif body for a contemporary yet refined look.",
    source_pairing_url: "https://www.fontshare.com/pairs",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Tanker",
      category: "display",
      source: "fontshare",
    },
    body: {
      font_face: "Bespoke Serif",
      category: "serif",
      source: "fontshare",
    },
    style: "Strong & Purposeful",
    why: "Tanker's bold display headline creates impact, balanced by the readable and refined Bespoke Serif Regular body.",
    source_pairing_url: "https://www.fontshare.com/pairs",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bespoke Stencil",
      category: "display",
      source: "fontshare",
    },
    body: {
      font_face: "Supreme",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Dynamic & Expressive",
    why: "Bespoke Stencil Bold offers a unique, industrial headline style, paired with the clean and versatile Supreme Regular body.",
    source_pairing_url: "https://www.fontshare.com/pairs",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Trench Slab",
      category: "slab-serif",
      source: "fontshare",
    },
    body: {
      font_face: "General Sans",
      category: "sans-serif",
      source: "google", // Note: Source mismatch in original data, kept as is.
    },
    style: "Strong & Purposeful",
    why: "Trench Slab Medium provides a solid slab-serif headline, complemented by the rationalist and versatile General Sans Regular body.",
    source_pairing_url: "https://www.fontshare.com/pairs",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "General Sans",
      category: "sans-serif",
      source: "fontshare", // Note: Source mismatch in original data, kept as is.
    },
    body: {
      font_face: "Gambetta",
      category: "serif",
      source: "fontshare",
    },
    style: "Modern & Clean",
    why: "General Sans Semibold offers a clean headline, paired with the elegant Gambetta Regular serif body for a sophisticated look.",
    source_pairing_url: "https://www.fontshare.com/pairs",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Rosaline",
      category: "script",
      source: "fontshare",
    },
    body: {
      font_face: "Satoshi",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Dynamic & Expressive",
    why: "Rosaline Regular's script style provides an elegant headline, balanced by the popular and modern Satoshi Regular sans-serif body.",
    source_pairing_url: "https://www.fontshare.com/pairs?q=satoshi",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Cabinet Grotesk",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "Satoshi",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Strong & Purposeful",
    why: "Cabinet Grotesk Extrabold delivers impactful headlines, paired with the clean and contemporary Satoshi Medium body.",
    source_pairing_url: "https://www.fontshare.com/pairs?q=satoshi",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Satoshi",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "Erode",
      category: "serif",
      source: "fontshare",
    },
    style: "Modern & Clean",
    why: "Satoshi Bold provides modern sans-serif headlines, contrasted with the distinctive Erode Regular serif body.",
    source_pairing_url: "https://www.fontshare.com/pairs?q=satoshi",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bevellier",
      category: "serif",
      source: "fontshare",
    },
    body: {
      font_face: "Satoshi",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Authoritative & Refined",
    why: "Bevellier Medium offers refined serif headlines, paired with the clean and modern Satoshi Regular body.",
    source_pairing_url: "https://www.fontshare.com/pairs?q=satoshi",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "David Libre",
      category: "serif",
      source: "google",
    },
    body: {
      font_face: "Chivo",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "David Libre’s refined calligraphic serifs balance Chivo’s gentle, low‐contrast strokes for a polished yet approachable look.",
    source_pairing_url: "https://www.fontpair.co/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Chivo",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Tinos",
      category: "serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Chivo's robust sans-serif headlines pair well with the classic proportions and screen-optimized readability of the Tinos serif body.",
    source_pairing_url: "https://www.fontpair.co/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Chivo",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Lora",
      category: "serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "The strong, modern Chivo sans-serif headline contrasts nicely with the well-balanced, calligraphic-inspired Lora serif body.",
    source_pairing_url: "https://www.fontpair.co/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Gambetta",
      category: "serif",
      source: "fontshare",
    },
    body: {
      font_face: "Chivo",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Gambetta's elegant serif headlines are grounded by the robust and readable Chivo sans-serif body text.",
    source_pairing_url: "https://www.fontpair.co/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Erode",
      category: "serif",
      source: "fontshare",
    },
    body: {
      font_face: "Supreme",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Dynamic & Expressive",
    why: "Erode's distinctive serif character provides expressive headlines, balanced by the clean versatility of the Supreme sans-serif body.",
    source_pairing_url: "https://www.inspotype.com/pairings/fontshare-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "General Sans",
      category: "sans-serif",
      source: "google", // Note: Source mismatch, kept as is
    },
    body: {
      font_face: "Recia",
      category: "serif",
      source: "fontshare",
    },
    style: "Modern & Clean",
    why: "The rationalist General Sans headline pairs effectively with the Recia serif body, offering a blend of clarity and traditional text feel.",
    source_pairing_url: "https://www.inspotype.com/pairings/fontshare-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Cabinet Grotesk",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "General Sans",
      category: "sans-serif",
      source: "google", // Note: Source mismatch, kept as is
    },
    style: "Strong & Purposeful",
    why: "A pairing of two contemporary sans-serifs from Fontshare. Cabinet Grotesk offers unique headlines, complemented by the versatile General Sans body.",
    source_pairing_url: "https://www.inspotype.com/pairings/fontshare-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Clash Display",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "Clash Grotesk",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Dynamic & Expressive",
    why: "Pairing two related 'Clash' fonts from Fontshare. Clash Display provides impactful headlines, while Clash Grotesk offers a complementary body text.",
    source_pairing_url: "https://www.inspotype.com/pairings/fontshare-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Gambarino",
      category: "serif",
      source: "fontshare",
    },
    body: {
      font_face: "Cabinet Grotesk",
      category: "sans-serif",
      source: "fontshare",
    },
    style: "Dynamic & Expressive",
    why: "Gambarino's unique, condensed serif headlines offer character, balanced by the modern and functional Cabinet Grotesk body.",
    source_pairing_url: "https://www.inspotype.com/pairings/fontshare-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Panchang",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "General Sans",
      category: "sans-serif",
      source: "google", // Note: Source mismatch, kept as is
    },
    style: "Modern & Clean",
    why: "Panchang provides distinctive geometric headlines, paired with the reliable and versatile General Sans body.",
    source_pairing_url: "https://www.inspotype.com/pairings/fontshare-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Excon",
      category: "sans-serif",
      source: "fontshare",
    },
    body: {
      font_face: "General Sans",
      category: "sans-serif",
      source: "google", // Note: Source mismatch, kept as is
    },
    style: "Modern & Clean",
    why: "A pairing of two Fontshare sans-serifs. Excon offers modern, slightly futuristic headlines, complemented by the versatile General Sans body.",
    source_pairing_url: "https://www.inspotype.com/pairings/fontshare-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Quicksand",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Quicksand",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Using different weights of Quicksand (e.g., Medium for headings, Light for body) creates a harmonious, gentle, and friendly aesthetic due to its rounded letterforms.",
    source_pairing_url:
      "https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Archivo",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Archivo's grotesque letterforms offer a contemporary, solid headline, while Open Sans ensures excellent readability for a clean, functional design.",
    source_pairing_url:
      "https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Work Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "A bold Montserrat for headings provides strong visual impact, paired with the versatile and readable Work Sans for a contemporary and clean layout.",
    source_pairing_url:
      "https://artisanthemes.io/best-google-fonts-combinations-modern-agency-website/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Cabin",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Figtree",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Cabin's humanist touch makes for warm headlines, complemented by Figtree's clean, geometric, and friendly style for a modern, approachable website.",
    source_pairing_url:
      "https://www.shannahalbert.com/blog/8-modern-squarespace-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "DM Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "DM Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Using DM Sans for both headings (e.g., all caps, bolder weight) and body (sentence case, regular weight) provides a cohesive, modern, and clean aesthetic.",
    source_pairing_url:
      "https://www.shannahalbert.com/blog/8-modern-squarespace-font-pairings",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Karla",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "The geometric and versatile Montserrat for headings pairs well with Karla's quirky yet highly readable character for a stylish and functional design.",
    source_pairing_url:
      "https://www.shannahalbert.com/blog/8-modern-squarespace-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Poppins",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Rubik",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Poppins' geometric yet friendly style is great for engaging headlines, while Rubik's slightly rounded corners and clear forms ensure a readable and pleasant body.",
    source_pairing_url:
      "https://www.shannahalbert.com/blog/8-modern-squarespace-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Public Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Oswald's condensed, impactful style for headings contrasts effectively with the neutral, highly legible, and modern Public Sans for body text.",
    source_pairing_url:
      "https://www.shannahalbert.com/blog/8-modern-squarespace-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Nunito",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Nunito Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Nunito's rounded charm for headings combined with the slightly more structured but still friendly Nunito Sans for body creates a cohesive and inviting feel.",
    source_pairing_url:
      "https://www.shannahalbert.com/blog/8-modern-squarespace-font-pairings",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Julius Sans One",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Archivo Narrow",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Julius Sans One's thin, geometric, and wide letterforms offer elegant headlines, paired with the space-saving and clear Archivo Narrow for a sophisticated look.",
    source_pairing_url:
      "https://www.digitalsilk.com/digital-trends/best-font-pairs-combinations/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans Condensed",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Using Open Sans for headings and its condensed version for body text provides a harmonious, highly legible, and clean design with subtle contrast.",
    source_pairing_url:
      "https://www.digitalsilk.com/digital-trends/best-font-pairs-combinations/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Fira Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Fira Sans offers a slightly more characterful headline option that works well with the versatile and modern Montserrat for body text.",
    source_pairing_url:
      "https://www.digitalsilk.com/digital-trends/best-font-pairs-combinations/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Poppins",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Poppins' geometric and friendly nature pairs wonderfully with Inter's exceptional readability and neutral tone, ideal for modern UI and web content.",
    source_pairing_url:
      "https://www.digitalsilk.com/digital-trends/best-font-pairs-combinations/",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Syne",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Syne",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Using Syne in different weights (e.g., Bold for headings, Normal for body) creates a distinctive, quirky, and contemporary feel with its variable nature.",
    source_pairing_url: "https://www.leadpages.com/blog/best-google-fonts/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Albert Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Barlow",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Albert Sans's modern geometric forms and Barlow's slightly rounded, grotesque style complement each other for a clean, informal, and highly readable pairing.",
    source_pairing_url: "https://www.leadpages.com/blog/best-google-fonts/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Teko",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "IBM Plex Sans Condensed",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Teko's square proportions and simple structure are excellent for impactful headlines, while IBM Plex Sans Condensed offers a legible, neutral, and complementary body.",
    source_pairing_url: "https://www.leadpages.com/blog/best-google-fonts/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Epilogue",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Barlow",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Epilogue's variable nature and unique quirks give it a friendly personality, contrasting nicely with Barlow's narrower footprint for readable body text.",
    source_pairing_url: "https://www.leadpages.com/blog/best-google-fonts/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Modak",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "Fira Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Modak's heavy, hand-sketched letterforms make bold, quirky headlines, while Fira Sans's thin weight provides ample contrast and legibility for body text.",
    source_pairing_url: "https://www.leadpages.com/blog/best-google-fonts/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Two highly popular and readable sans-serifs; Roboto for slightly more structured headlines and Open Sans for a friendly, legible body, creating a clean, functional pair.",
    source_pairing_url: "https://webflow.com/blog/font-pairing",
    recommended_frequency: 3,
  },
  {
    heading: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Open Sans offers clear, friendly headlines, while Lato's warm and approachable letterforms make for excellent readability in body text. A very versatile pair.",
    source_pairing_url: "https://webflow.com/blog/font-pairing",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Inter is designed for UI and readability. Using different weights for headings and body text creates an extremely cohesive, clear, and modern minimalist design.",
    source_pairing_url: "https://www.untitledui.com/blog/best-free-fonts",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Montserrat Light", // Font face includes weight, consider if this should be 'Montserrat' with a note in 'why'
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "The boldness of Oswald headlines provides a strong contrast to the light and airy feel of Montserrat Light for body text, creating a modern, impactful look.",
    source_pairing_url: "https://snappa.com/blog/font-combinations/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Cooper Hewitt",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Open Sans offers versatile headlines, while Cooper Hewitt, a contemporary grotesque, provides a strong and readable body, resulting in a clean, modern pairing.",
    source_pairing_url: "https://snappa.com/blog/font-combinations/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Archivo Black",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Archivo Narrow",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Archivo Black provides extremely impactful headlines, while Archivo Narrow offers a contrasting, space-efficient, and legible body within the same family.",
    source_pairing_url: "https://snappa.com/blog/font-combinations/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Belleza",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Josefin Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Belleza's feminine, high-contrast style offers elegant headlines, complemented by the geometric and vintage feel of Josefin Sans for a unique, stylish look.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-squarespace-and-canva-best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Raleway's stylish and elegant letterforms for headings pair beautifully with Lato's warm, friendly, and highly readable nature for body text.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-squarespace-and-canva-best-font-pairings",
    recommended_frequency: 2,
  },
  {
    heading: {
      font_face: "Ubuntu",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Ubuntu's humanist touch offers clear, modern headlines, while Raleway provides an elegant and slightly more geometric body for a balanced combination.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-squarespace-and-canva-best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Tenor Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    style: "Authoritative & Refined",
    why: "Tenor Sans offers a graceful, classic headline style, complemented by Raleway's elegant and versatile forms for a sophisticated and readable body.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-squarespace-and-canva-best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Questrial",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Poppins",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Questrial's modern, geometric simplicity pairs well with Poppins' friendly and also geometric character, creating a harmonious and contemporary feel.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-squarespace-and-canva-best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Marmelad",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Raleway",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Marmelad's soft, rounded, and slightly quirky style for headlines is well-complemented by the clean elegance of Raleway for a playful yet refined look.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-wix-and-canva-best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Marmelad",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "The popular Montserrat for headings provides a modern, versatile base, while Marmelad offers a softer, more unique and friendly body text.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-wix-and-canva-best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Fahkwang",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Open Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Fahkwang's high-contrast, stylish Thai/Latin letterforms create distinctive headlines, balanced by the neutral readability of Open Sans for body text.",
    source_pairing_url:
      "https://jamierichelle.com/blog-posts/fonts-in-wix-and-canva-best-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Quattrocento Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Mulish",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Quattrocento Sans offers a classic, humanist feel for headlines, pairing well with the clean, minimalist, and highly readable Mulish for body copy.",
    source_pairing_url:
      "https://www.thedenizenco.com/journal/clean-minimal-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Oswald",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Barlow Light", // Font face includes weight
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Oswald's strong, condensed headlines are softened by the light, slightly rounded, and highly readable Barlow Light for a modern, clean contrast.",
    source_pairing_url:
      "https://www.thedenizenco.com/journal/clean-minimal-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Chivo",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Krub",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Chivo's strong, grotesque style for headlines pairs with Krub's distinctive, slightly rounded forms for a modern and engaging typographic combination.",
    source_pairing_url:
      "https://www.thedenizenco.com/journal/clean-minimal-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Rubik",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Assistant",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Rubik's slightly rounded corners make for friendly headlines, complemented by Assistant's clean, light, and highly readable letterforms for body text.",
    source_pairing_url:
      "https://www.thedenizenco.com/journal/clean-minimal-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Six Caps",
      category: "display",
      source: "google",
    },
    body: {
      font_face: "Open Sans Condensed",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Six Caps' extremely condensed, tall letterforms create dramatic headlines, contrasted with the more traditionally condensed and readable Open Sans Condensed.",
    source_pairing_url:
      "https://www.thedenizenco.com/journal/clean-minimal-font-pairings",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Happy Covers",
      category: "sans-serif", // Assuming based on name, source describes as for TPT stores.
      source: "bunny",
    },
    body: {
      font_face: "Happy Paragraphs",
      category: "sans-serif", // Assuming based on name.
      source: "bunny",
    },
    style: "Warm & Approachable",
    why: "This pairing (assuming both are sans-serif from 'Bunny on a Cloud') is designed for a friendly, approachable, and educational context, great for children's content.",
    source_pairing_url:
      "https://bunnyonacloud.com/build-a-tpt-store/notes-on-choosing-fonts/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Manrope",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Manrope's geometric yet slightly rounded forms provide clear headlines, perfectly complemented by Inter's exceptional UI readability for a clean, modern look.",
    source_pairing_url: "https://www.fontpair.co/fonts/inter",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Archivo Narrow",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Archivo Narrow offers space-efficient, clean headlines, paired with the highly legible and neutral Inter for a functional, modern design.",
    source_pairing_url: "https://www.fontpair.co/fonts/inter",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "DM Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "DM Sans's low-contrast geometric style for headlines works well with the clarity and versatility of Inter for body text, creating a contemporary feel.",
    source_pairing_url: "https://www.fontpair.co/fonts/inter",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Inter's excellent UI readability for headlines combined with Roboto's versatile and familiar legibility for body text makes a highly functional and clean pairing.",
    source_pairing_url: "https://www.fontpair.co/fonts/inter",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Archivo",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Clean and readable Inter for headlines pairs effectively with the slightly more grotesque and solid Archivo for body text, offering a robust, modern combination.",
    source_pairing_url: "https://www.fontpair.co/fonts/inter",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "PT Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Inter's modern clarity for headlines is well-matched by PT Sans's humanist characteristics and excellent readability, creating a balanced and versatile pair.",
    source_pairing_url: "https://www.fontpair.co/fonts/inter",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Be Vietnam Pro",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Be Vietnam Pro offers clear, contemporary headlines with a touch of warmth, complemented by Inter's high readability for a friendly, modern UI.",
    source_pairing_url: "https://www.fontpair.co/fonts/inter",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Ubuntu",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Cabin",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Both Ubuntu and Cabin have humanist qualities; Ubuntu for distinct headlines and Cabin for warm, readable body text, creating a friendly and cohesive feel.",
    source_pairing_url:
      "https://www.hashtechy.com/blog/top-10-figma-fonts-for-modern-ui-ux-design",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Ubuntu",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Prompt",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Ubuntu's clear, modern headlines are well-paired with Prompt's geometric, loopless Thai/Latin forms for a contemporary and clean design.",
    source_pairing_url:
      "https://www.hashtechy.com/blog/top-10-figma-fonts-for-modern-ui-ux-design",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Nunito Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Roboto",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Nunito Sans provides well-rounded, friendly headlines, complemented by the familiar readability and neutrality of Roboto for body text.",
    source_pairing_url:
      "https://www.hashtechy.com/blog/top-10-figma-fonts-for-modern-ui-ux-design",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Karla",
      category: "sans-serif",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Lato's warm, semi-rounded style for headlines combines effectively with Karla's quirky yet clear character for a friendly and readable experience.",
    source_pairing_url: "https://mockuuups.studio/blog/post/best-figma-fonts/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Phudu",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Onest",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Phudu's variable, slightly condensed style offers modern headlines, complemented by Onest's clean, geometric, and highly legible forms for body text.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bricolage Grotesque",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Manrope",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "Bricolage Grotesque's variable, somewhat quirky character provides distinctive headlines, while Manrope offers a clean, geometric, and readable body.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Barlow Condensed",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Barlow",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Using Barlow Condensed for headlines and the regular Barlow for body text creates a harmonious, slightly industrial, and highly readable typographic system.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bai Jamjuree",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Work Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Bai Jamjuree's loopless Thai/Latin forms offer clean, modern headlines, paired with the versatile and highly readable Work Sans for body text.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Plus Jakarta Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inter",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "Plus Jakarta Sans's geometric, versatile style provides clear headlines, excellently complemented by Inter's superb readability for modern UI and web content.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Karla",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Inconsolata",
      category: "monospace",
      source: "google",
    },
    style: "Warm & Approachable",
    why: "Karla's quirky yet readable style for headlines is interestingly paired with Inconsolata's clean, monospaced aesthetic for body or code text, offering a unique feel.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bricolage Grotesque",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Rethink Sans",
      category: "sans-serif",
      source: "google",
    },
    style: "Dynamic & Expressive",
    why: "The condensed version of Bricolage Grotesque offers impactful headlines, while Rethink Sans provides a clean, humanist, and highly readable body.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "DM Sans",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Space Grotesk",
      category: "sans-serif",
      source: "google",
    },
    style: "Modern & Clean",
    why: "DM Sans's clean, geometric style pairs well with Space Grotesk's more characterful, monospaced-influenced grotesque for a modern and slightly techy feel.",
    source_pairing_url: "https://www.inspotype.com/pairings/google-fonts",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bebas Neue",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Lato",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "Bebas Neue's strong, condensed headlines create a bold statement, balanced by Lato's warm, friendly, and highly readable forms for body text.",
    source_pairing_url:
      "https://www.portotheme.com/niche-specific-website-font-pairings-for-stunning-web-design/",
    recommended_frequency: 1,
  },
  {
    heading: {
      font_face: "Bebas Neue",
      category: "sans-serif",
      source: "google",
    },
    body: {
      font_face: "Montserrat",
      category: "sans-serif",
      source: "google",
    },
    style: "Strong & Purposeful",
    why: "The tall, impactful Bebas Neue headlines are complemented by the versatile and modern Montserrat for body text, creating a strong and contemporary pairing.",
    source_pairing_url:
      "https://www.portotheme.com/niche-specific-website-font-pairings-for-stunning-web-design/",
    recommended_frequency: 1,
  },
];
