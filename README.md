# Weed Management in Lama Lama Country: A Design Proposal

An interactive, book-style report for the EWB Challenge (team Power Ranger).

- **Desktop:** the book opens from a closed cover into two-page spreads (1 2 | 3 4 | 5 6 …). Each turn moves a whole spread, and the book closes onto its back cover after the last page.
- **Tablet:** one page at a time, with numbered bookmarks down the side.
- **Phone:** one page at a time, with a page picker.

## Run it

Keep `index.html`, `styles.css`, `script.js` and the `images` folder together, then open `index.html` in a browser. There is nothing to install or build. Fonts load from Google Fonts, with system-font fallbacks.

## Page order (24 pages)

| Pages | Content |
| --- | --- |
| 1–3 | Acknowledgement of Country, title page, contents |
| 4 | 1. Project Details, with the fold-out location map |
| 5–6 | 2. Background |
| 7–9 | 3. Problem Analysis, four key challenges (folders), Evaluation Criteria |
| 10–14 | 4. Design Process & Decision-Making (all four options with Figures 1–4), weighted decision matrix, scores explained with the rating scale, selected solution, why it was chosen |
| 15 | 5. Proposed Solution (one page, scrolls) |
| 16–17 | 6. Prototyping and Testing, with a QR code and link to the live prototype |
| 18–19 | 7. Social, Cultural, Environmental and Budget Considerations |
| 20–22 | 8. Implementation, development hours and costing |
| 23–24 | References (APA 7, hanging indent) |

Keep the total number of pages even. If it is odd, a plain end paper is added at the back.

## Editing the content

Everything you edit is at the top of `script.js`:

- **`pages`** lists every page in reading order. Most pages are `section` pages. Each one takes a `chapter` number, a `title` (shown in the contents and bookmarks), an optional `heading` (`""` hides the heading on continuation pages) and a list of `blocks`:
  - `{ h }`: sub-heading. `{ p }`: paragraph.
  - `{ steps }`, `{ flow }`: numbered processes.
  - `{ cards }`, `{ quote }`, `{ criteria }`: challenge cards, the user statement, weighted criteria bars (drawn against 100%).
  - `{ optfig }`: a design option's explanation followed by its APA figure. `{ scale }`: the rating scale.
  - `{ bullets }`, `{ table }`, `{ hours }`: lists and APA tables (Tables 2–4).
  - `{ consider }`, `{ stats }`, `{ risks }`: the considerations cards, budget figures, and risks with their responses.
  - `{ todo }`: a dashed "note for the team" reminder. Remove it before submitting.
- **`criteria`** and **`solutions`** drive the weighted decision matrix, the scores page and the podium. Totals, rankings and ratings are worked out from the scores.
- **`appNeeds`** drives the *Why is it chosen?* page: the needs, the features, which screenshot each feature is on, and where its highlight box sits.
- **`REFERENCES`** holds the reference list, in alphabetical order. The two References pages fill themselves: page 1 takes as many entries as fit on the screen, and the rest continue on page 2, so neither page scrolls.
- **`{ folders }`** draws the four key challenges as side-by-side folders, with one open at a time. **`{ tryapp: url }`** draws the prototype card with its QR code. If the link changes, update it there and regenerate the QR code.

The location map uses Natural Earth coastline data, which is public domain. The shaded area marks the general location of Lama Lama Country only, not a boundary.

## Reader controls

- **Previous / Next** sit at the far left and far right under the book. The arrow keys, Page Up / Page Down, Home and End also work.
- **Drag a page corner** to turn it by hand. **Bookmarks** flick through the pages in between.
- **Unfold the map** on Project Details. It opens left and right on wide screens and top and bottom on phones. Press Escape or **Fold map** to close it.
- **Decision matrix:** pick a criterion (the scores page follows it), press *Build the score*, or switch to *Table view*.
- **Podium:** the ranking rises when you arrive. Tap a column to turn it over and read why that option was, or wasn't, chosen. Tap it again to turn it back.
- **Why is it chosen?:** pick a need, then a feature, to highlight it on the app screenshot.
- **Long pages** (Design Process and Proposed Solution) scroll inside the page and show a *Scroll for more* cue until you reach the end.
- **Page links:** the address updates to `#page-07` and so on, so you can share a link to a specific page.
- **Reduced motion:** if the device is set to reduce motion, pages switch instantly instead of turning.
