# Weed Management in Lama Lama Country: A Design Proposal

A full-screen, book-style report template for a design solution to weed management in Lama Lama Country, based on the EWB Challenge study case.

- **Desktop:** the book opens from a closed cover into two-page spreads (1 2 | 3 4 | 5 6 …). Each turn moves a whole spread, and the book closes onto its back cover after the last page.
- **Tablet:** one page at a time, with numbered bookmarks down the side.
- **Phone:** one page at a time, with a page picker.

## Run it

Open `index.html` in a browser. It uses plain HTML, CSS and JavaScript, so there is nothing to install or build. Fonts load from Google Fonts, with system-font fallbacks.

## Add your report

Everything you edit is at the top of `script.js`:

- **`pages`** is every page in reading order. Each page has a `type`:
  - `chapter` uses `title`, `tag`, `lead`, `prompt` and `art`. It is used for chapters that are still placeholders.
  - `section` holds written report content. It takes a `chapter` number, a `title` (shown in the contents and bookmarks) and a list of `blocks`:
    - `{ h: "..." }` is a sub-heading.
    - `{ p: "..." }` is a paragraph.
    - `{ steps: [["Name", "text"], …] }` is a numbered process.
    - `{ cards: [["Name", "text"], …] }` is a grid of cards.
    - `{ quote: "...", cite: "..." }` is a highlighted statement.
    - `{ criteria: [["Name", 35, "text"], …] }` draws weighted criteria bars.

    Add `cont: true` and a `heading` to continue a chapter onto another page.
  - `map`, `specimens`, `references`, `ack`, `title`, `contents` and `end` are the special pages.
  - If the total number of pages is odd, a blank notes page is added automatically, so spreads always pair up.
- **`specimens`** are the cards on the specimen-plate pages. Fill them in with the weeds named in the case study. `art` can be `vine`, `grass`, `shrub` or `herb`.
- **`mapPins`** are the pins on the fold-out map. `x` and `y` are percentages across and down the map.

The fold-out map draws an illustrative coastline. Replace it with a map you have permission to use, and cite its source. The Acknowledgement of Country uses the wording supplied by your team. The References page is the final page in the book.

Long pages scroll inside the page, so you can add as much writing as you need.

## Reader controls

- **Previous / Next** sit at the far left and far right under the book. The arrow keys, Page Up / Page Down, Home and End also work.
- **Drag a corner:** grab the bottom corner of a page (it curls up when you hover) and pull it across. Let go past halfway to finish the turn, or before halfway to drop it back.
- **Bookmarks** flick quickly through the pages in between, slowing down as they reach the page you picked.
- **Specimen cards** turn over when selected. **Unfold the map** opens the fold-out map; Escape or **Fold map** closes it.
- **Swipe** left or right on touch screens.
- **Page links:** the address updates to `#page-07` and so on, so you can share a link to a specific page.
- **Reduced motion:** if the device is set to reduce motion, pages switch instantly instead of turning.
