# NODE — Gear Catalog

A frontend-only e-commerce storefront demo. Plain HTML/CSS/JS, no build step, no backend — cart and wishlist persist locally in the browser.

## Files

```
index.html      structure
style.css       styling
script.js       product data, state, and all app logic
images/         product photos (see naming below)
```

## Running it

Open `index.html` in a browser — that's it. No server, no npm install.

If deploying (Netlify/Vercel/GitHub Pages), just point it at the repo root with no build command.

## Features

- Product listing with search, category filters, price range, min-rating filter, sorting
- Product detail page with description/specs/reviews tabs
- Shopping cart — quantity controls, remove, promo code (`NODE10` = 10% off)
- Wishlist
- Checkout with field validation → order confirmation
- Reviews — star rating + comment, saved per product
- Prices in Naira (₦), VAT at 7.5%, free shipping over ₦60,000

## Persistence

Cart, wishlist, and user-submitted reviews are saved to `localStorage` under these keys:
`node_cart`, `node_wishlist`, `node_reviews`, `node_promo`. Clearing browser storage resets everything back to defaults.

## Product photos

Each product card looks for an image at `images/<filename>` (paths are set per-product in `script.js`, in the `PRODUCTS` array, `img` field). If a file is missing, the card falls back automatically to its icon/gradient — nothing breaks.

Filenames expected in `images/`:

```
audio-1-signal40-headphones.jpg
audio-2-aperture-earbuds.jpg
audio-3-fieldcast-speaker.jpg
wearables-1-pulse-band.jpg
wearables-2-chrono7-smartwatch.jpg
wearables-3-grip-ring.jpg
home-1-lumen-lamp.jpg
home-2-aria-speaker.jpg
home-3-current-purifier.jpg
accessories-1-anchor-standphone.jpg
accessories-2-traverse-sleeve.jpg
accessories-3-keyframe-keyboard.jpg
power-1-reserve-powerbank.jpg
power-2-voltcell-charger.jpg
power-3-gridline-strip.jpg
compute-1-nodebook-riser.jpg
compute-2-portal-hub.jpg
compute-3-cache-ssd.jpg
```

Square-ish images work best against the dark card background.

## Editing product data

All 18 products, prices, stock levels, and specs live in the `PRODUCTS` array at the top of `script.js`. Default seed reviews live in `DEFAULT_REVIEWS` just below it. Edit either directly — no other file needs to change.

## Notes

- This is a frontend-only demo — checkout doesn't process real payments, it just validates the form and generates a mock order number.
- Not intended for production/public deployment as-is.
