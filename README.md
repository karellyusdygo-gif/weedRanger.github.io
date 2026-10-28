# Weed Management in Lama Lama Country: A Design Proposal

An interactive, book-style report for the EWB Challenge (team Power Ranger).

- **Desktop:** the book opens from a closed cover into two-page spreads (1 2 | 3 4 | 5 6 …). Each turn moves a whole spread, and the book closes onto its back cover after the last page.
- **Tablet:** one page at a time, with numbered bookmarks down the side.
- **Phone:** one page at a time, with a page picker.

## Run it

Keep `index.html`, `styles.css`, `script.js` and the `images`, `docs`, `video` and `apk` folders together, then open `index.html` in a browser.

## Files the team adds

| Folder | File (exact name) | Where it appears |
| --- | --- | --- |
| `docs/` | `team_charter.docx` | Appendix 1, with a download button (included) |
| `docs/` | `team_meeting_minutes.docx` | Appendix 2, with a download button (included) |
| `video/` | `demo_recording.mp4` | Prototype demonstration page (Figure 7), embedded player plus a download link |
| `apk/` | `ranger_app.apk` | Prototype demonstration page, "Download APK (Android)" button |

- **Video:** save it as MP4 with H.264 video and AAC audio so it plays in Chrome, Edge, Firefox, Safari and on phones. `video/README.txt` has the ffmpeg command. If the file is missing or can't be played, the page shows a short note and the download link instead of a broken player.
- **Downloads:** download buttons work when the site is hosted, for example on GitHub Pages. Opened straight from the computer, some browsers open the file instead of saving it. There is nothing to install or build. Fonts load from Google Fonts, with system-font fallbacks.

## Page order (34 pages)

| Pages | Content |
| --- | --- |
| 1–2 | Acknowledgement of Country, title page (group, members, tutorial, design area, website link) |
| 3 | Executive Summary (EWB landing-page format, one page, scrolls) |
| 4 | Contents |
| 5 | 1. Project Details, with the fold-out location map |
| 6–7 | 2. Background |
| 8–10 | 3. Problem Description, user statement, Evaluation Criteria |
| 11–16 | 4. Design Process & Decision-Making (Figures 1–4 over two pages), decision matrix (Table 1), scores explained, selected solution, alignment with user need (Figures 5–6) |
| 17 | 5. Proposed Solution (Table 2; one page, scrolls) |
| 18–20 | 6. Prototyping and Testing (Table 3), demonstration video (Figure 7), QR code, APK |
| 21 | 7. Implementation |
| 22–23 | 8. Costing Analysis (Tables 4 and 5) |
| 24–26 | 9. Other considerations (social, cultural, environmental, maintenance, budget) |
| 27–28 | 10. Recommendations (Figures 8–11) |
| 29–30 | References (APA 7, hanging indent) |
| 31–33 | Appendix 1 Team Meeting Charter (download), Appendix 2 Team Meeting Minutes (download), Appendix 3 Use of AI |
| 34 | Teamwork Declaration (team member contributions) |

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
