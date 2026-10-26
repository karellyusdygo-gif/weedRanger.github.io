"use strict";

/* =========================================================
   1. YOUR CONTENT — edit the arrays below
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

/* Weighted decision matrix. Scores and reasons are the team's own.
   Ratings are worked out from each score: 90–100% Fully meets,
   70–89% Mostly meets, 50–69% Partly meets, below 50% Weak. */
const criteria = [
  { key: "eff", name: "Effectiveness", short: "Effectiveness", max: 35 },
  { key: "off", name: "Offline usability", short: "Offline", max: 20 },
  { key: "rem", name: "Remote field operability", short: "Remote field", max: 20 },
  { key: "mnt", name: "Maintainability", short: "Maintain.", max: 15 },
  { key: "trn", name: "Minimal training", short: "Training", max: 10 }
];

const ratingScale = [
  { label: "Fully meets", range: "90–100%", text: "Works fully with Lama Lama Country conditions" },
  { label: "Mostly meets", range: "70–89%", text: "Works well with small limits" },
  { label: "Partly meets", range: "50–69%", text: "Works, but with clear limits" },
  { label: "Weak", range: "Below 50%", text: "Big barriers to use on Lama Lama Country" }
];

const solutions = [
  {
    id: "app", short: "Offline App", selected: true,
    name: "Offline Ranger Prioritisation & Support App",
    scores: { eff: 30, off: 19, rem: 18, mnt: 14, trn: 9 },
    reasons: {
      eff: "Covers the whole need: finding, keeping track and deciding what comes first. It loses a few points only because Rangers still have to reach a site to spot weeds.",
      off: "Built to work offline first; every record is saved on the phone and uploads later.",
      rem: "Runs on a phone that can be carried anywhere.",
      mnt: "Phones are easy to replace, and the app can be updated remotely.",
      trn: "Uses normal phone steps: take a photo, choose the weed, save."
    },
    verdict: [
      "Covers the whole need: finding, keeping track and deciding what comes first.",
      "Built to work offline first; records upload later.",
      "Phones are easy to replace, and the app can be updated remotely."
    ]
  },
  {
    id: "drone", short: "Drone + ML",
    name: "Drone + Machine-Learning Aerial Survey",
    scores: { eff: 28, off: 14, rem: 16, mnt: 6, trn: 5 },
    reasons: {
      eff: "Very good at finding and mapping weeds, but does not keep treatment history, remind Rangers to go back, or help decide what comes first.",
      off: "The drone flies without internet, but the computer program and photo uploads need strong internet.",
      rem: "Limited by battery life, weather and thick plants, although it can reach places a vehicle cannot.",
      mnt: "Drones need repairs and special parts, often from Cairns.",
      trn: "Needs drone-flying training and skills to check the photos."
    },
    verdict: [
      "Maps weeds but keeps no history or reminders.",
      "Needs a pilot, batteries, and specialist repairs.",
      "Photos need a strong internet connection to process."
    ]
  },
  {
    id: "ai", short: "AI Photo ID",
    name: "AI Photo-Based Weed Identification",
    scores: { eff: 24, off: 10, rem: 18, mnt: 8, trn: 8 },
    reasons: {
      eff: "Helps name weeds, but does not keep treatment history, remind Rangers to go back, or help decide what comes first.",
      off: "The weed-guessing program usually needs internet or frequent updates.",
      rem: "Runs on a phone that can be carried anywhere.",
      mnt: "The weed-guessing ML model needs ongoing re-training.",
      trn: "Uses normal phone steps, like the Offline App."
    },
    verdict: [
      "Names weeds but gives no reminders or priorities.",
      "Usually needs internet or regular updates.",
      "AI model must keep being re-trained."
    ]
  },
  {
    id: "spray", short: "Spot-spray",
    name: "Portable Spot-Spray Device",
    scores: { eff: 15, off: 18, rem: 8, mnt: 12, trn: 8 },
    reasons: {
      eff: "Only helps with spraying. It does not help Rangers find weeds, keep track of sites or decide what comes first.",
      off: "A hand sprayer needs no signal or internet at all.",
      rem: "Heavy to carry on foot over long distances, and needs refilling with water and chemical, which limits how far Rangers can take it.",
      mnt: "Simple parts such as nozzles and seals are easy to replace, but chemicals need safe storage.",
      trn: "Simple to use, but safe chemical handling still needs training."
    },
    verdict: [
      "Only helps with spraying, not tracking sites.",
      "Heavy to carry far and needs refilling."
    ]
  }
];

/* "Why is it chosen?" — the four user needs and the app features that meet them.
   box = highlight on the screenshot as [left, top, right, bottom] in % of the image. */
const appScreens = {
  sites: { src: "images/fig6-sites-screen.jpg", fig: 6, name: "Sites list screen" },
  report: { src: "images/fig5-report-screen.jpg", fig: 5, name: "Report a weed screen" }
};

const appNeeds = [
  {
    key: "detect", name: "Detect", need: "Find and record weeds, even with no signal",
    features: [
      { title: "Works offline", screen: "sites", text: "Saves records with no signal and uploads them later.", tag: "Offline usability 19/20", boxes: [[67.5, 4.8, 87.8, 9]] },
      { title: "Six priority weeds", screen: "report", text: "A fixed list of the six weeds keeps everyone’s records the same.", tag: "Minimal training 9/10", boxes: [[3.2, 18, 78.8, 35.6]] },
      { title: "GPS without internet", screen: "report", text: "The phone’s GPS works with no signal.", tag: "Offline usability 19/20", boxes: [[3.2, 64.9, 96.8, 73.2]] }
    ]
  },
  {
    key: "monitor", name: "Monitor", need: "Keep track of treated sites and go back on time",
    features: [
      { title: "Overdue re-checks first", screen: "sites", text: "Warns when a treated site is late for its check, so it is not forgotten.", tag: "Effectiveness 30/35", boxes: [[6.6, 34.6, 33.8, 38.3]] },
      { title: "Photo evidence", screen: "report", text: "Photos are kept to compare later visits.", tag: "Effectiveness 30/35", boxes: [[3.2, 37.2, 96.8, 63.4]] }
    ]
  },
  {
    key: "prioritise", name: "Prioritise", need: "Decide which site needs attention first",
    features: [
      { title: "Sorted by urgency", screen: "sites", text: "Puts the most urgent sites first, to plan short field days.", tag: "Effectiveness 30/35", boxes: [[3.2, 24.4, 36, 29.2], [3.2, 57.3, 40, 62]] },
      { title: "Navigate to the site", screen: "sites", text: "Gives directions to the saved location.", tag: "Remote field operability 18/20", boxes: [[6.6, 48.6, 37.4, 53.6]] }
    ]
  },
  {
    key: "control", name: "Ranger control", need: "Keep Rangers and YAC in control of their information",
    features: [
      { title: "Checked before listing", screen: "report", text: "Reports are checked first, so Rangers and YAC stay in control.", tag: "Must-have rule", boxes: [[3.2, 10.2, 79.2, 13.2]] }
    ]
  }
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
  /* ---- Design process & decision-making (from the team's draft) ---- */
  {
    type: "section", chapter: 6,
    title: "Design Process & Decision-Making",
    tag: "DESIGN PROCESS",
    blocks: [
      { p: "We wanted to focus on a solution that could operate within the practical conditions of Lama Lama Country. Particular attention for the proposed solution was given to offline capability, easy to use, field conditions, maintainability, and the ability to improve weed-management system." },
      { p: "We used the user need and project constraints to guide ideation, screening and final selection." },
      { h: "Design Solution Options" },
      { options: [
        ["Portable Spot-Spray Device", "A portable field device designed to apply herbicide directly to identified weed infestations. It supports targeted treatment while Rangers are working to check identified infestations.", 1],
        ["Offline Ranger Prioritisation & Support App", "An offline application that records weed locations, photos, treatment details, and follow-up information. It also organises infestation records to help Rangers monitor and prioritise sites.", 2],
        ["AI Photo-Based Weed Identification", "An image-recognition tool that analyses photographs of weeds to assist with species identification. The identified weed information can then be used to support field recording and management.", 3],
        ["Drone + Machine-Learning Aerial Survey", "A drone-based system that captures aerial imagery across larger areas of Country. Machine-learning analysis is used to identify and map possible weed infestations from the collected imagery.", 4]
      ] }
    ]
  },
  {
    type: "section", chapter: 6, cont: true,
    title: "Design options in the field",
    heading: "Design options in the field",
    blocks: [
      { figures: [
        { n: 1, src: "images/fig1-spot-spray.jpg", title: "Lama Lama Ranger using a portable spot-spray device", source: "OpenAI, 2026" },
        { n: 2, src: "images/fig2-offline-app.jpg", title: "Lama Lama Ranger using an offline weed management application", source: "OpenAI, 2026" },
        { n: 3, src: "images/fig3-photo-id.jpg", title: "Lama Lama Ranger using AI photo-based weed identification", source: "OpenAI, 2026" },
        { n: 4, src: "images/fig4-drone.jpg", title: "Drone detecting weed infestations", source: "OpenAI, 2026" }
      ] }
    ]
  },
  { type: "matrix", chapter: 6, cont: true, toc: true, title: "Weighted Decision Matrix" },
  { type: "matrix-detail", chapter: 6, cont: true, title: "Scores explained" },
  { type: "podium", chapter: 6, cont: true, toc: true, title: "The Selected Solution" },
  { type: "why", chapter: 6, cont: true, toc: true, title: "Why is it chosen?" },
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
    items: [
      `Engineers Without Borders Australia. (2026a). <i>About Tropical North Queensland</i>. EWB Challenge. <a href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/about-tropical-north-queensland/" target="_blank" rel="noopener">https://ewbchallenge.org/challenge/port-stewart-lama-lama/about-tropical-north-queensland/</a>`,
      `Engineers Without Borders Australia. (2026b). <i>Design Area 4 – Augmenting the ranger program: Weed management innovation</i>. EWB Challenge. <a href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-area-4-augmenting-the-ranger-program/" target="_blank" rel="noopener">https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-area-4-augmenting-the-ranger-program/</a>`,
      `Engineers Without Borders Australia. (2026c). <i>Design considerations</i>. EWB Challenge. <a href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-considerations/" target="_blank" rel="noopener">https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-considerations/</a>`,
      `OpenAI. (2026). <i>ChatGPT</i> (October 25 version) [Text-to-image model]. <a href="https://chatgpt.com/" target="_blank" rel="noopener">https://chatgpt.com/</a>`,
      `Weeds Australia. (n.d.). <i>Monitoring</i>. <a href="https://weeds.org.au/manage/monitoring/" target="_blank" rel="noopener">https://weeds.org.au/manage/monitoring/</a>`,
      `Yintjingga Aboriginal Corporation. (n.d.). <i>Weed monitoring</i>. Welcome to Lama Lama Country. <a href="https://www.lamalama.org.au/weed-monitoring/" target="_blank" rel="noopener">https://www.lamalama.org.au/weed-monitoring/</a>`
    ]
  }
];

/* =========================================================
   2. SET-UP
   ========================================================= */

if (pages.length % 2) pages.push({ type: "blank", title: "End paper" });

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
  if (page.type === "blank") return `<div class="page-sheet ${hinge} endpaper"></div>`;
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
            if (i < 3 || entry.type === "blank" || (entry.cont && !entry.toc)) return "";
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
      return `<div class="chapter${page.details ? " has-map" : ""}">
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
        ${page.details ? locationMapHTML() : `<figure class="page-art" aria-hidden="true">
          <span class="art-orbit"></span>
          <span class="art-seed">r</span>
          <figcaption class="art-caption">${page.art.toUpperCase()}</figcaption>
        </figure>`}
      </div>`;

    case "section":
      return `<div class="section">
        <span class="kicker">CHAPTER ${pad(page.chapter)} <i>·</i> ${page.cont ? "CONTINUED" : page.tag}</span>
        <h2 class="page-title${page.cont ? " is-sub" : ""}">${page.heading || page.title}</h2>
        ${page.blocks.map(blockHTML).join("")}
      </div>`;

    case "matrix":
      return `<div class="section">
        <span class="kicker">CHAPTER ${pad(page.chapter)} <i>·</i> CONTINUED</span>
        <h2 class="page-title is-sub">${page.title}</h2>
        <p class="sec-p">Each option was scored against the five weighted criteria. Pick a criterion to focus on it, or build the score to watch each total add up.</p>
        ${matrixHTML()}
      </div>`;

    case "matrix-detail":
      return `<div class="section">
        <span class="kicker">CHAPTER ${pad(page.chapter)} <i>·</i> CONTINUED</span>
        ${detailHTML()}
      </div>`;

    case "podium":
      return `<div class="section">
        <span class="kicker">CHAPTER ${pad(page.chapter)} <i>·</i> CONTINUED</span>
        <h2 class="page-title is-sub">The selected solution is…</h2>
        <p class="sec-p">The four options ranked by total score. Tap a column to see why each option was, or was not, chosen.</p>
        ${podiumHTML()}
      </div>`;

    case "why":
      return `<div class="section">
        <span class="kicker">CHAPTER ${pad(page.chapter)} <i>·</i> CONTINUED</span>
        <h2 class="page-title is-sub">${page.title}</h2>
        <p class="sec-p">Pick a need. The phone shows the prototype screen and highlights the features that meet it.</p>
        ${whyHTML()}
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
        <h2 class="page-title refs-title">${page.title}</h2>
        <ul class="ref-list">${page.items.map((r) => `<li>${r}</li>`).join("")}</ul>
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
  if (b.options) {
    return `<ol class="opts">${b.options
      .map(([name, text, fig], i) => `<li>
        <span class="opt-no">${i + 1}</span>
        <div><h4>${name}</h4><p>${text}<span class="opt-fig">See Figure ${fig}</span></p></div>
      </li>`)
      .join("")}</ol>`;
  }
  if (b.figures) {
    return `<div class="figs">${b.figures
      .map((f) => `<figure class="apa-fig">
        <figcaption><b>Figure ${f.n}</b><i>${f.title}</i></figcaption>
        <img src="${f.src}" alt="${f.title}" loading="lazy" decoding="async">
        <span class="fig-src">(Source: ${f.source})</span>
      </figure>`)
      .join("")}</div>`;
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
   3b. INTERACTIVE PAGES — decision matrix, podium, app walkthrough
   ========================================================= */

const ui = { crit: "all", view: "bars", need: "detect", feature: 0 };

const totalOf = (s) => criteria.reduce((sum, c) => sum + s.scores[c.key], 0);
const ranked = () => [...solutions].sort((a, b) => totalOf(b) - totalOf(a));

function ratingOf(score, max) {
  const pct = (score / max) * 100;
  if (pct >= 90) return { label: "Fully meets", cls: "full" };
  if (pct >= 70) return { label: "Mostly meets", cls: "most" };
  if (pct >= 50) return { label: "Partly meets", cls: "part" };
  return { label: "Weak", cls: "weak" };
}

const MATRIX_NOTE = `<p class="apa-note"><i>Note.</i> Criteria partly adapted from Engineers Without Borders Australia (2026b). All scores are the team’s own.</p>`;

function chipsHTML() {
  const chip = (key, label, max) =>
    `<button type="button" class="chip" data-dm-crit="${key}" aria-pressed="${ui.crit === key}">${label}${max ? `<span>${max}</span>` : ""}</button>`;
  return `<div class="chips" role="group" aria-label="Show criterion">
    ${chip("all", "All criteria")}${criteria.map((c) => chip(c.key, c.name, c.max)).join("")}
  </div>`;
}

function matrixHTML() {
  const list = ranked();
  const bars = ui.view === "bars";
  return `<div class="dm" data-widget="matrix" data-crit="${ui.crit}">
    ${chipsHTML()}
    <div class="dm-tools">
      ${bars ? `<button type="button" class="dm-tool" data-dm-build><span aria-hidden="true">▶</span> Build the score</button>` : ""}
      <button type="button" class="dm-tool" data-dm-view="${bars ? "table" : "bars"}">${bars ? "Table view" : "Bar view"}</button>
    </div>
    <p class="apa-label"><b>Table 1</b><i>Weighted Decision Matrix</i></p>
    ${bars ? barsHTML(list) : tableHTML(list)}
    ${MATRIX_NOTE}
  </div>`;
}

function barsHTML(list) {
  return `<div class="dm-head" aria-hidden="true">
      <span class="dm-cols">${criteria.map((c) => `<span style="flex:${c.max}" class="${ui.crit === c.key ? "on" : ""}">${c.short}</span>`).join("")}</span>
      <span class="dm-total-h">Total</span>
    </div>
    <ol class="dm-rows">${list
      .map((s, oi) => `<li class="dm-row${s.selected ? " is-top" : ""}">
        <span class="dm-name"><b>${s.name}</b>${s.selected ? `<span class="dm-badge">Highest</span>` : ""}</span>
        <span class="dm-line">
          <span class="dm-bar" role="img" aria-label="${s.name}: ${criteria.map((c) => `${c.name} ${s.scores[c.key]} of ${c.max}`).join(", ")}">
            ${criteria
              .map((c, ci) => `<span class="dm-seg${ui.crit === c.key ? " on" : ""}" style="flex:${c.max}">
                <i class="dm-fill" style="width:${((s.scores[c.key] / c.max) * 100).toFixed(1)}%;--ci:${ci};--oi:${oi}"></i>
                ${ui.crit === c.key ? `<em>${s.scores[c.key]}/${c.max}</em>` : ""}
              </span>`)
              .join("")}
          </span>
          <span class="dm-total"><b data-total="${totalOf(s)}">${totalOf(s)}</b><small>/100</small></span>
        </span>
      </li>`)
      .join("")}</ol>`;
}

function tableHTML(list) {
  return `<div class="dm-table-wrap"><table class="dm-table">
    <thead><tr><th scope="col">Solution</th>${criteria
      .map((c) => `<th scope="col" class="${ui.crit === c.key ? "on" : ""}">${c.name} (${c.max})</th>`)
      .join("")}<th scope="col">Total (100)</th></tr></thead>
    <tbody>${list
      .map((s) => `<tr class="${s.selected ? "is-top" : ""}"><th scope="row">${s.name}</th>${criteria
        .map((c) => `<td class="${ui.crit === c.key ? "on" : ""}">${s.scores[c.key]}</td>`)
        .join("")}<td><b>${totalOf(s)}</b></td></tr>`)
      .join("")}</tbody>
  </table></div>`;
}

function detailHTML() {
  const c = criteria.find((x) => x.key === ui.crit);
  const list = ranked();
  if (!c) {
    return `<div class="dm-detail" data-widget="detail">
      <h2 class="page-title is-sub">Scores explained</h2>
      ${chipsHTML()}
      <h3 class="sec-h">All criteria</h3>
      <p class="sec-p">Totals: ${list.map((s) => `${s.short} <b>${totalOf(s)}</b>`).join(", ")}. Pick a criterion to read the rating and reason for each option.</p>
      <h3 class="sec-h">Rating scale</h3>
      <ul class="scale">${ratingScale
        .map((r, i) => `<li><span class="rate rate-${["full", "most", "part", "weak"][i]}">${r.label}</span><b>${r.range}</b><p>${r.text}</p></li>`)
        .join("")}</ul>
      ${MATRIX_NOTE}
    </div>`;
  }
  return `<div class="dm-detail" data-widget="detail">
    <h2 class="page-title is-sub">Scores explained</h2>
    ${chipsHTML()}
    <h3 class="sec-h">${c.name} · ${c.max} of 100 points</h3>
    <p class="sec-p">Rating and reason for each option:</p>
    <ul class="reasons">${list
      .map((s) => {
        const score = s.scores[c.key];
        const r = ratingOf(score, c.max);
        return `<li class="${s.selected ? "is-top" : ""}">
          <span class="r-top"><b>${s.name}</b><span class="rate rate-${r.cls}">${r.label}</span><span class="r-score">${score} / ${c.max}</span></span>
          <p>${s.reasons[c.key]}</p>
        </li>`;
      })
      .join("")}</ul>
    ${MATRIX_NOTE}
  </div>`;
}

/* ---------- podium ---------- */

function confettiHTML() {
  const colors = ["#b8765c", "#596d55", "#e1c49e", "#7d9a8e", "#d79a78", "#28382f"];
  let html = "";
  for (let i = 0; i < 34; i += 1) {
    const r = (n) => (Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1;
    const a = Math.abs(r(1)), b = Math.abs(r(2)), c = Math.abs(r(3));
    html += `<i style="--x:${((a - 0.5) * 300).toFixed(0)}px;--y:${(70 + b * 130).toFixed(0)}px;--r:${(c * 720 - 360).toFixed(0)}deg;--d:${(b * 0.35).toFixed(2)}s;--c:${colors[i % colors.length]};--w:${i % 3 ? 7 : 5}px;--h:${i % 2 ? 11 : 6}px"></i>`;
  }
  return html;
}

function podiumHTML() {
  const list = ranked();
  const order = [list[1], list[0], list[2], list[3]].filter(Boolean);
  const heights = { 1: 100, 2: 76, 3: 67, 4: 58 };
  const delays = { 4: 0.1, 3: 0.45, 2: 0.8, 1: 1.55 };
  const winner = list[0];
  return `<div class="podium-wrap" data-widget="podium">
    <div class="podium-bar">
      <p class="podium-winner"><span>Selected:</span> ${winner.name} · ${totalOf(winner)}/100</p>
      <button type="button" class="dm-tool" data-replay><span aria-hidden="true">↻</span> Replay reveal</button>
    </div>
    <div class="podium">
      <span class="spotlight" aria-hidden="true"></span>
      <span class="confetti" aria-hidden="true">${confettiHTML()}</span>
      ${order
        .map((s) => {
          const rank = list.indexOf(s) + 1;
          return `<button type="button" class="pcol${rank === 1 ? " is-first" : ""}" data-pick="${s.id}"
              style="--h:${heights[rank]}%;--delay:${delays[rank]}s"
              aria-label="Rank ${rank}: ${s.name}, ${totalOf(s)} out of 100. Show why.">
            <span class="pcol-rank">${rank}</span>
            <span class="pcol-name">${s.short}</span>
            ${rank === 1 ? `<span class="pcol-chip">★ Selected</span>` : ""}
            <span class="pcol-score"><b>${totalOf(s)}</b><small>/100</small></span>
            <span class="pcol-tap">↻ Tap to see why</span>
          </button>`;
        })
        .join("")}
    </div>
    <div class="flash" aria-live="polite">
      <div class="flash-inner">
        <div class="flash-face flash-a"><p class="flash-hint">Tap a column to flip this card and see why each option was, or was not, chosen.</p></div>
        <div class="flash-face flash-b"></div>
      </div>
    </div>
  </div>`;
}

function flashCardHTML(s) {
  const list = ranked();
  const rank = list.indexOf(s) + 1;
  return `<span class="flash-rank">#${rank} · ${totalOf(s)}/100</span>
    <h4>${s.name}</h4>
    <span class="flash-label ${s.selected ? "is-yes" : ""}">${s.selected ? "Why it was selected" : "Reason rejected"}</span>
    <ul>${s.verdict.map((v) => `<li>${v}</li>`).join("")}</ul>`;
}

/* ---------- app walkthrough ---------- */

function whyHTML() {
  const need = appNeeds.find((n) => n.key === ui.need) || appNeeds[0];
  const feature = need.features[ui.feature] || need.features[0];
  const screen = appScreens[feature.screen];
  return `<div class="why" data-widget="why">
    <div class="needs" role="tablist" aria-label="User needs">${appNeeds
      .map((n) => `<button type="button" role="tab" class="need" data-need="${n.key}" aria-selected="${n.key === need.key}">
        <b>${n.name}</b><span>${n.need}</span>
      </button>`)
      .join("")}</div>
    <div class="why-body">
      <figure class="phone-fig">
        <span class="phone">
          <span class="phone-screen">
            <img src="${screen.src}" alt="Offline Ranger Prioritisation & Support App: ${screen.name}" decoding="async">
            ${feature.boxes
              .map(([l, t, r, b]) => `<span class="hl" style="left:${l}%;top:${t}%;width:${r - l}%;height:${b - t}%"></span>`)
              .join("")}
          </span>
        </span>
        <figcaption><b>Figure ${screen.fig}</b><i>Offline Ranger Prioritisation &amp; Support App: ${screen.name}</i><span>(Screenshot by the authors)</span></figcaption>
      </figure>
      <div class="feats">
        <span class="feats-k">RANGERS NEED TO…</span>
        <p class="feats-need">${need.need.charAt(0).toLowerCase() + need.need.slice(1)}.</p>
        <ol class="feat-list">${need.features
          .map((f, i) => `<li><button type="button" class="feat" data-feature="${i}" aria-pressed="${f === feature}">
            <span class="feat-no">${i + 1}</span>
            <span class="feat-body">
              <b>${f.title}</b>
              <span class="feat-text">${f.text}</span>
              <span class="feat-tags"><span class="tag tag-screen">${appScreens[f.screen].name}</span><span class="tag">${f.tag}</span></span>
            </span>
          </button></li>`)
          .join("")}</ol>
      </div>
    </div>
  </div>`;
}

/* ---------- widget refresh + arrival animations ---------- */

const WIDGETS = { matrix: matrixHTML, detail: detailHTML, why: whyHTML };

function refreshWidgets(names) {
  [pageLeft, pageRight].forEach((side) => {
    names.forEach((name) => {
      side.querySelectorAll(`[data-widget="${name}"]`).forEach((el) => {
        el.outerHTML = WIDGETS[name]();
      });
      side.querySelectorAll(`[data-widget="${name}"]`).forEach((el) => {
        el.dataset.played = "";
      });
    });
  });
}

function buildScore(dm) {
  if (!dm || !dm.querySelector(".dm-fill")) return;
  dm.classList.remove("is-building");
  dm.classList.add("is-zero");
  void dm.offsetWidth;
  dm.classList.remove("is-zero");
  dm.classList.add("is-building");
  const duration = calmQuery.matches ? 0 : 2500;
  dm.querySelectorAll("[data-total]").forEach((el) => {
    const end = Number(el.dataset.total);
    tween({ from: 0, to: end, duration, ease: easeOut, update: (v) => { el.textContent = Math.round(v); } });
  });
}

function revealPodium(wrap) {
  wrap.classList.remove("is-revealed");
  void wrap.offsetWidth;
  wrap.classList.add("is-revealed");
}

function playArrivals() {
  [pageLeft, pageRight].forEach((side) => {
    side.querySelectorAll('[data-widget="podium"]:not([data-played])').forEach((w) => {
      w.dataset.played = "";
      revealPodium(w);
    });
    side.querySelectorAll('[data-widget="matrix"]:not([data-played])').forEach((w) => {
      w.dataset.played = "";
      buildScore(w);
    });
    side.querySelectorAll('[data-widget]:not([data-played])').forEach((w) => {
      w.dataset.played = "";
    });
  });
}

spread.addEventListener("click", (event) => {
  const el = event.target.closest("[data-dm-crit], [data-dm-build], [data-dm-view], [data-pick], [data-replay], [data-need], [data-feature]");
  if (!el || el.closest(".leaf")) return;
  const d = el.dataset;

  if (d.dmCrit) {
    ui.crit = d.dmCrit;
    refreshWidgets(["matrix", "detail"]);
  } else if ("dmBuild" in d) {
    buildScore(el.closest(".dm"));
  } else if (d.dmView) {
    ui.view = d.dmView;
    refreshWidgets(["matrix"]);
  } else if (d.pick) {
    const wrap = el.closest(".podium-wrap");
    const flash = wrap.querySelector(".flash");
    const s = solutions.find((x) => x.id === d.pick);
    const flipped = flash.classList.contains("is-flipped");
    flash.querySelector(flipped ? ".flash-a" : ".flash-b").innerHTML = flashCardHTML(s);
    flash.classList.toggle("is-flipped");
    wrap.querySelectorAll(".pcol").forEach((col) => col.classList.toggle("is-picked", col === el));
  } else if ("replay" in d) {
    revealPodium(el.closest(".podium-wrap"));
  } else if (d.need) {
    ui.need = d.need;
    ui.feature = 0;
    refreshWidgets(["why"]);
  } else if (d.feature) {
    ui.feature = Number(d.feature);
    refreshWidgets(["why"]);
  }
});

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
  requestAnimationFrame(playArrivals);
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
   7. LOCATION MAP
   Coastline: Natural Earth (public domain), via world-atlas.
   Port Stewart 14.07°S 143.69°E. The glow marks the general
   area of Lama Lama Country, not an exact boundary.
   ========================================================= */

const LOCATION_MAP_SVG = "<svg class=\"loc-map\" viewBox=\"0 0 400 520\" role=\"img\" aria-labelledby=\"locmap-title-__U__ locmap-desc-__U__\"> <title id=\"locmap-title-__U__\">Location of Lama Lama Country</title> <desc id=\"locmap-desc-__U__\">Map of Cape York Peninsula, Queensland. Lama Lama Country is on the east coast around Port Stewart and Princess Charlotte Bay, about 590 kilometres north-north-west of Cairns.</desc> <defs> <pattern id=\"lm-sea-__U__\" width=\"9\" height=\"9\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(30)\"> <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"9\" stroke=\"#9db3aa\" stroke-width=\"0.8\" opacity=\".45\"/> </pattern> <radialGradient id=\"lm-glow-__U__\"> <stop offset=\"0\" stop-color=\"#b8765c\" stop-opacity=\".42\"/> <stop offset=\".65\" stop-color=\"#b8765c\" stop-opacity=\".16\"/> <stop offset=\"1\" stop-color=\"#b8765c\" stop-opacity=\"0\"/> </radialGradient> </defs> <rect width=\"400\" height=\"520\" fill=\"#e4ece6\"/> <rect width=\"400\" height=\"520\" fill=\"url(#lm-sea-__U__)\"/> <path d=\"M-5,506.0L-4.7,506.0L-3.7,505.2L-3.0,503.7L-1.2,498.3L-0.5,492.1L0.2,489.3L0.7,488.6L2.2,486.9L2.7,484.6L3.0,484.0L3.5,483.0L4.2,478.3L4.0,476.9L3.5,475.6L3.2,474.2L4.0,473.0L10.6,464.5L12.8,458.2L13.3,458.0L14.6,457.9L15.1,457.7L15.6,457.2L17.1,455.1L20.9,451.1L21.4,449.9L21.7,448.8L22.7,446.4L23.4,441.5L24.2,440.3L25.2,440.5L27.0,437.6L27.5,435.8L27.7,434.4L28.2,432.9L28.2,432.0L28.0,431.5L27.5,431.1L27.2,430.4L27.2,429.0L27.7,428.1L29.3,426.0L29.8,424.7L30.0,423.2L31.0,420.4L31.5,419.0L31.5,416.1L31.8,415.3L32.3,414.2L32.8,412.8L36.8,405.6L37.3,404.1L35.8,402.6L33.6,395.1L33.6,394.5L33.8,393.6L35.1,392.7L35.3,391.8L35.6,388.8L37.8,374.1L41.1,361.6L46.9,347.7L47.4,346.5L47.4,344.1L47.7,342.7L48.2,341.7L49.5,341.6L49.0,340.1L49.7,339.0L51.0,338.3L51.7,337.1L51.7,335.8L51.2,334.6L51.5,333.6L53.3,333.6L52.8,332.3L53.0,330.8L53.5,329.3L53.8,327.6L53.5,326.1L52.8,324.7L52.2,323.6L51.2,322.7L51.2,322.2L51.7,321.5L50.0,319.3L49.5,317.9L45.2,299.3L45.2,294.6L44.9,293.4L43.9,290.9L43.7,289.4L43.7,286.2L44.4,283.3L48.5,272.1L49.2,269.1L49.5,266.0L49.0,262.6L48.0,259.8L46.4,257.6L44.4,255.6L41.1,250.6L39.9,244.7L40.1,238.2L43.9,223.4L45.7,219.9L45.9,218.3L46.2,217.6L48.5,214.9L49.0,213.8L51.0,208.8L51.2,207.1L52.0,207.5L52.8,207.6L53.5,207.5L54.3,207.1L53.3,205.9L53.5,204.8L54.3,203.9L54.5,203.0L54.8,202.2L55.5,200.9L55.5,200.3L55.5,199.6L55.3,198.7L55.3,198.0L55.0,197.7L54.8,197.2L54.3,196.9L53.5,196.5L53.3,196.1L53.0,195.7L52.8,195.3L52.0,194.6L51.5,193.7L50.7,191.8L50.5,190.7L50.2,185.7L49.5,182.6L49.2,182.4L48.7,182.2L48.2,181.8L48.0,181.2L48.0,180.6L49.5,178.1L50.2,177.0L51.0,175.7L51.2,174.5L52.2,175.6L53.3,174.9L54.8,173.6L57.3,172.4L58.8,170.8L59.8,169.1L60.3,167.8L60.6,166.7L62.4,162.2L62.9,160.2L63.1,158.9L63.9,158.2L64.6,158.2L64.6,158.9L64.4,160.8L64.6,160.8L65.6,159.1L66.9,159.4L67.9,160.6L68.9,161.9L69.7,166.1L69.7,169.3L69.7,170.8L70.2,171.6L70.9,172.1L73.0,175.6L72.7,174.3L73.0,172.8L72.7,171.2L71.7,168.7L71.2,165.6L70.4,164.7L76.5,162.7L77.8,161.6L76.0,161.7L73.7,161.6L72.0,161.2L70.4,160.8L69.4,159.3L68.9,158.6L65.4,157.5L64.6,157.2L65.6,156.3L68.4,154.8L69.9,153.6L71.4,153.1L72.2,152.5L72.7,152.3L73.7,152.3L75.2,152.3L73.5,151.7L72.2,150.9L71.4,150.9L70.2,152.3L69.2,151.9L68.2,151.9L65.6,152.3L63.9,152.3L62.9,151.9L61.8,151.3L61.1,150.6L60.1,148.7L59.6,147.9L58.6,147.4L55.5,146.4L58.6,144.5L59.6,143.4L59.3,142.9L56.0,143.2L55.0,142.9L53.8,141.9L53.5,142.3L53.3,142.4L53.3,143.8L53.3,148.1L53.5,148.3L55.3,148.3L55.8,148.6L56.0,149.3L55.3,149.6L53.8,149.3L50.7,150.7L49.0,150.7L48.5,149.1L48.7,148.0L55.5,132.6L56.8,128.1L57.3,127.0L58.3,126.8L61.1,127.8L62.4,127.8L63.1,127.4L63.9,127.3L63.1,126.9L62.6,126.3L62.4,125.7L62.4,124.7L61.8,124.7L61.6,125.2L61.3,125.8L60.8,126.2L60.1,126.1L59.8,125.2L60.1,124.2L60.8,121.3L62.1,118.5L63.1,114.3L65.4,110.7L68.2,107.9L70.9,107.0L70.4,108.5L69.9,109.7L69.9,110.8L71.2,115.0L71.4,116.5L71.4,117.9L73.7,113.6L74.7,113.0L75.5,113.2L78.8,115.4L79.5,113.2L79.3,112.4L78.0,112.0L77.0,109.9L76.5,109.3L75.7,108.7L75.0,108.7L74.5,108.8L73.7,108.6L73.2,106.3L73.5,102.8L74.7,96.7L77.8,93.0L78.0,92.0L77.5,90.9L77.8,89.1L86.4,62.9L86.6,61.3L86.4,57.2L86.6,55.6L86.9,54.5L87.9,52.1L88.4,49.5L88.1,43.4L87.4,37.5L87.9,35.1L89.4,33.6L92.7,32.9L93.2,33.5L93.9,32.8L95.2,32.3L96.7,32.1L98.2,32.0L99.7,31.6L101.0,30.9L102.8,28.6L105.3,25.8L105.6,24.8L105.8,23.7L107.1,20.5L107.6,19.3L108.6,18.3L109.6,18.1L112.6,18.3L112.9,18.1L114.1,17.1L114.4,16.9L114.6,16.8L114.9,16.6L115.2,16.4L115.4,16.4L115.7,16.5L115.7,17.0L115.7,17.5L115.7,17.8L116.7,18.4L119.2,19.8L120.2,20.5L120.5,21.0L120.2,21.7L119.7,22.4L119.4,22.9L118.7,23.4L117.7,23.9L117.2,24.1L116.7,24.8L116.2,26.4L115.7,27.1L115.2,27.4L113.6,27.7L113.4,28.1L112.9,29.9L113.1,31.6L113.4,33.2L112.4,35.0L113.9,34.5L115.2,33.4L115.9,31.8L116.2,30.3L116.9,29.4L118.7,29.1L120.2,29.3L121.0,30.3L121.7,33.8L122.0,33.8L122.7,33.6L123.5,33.9L124.0,35.2L123.5,37.5L124.0,39.0L124.8,37.4L126.3,36.5L128.0,36.4L129.3,36.9L129.6,37.6L130.1,39.8L130.3,40.5L131.1,41.5L131.8,42.5L132.6,44.7L132.8,46.8L133.1,49.0L133.8,50.7L134.1,50.9L133.6,51.5L133.1,52.6L132.8,54.3L132.8,56.5L133.3,58.5L134.6,59.8L135.4,59.7L136.1,60.7L136.6,62.0L136.9,63.1L137.1,63.8L138.1,65.3L138.4,66.0L138.1,66.6L137.6,67.3L136.9,68.2L135.4,71.1L134.9,72.9L135.1,73.6L136.1,74.4L136.1,75.9L135.9,79.1L136.1,79.8L137.1,81.1L137.4,82.0L137.9,91.4L137.4,97.5L137.6,98.6L138.4,99.5L142.2,102.7L143.2,102.5L145.5,105.0L146.7,105.6L148.8,105.3L150.0,105.0L152.8,103.6L154.6,103.3L156.1,103.9L159.6,107.6L160.1,107.6L161.4,107.5L163.4,107.0L164.2,107.2L164.9,108.0L164.2,108.7L163.2,109.0L161.6,109.1L154.8,120.0L154.3,120.4L153.8,120.5L153.3,121.0L153.3,122.3L153.3,122.5L153.8,124.5L153.6,125.3L153.6,126.1L153.3,126.7L152.8,127.3L153.0,127.5L153.3,128.0L153.8,128.2L153.0,129.6L152.8,130.9L152.8,133.9L153.3,134.4L154.6,134.9L157.1,135.2L159.6,134.7L160.4,134.9L161.6,135.9L162.1,136.1L165.2,138.2L165.4,138.4L165.7,139.0L166.4,140.2L166.7,141.3L166.9,145.8L167.2,147.4L168.0,148.7L169.2,149.8L170.0,150.3L172.8,151.2L173.8,151.3L174.8,151.7L175.8,152.5L177.8,154.3L177.8,154.8L176.3,156.8L175.5,158.1L176.0,158.7L176.3,159.3L174.0,162.9L173.8,164.2L173.0,168.2L173.0,172.2L172.5,173.5L174.0,171.6L174.5,172.1L175.5,172.5L176.3,172.7L177.0,172.3L178.1,171.5L178.8,171.5L179.6,171.8L180.3,172.1L182.1,171.8L183.1,171.3L184.1,170.7L185.4,170.1L182.1,176.6L183.1,178.9L183.4,181.9L182.6,187.6L184.4,196.5L184.4,205.9L184.6,206.9L184.9,207.3L187.4,209.3L187.4,210.1L188.4,211.4L188.9,212.1L188.9,212.9L188.9,213.6L188.2,218.1L188.2,219.4L189.2,220.0L188.9,221.4L186.9,225.4L186.4,227.8L185.6,232.1L184.9,234.9L184.6,236.2L184.9,237.5L186.1,240.1L186.4,241.5L186.9,242.2L188.9,245.5L189.4,246.0L189.2,248.2L189.4,249.0L189.9,249.8L190.2,250.5L190.7,251.1L195.0,254.5L195.5,255.4L196.2,259.8L196.0,261.0L196.8,262.6L197.0,269.4L199.8,279.0L202.3,283.5L203.8,285.6L205.6,287.4L206.6,288.2L207.6,288.8L208.6,289.1L209.9,289.4L212.4,289.5L212.9,290.0L213.4,291.3L214.2,290.5L214.9,290.1L216.7,289.9L219.7,288.2L222.3,287.1L225.6,283.6L226.6,282.9L227.8,282.4L228.8,281.3L229.6,280.1L230.1,279.0L230.4,277.0L230.4,275.1L230.6,273.4L231.6,272.5L231.9,272.9L232.4,273.5L232.6,274.0L232.9,273.6L233.1,273.5L233.4,273.4L233.6,273.0L233.9,273.0L235.2,275.4L235.4,275.9L236.4,276.3L237.2,276.3L237.9,276.3L238.7,276.9L248.3,272.5L249.0,272.0L250.3,268.6L250.6,268.0L250.8,267.9L250.8,267.2L250.8,266.3L251.1,265.9L251.6,266.0L252.6,266.5L253.6,266.9L254.1,267.5L254.6,268.1L254.9,268.5L255.6,269.1L258.6,273.5L257.9,274.7L257.6,276.3L257.6,279.2L258.1,280.7L259.7,280.8L261.2,280.0L261.9,279.0L262.2,280.1L261.9,281.6L261.4,282.9L260.7,283.4L260.4,284.2L260.7,288.2L260.9,289.4L261.4,289.9L263.4,291.3L263.7,292.1L264.5,293.9L265.0,294.6L266.5,295.0L269.5,294.3L270.5,294.4L271.5,295.4L272.3,296.6L273.3,297.8L275.1,298.3L279.6,298.4L280.6,298.8L281.1,299.4L281.4,299.9L281.4,300.5L281.6,301.3L282.1,301.9L283.4,303.0L283.2,303.3L283.7,306.9L283.7,307.5L284.4,308.2L288.7,311.2L289.7,312.8L291.5,311.8L293.0,312.4L294.5,313.6L296.3,314.2L297.3,314.4L298.6,315.0L299.6,315.2L300.6,315.1L302.4,314.6L303.4,314.6L302.6,316.6L303.1,318.2L307.2,323.0L308.2,323.2L309.7,322.7L312.0,322.7L310.9,324.7L305.6,332.3L305.1,333.8L304.1,338.9L304.4,340.1L305.4,342.2L305.9,344.2L306.6,344.9L307.4,345.4L308.4,345.5L309.4,345.3L309.9,344.7L310.4,342.6L311.7,343.6L312.2,345.0L311.7,346.4L308.9,347.5L307.7,348.6L307.4,350.0L308.7,351.1L307.9,351.8L307.7,352.5L307.9,353.3L307.7,354.0L307.2,354.3L306.1,354.9L305.6,355.1L305.1,356.4L304.9,357.9L304.9,359.1L305.6,358.6L306.1,358.6L307.2,361.4L307.4,362.9L306.4,363.6L306.1,363.9L306.1,364.6L306.4,365.2L306.9,365.6L306.9,365.8L309.4,367.8L309.7,368.2L310.2,369.8L310.4,370.5L310.2,371.1L309.2,372.6L309.4,373.0L309.7,373.2L312.5,379.4L313.2,380.3L313.5,381.3L313.0,384.8L313.0,386.0L313.2,386.7L313.7,387.1L314.0,387.4L314.0,388.0L313.5,388.8L312.7,390.3L312.5,391.3L312.7,392.7L313.2,393.5L314.7,395.0L317.8,399.1L319.3,401.7L320.0,404.1L320.0,406.8L318.5,411.8L318.3,414.4L319.8,415.3L320.0,415.7L320.5,417.6L320.5,418.7L320.0,419.7L318.0,421.8L316.8,424.1L316.8,429.5L315.7,432.0L316.0,432.9L316.2,433.6L317.0,434.2L317.8,434.6L319.0,434.0L320.3,434.9L320.8,436.3L321.0,437.8L321.6,438.6L324.1,441.2L324.8,443.6L326.1,445.0L326.4,445.4L326.6,446.5L327.4,447.7L328.4,448.8L331.7,451.7L332.4,452.2L334.2,452.9L334.7,453.4L335.2,454.0L335.4,455.6L335.7,456.4L336.5,457.0L337.7,457.7L338.5,458.2L339.7,461.7L341.0,462.4L342.0,463.8L342.3,464.4L342.0,465.4L341.3,465.7L340.5,465.8L339.7,466.2L339.7,467.1L340.2,467.9L341.0,468.6L341.8,469.7L341.8,470.2L341.8,471.5L342.0,472.0L342.8,472.2L343.3,472.1L343.8,471.6L343.0,470.1L342.8,468.8L343.0,467.6L343.5,467.1L344.0,466.8L346.1,464.9L346.6,464.2L347.8,465.0L348.6,465.8L349.3,465.9L351.1,464.4L351.6,463.8L352.1,463.4L352.6,463.2L353.4,463.2L354.6,463.6L354.9,464.4L354.4,465.3L354.1,465.7L353.4,466.4L353.4,466.6L353.1,467.0L353.6,467.4L353.6,467.6L353.1,469.3L352.6,469.9L352.1,470.2L351.6,470.7L350.4,473.3L349.8,474.2L349.6,475.8L349.6,477.2L350.1,478.3L351.1,478.8L351.6,479.4L354.4,484.7L354.9,486.2L355.2,487.8L355.2,489.6L355.7,490.7L358.2,494.4L360.0,499.0L360.7,500.1L362.0,501.2L362.7,501.6L363.2,502.4L363.0,505.6L363.2,509.9L362.7,510.7L363.5,512.4L365.3,515.0L367.3,516.9L368.0,518.0L368.3,519.4L367.8,520.4L366.0,522.0L365.3,523.1L365.0,524.7L365.0,525L-5,525ZM94.9,14.8L96.7,16.5L97.0,17.4L97.0,18.3L96.7,18.6L96.5,18.6L95.7,18.4L94.9,18.4L93.4,19.0L92.4,19.3L91.7,19.6L90.9,20.5L90.4,21.5L90.4,22.2L87.9,21.2L87.4,20.7L86.6,19.4L85.6,18.0L85.1,16.2L85.3,13.9L85.6,13.5L85.8,13.3L86.1,13.0L87.4,12.9L87.6,12.7L87.9,12.4L88.4,11.9L89.6,11.2L89.9,11.2L89.9,10.8L90.6,9.5L92.2,9.9L93.2,11.6ZM95.4,8.6L97.7,8.2L99.5,9.3L100.0,11.0L98.5,12.4L96.5,13.0L94.9,11.9L94.4,10.1Z\" fill=\"#f6f2e4\" stroke=\"#596d55\" stroke-width=\"1.1\" stroke-linejoin=\"round\"/> <text x=\"14\" y=\"62\" class=\"lm-sea\">Gulf of</text><text x=\"14\" y=\"80\" class=\"lm-sea\">Carpentaria</text> <text x=\"292\" y=\"150\" class=\"lm-sea\">Coral Sea</text> <text x=\"268\" y=\"272\" class=\"lm-sea lm-small\">Princess</text> <text x=\"268\" y=\"287\" class=\"lm-sea lm-small\">Charlotte Bay</text> <text x=\"170\" y=\"494\" class=\"lm-region\" transform=\"rotate(-62 170 494)\">CAPE YORK PENINSULA</text> <clipPath id=\"lm-land-__U__\"><path d=\"M-5,506.0L-4.7,506.0L-3.7,505.2L-3.0,503.7L-1.2,498.3L-0.5,492.1L0.2,489.3L0.7,488.6L2.2,486.9L2.7,484.6L3.0,484.0L3.5,483.0L4.2,478.3L4.0,476.9L3.5,475.6L3.2,474.2L4.0,473.0L10.6,464.5L12.8,458.2L13.3,458.0L14.6,457.9L15.1,457.7L15.6,457.2L17.1,455.1L20.9,451.1L21.4,449.9L21.7,448.8L22.7,446.4L23.4,441.5L24.2,440.3L25.2,440.5L27.0,437.6L27.5,435.8L27.7,434.4L28.2,432.9L28.2,432.0L28.0,431.5L27.5,431.1L27.2,430.4L27.2,429.0L27.7,428.1L29.3,426.0L29.8,424.7L30.0,423.2L31.0,420.4L31.5,419.0L31.5,416.1L31.8,415.3L32.3,414.2L32.8,412.8L36.8,405.6L37.3,404.1L35.8,402.6L33.6,395.1L33.6,394.5L33.8,393.6L35.1,392.7L35.3,391.8L35.6,388.8L37.8,374.1L41.1,361.6L46.9,347.7L47.4,346.5L47.4,344.1L47.7,342.7L48.2,341.7L49.5,341.6L49.0,340.1L49.7,339.0L51.0,338.3L51.7,337.1L51.7,335.8L51.2,334.6L51.5,333.6L53.3,333.6L52.8,332.3L53.0,330.8L53.5,329.3L53.8,327.6L53.5,326.1L52.8,324.7L52.2,323.6L51.2,322.7L51.2,322.2L51.7,321.5L50.0,319.3L49.5,317.9L45.2,299.3L45.2,294.6L44.9,293.4L43.9,290.9L43.7,289.4L43.7,286.2L44.4,283.3L48.5,272.1L49.2,269.1L49.5,266.0L49.0,262.6L48.0,259.8L46.4,257.6L44.4,255.6L41.1,250.6L39.9,244.7L40.1,238.2L43.9,223.4L45.7,219.9L45.9,218.3L46.2,217.6L48.5,214.9L49.0,213.8L51.0,208.8L51.2,207.1L52.0,207.5L52.8,207.6L53.5,207.5L54.3,207.1L53.3,205.9L53.5,204.8L54.3,203.9L54.5,203.0L54.8,202.2L55.5,200.9L55.5,200.3L55.5,199.6L55.3,198.7L55.3,198.0L55.0,197.7L54.8,197.2L54.3,196.9L53.5,196.5L53.3,196.1L53.0,195.7L52.8,195.3L52.0,194.6L51.5,193.7L50.7,191.8L50.5,190.7L50.2,185.7L49.5,182.6L49.2,182.4L48.7,182.2L48.2,181.8L48.0,181.2L48.0,180.6L49.5,178.1L50.2,177.0L51.0,175.7L51.2,174.5L52.2,175.6L53.3,174.9L54.8,173.6L57.3,172.4L58.8,170.8L59.8,169.1L60.3,167.8L60.6,166.7L62.4,162.2L62.9,160.2L63.1,158.9L63.9,158.2L64.6,158.2L64.6,158.9L64.4,160.8L64.6,160.8L65.6,159.1L66.9,159.4L67.9,160.6L68.9,161.9L69.7,166.1L69.7,169.3L69.7,170.8L70.2,171.6L70.9,172.1L73.0,175.6L72.7,174.3L73.0,172.8L72.7,171.2L71.7,168.7L71.2,165.6L70.4,164.7L76.5,162.7L77.8,161.6L76.0,161.7L73.7,161.6L72.0,161.2L70.4,160.8L69.4,159.3L68.9,158.6L65.4,157.5L64.6,157.2L65.6,156.3L68.4,154.8L69.9,153.6L71.4,153.1L72.2,152.5L72.7,152.3L73.7,152.3L75.2,152.3L73.5,151.7L72.2,150.9L71.4,150.9L70.2,152.3L69.2,151.9L68.2,151.9L65.6,152.3L63.9,152.3L62.9,151.9L61.8,151.3L61.1,150.6L60.1,148.7L59.6,147.9L58.6,147.4L55.5,146.4L58.6,144.5L59.6,143.4L59.3,142.9L56.0,143.2L55.0,142.9L53.8,141.9L53.5,142.3L53.3,142.4L53.3,143.8L53.3,148.1L53.5,148.3L55.3,148.3L55.8,148.6L56.0,149.3L55.3,149.6L53.8,149.3L50.7,150.7L49.0,150.7L48.5,149.1L48.7,148.0L55.5,132.6L56.8,128.1L57.3,127.0L58.3,126.8L61.1,127.8L62.4,127.8L63.1,127.4L63.9,127.3L63.1,126.9L62.6,126.3L62.4,125.7L62.4,124.7L61.8,124.7L61.6,125.2L61.3,125.8L60.8,126.2L60.1,126.1L59.8,125.2L60.1,124.2L60.8,121.3L62.1,118.5L63.1,114.3L65.4,110.7L68.2,107.9L70.9,107.0L70.4,108.5L69.9,109.7L69.9,110.8L71.2,115.0L71.4,116.5L71.4,117.9L73.7,113.6L74.7,113.0L75.5,113.2L78.8,115.4L79.5,113.2L79.3,112.4L78.0,112.0L77.0,109.9L76.5,109.3L75.7,108.7L75.0,108.7L74.5,108.8L73.7,108.6L73.2,106.3L73.5,102.8L74.7,96.7L77.8,93.0L78.0,92.0L77.5,90.9L77.8,89.1L86.4,62.9L86.6,61.3L86.4,57.2L86.6,55.6L86.9,54.5L87.9,52.1L88.4,49.5L88.1,43.4L87.4,37.5L87.9,35.1L89.4,33.6L92.7,32.9L93.2,33.5L93.9,32.8L95.2,32.3L96.7,32.1L98.2,32.0L99.7,31.6L101.0,30.9L102.8,28.6L105.3,25.8L105.6,24.8L105.8,23.7L107.1,20.5L107.6,19.3L108.6,18.3L109.6,18.1L112.6,18.3L112.9,18.1L114.1,17.1L114.4,16.9L114.6,16.8L114.9,16.6L115.2,16.4L115.4,16.4L115.7,16.5L115.7,17.0L115.7,17.5L115.7,17.8L116.7,18.4L119.2,19.8L120.2,20.5L120.5,21.0L120.2,21.7L119.7,22.4L119.4,22.9L118.7,23.4L117.7,23.9L117.2,24.1L116.7,24.8L116.2,26.4L115.7,27.1L115.2,27.4L113.6,27.7L113.4,28.1L112.9,29.9L113.1,31.6L113.4,33.2L112.4,35.0L113.9,34.5L115.2,33.4L115.9,31.8L116.2,30.3L116.9,29.4L118.7,29.1L120.2,29.3L121.0,30.3L121.7,33.8L122.0,33.8L122.7,33.6L123.5,33.9L124.0,35.2L123.5,37.5L124.0,39.0L124.8,37.4L126.3,36.5L128.0,36.4L129.3,36.9L129.6,37.6L130.1,39.8L130.3,40.5L131.1,41.5L131.8,42.5L132.6,44.7L132.8,46.8L133.1,49.0L133.8,50.7L134.1,50.9L133.6,51.5L133.1,52.6L132.8,54.3L132.8,56.5L133.3,58.5L134.6,59.8L135.4,59.7L136.1,60.7L136.6,62.0L136.9,63.1L137.1,63.8L138.1,65.3L138.4,66.0L138.1,66.6L137.6,67.3L136.9,68.2L135.4,71.1L134.9,72.9L135.1,73.6L136.1,74.4L136.1,75.9L135.9,79.1L136.1,79.8L137.1,81.1L137.4,82.0L137.9,91.4L137.4,97.5L137.6,98.6L138.4,99.5L142.2,102.7L143.2,102.5L145.5,105.0L146.7,105.6L148.8,105.3L150.0,105.0L152.8,103.6L154.6,103.3L156.1,103.9L159.6,107.6L160.1,107.6L161.4,107.5L163.4,107.0L164.2,107.2L164.9,108.0L164.2,108.7L163.2,109.0L161.6,109.1L154.8,120.0L154.3,120.4L153.8,120.5L153.3,121.0L153.3,122.3L153.3,122.5L153.8,124.5L153.6,125.3L153.6,126.1L153.3,126.7L152.8,127.3L153.0,127.5L153.3,128.0L153.8,128.2L153.0,129.6L152.8,130.9L152.8,133.9L153.3,134.4L154.6,134.9L157.1,135.2L159.6,134.7L160.4,134.9L161.6,135.9L162.1,136.1L165.2,138.2L165.4,138.4L165.7,139.0L166.4,140.2L166.7,141.3L166.9,145.8L167.2,147.4L168.0,148.7L169.2,149.8L170.0,150.3L172.8,151.2L173.8,151.3L174.8,151.7L175.8,152.5L177.8,154.3L177.8,154.8L176.3,156.8L175.5,158.1L176.0,158.7L176.3,159.3L174.0,162.9L173.8,164.2L173.0,168.2L173.0,172.2L172.5,173.5L174.0,171.6L174.5,172.1L175.5,172.5L176.3,172.7L177.0,172.3L178.1,171.5L178.8,171.5L179.6,171.8L180.3,172.1L182.1,171.8L183.1,171.3L184.1,170.7L185.4,170.1L182.1,176.6L183.1,178.9L183.4,181.9L182.6,187.6L184.4,196.5L184.4,205.9L184.6,206.9L184.9,207.3L187.4,209.3L187.4,210.1L188.4,211.4L188.9,212.1L188.9,212.9L188.9,213.6L188.2,218.1L188.2,219.4L189.2,220.0L188.9,221.4L186.9,225.4L186.4,227.8L185.6,232.1L184.9,234.9L184.6,236.2L184.9,237.5L186.1,240.1L186.4,241.5L186.9,242.2L188.9,245.5L189.4,246.0L189.2,248.2L189.4,249.0L189.9,249.8L190.2,250.5L190.7,251.1L195.0,254.5L195.5,255.4L196.2,259.8L196.0,261.0L196.8,262.6L197.0,269.4L199.8,279.0L202.3,283.5L203.8,285.6L205.6,287.4L206.6,288.2L207.6,288.8L208.6,289.1L209.9,289.4L212.4,289.5L212.9,290.0L213.4,291.3L214.2,290.5L214.9,290.1L216.7,289.9L219.7,288.2L222.3,287.1L225.6,283.6L226.6,282.9L227.8,282.4L228.8,281.3L229.6,280.1L230.1,279.0L230.4,277.0L230.4,275.1L230.6,273.4L231.6,272.5L231.9,272.9L232.4,273.5L232.6,274.0L232.9,273.6L233.1,273.5L233.4,273.4L233.6,273.0L233.9,273.0L235.2,275.4L235.4,275.9L236.4,276.3L237.2,276.3L237.9,276.3L238.7,276.9L248.3,272.5L249.0,272.0L250.3,268.6L250.6,268.0L250.8,267.9L250.8,267.2L250.8,266.3L251.1,265.9L251.6,266.0L252.6,266.5L253.6,266.9L254.1,267.5L254.6,268.1L254.9,268.5L255.6,269.1L258.6,273.5L257.9,274.7L257.6,276.3L257.6,279.2L258.1,280.7L259.7,280.8L261.2,280.0L261.9,279.0L262.2,280.1L261.9,281.6L261.4,282.9L260.7,283.4L260.4,284.2L260.7,288.2L260.9,289.4L261.4,289.9L263.4,291.3L263.7,292.1L264.5,293.9L265.0,294.6L266.5,295.0L269.5,294.3L270.5,294.4L271.5,295.4L272.3,296.6L273.3,297.8L275.1,298.3L279.6,298.4L280.6,298.8L281.1,299.4L281.4,299.9L281.4,300.5L281.6,301.3L282.1,301.9L283.4,303.0L283.2,303.3L283.7,306.9L283.7,307.5L284.4,308.2L288.7,311.2L289.7,312.8L291.5,311.8L293.0,312.4L294.5,313.6L296.3,314.2L297.3,314.4L298.6,315.0L299.6,315.2L300.6,315.1L302.4,314.6L303.4,314.6L302.6,316.6L303.1,318.2L307.2,323.0L308.2,323.2L309.7,322.7L312.0,322.7L310.9,324.7L305.6,332.3L305.1,333.8L304.1,338.9L304.4,340.1L305.4,342.2L305.9,344.2L306.6,344.9L307.4,345.4L308.4,345.5L309.4,345.3L309.9,344.7L310.4,342.6L311.7,343.6L312.2,345.0L311.7,346.4L308.9,347.5L307.7,348.6L307.4,350.0L308.7,351.1L307.9,351.8L307.7,352.5L307.9,353.3L307.7,354.0L307.2,354.3L306.1,354.9L305.6,355.1L305.1,356.4L304.9,357.9L304.9,359.1L305.6,358.6L306.1,358.6L307.2,361.4L307.4,362.9L306.4,363.6L306.1,363.9L306.1,364.6L306.4,365.2L306.9,365.6L306.9,365.8L309.4,367.8L309.7,368.2L310.2,369.8L310.4,370.5L310.2,371.1L309.2,372.6L309.4,373.0L309.7,373.2L312.5,379.4L313.2,380.3L313.5,381.3L313.0,384.8L313.0,386.0L313.2,386.7L313.7,387.1L314.0,387.4L314.0,388.0L313.5,388.8L312.7,390.3L312.5,391.3L312.7,392.7L313.2,393.5L314.7,395.0L317.8,399.1L319.3,401.7L320.0,404.1L320.0,406.8L318.5,411.8L318.3,414.4L319.8,415.3L320.0,415.7L320.5,417.6L320.5,418.7L320.0,419.7L318.0,421.8L316.8,424.1L316.8,429.5L315.7,432.0L316.0,432.9L316.2,433.6L317.0,434.2L317.8,434.6L319.0,434.0L320.3,434.9L320.8,436.3L321.0,437.8L321.6,438.6L324.1,441.2L324.8,443.6L326.1,445.0L326.4,445.4L326.6,446.5L327.4,447.7L328.4,448.8L331.7,451.7L332.4,452.2L334.2,452.9L334.7,453.4L335.2,454.0L335.4,455.6L335.7,456.4L336.5,457.0L337.7,457.7L338.5,458.2L339.7,461.7L341.0,462.4L342.0,463.8L342.3,464.4L342.0,465.4L341.3,465.7L340.5,465.8L339.7,466.2L339.7,467.1L340.2,467.9L341.0,468.6L341.8,469.7L341.8,470.2L341.8,471.5L342.0,472.0L342.8,472.2L343.3,472.1L343.8,471.6L343.0,470.1L342.8,468.8L343.0,467.6L343.5,467.1L344.0,466.8L346.1,464.9L346.6,464.2L347.8,465.0L348.6,465.8L349.3,465.9L351.1,464.4L351.6,463.8L352.1,463.4L352.6,463.2L353.4,463.2L354.6,463.6L354.9,464.4L354.4,465.3L354.1,465.7L353.4,466.4L353.4,466.6L353.1,467.0L353.6,467.4L353.6,467.6L353.1,469.3L352.6,469.9L352.1,470.2L351.6,470.7L350.4,473.3L349.8,474.2L349.6,475.8L349.6,477.2L350.1,478.3L351.1,478.8L351.6,479.4L354.4,484.7L354.9,486.2L355.2,487.8L355.2,489.6L355.7,490.7L358.2,494.4L360.0,499.0L360.7,500.1L362.0,501.2L362.7,501.6L363.2,502.4L363.0,505.6L363.2,509.9L362.7,510.7L363.5,512.4L365.3,515.0L367.3,516.9L368.0,518.0L368.3,519.4L367.8,520.4L366.0,522.0L365.3,523.1L365.0,524.7L365.0,525L-5,525ZM94.9,14.8L96.7,16.5L97.0,17.4L97.0,18.3L96.7,18.6L96.5,18.6L95.7,18.4L94.9,18.4L93.4,19.0L92.4,19.3L91.7,19.6L90.9,20.5L90.4,21.5L90.4,22.2L87.9,21.2L87.4,20.7L86.6,19.4L85.6,18.0L85.1,16.2L85.3,13.9L85.6,13.5L85.8,13.3L86.1,13.0L87.4,12.9L87.6,12.7L87.9,12.4L88.4,11.9L89.6,11.2L89.9,11.2L89.9,10.8L90.6,9.5L92.2,9.9L93.2,11.6ZM95.4,8.6L97.7,8.2L99.5,9.3L100.0,11.0L98.5,12.4L96.5,13.0L94.9,11.9L94.4,10.1Z\"/></clipPath> <ellipse clip-path=\"url(#lm-land-__U__)\" cx=\"191.5\" cy=\"271.95\" rx=\"54\" ry=\"44\" fill=\"url(#lm-glow-__U__)\"/> <g class=\"lm-town\"> <circle cx=\"161.3\" cy=\"250.5\" r=\"2.6\"/><text x=\"155.3\" y=\"253.5\" text-anchor=\"end\">Coen</text> <circle cx=\"67.4\" cy=\"155.6\" r=\"2.6\"/><text x=\"74.4\" y=\"158.6\">Weipa</text> <circle cx=\"305.3\" cy=\"361.1\" r=\"2.6\"/><text x=\"298.3\" y=\"364.1\" text-anchor=\"end\">Cooktown</text> <circle cx=\"342.3\" cy=\"466.9\" r=\"2.6\"/><text x=\"335.3\" y=\"469.9\" text-anchor=\"end\">Cairns</text> </g> <g class=\"lm-pin\" transform=\"translate(195.5 259.2)\"> <path d=\"M0 0 C-3 -7 -10 -12 -10 -19 A10 10 0 1 1 10 -19 C10 -12 3 -7 0 0Z\" fill=\"#b8765c\" stroke=\"#faf8f0\" stroke-width=\"1.6\"/> <circle cy=\"-19\" r=\"3.6\" fill=\"#faf8f0\"/> </g> <g class=\"lm-label\"> <text x=\"209.5\" y=\"213.2\" class=\"lm-main\">Lama Lama</text> <text x=\"209.5\" y=\"235.2\" class=\"lm-main\">Country</text> <text x=\"209.5\" y=\"251.2\" class=\"lm-sub\">Port Stewart</text> </g> <g transform=\"translate(366 40)\" class=\"lm-north\"> <path d=\"M0 -16 L6 6 L0 2 L-6 6Z\" fill=\"#596d55\"/> <text y=\"20\" text-anchor=\"middle\">N</text> </g> <g transform=\"translate(308.9 498)\" class=\"lm-scale\"> <rect width=\"32.55\" height=\"4\" fill=\"#596d55\"/><rect x=\"32.55\" width=\"32.55\" height=\"4\" fill=\"#faf8f0\" stroke=\"#596d55\" stroke-width=\".8\"/> <text y=\"-5\">0</text><text x=\"65.1\" y=\"-6\" text-anchor=\"end\">100 km</text> </g> <g transform=\"translate(12 386)\" class=\"lm-inset\"> <rect x=\"-6\" y=\"-6\" width=\"142\" height=\"130\" rx=\"2\" fill=\"#faf8f0\" stroke=\"#d8d3c3\"/> <path d=\"M107.1,100.7L108.8,100.9L109.0,105.6L108.0,107.0L107.7,110.2L106.7,109.1L104.6,112L104.0,111.7L102.2,111.6L100.4,108.1L100.0,105.5L98.3,102.0L98.4,100.2L100.3,100.6L103.1,101.9L104.8,101.4ZM43.3,69.0L40.2,70.8L37.6,71.6L37.1,73.4L36.0,74.9L33.5,75.0L31.6,75.3L29.0,74.6L26.9,75.0L24.8,75.2L23.1,77.1L22.2,76.9L20.7,77.9L19.3,79.1L17.2,78.9L15.2,78.9L12.0,76.7L10.4,76.0L10.5,73.9L12.0,73.4L12.5,72.6L12.4,71.4L12.7,68.9L12.4,66.9L10.8,63.4L10.4,61.4L10.5,59.5L9.3,57.3L9.2,56.3L7.9,54.9L7.5,52.3L5.9,49.7L5.4,48.3L6.7,49.7L5.8,46.7L7.2,47.6L8.1,48.9L8.0,47.2L6.6,44.6L6.3,43.6L5.6,42.6L5.9,40.8L6.5,40.0L6.9,38.3L6.6,36.5L7.8,34.2L8.1,36.6L9.3,34.4L11.7,33.3L13.2,32.0L15.4,30.8L16.8,30.6L17.6,31.0L19.9,29.8L21.7,29.4L22.2,28.8L22.9,28.5L24.6,28.5L27.7,27.6L29.3,26.2L30.0,24.6L31.8,23.0L31.9,21.7L32.0,20.0L34.1,17.4L35.3,20.1L36.6,19.5L35.5,18.0L36.4,16.5L37.7,17.2L38.1,14.8L39.7,13.3L40.4,12.1L41.9,11.6L42.0,10.7L43.3,11.1L43.3,10.3L44.6,9.9L46.1,9.5L48.2,10.9L49.9,12.7L51.7,12.7L53.6,13.0L53.0,11.3L54.4,8.9L55.7,8.1L55.3,7.3L56.6,5.6L58.4,4.5L59.9,4.9L62.4,4.3L62.3,2.8L60.1,1.8L61.7,1.3L63.7,2.1L65.2,3.3L67.7,4.1L68.6,3.8L70.4,4.7L72.1,3.9L73.3,4.1L73.9,3.5L75.3,5.0L74.5,6.7L73.4,7.9L72.4,8.0L72.7,9.2L71.8,10.7L70.8,12.2L71.0,13.1L73.4,14.8L75.6,15.8L77.2,16.8L79.3,18.7L80.1,18.7L81.7,19.4L82.1,20.4L85.0,21.5L86.9,20.4L87.5,18.7L88.1,17.4L88.4,15.7L89.4,13.2L88.9,11.8L89.2,10.9L88.8,9.1L89.2,6.8L89.8,6.2L89.3,5.2L90.0,3.6L90.6,1.9L90.7,1.1L91.8,0L92.6,1.4L92.8,3.3L93.5,3.7L93.7,5.0L94.7,6.5L95.0,8.2L94.8,9.3L95.9,11.7L97.8,10.6L98.8,11.9L100.2,13.1L99.9,14.4L100.5,17.0L101.0,18.6L101.7,19.0L102.5,21.6L102.3,23.2L103.2,25.3L106.4,27.0L108.5,28.5L110.5,29.8L110.1,30.6L111.8,32.6L112.9,36.0L114.1,35.3L115.3,36.7L116.1,36.2L116.6,39.6L118.7,41.6L120.0,42.9L122.3,45.5L123.2,48.1L123.3,50.0L123.0,52.1L124.5,54.9L124.3,57.9L123.8,59.5L123.0,62.5L123.0,64.5L122.5,67.0L121.1,70.1L119.0,71.9L117.9,74.6L116.9,76.4L116.0,79.5L114.9,81.3L114.1,84.0L113.7,86.6L113.9,87.8L112.2,89.0L108.9,89.2L106.1,90.7L104.8,92.2L103.0,93.8L100.6,92.1L98.7,91.5L99.2,89.5L97.6,90.2L95.0,93.0L92.4,91.9L90.8,91.3L89.1,91.1L86.2,90.0L84.3,87.7L83.7,84.9L83.1,83.0L81.6,81.5L78.8,81.1L79.7,79.3L79.0,76.6L77.6,79.1L74.9,79.8L76.5,77.8L76.9,75.7L78.1,74.0L77.8,71.4L75.4,74.4L73.6,75.6L72.5,78.5L70.1,77.0L70.2,75.1L68.4,72.5L66.8,71.2L67.4,70.4L63.6,68.3L61.5,68.2L58.7,66.5L53.4,66.8L49.5,68.0L46.2,69.2Z\" fill=\"#e6e9dc\" stroke=\"#596d55\" stroke-width=\".7\"/> <polyline points=\"78.4,17.8 78.4,48 87.3,48 87.3,58 110.7,58 115.1,56.6 124.4,55.2\" fill=\"none\" stroke=\"#596d55\" stroke-width=\".6\" stroke-dasharray=\"2 2\"/> <rect x=\"87\" y=\"-0.5\" width=\"16.900000000000006\" height=\"21.7\" fill=\"rgba(184,118,92,.18)\" stroke=\"#b8765c\" stroke-width=\"1.2\"/> <text x=\"65\" y=\"121\" text-anchor=\"middle\">AUSTRALIA</text> <text x=\"96.4\" y=\"32\" class=\"lm-qld\">QLD</text> </g> </svg>";

let mapCount = 0;

function locationMapHTML() {
  mapCount += 1;
  return `<figure class="loc-figure">
    ${LOCATION_MAP_SVG.replaceAll("__U__", String(mapCount))}
    <figcaption>Lama Lama Country, east Cape York Peninsula, Queensland. Shaded area is approximate. Coastline: Natural Earth.</figcaption>
  </figure>`;
}

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
renderStatic();
announce();
