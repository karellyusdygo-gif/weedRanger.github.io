"use strict";

/* =========================================================
   1. YOUR CONTENT — edit these three arrays
   ========================================================= */

/* Specimen plates: use the weeds named in the case study. */
const specimens = [
  {
    name: "Weed name",
    scientific: "Genus species",
    art: "vine",
    impact: "How does this weed affect Country — habitat, water, fire, access? Cite the case study.",
    spread: "How does it spread: seed, water, animals, vehicles?",
    control: "Which control methods are used or proposed, and who decides?"
  },
  {
    name: "Weed name",
    scientific: "Genus species",
    art: "grass",
    impact: "Describe its impact and where the evidence comes from.",
    spread: "Describe how it spreads and in which seasons.",
    control: "Describe current and proposed control approaches."
  },
  {
    name: "Weed name",
    scientific: "Genus species",
    art: "shrub",
    impact: "Describe its impact and where the evidence comes from.",
    spread: "Describe how it spreads and in which seasons.",
    control: "Describe current and proposed control approaches."
  },
  {
    name: "Weed name",
    scientific: "Genus species",
    art: "herb",
    impact: "Describe its impact and where the evidence comes from.",
    spread: "Describe how it spreads and in which seasons.",
    control: "Describe current and proposed control approaches."
  }
];

/* Fold-out map pins: x and y are percentages across and down the map. */
const mapPins = [
  { x: 22, y: 64, title: "Place name", text: "Why this place matters to the report. Add your source." },
  { x: 41, y: 40, title: "Place name", text: "Why this place matters to the report. Add your source." },
  { x: 58, y: 68, title: "Place name", text: "Why this place matters to the report. Add your source." },
  { x: 77, y: 36, title: "Place name", text: "Why this place matters to the report. Add your source." }
];

/* Pages, in reading order. On desktop they pair up as 1 2 | 3 4 | 5 6 … */
const pages = [
  { type: "ack", title: "Acknowledgement of Country" },
  {
    type: "title",
    title: "Title page",
    team: "Power Ranger",
    members: [
      "Edbert Wisely",
      "Fatih Putranda Lesmana",
      "Glenny Veneesha",
      "Hangyeon Cho",
      "Karell Yusdygo",
      "Yiming Bian"
    ],
    forWhom: "EWB Challenge"
  },
  { type: "contents", title: "Contents" },
  {
    type: "chapter", chapter: 1,
    title: "Project Details",
    details: {
      designArea: "4 - Augmenting the Ranger Program",
      designOpportunities: "4.1 Weed management innovation",
      importance: "Weed management is an important part of country management, which is closely connected to environmental, economic and cultural values. However, seasonal weather conditions also influence Ranger activities. Wet-season weather can restrict access to some areas, while funding only comes in dry-season, which causes the rangers to have a limited fund in wet-season. These local conditions create challenges for rangers’ activities, which we are working to resolve and protect this land."
    },
    art: "A starting point for the story"
  },

  /* ---- Background (from the team's draft) ---- */
  {
    type: "section", chapter: 2,
    title: "Background",
    tag: "BACKGROUND",
    blocks: [
      { h: "Context" },
      { p: "The Lama Lama Ranger Program is jointly managed by the Queensland Government and the Indigenous community. Rangers are responsible for managing the natural and cultural resources across Lama Lama Country, including a wide range of land and sea management activities." },
      { p: "Lama Lama Country is large and remote, with diverse terrain and ecosystems. That means our application should be tailored to local conditions, including offline capacity, easy to operate and maintain, and require minimal training." },
      { h: "Significance" },
      { p: "Weed management is an important part of managing Lama Lama Country because invasive weeds impact environmental, economic and cultural values (Yintjingga Aboriginal Corporation, n.d.). Invasive weeds can threaten native vegetation, reduce biodiversity and affect access to important areas of Lama Lama country." }
    ]
  },
  {
    type: "section", chapter: 2, cont: true,
    title: "Current solution and objectives",
    heading: "Current solution",
    blocks: [
      { p: "The current practice involves photographing, logging GPS location, applying herbicide, and returning after approximately one month to assess treatment effectiveness (Engineers Without Borders Australia, 2026b)." },
      { steps: [
        ["Locate Area", "Identify and scout active weed infestation sites manually across country."],
        ["Photo Log", "Identify and record weed species for eradication."],
        ["GPS-Tag", "Mark and track the location of the weed infestation."],
        ["Spray Weed", "Spray weed medication based on the identified weed species."],
        ["Reassessment", "Comes back to infested area a month later to assess effectiveness."]
      ] },
      { p: "Besides, Rangers have integrated digital technologies such as Fulcrum, iTracker and drones with the knowledge passed by the Elders during this process (Engineers Without Borders Australia, 2026b)." },
      { h: "Objectives" },
      { p: "We hope to establish an application that can improve efficiency and reliability of weed management work across Lama Lama Country. It should support large-scale weed monitoring and help rangers track the effectiveness of treatment. It’s also important to keep costs low and respect indigenous community priorities and cultural requirements." }
    ]
  },
  {
    type: "map",
    title: "Map of the study area",
    tag: "MAP PLATE",
    lead: "Unfold the map to see the places referred to in this report. Each pin opens a short note.",
    prompt: "Replace the illustrative base map with one you have permission to use, and edit the pins in mapPins at the top of script.js."
  },

  /* ---- Problem analysis (from the team's draft) ---- */
  {
    type: "section", chapter: 3,
    title: "Problem Analysis",
    tag: "THE CHALLENGE",
    blocks: [
      { p: "While physical removal is important, the true challenge of weed management on Lama Lama Country lies in reliably detecting, monitoring, and managing infestations across such vast, remote areas. Weeds Australia (n.d.) states that “an important part of any weed control program is monitoring the response of weeds and desirable vegetation” to evaluate whether management goals and control actions have actually worked." },
      { p: "Therefore, one user statement is developed:" },
      { quote: "Lama Lama Rangers need to reliably detect, monitor, and prioritise weed infestations across large, remote and seasonally inaccessible areas while integrating with their existing practices.", cite: "USER STATEMENT" }
    ]
  },
  {
    type: "section", chapter: 3, cont: true,
    title: "Four key challenges",
    heading: "Four key challenges",
    blocks: [
      { cards: [
        ["Access", "During the wet season, roads and river crossings may be impassable (Engineers Without Borders Australia, 2026a). As a result, rangers’ mobility is highly restricted, therefore offline capability is crucial to sustain field operations when connectivity is unavailable."],
        ["Monitoring", "Infestation on Lama Lama country is done under an extensive and vast landscape. Tracking their precise locations, treatment history, and subsequent regrowth remains a significant operational challenge. Monitoring is required to determine whether applied treatments are effective and to identify where further control actions are necessary (Weeds Australia, n.d.)."],
        ["Decision-making", "As the ranger program is seasonal (Engineers Without Borders Australia, 2026b), this creates rangers with varying levels of field expertise. Some of the rangers may need help in identifying priority infestations and selecting appropriate actions. So, a decision-support system is important to improve consistency while complementing ranger knowledge."],
        ["Operations", "As stated in Engineers Without Borders Australia (2026c), any proposed solution must rely on standard spare parts instead of specialized components. This ensures local self-reliance, avoiding maintenance requirements from technicians from Cairns."]
      ] }
    ]
  },
  {
    type: "specimens",
    title: "Specimen plates I",
    tag: "PRESSED SPECIMENS",
    lead: "Select a specimen to turn it over and read its notes.",
    items: [0, 1]
  },
  {
    type: "specimens",
    title: "Specimen plates II",
    tag: "PRESSED SPECIMENS",
    lead: "Select a specimen to turn it over and read its notes.",
    items: [2, 3]
  },

  /* ---- Evaluation criteria (from the team's draft) ---- */
  {
    type: "section", chapter: 4,
    title: "Evaluation Criteria",
    tag: "HOW WE COMPARE IDEAS",
    blocks: [
      { p: "Five criteria were selected to compare potential solutions:" },
      { criteria: [
        ["Effectiveness", 35, "The usefulness of the proposed design to enhance the weed management process."],
        ["Rural access", 20, "The suitability of the solution for remote terrain and seasonal access constraints."],
        ["Offline capability", 20, "The ability to record and access information without internet connectivity."],
        ["Maintainability", 15, "Ease of maintenance, affordability, and long-term operation."],
        ["Minimal training", 10, "The simplicity and accessibility of the design to ensure rangers with varying levels of experience can operate it effectively."]
      ] },
      { p: "These criteria and weightings were partially derived from the operational priorities and constraints outlined by Engineers Without Borders Australia (2026b)." }
    ]
  },

  /* ---- Still to write ---- */
  {
    type: "chapter", chapter: 5,
    title: "Listening and learning",
    tag: "KNOWLEDGE & CARE",
    lead: "Show how local knowledge, community priorities and cultural protocols inform your team's thinking. Make clear what you know, what you still need to learn and whose voices are represented.",
    prompt: "Add insights, engagement approach and relevant protocols. Note any assumptions and how you will check them.",
    art: "Learn before proposing"
  },
  {
    type: "chapter", chapter: 6,
    title: "The proposed solution",
    tag: "THE DESIGN",
    lead: "Introduce your concept. Explain what it is, who it is for and how it responds to the challenge and evaluation criteria.",
    prompt: "Describe the solution in plain language. Add sketches, photos or diagrams here when you are ready.",
    art: "Give the idea a shape"
  },
  {
    type: "chapter", chapter: 7,
    title: "How it works",
    tag: "FROM IDEA TO ACTION",
    lead: "Walk readers through how the solution would work in practice, from the first step to ongoing care. Make the roles, resources and decisions visible.",
    prompt: "Explain the process, materials or tools, people involved, and what happens over time.",
    art: "Show the moving parts"
  },
  {
    type: "chapter", chapter: 8,
    title: "Putting it into practice",
    tag: "A PATHWAY FORWARD",
    lead: "Outline a realistic pathway for testing and implementation. Identify dependencies, possible constraints and ways to adapt the approach as you learn.",
    prompt: "Add phases, responsibilities, resources and questions to resolve before a real-world trial.",
    art: "Plan a careful first step"
  },
  {
    type: "chapter", chapter: 9,
    title: "Measuring what matters",
    tag: "LEARN & ADAPT",
    lead: "Describe how you would understand whether the solution is working. Include meaningful measures, who interprets them and how learning can shape the next step.",
    prompt: "Suggest indicators for ecological outcomes, usability and community-defined success. Explain how feedback informs change.",
    art: "Notice what is changing"
  },
  {
    type: "chapter", chapter: 10,
    title: "Closing reflection",
    tag: "WHAT COMES NEXT",
    lead: "Bring the report together. Reflect on the limits of your proposal, what your team has learned and the questions that should guide future work.",
    prompt: "Summarise your key takeaways, limitations and respectful next steps for continued learning.",
    art: "Leave room to keep learning"
  },
  {
    type: "end",
    title: "Thank you",
    lead: "Thank you for reading. This report is a starting point for learning, shaped with respect for Country and the people who care for it."
  },
  {
    type: "references",
    title: "References",
    lead: "Sources cited in this report.",
    items: [
      `Engineers Without Borders Australia. (2026a). <i>About Tropical North Queensland</i>. EWB Challenge. <a href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/about-tropical-north-queensland/" target="_blank" rel="noopener">https://ewbchallenge.org/challenge/port-stewart-lama-lama/about-tropical-north-queensland/</a>`,
      `Engineers Without Borders Australia. (2026b). <i>Design Area 4 – Augmenting the ranger program</i>. <a href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-area-4-augmenting-the-ranger-program/" target="_blank" rel="noopener">https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-area-4-augmenting-the-ranger-program/</a>`,
      `Engineers Without Borders Australia. (2026c). <i>Design considerations</i>. EWB Challenge. <a href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-considerations/" target="_blank" rel="noopener">https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-considerations/</a>`,
      `Weeds Australia. (n.d.). <i>Monitoring</i>. <a href="https://weeds.org.au/manage/monitoring/" target="_blank" rel="noopener">https://weeds.org.au/manage/monitoring/</a>`,
      `Yintjingga Aboriginal Corporation. (n.d.). <i>Weed monitoring</i>. Welcome to Lama Lama Country. <a href="https://www.lamalama.org.au/weed-monitoring/" target="_blank" rel="noopener">https://www.lamalama.org.au/weed-monitoring/</a>`
    ]
  }
];

/* =========================================================
   2. SET-UP
   ========================================================= */

if (pages.length % 2) pages.push({ type: "blank", title: "Notes" });

const PAGES = pages.length;
const SPREADS = PAGES / 2;
const COVER = "cover";
const BACK = "back";
const BLANK = "blank";

const $ = (selector) => document.querySelector(selector);
const stage = $("#stage");
const book = $("#book");
const spread = $("#spread");
const pageLeft = $("#page-left");
const pageRight = $("#page-right");
const leafLayer = $("#leaf-layer");
const bookmarks = $("#bookmarks");
const prevBtn = $("#prev");
const nextBtn = $("#next");
const prevLabel = $("#prev-label");
const nextLabel = $("#next-label");
const progressLabel = $("#progress-label");
const progressFill = $("#progress-fill");
const pageSelect = $("#page-select");
const cornerNext = $("#corner-next");
const cornerPrev = $("#corner-prev");
const edgeLeft = $("#edge-left");
const edgeRight = $("#edge-right");
const announcer = $("#announcer");
const foldout = $("#foldout");

const wideQuery = matchMedia("(min-width: 901px)");
const calmQuery = matchMedia("(prefers-reduced-motion: reduce)");

let mode = wideQuery.matches ? "spread" : "single";
let view = -1;          // spread mode: -1 cover, 0…SPREADS-1 spreads, SPREADS back cover
                        // single mode: -1 cover, 0…PAGES-1 pages,   PAGES back cover
let busy = false;
let queued = null;
let runTarget = null;
let epoch = 0;
let drag = null;
let swipe = null;

const pad = (n) => String(n).padStart(2, "0");
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

const lastView = () => (mode === "spread" ? SPREADS : PAGES);
const itemAt = (v) => (v < 0 ? COVER : v >= PAGES ? BACK : v);
const leftOf = (v) => (v < 0 ? 0 : v >= SPREADS ? PAGES - 2 : v * 2);
const rightOf = (v) => {
  if (mode !== "spread") return itemAt(v);
  return v < 0 ? 1 : v >= SPREADS ? PAGES - 1 : v * 2 + 1;
};
const viewOfPage = (i) => (mode === "spread" ? Math.floor(i / 2) : i);

/* =========================================================
   3. PAGE MARKUP
   ========================================================= */

function pageHTML(item, side, light = false) {
  if (item === COVER) return coverHTML();
  if (item === BACK) return backCoverHTML();

  const hinge = side === "left" ? "hinge-right" : "hinge-left";
  if (item === BLANK || item === null || item === undefined) {
    return `<div class="page-sheet ${hinge}"></div>`;
  }

  const page = pages[item];
  const num = pad(item + 1);
  const title = `<span>WEED MANAGEMENT <i>·</i> LAMA LAMA COUNTRY</span>`;
  const foot = `<span>WEED MANAGEMENT IN LAMA LAMA COUNTRY</span>`;
  const n = `<span class="num">${num}</span>`;
  const head = side === "left" ? n + title : title + n;
  const folio = side === "left" ? n + foot : foot + n;

  return `<div class="page-sheet ${hinge}" data-type="${page.type}">
    <header class="run-head">${head}</header>
    <div class="page-body">${light ? lightHTML(page, item) : bodyHTML(page, item)}</div>
    <footer class="folio">${folio}</footer>
  </div>`;
}

function coverHTML() {
  return `<div class="cover">
    <span class="cover-emblem" aria-hidden="true">✳</span>
    <span class="cover-kicker">A DESIGN REPORT</span>
    <p class="cover-title">Weed Management<br>in Lama Lama Country:<br>A Design Proposal</p>
    <p class="cover-sub">Weed management in Lama Lama Country</p>
    <span class="cover-rule"></span>
    <button type="button" class="cover-btn" data-action="open">OPEN THE BOOK <span aria-hidden="true">→</span></button>
    <span class="cover-foot">AN EWB CHALLENGE REPORT</span>
  </div>`;
}

function backCoverHTML() {
  return `<div class="cover cover-back">
    <span class="cover-emblem" aria-hidden="true">✳</span>
    <p class="cover-blurb">A design report on weed management in Lama Lama Country, made with respect for Country.</p>
    <span class="cover-rule"></span>
    <div class="cover-actions">
      <button type="button" class="cover-btn" data-action="reopen"><span aria-hidden="true">←</span> REOPEN</button>
      <button type="button" class="cover-btn" data-action="to-cover">BACK TO COVER</button>
    </div>
    <span class="cover-foot">AN EWB CHALLENGE · DESIGN PROPOSAL</span>
  </div>`;
}

function lightHTML(page, index) {
  return `<div class="light">
    <span class="light-num">${pad(index + 1)}</span>
    <span class="light-title">${page.title}</span>
    <span class="light-lines">${"<i></i>".repeat(7)}</span>
  </div>`;
}

function promptHTML(text) {
  return `<div class="writing-prompt"><span>YOUR NOTES GO HERE</span><p>${text}</p></div>`;
}

function bodyHTML(page, index) {
  switch (page.type) {
    case "ack":
      return `<div class="ack">
        <span class="emblem" aria-hidden="true">✳</span>
        <span class="kicker">BEFORE WE BEGIN</span>
        <h2 class="page-title">Acknowledgement of Country</h2>
        <p class="lead">We acknowledge and pay respect to the Traditional Owners of the land on which we meet; the Gadigal people of the Eora Nation. It is upon their ancestral lands that UTS stands.</p>
        <p class="lead">We also pay respect to the Elders both past and present, acknowledging them as the traditional custodians of knowledge for this land.</p>
      </div>`;

    case "title":
      return `<div class="opening">
        <span class="emblem" aria-hidden="true">✳</span>
        <span class="kicker">A DESIGN REPORT</span>
        <h1 class="opening-title">Weed Management<br>in Lama Lama Country:<br>A Design Proposal</h1>
        <span class="rule" aria-hidden="true"></span>
        <p class="edition">AN EWB CHALLENGE DESIGN REPORT</p>
        <dl class="credits">
          <div><dt>TEAM</dt><dd>${page.team}</dd></div>
          <div><dt>TEAM MEMBERS</dt><dd><ul class="team-members">${page.members.map((member) => `<li>${member}</li>`).join("")}</ul></dd></div>
          <div><dt>FOR</dt><dd>${page.forWhom}</dd></div>
        </dl>
      </div>`;

    case "contents":
      return `<div class="contents">
        <span class="kicker">CONTENTS</span>
        <h2 class="page-title">Inside this field book</h2>
        <ol class="toc">${pages
          .map((entry, i) => {
            if (i < 3 || entry.type === "blank") return "";
            const mark = entry.cont ? "" : entry.chapter ? pad(entry.chapter) : "✳";
            return `<li><button type="button" data-goto="${i}">
              <span class="toc-label"><b>${mark}</b>${entry.title}</span>
              <span class="toc-dots" aria-hidden="true"></span>
              <span class="toc-num">${pad(i + 1)}</span>
            </button></li>`;
          })
          .join("")}</ol>
      </div>`;

    case "chapter":
      return `<div class="chapter">
        <div class="page-copy">
          ${page.details ? "" : `<span class="kicker">CHAPTER ${pad(page.chapter)} <i>·</i> ${page.tag}</span>`}
          <h2 class="page-title">${page.title}</h2>
          ${page.details ? `<div class="project-details">
            <ul class="design-details">
              <li>Design Area: ${page.details.designArea}</li>
              <li>Design Opportunities: ${page.details.designOpportunities}</li>
            </ul>
            <section class="importance">
              <h3>Why is this important?</h3>
              <p>${page.details.importance}</p>
            </section>
          </div>` : `<p class="lead">${page.lead}</p>${promptHTML(page.prompt)}`}
        </div>
        <figure class="page-art" aria-hidden="true">
          <span class="art-orbit"></span>
          <span class="art-seed">r</span>
          <figcaption class="art-caption">${page.art.toUpperCase()}</figcaption>
        </figure>
      </div>`;

    case "section":
      return `<div class="section">
        <span class="kicker">CHAPTER ${pad(page.chapter)} <i>·</i> ${page.cont ? "CONTINUED" : page.tag}</span>
        <h2 class="page-title${page.cont ? " is-sub" : ""}">${page.heading || page.title}</h2>
        ${page.blocks.map(blockHTML).join("")}
      </div>`;

    case "map":
      return `<div class="map-page">
        <span class="kicker">${page.tag}</span>
        <h2 class="page-title">${page.title}</h2>
        <p class="lead">${page.lead}</p>
        <button type="button" class="folded-map" data-action="unfold-map">
          <span class="folded-sheet" aria-hidden="true"><i></i><i></i><i></i>
            <span class="folded-label">✳<br>FOLD-OUT MAP</span>
          </span>
          <span class="folded-cta">UNFOLD THE MAP <span aria-hidden="true">→</span></span>
        </button>
        ${promptHTML(page.prompt)}
      </div>`;

    case "specimens":
      return `<div class="specimens">
        <span class="kicker">${page.tag}</span>
        <h2 class="page-title">${page.title}</h2>
        <p class="lead">${page.lead}</p>
        <div class="specimen-grid">${page.items.map((n) => specimenHTML(specimens[n], n)).join("")}</div>
      </div>`;

    case "references":
      return `<div class="refs">
        <span class="kicker">SOURCES</span>
        <h2 class="page-title">${page.title}</h2>
        <p class="lead">${page.lead}</p>
        <ol class="ref-list">${page.items.map((r) => `<li>${r}</li>`).join("")}</ol>
        ${page.prompt ? promptHTML(page.prompt) : ""}
      </div>`;

    case "end":
      return `<div class="ending">
        <span class="emblem" aria-hidden="true">✳</span>
        <h2 class="page-title">${page.title}</h2>
        <p class="lead">${page.lead}</p>
        <span class="rule" aria-hidden="true"></span>
        <button type="button" class="ink-btn" data-action="close">CLOSE THE BOOK <span aria-hidden="true">→</span></button>
      </div>`;

    default:
      return `<div class="notes-lines">${"<i></i>".repeat(12)}</div>`;
  }
}

/* building blocks for "section" pages */
function blockHTML(b) {
  if (b.h) return `<h3 class="sec-h">${b.h}</h3>`;
  if (b.p) return `<p class="sec-p">${b.p}</p>`;
  if (b.steps) {
    return `<ol class="steps">${b.steps
      .map(([name, text], i) => `<li><span class="step-no">${i + 1}</span><span class="step-text"><b>${name}</b>${text}</span></li>`)
      .join("")}</ol>`;
  }
  if (b.cards) {
    return `<div class="cards">${b.cards
      .map(([name, text], i) => `<article class="card"><span class="card-no">${pad(i + 1)}</span><h4>${name}</h4><p>${text}</p></article>`)
      .join("")}</div>`;
  }
  if (b.quote) {
    return `<blockquote class="statement"><p>${b.quote}</p>${b.cite ? `<cite>${b.cite}</cite>` : ""}</blockquote>`;
  }
  if (b.criteria) {
    const top = Math.max(...b.criteria.map((c) => c[1]));
    return `<ul class="criteria">${b.criteria
      .map(([name, weight, text]) => `<li>
        <span class="crit-top"><b>${name}</b><span>${weight}%</span></span>
        <span class="crit-bar" aria-hidden="true"><i style="width:${(weight / top) * 100}%"></i></span>
        <p>${text}</p>
      </li>`)
      .join("")}</ul>`;
  }
  return "";
}

function specimenHTML(s, i) {
  if (!s) return "";
  return `<button type="button" class="specimen" data-flip aria-pressed="false"
      aria-label="Specimen ${pad(i + 1)}: ${s.name}. Select to turn the card over.">
    <span class="specimen-inner">
      <span class="specimen-face specimen-front">
        <span class="tape" aria-hidden="true"></span>
        <span class="specimen-no">SPECIMEN ${pad(i + 1)}</span>
        <span class="specimen-art">${specimenArt(s.art)}</span>
        <span class="specimen-name">${s.name}</span>
        <span class="specimen-sci">${s.scientific}</span>
      </span>
      <span class="specimen-face specimen-back">
        <span class="specimen-no">SPECIMEN ${pad(i + 1)} · NOTES</span>
        <span class="field"><b>IMPACT</b>${s.impact}</span>
        <span class="field"><b>HOW IT SPREADS</b>${s.spread}</span>
        <span class="field"><b>CONTROL</b>${s.control}</span>
        <span class="specimen-hint">SELECT TO TURN BACK ↺</span>
      </span>
    </span>
  </button>`;
}

function specimenArt(kind) {
  let herb = `<path d="M60 146 C61 110 58 70 60 18"/>`;
  for (let y = 32; y <= 124; y += 18) {
    herb += `<path d="M60 ${y} C48 ${y - 10} 36 ${y - 8} 30 ${y - 2} C38 ${y + 4} 50 ${y + 3} 60 ${y}Z"/>`;
    herb += `<path d="M60 ${y + 8} C72 ${y - 2} 84 ${y} 90 ${y + 6} C82 ${y + 12} 70 ${y + 11} 60 ${y + 8}Z"/>`;
  }
  const shapes = {
    vine: `<path d="M60 146 C55 120 70 105 62 85 C55 65 72 50 64 30 C60 20 66 10 72 5"/>
      <path d="M62 85 C45 78 35 92 48 102 C55 106 62 98 62 85Z"/>
      <path d="M64 55 C82 46 92 60 80 70 C73 75 65 68 64 55Z"/>
      <path d="M60 115 C78 108 86 122 74 130 C68 133 61 127 60 115Z"/>
      <path d="M66 30 C50 22 42 34 52 42 C58 45 65 40 66 30Z"/>
      <path d="M72 5 c6 2 8 8 4 12 c-3 3 -7 0 -5 -3"/>`,
    grass: `<path d="M60 148 C58 110 52 70 40 20"/><path d="M60 148 C62 105 70 70 86 30"/>
      <path d="M60 148 C55 120 40 95 22 80"/><path d="M60 148 C66 122 84 100 100 92"/>
      <path d="M60 148 C60 110 61 60 62 10"/>
      <path d="M62 10 l-6 6 M62 18 l6 6 M62 26 l-6 6 M62 34 l6 6 M62 42 l-6 6"/>`,
    shrub: `<path d="M60 148 V60 M60 104 C45 94 35 82 30 64 M60 86 C75 76 85 62 88 45 M60 60 C55 45 58 30 64 18"/>
      <ellipse cx="30" cy="58" rx="6" ry="13" transform="rotate(-25 30 58)"/>
      <ellipse cx="42" cy="88" rx="5" ry="11" transform="rotate(-60 42 88)"/>
      <ellipse cx="78" cy="66" rx="5" ry="11" transform="rotate(50 78 66)"/>
      <ellipse cx="54" cy="40" rx="5" ry="11" transform="rotate(-20 54 40)"/>
      <ellipse cx="72" cy="112" rx="5" ry="11" transform="rotate(55 72 112)"/>
      <circle cx="64" cy="14" r="5"/><circle cx="90" cy="40" r="4"/>`,
    herb
  };
  return `<svg viewBox="0 0 120 150" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${shapes[kind] || shapes.shrub}</g>
  </svg>`;
}

/* =========================================================
   4. STATIC PAGES
   ========================================================= */

function setSide(side, item) {
  const el = side === "left" ? pageLeft : pageRight;
  const key = `${mode}|${item}`;
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  el.innerHTML = item === null || item === undefined ? "" : pageHTML(item, side);
}

function setClosed(value) {
  stage.style.setProperty("--closed", value.toFixed(4));
}

function renderStatic() {
  leafLayer.replaceChildren();
  if (mode === "spread") {
    setSide("left", leftOf(view));
    setSide("right", rightOf(view));
    if (view < 0) addStaticLeaf({ side: "right", front: COVER, back: 0 }, 0);
    if (view >= SPREADS) addStaticLeaf({ side: "left", front: leftOf(view), back: BACK }, 1);
    setClosed(view < 0 || view >= SPREADS ? 1 : 0);
  } else {
    setSide("left", null);
    setSide("right", itemAt(view));
    setClosed(0);
  }
  updateChrome();
}

function addStaticLeaf(step, p) {
  const leaf = createLeaf({ ...step, order: 0, count: 1, persp: perspective(), isStatic: true });
  applyLeaf(leaf, p);
}

function visiblePages() {
  if (view < 0 || view >= lastView()) return [];
  return mode === "spread" ? [view * 2, view * 2 + 1] : [view];
}

function updateChrome() {
  const last = lastView();
  const closedFront = view < 0;
  const closedBack = view >= last;
  const visible = visiblePages();

  stage.dataset.mode = mode;
  stage.dataset.state = closedFront ? "closed-front" : closedBack ? "closed-back" : "open";

  prevBtn.disabled = closedFront;
  nextBtn.disabled = closedBack;
  prevLabel.textContent = closedBack ? "REOPEN" : view === 0 ? "COVER" : "PREVIOUS";
  nextLabel.textContent = closedFront ? "OPEN BOOK" : closedBack ? "THE END" : view === last - 1 ? "CLOSE BOOK" : "NEXT";

  progressLabel.textContent = closedFront
    ? "COVER"
    : closedBack
      ? "BACK COVER"
      : `${visible.map((i) => pad(i + 1)).join("–")} / ${pad(PAGES)}`;
  progressFill.style.width = `${((view + 1) / (last + 1)) * 100}%`;

  bookmarks.querySelectorAll(".tab").forEach((tab, i) => {
    if (visible.includes(i)) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  });
  pageSelect.value = closedFront ? "cover" : closedBack ? "back" : String(visible[0]);

  const share = (view + 1) / (last + 1);
  const shut = mode === "spread" && (closedFront || closedBack);
  edgeLeft.style.setProperty("--w", `${shut ? 0 : 2 + 10 * share}px`);
  edgeRight.style.setProperty("--w", `${shut ? 12 : 2 + 10 * (1 - share)}px`);

  cornerNext.hidden = dragTarget("right") === null;
  cornerPrev.hidden = dragTarget("left") === null;

  try {
    const url = visible.length ? `#page-${pad(visible[0] + 1)}` : location.pathname + location.search;
    history.replaceState(null, "", url);
  } catch (error) {
    /* some file:// contexts block this; navigation still works */
  }
}

function announce() {
  const last = lastView();
  if (view < 0) announcer.textContent = "Front cover. Select Open book to begin.";
  else if (view >= last) announcer.textContent = "Back cover.";
  else {
    announcer.textContent = visiblePages()
      .map((i) => `Page ${i + 1}: ${pages[i].title}`)
      .join(". ");
  }
}

/* =========================================================
   5. TURNING LEAVES
   A leaf is one sheet of paper. Its front is the page you lift;
   its back is exactly the page that will be there when it lands,
   so nothing swaps or jumps at the end of a turn.
   ========================================================= */

function perspective() {
  return Math.round(Math.max(1500, spread.clientWidth * (mode === "spread" ? 2.2 : 3)));
}

function stepFor(v, forward) {
  if (mode === "spread") {
    if (forward) {
      if (v < 0) return { side: "right", front: COVER, back: 0, kind: "open" };
      if (v === SPREADS - 1) return { side: "left", front: leftOf(v), back: BACK, kind: "close" };
      return { side: "right", front: rightOf(v), back: leftOf(v + 1) };
    }
    if (v === 0) return { side: "right", front: COVER, back: 0, kind: "unopen", reverse: true };
    if (v >= SPREADS) return { side: "left", front: leftOf(SPREADS - 1), back: BACK, kind: "reopen", reverse: true };
    return { side: "left", front: leftOf(v), back: rightOf(v - 1) };
  }
  return forward
    ? { side: "single", front: itemAt(v) }
    : { side: "single", front: itemAt(v - 1), reverse: true };
}

function createLeaf({ side, front, back, light = false, order = 0, count = 1, reverse = false, kind = null, persp, isStatic = false }) {
  const leaf = document.createElement("div");
  leaf.className = `leaf leaf-${side}${isStatic ? " is-static" : ""}`;
  const frontSide = side === "left" ? "left" : "right";
  const backSide = side === "left" ? "right" : "left";
  const backHTML = side === "single" ? pageHTML(BLANK, "left") : pageHTML(back, backSide, light);
  leaf.innerHTML = `
    <div class="face face-front">${pageHTML(front, frontSide, light)}<i class="shade"></i></div>
    <div class="face face-back">${backHTML}<i class="shade"></i></div>`;
  leaf.meta = { side, order, count, reverse, kind, persp };
  if (!isStatic) leaf.inert = true;
  leafLayer.append(leaf);
  return leaf;
}

/* p runs 0 → 1: 0 = lying flat where it starts, 1 = lying flat on the other side */
function applyLeaf(leaf, p) {
  const m = leaf.meta;
  const angle = m.side === "left" ? 180 * p : -180 * p;
  leaf.style.transform = `perspective(${m.persp}px) rotateY(${angle.toFixed(2)}deg)`;
  leaf.style.setProperty("--lift", Math.sin(Math.PI * p).toFixed(3));
  leaf.style.setProperty("--shade-front", Math.min(1, p * 2).toFixed(3));
  leaf.style.setProperty("--shade-back", Math.min(1, (1 - p) * 2).toFixed(3));
  const onStartSide = m.reverse ? p > 0.5 : p < 0.5;
  leaf.style.zIndex = onStartSide ? 100 + m.count - m.order : 300 + m.order;
  if (m.side === "single") leaf.style.opacity = p > 0.5 ? "0" : "1";
  if (m.kind) setClosed(closedness(m.kind, p));
}

/* how far the book is folded shut while a cover moves */
function closedness(kind, p) {
  const reveal = kind === "open" || kind === "unopen" ? -Math.cos(Math.PI * p) : Math.cos(Math.PI * p);
  return 1 - clamp(reveal * 1.12, 0, 1);
}

function tween({ from, to, duration, delay = 0, ease = easeInOut, update }) {
  return new Promise((resolve) => {
    update(from);
    const start = performance.now() + delay;
    const frame = (now) => {
      const t = duration <= 0 ? 1 : clamp((now - start) / duration, 0, 1);
      update(from + (to - from) * ease(t));
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });
}

function prepareTurn(from, to) {
  const forward = to > from;
  const steps = [];
  for (let v = from; v !== to; v += forward ? 1 : -1) steps.push(stepFor(v, forward));

  leafLayer.replaceChildren();

  // Reveal only the side the leaves are lifting off. The other side
  // updates when the last leaf lands on it.
  if (mode === "spread") {
    if (forward) setSide("right", rightOf(to));
    else setSide("left", leftOf(to));
  } else if (forward) {
    setSide("right", itemAt(to));
  }

  const n = steps.length;
  const persp = perspective();
  const leaves = steps.map((step, k) =>
    createLeaf({ ...step, order: k, count: n, persp, light: n > 2 && k > 0 && k < n - 1 })
  );
  leaves.forEach((leaf) => applyLeaf(leaf, leaf.meta.reverse ? 1 : 0));
  stage.dataset.turning = "";
  return { from, to, leaves, epoch };
}

function finishTurn(turn) {
  view = turn.to;
  renderStatic();
  delete stage.dataset.turning;
  announce();
}

async function animateTurn(from, to) {
  const turn = prepareTurn(from, to);
  const n = turn.leaves.length;
  // Riffle: leaves leave quickly at first, then spacing widens so the
  // turning slows down as it nears the page you asked for.
  const span = Math.min(220 + n * 60, 1100);

  await Promise.all(
    turn.leaves.map((leaf, k) => {
      const m = leaf.meta;
      const start = m.reverse ? 1 : 0;
      let duration = m.kind ? 1150 : 820;
      let delay = 0;
      let ease = easeInOut;
      if (n > 1) {
        const last = k === n - 1;
        delay = span * Math.pow(k / (n - 1), 1.6);
        duration = last ? 700 : 340;
        ease = last ? easeInOut : easeSine;
      }
      return tween({ from: start, to: 1 - start, duration, delay, ease, update: (p) => applyLeaf(leaf, p) });
    })
  );

  if (turn.epoch !== epoch) throw new Error("turn cancelled");
  finishTurn(turn);
}

async function runPhases(target) {
  const last = lastView();
  if (mode === "spread") {
    // the cover always opens or closes on its own, then the pages riffle
    if (view < 0 && target > 0) await animateTurn(-1, 0);
    else if (view >= last && target < last - 1) await animateTurn(last, last - 1);

    if (target < 0 && view > 0) await animateTurn(view, 0);
    else if (target >= last && view < last - 1) await animateTurn(view, last - 1);
  }
  if (view !== target) await animateTurn(view, target);
}

function goTo(target) {
  target = clamp(target, -1, lastView());
  if (busy) {
    queued = target;
    return;
  }
  if (target === view) return;

  if (calmQuery.matches) {
    view = target;
    renderStatic();
    book.classList.remove("is-fading");
    void book.offsetWidth;
    book.classList.add("is-fading");
    announce();
    return;
  }

  busy = true;
  runTarget = target;
  const myEpoch = epoch;
  runPhases(target)
    .catch(() => {})
    .finally(() => {
      if (myEpoch !== epoch) return;
      busy = false;
      runTarget = null;
      if (queued !== null) {
        const next = queued;
        queued = null;
        goTo(next);
      }
    });
}

function step(direction) {
  const base = queued ?? runTarget ?? view;
  goTo(base + direction);
}

function goToPage(i) {
  goTo(viewOfPage(i));
}

/* =========================================================
   6. DRAG A CORNER TO TURN
   ========================================================= */

function dragTarget(side) {
  const last = lastView();
  if (mode === "spread") {
    if (side === "right") return view >= last ? last - 1 : view < last - 1 ? view + 1 : null;
    return view >= 0 && view < last ? view - 1 : null;
  }
  if (side === "right") return view < last ? view + 1 : null;
  return view > -1 ? view - 1 : null;
}

function onCornerDown(event) {
  if (busy || drag || (event.pointerType === "mouse" && event.button !== 0)) return;
  const side = event.currentTarget === cornerNext ? "right" : "left";
  const target = dragTarget(side);
  if (target === null) return;
  event.preventDefault();
  event.currentTarget.setPointerCapture(event.pointerId);
  const rect = spread.getBoundingClientRect();
  drag = {
    id: event.pointerId,
    target,
    x0: event.clientX,
    y0: event.clientY,
    turn: null,
    p: 0,
    q: 0,
    q0: null,
    hinge: mode === "spread" ? rect.left + rect.width / 2 : rect.left,
    width: mode === "spread" ? rect.width / 2 : rect.width,
    epoch
  };
}

function onCornerMove(event) {
  if (!drag || event.pointerId !== drag.id) return;
  if (!drag.turn) {
    if (Math.hypot(event.clientX - drag.x0, event.clientY - drag.y0) < 6 || calmQuery.matches) return;
    busy = true;
    drag.turn = prepareTurn(view, drag.target);
  }
  const leaf = drag.turn.leaves[0];
  const m = leaf.meta;
  // the page's free edge follows the pointer: edge = hinge ± width·cos(angle)
  let c = (event.clientX - drag.hinge) / drag.width;
  if (m.side === "left") c = -c;
  const p = Math.acos(clamp(c, -1, 1)) / Math.PI;
  const q = m.reverse ? 1 - p : p;
  if (drag.q0 === null) drag.q0 = q;
  drag.p = p;
  drag.q = q;
  applyLeaf(leaf, p);
}

async function onCornerUp(event) {
  if (!drag || event.pointerId !== drag.id) return;
  const d = drag;
  drag = null;

  if (!d.turn) {
    if (event.type === "pointerup") goTo(d.target);
    return;
  }

  const leaf = d.turn.leaves[0];
  const m = leaf.meta;
  const done = event.type === "pointerup" && (d.q > 0.5 || d.q - d.q0 > 0.2);
  const endP = m.reverse ? (done ? 0 : 1) : done ? 1 : 0;

  await tween({
    from: d.p,
    to: endP,
    duration: Math.max(180, 650 * Math.abs(endP - d.p)),
    ease: easeOut,
    update: (p) => applyLeaf(leaf, p)
  });

  if (d.epoch !== epoch) return;
  if (done) finishTurn(d.turn);
  else {
    renderStatic();
    delete stage.dataset.turning;
  }
  busy = false;
  if (queued !== null) {
    const next = queued;
    queued = null;
    goTo(next);
  }
}

[cornerNext, cornerPrev].forEach((corner) => {
  corner.addEventListener("pointerdown", onCornerDown);
  corner.addEventListener("pointermove", onCornerMove);
  corner.addEventListener("pointerup", onCornerUp);
  corner.addEventListener("pointercancel", onCornerUp);
});

/* swipe anywhere on a touch screen */
spread.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" || event.target.closest(".corner, button, a, select")) return;
  swipe = { id: event.pointerId, x: event.clientX, y: event.clientY };
});

spread.addEventListener("pointerup", (event) => {
  if (!swipe || event.pointerId !== swipe.id) return;
  const dx = event.clientX - swipe.x;
  const dy = event.clientY - swipe.y;
  swipe = null;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.3) step(dx < 0 ? 1 : -1);
});

spread.addEventListener("pointercancel", () => {
  swipe = null;
});

/* =========================================================
   7. FOLD-OUT MAP
   ========================================================= */

function mapSVG() {
  const coast = "M0 0 H560 C600 60 560 120 610 170 C660 220 740 200 790 250 C850 310 820 380 880 430 C930 470 1010 450 1060 500 C1110 550 1180 540 1240 580 C1290 615 1300 660 1330 700 H0 Z";
  return `<svg viewBox="0 0 1500 700" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="sea-lines" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
        <line x1="0" y1="0" x2="0" y2="14" stroke="#8fa39a" stroke-width="1" opacity=".35"/>
      </pattern>
    </defs>
    <rect width="1500" height="700" fill="#e3ebe4"/>
    <rect width="1500" height="700" fill="url(#sea-lines)"/>
    <path d="${coast}" fill="#f5f0e1" stroke="#596d55" stroke-width="2.2"/>
    <path d="M600 0 C640 70 600 120 650 165 C700 210 780 195 830 245 C890 305 860 370 920 420 C970 460 1050 440 1100 490 C1150 535 1220 525 1280 565 C1330 600 1345 650 1375 700"
      fill="none" stroke="#7d968c" stroke-width="1.2" stroke-dasharray="6 7" opacity=".7"/>
    <g fill="none" stroke="#a4ab8e" stroke-width="1.2" opacity=".85">
      <path d="M70 470 C130 380 270 360 360 420 C430 470 400 560 300 590 C190 620 40 560 70 470 Z"/>
      <path d="M130 480 C170 430 260 420 310 455 C350 485 330 535 270 552 C200 570 110 530 130 480 Z"/>
      <path d="M60 150 C120 90 260 100 330 150 C390 195 350 270 260 285 C160 300 30 230 60 150 Z"/>
      <path d="M520 560 C580 510 690 520 730 570 C760 610 720 660 640 670 C560 678 480 610 520 560 Z"/>
    </g>
    <g fill="none" stroke="#7f9fa4" stroke-width="2" stroke-linecap="round">
      <path d="M110 700 C200 600 300 540 380 450 C450 370 520 300 600 178"/>
      <path d="M380 450 C330 420 300 360 250 330"/>
      <path d="M600 700 C700 620 780 560 850 470 C870 445 875 440 880 432"/>
      <path d="M900 700 C960 640 1010 580 1060 503"/>
    </g>
    <path d="M40 250 C200 300 340 270 470 330 C600 390 700 520 960 610 C1060 645 1150 660 1240 650"
      fill="none" stroke="#b8765c" stroke-width="1.6" stroke-dasharray="2 9" stroke-linecap="round"/>
    <g fill="#f5f0e1" stroke="#596d55" stroke-width="1.6">
      <path d="M1040 250 c22 -20 62 -12 68 10 c6 24 -32 34 -56 25 c-16 -6 -22 -22 -12 -35 Z"/>
      <path d="M1185 335 c14 -12 40 -8 44 6 c4 16 -20 22 -36 16 c-12 -4 -16 -14 -8 -22 Z"/>
      <path d="M930 140 c10 -8 28 -6 30 4 c3 11 -14 15 -25 11 c-8 -3 -10 -10 -5 -15 Z"/>
    </g>
    <g transform="translate(1385 150)" fill="none" stroke="#596d55" stroke-width="1.4">
      <circle r="42" opacity=".5"/>
      <path d="M0 -54 L9 0 L0 54 L-9 0 Z" fill="#596d55" fill-opacity=".15"/>
      <path d="M0 -54 L9 0 L-9 0 Z" fill="#b8765c" stroke="none"/>
      <text y="-62" text-anchor="middle" font-family="DM Mono, monospace" font-size="14" fill="#596d55" stroke="none">N</text>
    </g>
    <text x="1290" y="670" font-family="DM Mono, monospace" font-size="12" letter-spacing="2" fill="#596d55">NOT TO SCALE</text>
  </svg>`;
}

function buildFoldout() {
  const art = mapSVG();
  foldout.querySelectorAll(".fold-art").forEach((el) => {
    el.innerHTML = art;
  });
  foldout.querySelector(".pins").innerHTML = mapPins
    .map(
      (pin, i) => `<div class="pin${pin.x > 70 ? " pin-flip" : ""}" style="left:${pin.x}%;top:${pin.y}%">
        <button type="button" class="pin-dot" aria-expanded="false" aria-label="Pin ${i + 1}: ${pin.title}"><span>${i + 1}</span></button>
        <div class="pin-card"><span class="kicker">PIN ${pad(i + 1)}</span><strong>${pin.title}</strong><p>${pin.text}</p></div>
      </div>`
    )
    .join("");
}

let foldTrigger = null;
let foldTimer = 0;

function openFoldout(trigger) {
  clearTimeout(foldTimer);
  foldTrigger = trigger;
  foldout.hidden = false;
  stage.inert = true;
  void foldout.offsetWidth;
  foldout.classList.add("is-open");
  setTimeout(() => foldout.querySelector(".fold-close").focus({ preventScroll: true }), 60);
}

function closeFoldout() {
  foldout.classList.remove("is-open");
  foldout.querySelectorAll(".pin.is-open").forEach((pin) => pin.classList.remove("is-open"));
  stage.inert = false;
  foldTimer = setTimeout(() => {
    foldout.hidden = true;
  }, calmQuery.matches ? 0 : 1300);
  if (foldTrigger && foldTrigger.isConnected) foldTrigger.focus({ preventScroll: true });
}

foldout.addEventListener("click", (event) => {
  if (event.target.closest("[data-action='fold-map']")) {
    closeFoldout();
    return;
  }
  const dot = event.target.closest(".pin-dot");
  if (!dot) return;
  const pin = dot.parentElement;
  const opening = !pin.classList.contains("is-open");
  foldout.querySelectorAll(".pin").forEach((other) => {
    other.classList.remove("is-open");
    other.querySelector(".pin-dot").setAttribute("aria-expanded", "false");
  });
  if (opening) {
    pin.classList.add("is-open");
    dot.setAttribute("aria-expanded", "true");
  }
});

/* =========================================================
   8. CONTROLS
   ========================================================= */

spread.addEventListener("click", (event) => {
  const el = event.target.closest("[data-action], [data-goto], [data-flip]");
  if (!el || el.closest(".leaf:not(.is-static)")) return;

  if ("flip" in el.dataset) {
    const flipped = el.classList.toggle("is-flipped");
    el.setAttribute("aria-pressed", String(flipped));
    return;
  }
  if (el.dataset.goto) {
    goToPage(Number(el.dataset.goto));
    return;
  }
  const action = el.dataset.action;
  if (action === "open") goTo(0);
  else if (action === "close") goTo(lastView());
  else if (action === "reopen") goTo(lastView() - 1);
  else if (action === "to-cover") goTo(-1);
  else if (action === "unfold-map") openFoldout(el);
});

prevBtn.addEventListener("click", () => step(-1));
nextBtn.addEventListener("click", () => step(1));

pages.forEach((page, i) => {
  const tab = document.createElement("a");
  tab.className = "tab";
  tab.href = `#page-${pad(i + 1)}`;
  tab.title = `${pad(i + 1)} — ${page.title}`;
  tab.setAttribute("aria-label", `Go to page ${pad(i + 1)}: ${page.title}`);
  tab.innerHTML = `<span>${pad(i + 1)}</span>`;
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    goToPage(i);
  });
  bookmarks.append(tab);
});

pageSelect.innerHTML =
  `<option value="cover">Front cover</option>` +
  pages.map((page, i) => `<option value="${i}">${pad(i + 1)} — ${page.title}</option>`).join("") +
  `<option value="back">Back cover</option>`;

pageSelect.addEventListener("change", () => {
  const value = pageSelect.value;
  if (value === "cover") goTo(-1);
  else if (value === "back") goTo(lastView());
  else goToPage(Number(value));
});

document.addEventListener("keydown", (event) => {
  if (!foldout.hidden) {
    if (event.key === "Escape") closeFoldout();
    return;
  }
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.target instanceof Element && event.target.closest("input, textarea, select")) return;

  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    step(1);
  } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    step(-1);
  } else if (event.key === "Home") {
    goTo(0);
  } else if (event.key === "End") {
    goTo(lastView() - 1);
  }
});

/* switch between two-page and one-page layouts without losing your place */
wideQuery.addEventListener("change", () => {
  const last = lastView();
  const anchor = view < 0 ? "cover" : view >= last ? "back" : mode === "spread" ? view * 2 : view;
  epoch += 1;
  busy = false;
  queued = null;
  runTarget = null;
  drag = null;
  delete stage.dataset.turning;
  mode = wideQuery.matches ? "spread" : "single";
  view = anchor === "cover" ? -1 : anchor === "back" ? lastView() : viewOfPage(anchor);
  renderStatic();
});

/* =========================================================
   9. START
   ========================================================= */

const fromHash = location.hash.match(/^#page-(\d+)$/);
if (fromHash) view = viewOfPage(clamp(Number(fromHash[1]) - 1, 0, PAGES - 1));

stage.dataset.mode = mode;
buildFoldout();
renderStatic();
announce();
