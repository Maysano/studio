# Maysano Portfolio Studio Website

Static one-page marketing site for Maysano Portfolio Studio. It is built for GitHub Pages with plain HTML, CSS and minimal vanilla JavaScript.

## Preview Locally

Open `index.html` directly in a browser, or run a small static server from this folder:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Replace The Demo Video

The Demo section uses a YouTube embed in `index.html`:

```text
https://www.youtube.com/embed/AsQlil2uLvw
```

To replace it, update the iframe `src` in `index.html` and `demoIframeUrl` near the top of `script.js`.

## Replace The Hero Screenshot

Replace:

```text
assets/portfolio-studio-hero.png
```

Keep the same filename to avoid editing the page. Use a real Portfolio Studio screenshot with a similar landscape composition.

## Change CTA URLs

Edit the configuration block near the top of `script.js`:

```js
const SITE_CONFIG = {
  contactUrl: "#contact",
  demoIframeUrl: "https://www.youtube.com/embed/AsQlil2uLvw",
  standardsUrl: "https://opendataproducts.org"
};
```

`contactUrl` controls "Book a discussion", "Select plan" and "Contact sales" links.

## Edit Pricing

Pricing copy is in the `#pricing` section of `index.html`. Each plan is a `.price-panel` block with a heading, price, description, included items and CTA.

## Publish Through GitHub Pages

1. Push this folder to the repository branch used by GitHub Pages.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Select the branch and folder that contain `index.html`.
5. Save the Pages configuration.

No build step, backend, package manager or server-side dependency is required.
