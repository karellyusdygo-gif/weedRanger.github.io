# Weed Management in Lama Lama Country: A Design Proposal

A full-screen, book-style report template for a design solution to weed management in Lama Lama Country, based on the EWB Challenge study case.

- **Desktop:** the book opens from a closed cover into two-page spreads (1 2 | 3 4 | 5 6 …). Each turn moves a whole spread, and the book closes onto its back cover after the last page.
- **Tablet:** one page at a time, with numbered bookmarks down the side.
- **Phone:** one page at a time, with a page picker.

## Run it

Keep `index.html`, `styles.css`, `script.js` and the `images` folder together, then open `index.html` in a browser. It uses plain HTML, CSS and JavaScript, so there is nothing to install or build. Fonts load from Google Fonts, with system-font fallbacks.

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
    - `{ options: [["Name", "text", figureNumber], …] }` is a numbered list of design options.
    - `{ figures: [{ n, src, title, source }, …] }` is a grid of APA-style figures.

    Add `cont: true` and a `heading` to continue a chapter onto another page.
  - `specimens`, `references`, `ack`, `title`, `contents` and `end` are the special pages.
  - `matrix`, `matrix-detail`, `podium` and `why` are the interactive decision pages (they read from `criteria`, `solutions` and `appNeeds`).
  - If the total number of pages is odd, a plain end paper is added at the back, so spreads always pair up.
- **`criteria`** and **`solutions`** hold the weighted decision matrix: weights, each option's scores, the reason for every score, and the bullet points shown on the podium flashcards. Totals, rankings and ratings (Fully / Mostly / Partly meets, Weak) are worked out from the scores, so change a score once and every page updates.
- **`appNeeds`** drives the *Why is it chosen?* page: the four user needs, their features, which screenshot each feature is on, and where to draw the highlight box (`[left, top, right, bottom]` as percentages of the screenshot).
- **`specimens`** are the cards on the specimen-plate pages. Fill them in with the weeds named in the case study. `art` can be `vine`, `grass`, `shrub` or `herb`.

The Project Details page includes a location map of Lama Lama Country (Port Stewart, east Cape York Peninsula). Its coastline comes from Natural Earth, which is public domain. The shaded area marks the general region only, not a boundary. The Acknowledgement of Country uses the wording supplied by your team. The References page is the final page in the book.

Long pages scroll inside the page, so you can add as much writing as you need.

## Reader controls

- **Previous / Next** sit at the far left and far right under the book. The arrow keys, Page Up / Page Down, Home and End also work.
- **Drag a corner:** grab the bottom corner of a page (it curls up when you hover) and pull it across. Let go past halfway to finish the turn, or before halfway to drop it back.
- **Bookmarks** flick quickly through the pages in between, slowing down as they reach the page you picked.
- **Specimen cards** turn over when selected.
- **Decision matrix:** pick a criterion to focus on it (the reasons page beside it follows), press *Build the score* to replay the totals adding up, or switch to *Table view*.
- **Podium:** the ranking rises and the winner is revealed each time you arrive. Tap a column to flip the card underneath and see why that option was, or wasn't, chosen.
- **Why is it chosen?:** pick a need, then a feature, to highlight it on the app screenshot.
- **Swipe** left or right on touch screens.
- **Page links:** the address updates to `#page-07` and so on, so you can share a link to a specific page.
- **Reduced motion:** if the device is set to reduce motion, pages switch instantly instead of turning.
