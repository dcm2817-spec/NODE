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

## Admin dashboard

Tap the small grid icon in the header. It'll ask for a passcode — the default is `node-admin`, set inside `script.js` (search for `ADMIN_PASSCODE` near the top and change it to your own).

Once in, every order placed through checkout shows up automatically: customer details, items, totals. From there you can:
- **Download PDF** — generates a one-page receipt for that order and saves it straight to your device (uses the jsPDF library, loaded via CDN in `index.html`)
- **Export all (CSV)** — downloads every order as a spreadsheet-ready file
- **Clear all orders** — wipes stored orders (asks for confirmation first)

The passcode check happens entirely in the browser — there's no server, so it's a basic gate for your own use, not real security. Don't rely on it if this ever goes public.

## Persistence

Cart, wishlist, user-submitted reviews, and placed orders are saved to `localStorage` under these keys:
`node_cart`, `node_wishlist`, `node_reviews`, `node_promo`, `node_orders`. This is genuinely local — everything lives in that one browser, on that one device. It means:
- Orders won't show up on a different phone/browser than the one the customer checked out on
- Clearing site data, browsing data, or switching browsers wipes them
- There's no way to see orders from someone else's device unless you're standing at it

That's the tradeoff of a backend-free, single-file demo. If you want orders to persist properly and be visible from anywhere (e.g. checking the dashboard from your own phone after a friend orders from theirs), that needs a real backend — Supabase would be the natural next step, same as your other projects.

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
