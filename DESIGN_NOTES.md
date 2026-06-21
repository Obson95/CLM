# Design Notes

## Typography

The site uses Option A from `do.md`:

- Headings: Plus Jakarta Sans
- Body: Inter

This pairing matches the current visual direction: Plus Jakarta Sans gives the school identity a modern institutional tone, while Inter keeps paragraphs, forms, and navigation readable on mobile screens.

Accessibility choices:

- Body text starts at 16px.
- Paragraph line height is set to 1.65 for easier reading.
- Body copy avoids thin weights and uses Inter through the global `font-body` utility.
- Heading hierarchy uses Plus Jakarta Sans through the global `font-heading` utility and shared heading CSS.
- Fonts use `display: "swap"` through `next/font` to avoid invisible text during loading.
