# Hyper Gummy

Content agency for brands that gets into the room while the product is still a sketch.
Fork of `the-writer/` (Dogstudio-technique build) with a full rebrand:

- **3D centerpiece:** procedural translucent gummy bear (`src/js/gl/bear.js`) with
  `MeshPhysicalMaterial` transmission under a RoomEnvironment. Click the bear → next flavor
  (strawberry → orange → lime → blueberry → grape → lemon) with a candy burst + jelly wobble.
- **Props:** mini bears, gummy rings, jelly beans in their own flavors (`props.js`).
- **Background:** candy-shop gradient shader (`background.js`).
- **Headline:** Thai lines rasterized by the browser onto canvas planes so tone marks shape
  correctly; the bear tumbles between the lines (`headline.js`). Planes render opaque with
  alphaTest so the bear refracts the text behind it.
- **Motion personality:** the bear TUMBLES on scroll (`choreography.js`), squashes and
  stretches with scroll velocity (jelly spring in `gl/index.js`), and HOPS with one full spin on
  route transitions (`modules/transitions.js`). Sugar trail streams from the right paw.
- **Palette:** vanilla cream / dark plum / strawberry accent + grape, lime, orange, sky, lemon.
- **Type:** Mitr 700 (display, Thai+Latin via @fontsource woff) + IBM Plex Sans Thai (body).

## Run

```
npx vite --port 5400        # or the `hyper-gummy` entry in ../.claude/launch.json
```

## Copy

All Thai copy is DRAFT. Pages are generated from `scripts/gen-pages.py` — edit the copy there and
re-run `python scripts/gen-pages.py`. The "ดูเคส" overlay stories live in
`src/js/modules/samples.js`.

## Case pages (Dogstudio-style inner pages)

`case-<slug>.html` × 7, generated from `CASES` in `scripts/gen-pages.py`: tall header (title,
intro, metas, cover) → chapters `/01 ร่าง` … `/04 ปล่อย` interleaved with media blocks and a
full-bleed cover → "เคสถัดไป" footer. Media are placeholder candy art (`covers.js`) until real
images exist. Each case declares `data-gl-candy`; the bear hugs that candy (`Stage.setHeld`),
hops off-screen while you read, and comes back for the next-case footer.

## About page (scrollytelling)

Five `[data-chapter]` sections; the bear never leaves. 0 grey + empty-handed → 1 color rises
from the feet (shader fill line) → 2 held shapes cycle with scroll → 3 smile (morph target) →
4 a crowd of mini bears. Logic in `Stage.aboutEffects` (`src/js/gl/index.js`).

## Mobile

Portrait offsets per page in `Stage.tick`; the GL headline hugs the header in portrait.
Test with the in-app browser's mobile preset; animations must be ticked manually in a
background tab (`gsap.updateRoot(t); __stage.tick(0, 16.7)`).

## Kept from The Writer

Loader, Lenis smooth scroll + ScrollTrigger scrub, barba veil wipe, in-view entrances,
typewriter labels, menu + reading overlays, reduced-motion / no-WebGL poster fallbacks.
