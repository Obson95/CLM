# Design Notes

## Typography

The site uses Option B from `do.md`:

- Headings: Manrope
- Body: Inter

This pairing gives the school identity a stronger modern institutional tone. Manrope creates a clearer heading personality for hero text, cards, and navigation branding, while Inter keeps paragraphs, forms, and navigation readable on mobile screens.

Accessibility choices:

- Body text starts at 16px.
- Paragraph line height is set to 1.65 for easier reading.
- Body copy avoids thin weights and uses Inter through the global `font-body` utility.
- Heading hierarchy uses Manrope through the global `font-heading` utility and shared heading CSS.
- Fonts use `display: "swap"` through `next/font` to avoid invisible text during loading.
