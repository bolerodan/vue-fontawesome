A component for loading and displaying Font Awesomes 5 SVG icons. Requires the inclusion of the font awesome javascript files (Not included here), currently if you are a backer you can download the zip file and place them in your project index.html

## Project Commands
```
# Launch the dev playground
npm run dev

# Build for production
npm run build
```

## Usage

Include the Font Awesome JS files

```html
    <script src="/static/packs/light.min.js"></script>
    <script src="/static/packs/regular.min.js"></script>
    <script src="/static/packs/solid.min.js"></script>
    <script src="/static/packs/brands.min.js"></script>
    <script src="/static/fontawesome.js"></script>
```

Then in your Vue application

```javascript
import Vue from 'vue'
import VueFa from 'vuefa'

Vue.use(VueFa)
```

```html
  <fa icon="address-book"></fa>

  # change icon pack, apply transformation
  <fa icon="address-book" prefix="fal" transform="rotate-90"></fa>
```

## Launching the Dev Playground
If you wish to see this component in action, you can load the dev playground by running `npm run dev`, however you will need to place the font awesome javascript files under `dev/static`. Look at `dev/index.html` to see how they are referenced.
