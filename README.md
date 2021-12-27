# Pluggable image upload manager \[WIP\]

I created this as an exploratory project to learn about Svelte. In particular it is my intention to use this as a playground to explore Sveltes viability for creating small feature modules that can be injected into other web applications.
The project is WIP until marked otherwise and will probably never reach proper production status.

### Collaboration / Contributions

If you like where this is headed or find it useful in any way, please feel free to get in touch (Twitter, LinkedIn, Email in profile).

### Open topics

- Implement actual upload / make this pluggable (currently in `src/components/ImagePicker.svelte` `upload`)
- Styling / Layout

## Technology

- Svelte
- SCSS
- Rollup

## Running the project

```sh
# Install dependencies
npm install

# Run dev server locally
npm run dev

# Build project
npm run build
```

## Integrate into other projects

- Build the project
- Copy the build results from `public/build` to your target project
- Add relevant tags as per example

```html
<html>
  <head>
    <!-- Inject stylesheets and bundle.js -->
    <link rel="stylesheet" href="/build/bundle.css" />
    <script defer src="/build/bundle.js"></script>
    <style>
      #image-uploader {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(4px);
      }
    </style>
  </head>
  <body>
    <!-- Add div to inject app -->
    <div id="image-uploader"></div>
  </body>
</html>
```
