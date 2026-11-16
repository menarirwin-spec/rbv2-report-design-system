/* Ledger design-system inspector.
   Hover any element in a deck and see which system tokens, atoms and
   components it is built from. Toggled from the Live Report Viewer
   (postMessage {type:'ds-inspect', on:true|false}) or with the "i" key. */
(function () {
  var TOKENS = [
    "deep", "deeper", "ink", "cream", "paper", "mint", "gold", "clay",
    "line", "lineD", "mut", "mutD",
  ];
  var MIX_BASES = ["paper", "cream", "ink", "deep", "mint", "gold"];

  // class name -> { kind, name, note }
  var REGISTRY = {
    slide: { kind: "Structure", name: "Slide", note: "1600×900 frame · 16:9" },
    led: { kind: "Structure", name: "Ledger slide", note: "88px gutters · worksheet density" },
    body: { kind: "Structure", name: "Slide body", note: "Content column inside the frame" },
    hdr: { kind: "Structure", name: "Running header", note: "Client · section marker" },
    ftr: { kind: "Structure", name: "Running footer", note: "Caption · page number" },
    l: { kind: "Atom", name: "Header left", note: "Client / household side of a running header or footer", within: "hdr" },
    r: { kind: "Atom", name: "Header right", note: "Section marker side; accent-colored", within: "hdr" },
    g2: { kind: "Structure", name: "2-column grid", note: "Half-and-half split" },
    g3: { kind: "Structure", name: "3-column grid", note: "Thirds" },
    g4: { kind: "Structure", name: "4-column grid", note: "Quarters — stat strips" },
    cols: { kind: "Structure", name: "Columns", note: "Uneven editorial split" },
    "cover-mark": { kind: "Structure", name: "Cover mark", note: "Oversized cover disc, solid ground" },
    "cover-rings": { kind: "Structure", name: "Cover rings", note: "Concentric hairline rings on a cover" },
    eyebrow: { kind: "Atom", name: "Eyebrow", note: "Uppercase kicker above a headline · 14px clearance below" },
    lbl: { kind: "Atom", name: "Label", note: "Uppercase micro-label for a block" },
    smlbl: { kind: "Atom", name: "Scale labels", note: "Centred micro-labels under small multiples" },
    tag: { kind: "Atom", name: "Tag", note: "Uppercase micro-tag, quieter than a label" },
    tagrow: { kind: "Component", name: "Tag row", note: "Wrapping row of chips or tags" },
    num: { kind: "Atom", name: "Figure", note: "Serif, tabular numerals" },
    "hero-fig": { kind: "Atom", name: "Hero figure", note: "Largest figure on a slide" },
    "sec-num": { kind: "Atom", name: "Section numeral", note: "Oversized divider numeral" },
    small: { kind: "Atom", name: "Deck copy", note: "Standing text under a headline" },
    lede: { kind: "Atom", name: "Lede", note: "20px standfirst, 62ch measure" },
    note: { kind: "Atom", name: "Note", note: "Smallest annotation size" },
    pct: { kind: "Atom", name: "Percent", note: "Tabular share value beside a bar" },
    delta: { kind: "Atom", name: "Delta", note: "Signed change under a figure" },
    name: { kind: "Atom", name: "Row name", note: "Left-hand item name in a row", within: "row" },
    val: { kind: "Atom", name: "Row value", note: "Right-aligned serif figure in a row", within: "row" },
    k: { kind: "Atom", name: "Row key", note: "Label side of a ledger row", within: "lr" },
    v: { kind: "Atom", name: "Row figure", note: "Figure side of a ledger row, stat or node" },
    t: { kind: "Atom", name: "Node title", note: "Step name inside a flow node", within: "node" },
    s: { kind: "Atom", name: "Stat support", note: "Support line under a stat figure", within: "stat" },
    m: { kind: "Atom", name: "Scenario meta", note: "Fine print inside a scenario card", within: "scen" },
    when: { kind: "Atom", name: "Timing label", note: "Uppercase date / deadline marker" },
    what: { kind: "Atom", name: "Action line", note: "Serif action text under a timing label" },
    ownlbl: { kind: "Atom", name: "Ownership label", note: "Serif caption under an entity node" },
    mscale: { kind: "Atom", name: "Meter scale", note: "Min / mid / max ticks under a meter", within: "meter" },
    sw: { kind: "Atom", name: "Swatch", note: "Legend chip" },
    dot: { kind: "Atom", name: "Status dot", note: "9px state marker" },
    avatar: { kind: "Atom", name: "Avatar", note: "Initialled 52px circle for a person" },
    rule: { kind: "Atom", name: "Rule", note: "1px --line divider" },
    conn: { kind: "Atom", name: "Connector", note: "Horizontal hairline joining flow steps" },
    vconn: { kind: "Atom", name: "Vertical connector", note: "Hairline drop between stacked nodes" },
    n: { kind: "Atom", name: "Numeric cell", note: "Right-aligned serif tabular figure cell", within: "dense" },
    pad: { kind: "Modifier", name: "Padded figures", note: "Extra right padding on numeric columns", within: "dense" },
    chip: { kind: "Component", name: "Chip", note: "Pill-shaped status tag" },
    keyline: { kind: "Component", name: "Keyline legend", note: "Swatch + label pair" },
    key: { kind: "Component", name: "Chart key", note: "Row of swatch + label pairs under a chart" },
    stat: { kind: "Component", name: "Stat block", note: "Label · figure · support line" },
    card: { kind: "Component", name: "Card", note: "Panel with --dk-radius" },
    "glyph-card": { kind: "Component", name: "Glyph card", note: "Framed cell holding one small chart or glyph" },
    box: { kind: "Component", name: "Box", note: "Outlined container" },
    lesser: { kind: "Component", name: "Secondary box", note: "Quieter outlined aside under a block" },
    node: { kind: "Component", name: "Flow node", note: "Label + value step in a flow" },
    obs: { kind: "Component", name: "Observation", note: "Rule-topped reading note" },
    row: { kind: "Component", name: "Row", note: "Key/value line" },
    lr: { kind: "Component", name: "Ledger row", note: "Left label · right figure" },
    "led-rows": { kind: "Component", name: "Ledger rows", note: "Worksheet row stack" },
    tot: { kind: "Component", name: "Total row", note: "Emphasised sum" },
    total: { kind: "Component", name: "Total", note: "Emphasised sum" },
    tlrow: { kind: "Component", name: "Total line", note: "Rule-topped grid total under a worksheet" },
    zero: { kind: "Component", name: "Zero row", note: "Muted, no-change line" },
    dense: { kind: "Component", name: "Dense table", note: "Comparison table, tabular figures" },
    scen: { kind: "Component", name: "Scenario card", note: "Named scenario definition" },
    doc: { kind: "Component", name: "Document line", note: "Status dot + document name + state" },
    "toc-item": { kind: "Component", name: "Contents item", note: "Numbered contents line" },
    i: { kind: "Atom", name: "Contents numeral", note: "Serif accent numeral in a contents line (as a class; the <i> tag is chart geometry)", within: "toc-item" },
    viz: { kind: "Visualization", name: "Viz frame", note: "Inline SVG canvas; inherits deck type tokens" },
    "vz-num": { kind: "Atom", name: "Viz figure", note: "Serif tabular figure drawn inside an SVG", within: "viz" },
    "vz-name": { kind: "Atom", name: "Viz name", note: "Series / node name inside an SVG", within: "viz" },
    "vz-lbl": { kind: "Atom", name: "Viz label", note: "Uppercase axis or block label inside an SVG", within: "viz" },
    "vz-sm": { kind: "Atom", name: "Viz note", note: "Smallest annotation inside an SVG", within: "viz" },
    "vz-hair": { kind: "Atom", name: "Viz hairline", note: "1px --line stroke: axes, dividers, leaders", within: "viz" },
    meter: { kind: "Visualization", name: "Meter", note: "Horizontal proportion bar" },
    bar: { kind: "Visualization", name: "Segmented bar", note: "26px part-to-whole bar of token fills" },
    track: { kind: "Visualization", name: "Track", note: "8px quiet share indicator" },
    stack: { kind: "Visualization", name: "Stacked column", note: "Vertical part-to-whole" },
    room: { kind: "Visualization", name: "Headroom", note: "Hatched remaining capacity" },
    wf: { kind: "Visualization", name: "Waffle", note: "20-column unit grid; one tile = one unit" },
    sm: { kind: "Visualization", name: "Small multiples", note: "Repeated mini charts" },
    dark: { kind: "Modifier", name: "Dark slide", note: "Dark ground; remaps --mut / --line to dark variants" },
    "r-dark": { kind: "Modifier", name: "Dark slide", note: "Dark ground, --mutD text tokens" },
    deeper: { kind: "Modifier", name: "Deepest ground", note: "--deeper background for divider slides" },
    ondark: { kind: "Modifier", name: "On dark", note: "Contrast-safe variants on dark ground" },
    op: { kind: "Modifier", name: "Opinion", note: "Reading-note treatment" },
    tight: { kind: "Modifier", name: "Tight", note: "Reduced spacing scale" },
    wk: { kind: "Modifier", name: "Worksheet density", note: "Smaller keys and figures for long row stacks" },
    sub: { kind: "Modifier", name: "Sub-row", note: "Indented child row inside a stack", within: "lr" },
    hi: { kind: "Modifier", name: "Highlighted row", note: "Accent-tinted row in a dense table", within: "dense" },
    accent: { kind: "Modifier", name: "Accent edge", note: "3px --gold rule on the leading edge" },
    wa: { kind: "Modifier", name: "Watch", note: "Gold-edged observation — needs attention" },
    in: { kind: "Token use", name: "State: in plan", note: "Mint chip — included / done" },
    out: { kind: "Token use", name: "State: outside plan", note: "Gold chip — excluded / at risk" },
    watch: { kind: "Token use", name: "State: watch", note: "Gold chip — monitor this" },
    na: { kind: "Token use", name: "State: not applicable", note: "Muted chip — nothing to report" },
    ok: { kind: "Token use", name: "State: complete", note: "Mint dot — executed" },
    wait: { kind: "Token use", name: "State: pending", note: "Gold dot — awaiting signature" },
    no: { kind: "Token use", name: "State: missing", note: "Muted dot — not in place" },
    up: { kind: "Token use", name: "Direction: increase", note: "Gold-shade figure — cost went up" },
    down: { kind: "Token use", name: "Direction: decrease", note: "Mint figure — cost went down" },
    mint: { kind: "Token use", name: "Accent: --mint", note: "Primary accent" },
    gold: { kind: "Token use", name: "Accent: --gold", note: "Secondary accent" },
    clay: { kind: "Token use", name: "Accent: --gold shade", note: "Darkened gold for AA text on light grounds" },
    a: { kind: "Token use", name: "Series A", note: "First comparison series" },
    b: { kind: "Token use", name: "Series B", note: "Second comparison series" },
    c: { kind: "Token use", name: "Series C", note: "Third comparison series" },
    sech: { kind: "Component", name: "Section label row", note: "Uppercase ledger section header inside a dense table", within: "dense" },
    grp: { kind: "Component", name: "Group label row", note: "Uppercase group header with an optional form reference", within: "dense" },
    sub2: { kind: "Modifier", name: "Gross counterpart row", note: "Second-level muted row: the gross figure behind a taxable line", within: "dense" },
    "sub-tot": { kind: "Component", name: "Sub-total row", note: "Rule-closed subtotal for a section", within: "dense" },
    profile: { kind: "Component", name: "Profile band", note: "Four-column personal and financial profile strip" },
    taken: { kind: "Modifier", name: "Taken marker", note: "Chip marking the deduction actually claimed", within: "chip" },
    nottaken: { kind: "Modifier", name: "Not-taken marker", note: "Chip marking the deduction not claimed", within: "chip" },
    tightrows: { kind: "Modifier", name: "Compact ledger rows", note: "Long ladder pages run compact rows so the page holds", within: "slide" },
    shrinkviz: { kind: "Modifier", name: "Fitted chart page", note: "Chart-led page fitted proportionally to the shorter 16:9 format", within: "slide" },
    dgood: { kind: "Modifier", name: "Saving delta", note: "Delta that reduces tax; reads mint" },
    dbad: { kind: "Modifier", name: "Added-tax delta", note: "Delta that increases tax; reads gold" },
    pnl: { kind: "Structure", name: "Report panel", note: "Auto-injected at runtime, never hand-applied: every bare top-level block in a slide body — and any bare table, which gets wrapped in one — becomes an ink-tinted panel (2.5% ink into paper) with a hairline border and 10px corners. This is the 'different background + stroke around the container' frame seen around tables and grouped content throughout the Lookback/Return-detail pages." },
    "pnl-kids": { kind: "Structure", name: "Report panel (split)", note: "Variant of .pnl applied when a block's children already carry their own border (or the block is a 3-up grid, paired with .pnl-split): each child becomes its own panel instead of one wrapping panel." },
    nopnl: { kind: "Modifier", name: "Unframed report content", note: "Keep titles, summaries, contents and reading notes outside panel framing." },
    fn: { kind: "Component", name: "Bottom reading note", note: "Explanation after the chart, table and scenario summary; keep readable fine print and visible footer." },
    ssum: { kind: "Component", name: "Scenario summary", note: "Unframed summary below the numbers and above the bottom reading note." },
    ssl: { kind: "Atom", name: "Scenario summary label", note: "Quiet label introducing the scenario-summary band." },
    ssg: { kind: "Structure", name: "Scenario summary grid", note: "Aligned selected-comparison statements; reflows with comparison count." },
    s1: { kind: "Token use", name: "Lookback identity", note: "Historical comparison column; year and as-filed label below the heading." },
    s2: { kind: "Token use", name: "Scenario 1 identity", note: "First planning scenario; retain name, color and square marker across pages." },
    s3: { kind: "Token use", name: "Scenario 2 identity", note: "Second planning scenario; retain name, color and triangle marker across pages." },
    hatch: { kind: "Visualization", name: "SVG headroom hatch", note: "Unused bracket capacity drawn with an SVG line pattern so PDF viewers do not create pink gradient fills." },
    bkbar: { kind: "Visualization", name: "Bracket allocation bar", note: "Income stacked within rate bands, with headroom and explicit year-specific thresholds." },
    irmaasvg: { kind: "Visualization", name: "Medicare IRMAA step chart", note: "Responsive surcharge staircase; scenario shapes, direct labels and right-angle dashed connectors." },
    distance: { kind: "Component", name: "Distance to threshold", note: "Numeric remaining room or excess relative to a labeled statutory threshold." },
    sumt: { kind: "Component", name: "Tax summary table", note: "Core comparison-table hierarchy with scenario headings and right-aligned figures." },
    cg: { kind: "Modifier", name: "Capital gains page", note: "Ordinary income first, then preferential income; show qualified dividends and keep NIIT separate." },
    iie: { kind: "Modifier", name: "Preferential efficiency page", note: "Investment-income composition, distinct from the separate NIIT calculation." },
    "toc-light": { kind: "Modifier", name: "Light contents page", note: "Readable core contents with optional illustration index and clear footer space." },
    actw: { kind: "Component", name: "Contents action group", note: "Optional-scenario context positioned with the core contents." },
    actg: { kind: "Structure", name: "Action information grid", note: "Aligned action groups in the contents; consistent insets and wrapping." },
    ak: { kind: "Component", name: "Action key lines", note: "Supporting action facts or conditions beneath an illustration heading." },
    ar: { kind: "Component", name: "Action fact row", note: "Aligned action label and figure within an action information group." },
    disc: { kind: "Component", name: "Projection disclosure", note: "Readable limitations and independent professional-review requirements; do not shrink to conceal overflow." },
    "pa-page": { kind: "Structure", name: "Optional action page", note: "Shared illustration before Considerations & next steps; stable internal ID and letter-suffixed printed page." },
    "pa-fig": { kind: "Component", name: "Action chart panel", note: "Tinted, bordered sibling panel containing the responsive action chart." },
    "pa-table-panel": { kind: "Component", name: "Action table panel", note: "Separate bordered panel matching core Medicare comparison-table treatment." },
    "pa-chartbox": { kind: "Structure", name: "Responsive action chart container", note: "Measured real-width host; redraw SVG geometry without scaling labels into tiny type." },
    "pa-chart": { kind: "Visualization", name: "Action comparison chart", note: "One shared planning-scenario chart; QCD uses an unfilled income number line." },
    "pa-table": { kind: "Component", name: "Action comparison table", note: "Lookback then selected planning scenarios; sentence-case row headers and aligned numeric cells." },
    "pa-point": { kind: "Atom", name: "Scenario shape marker", note: "Circle, square or triangle paired with named scenario and color; preserve relative geometry." },
    "pa-drop": { kind: "Atom", name: "Right-angle chart connector", note: "Dashed vertical-horizontal leader with explicit fill none; never diagonal or a filled triangle." },
    "pa-marker-label": { kind: "Atom", name: "Direct scenario chart label", note: "Scenario name near a connector, avoiding a redundant top legend." },
    "pa-tick": { kind: "Atom", name: "Action chart scale label", note: "Readable axis value at the natural report text scale." },
    "pa-step": { kind: "Atom", name: "Step / income label", note: "Tier label moved away from crowded markers; QCD labels income rather than a tax tier." },
    "pa-line": { kind: "Visualization", name: "Action chart path", note: "Unfilled step outline or flat AGI number line." },
    "pa-area": { kind: "Visualization", name: "Step-chart supporting fill", note: "Quiet staircase support fill; omitted entirely on the QCD number line." },
    "pa-axis": { kind: "Atom", name: "Action chart axis", note: "Meaningful baseline distinct from quiet background guides." },
    "pa-grid": { kind: "Atom", name: "Quiet chart guide", note: "Background dashed guide remains less prominent than scenario label connectors." },
    "pa-thr": { kind: "Atom", name: "Balanced threshold guide", note: "Bar threshold overhangs equally above and below, by 4px each." },
    "pa-optional-index": { kind: "Component", name: "Optional contents index", note: "Compact names and printed letter suffixes for selected illustrations; no visible internal A IDs." },
    "pa-optional-list": { kind: "Structure", name: "Optional contents list", note: "Wrapping readable references before considerations; updates with selected action pages." },
    "pa-profile": { kind: "Component", name: "Summary scenario panels", note: "Consistent bordered scenario information groups in the tax impact summary." },
    "pa-tax-summary": { kind: "Modifier", name: "Tax impact summary page", note: "Unframed summary notes; omit redundant horizontal rule above the scenario summary." },
    florida: { kind: "Token use", name: "Scenario 1 action identity", note: "Planning scenario square and matching connector and direct label." },
    "florida-roth": { kind: "Token use", name: "Scenario 2 action identity", note: "Planning scenario triangle and matching connector and direct label." },
    lookback: { kind: "Token use", name: "Historical action identity", note: "Historical circle retained in table context; excluded from planning-only action charts." },
    "ds-print-cover-title": { kind: "Modifier", name: "Printer-friendly cover title", note: "Wider cover title group; one-line Tax Planning Report only in printer-friendly mode." },
    insights: { kind: "Structure", name: "Tax Insights continuous report", note: "Height-unlimited findings report; non-clickable exported section index." },
    intro: { kind: "Component", name: "Insights introduction", note: "Report context and tax year, separate from supplied conclusions." },
    source: { kind: "Component", name: "Source caveat", note: "Distinguishes supplied findings from validated tax conclusions; flags contradictory claims." },
    index: { kind: "Component", name: "Plain-text section index", note: "Section names are non-clickable in Tax Insights and its PDF exports." },
    anomaly: { kind: "Component", name: "Return anomaly", note: "Supplied inconsistency requiring review, not an automatic validated conclusion." },
    opportunity: { kind: "Component", name: "Planning opportunity", note: "Neutral potential planning observation with validation requirements." },
    opportunities: { kind: "Structure", name: "Planning findings section", note: "Related opportunities in the continuous Tax Insights report." },
    thresholds: { kind: "Structure", name: "Threshold and timing section", note: "Year-labeled threshold and timing findings; flag uncertain source assumptions." },
    review: { kind: "Structure", name: "Questions to validate", note: "Professional-review questions that keep conclusions distinct from source claims." },
    "section-head": { kind: "Component", name: "Continuous section heading", note: "Unframed topical title within Tax Insights." },
    count: { kind: "Atom", name: "Findings count", note: "Compact count associated with a continuous-report section." },
    hrow: { kind: "Component", name: "Finding row", note: "Aligned label and finding within a continuous report." },
    amount: { kind: "Atom", name: "Finding amount", note: "Prominent tabular financial figure with supporting source context." },
    notes: { kind: "Component", name: "Finding notes", note: "Supporting caveats and interpretation beneath supplied findings." },
  };

  var TAGS = {
    H1: { kind: "Atom", name: "Headline · h1", note: "Cover / section headline" },
    H2: { kind: "Atom", name: "Headline · h2", note: "Slide headline, serif 300" },
    H3: { kind: "Atom", name: "Subhead · h3", note: "Block heading" },
    P: { kind: "Atom", name: "Paragraph", note: "Body copy; takes .small / .lede / .note" },
    TD: { kind: "Atom", name: "Table cell", note: "Data cell in a dense table; .n makes it a tabular figure", within: "dense" },
    TH: { kind: "Atom", name: "Table head cell", note: "Uppercase column head in a dense table", within: "dense" },
    I: { kind: "Atom", name: "Bar / segment", note: "Chart geometry, token fill" },
    SPAN: { kind: "Atom", name: "Inline text", note: "Inline run; usually carries an atom class" },
  };

  var root = document.documentElement;
  var on = false;
  var probe, panel, ring, tokenCache = {}, cacheTheme = "";

  function css(el, p) { return getComputedStyle(el).getPropertyValue(p).trim(); }

  function rgb(value) {
    if (!probe) {
      probe = document.createElement("span");
      probe.style.cssText = "position:fixed;left:-9999px;top:0";
      document.body.appendChild(probe);
    }
    probe.style.color = "rgb(1,2,3)";
    probe.style.color = value;
    return parseColor(getComputedStyle(probe).color);
  }

  // handles rgb()/rgba() and the color(srgb r g b / a) form modern engines
  // return for color-mix(), where channels are 0-1 rather than 0-255
  function parseColor(str) {
    var m = String(str).match(/[\d.]+(?:e-?\d+)?/g);
    if (!m) return null;
    var scale = /color\(/.test(str) ? 255 : 1;
    var a = m[3] === undefined ? 1 : +m[3];
    return [+m[0] * scale, +m[1] * scale, +m[2] * scale, a];
  }

  function tokens() {
    var theme = root.getAttribute("data-theme") || "";
    if (theme === cacheTheme) return tokenCache;
    cacheTheme = theme;
    tokenCache = {};
    TOKENS.forEach(function (t) {
      var c = rgb("var(--" + t + ")");
      if (c) tokenCache[t] = c;
    });
    return tokenCache;
  }

  function dist(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
  }

  function nameColor(value) {
    var c = typeof value === "string" && /^(rgb|color\()/.test(value) ? parseColor(value) : rgb(value);
    if (!c) return null;
    if (c[3] === 0) return "none";
    var T = tokens(), best = null;
    Object.keys(T).forEach(function (t) {
      var d = dist(c, T[t]);
      if (!best || d < best.d) best = { d: d, label: "var(--" + t + ")" };
    });
    if (best && best.d <= 9) return best.label;
    // try a tint/shade: color-mix(in srgb, A n%, B)
    var mix = null;
    Object.keys(T).forEach(function (a) {
      MIX_BASES.forEach(function (b) {
        if (a === b || !T[b]) return;
        for (var p = 10; p <= 90; p += 5) {
          var k = p / 100, m = [
            T[a][0] * k + T[b][0] * (1 - k),
            T[a][1] * k + T[b][1] * (1 - k),
            T[a][2] * k + T[b][2] * (1 - k),
          ];
          var d = dist(c, m);
          if (!mix || d < mix.d) mix = { d: d, label: "color-mix(--" + a + " " + p + "%, --" + b + ")" };
        }
      });
    });
    if (mix && mix.d <= 26) return mix.label;
    return (best ? "≈ " + best.label + " " : "") + "(" + value + ")";
  }

  function nameFont(family) {
    var s = css(root, "--dk-serif"), n = css(root, "--dk-sans");
    var first = function (f) { return (f.split(",")[0] || "").replace(/["']/g, "").trim(); };
    if (first(family) && first(family) === first(s)) return "var(--dk-serif) · " + first(s);
    if (first(family) && first(family) === first(n)) return "var(--dk-sans) · " + first(n);
    return first(family);
  }

  function parts(el) {
    var out = [];
    for (var i = 0; i < el.classList.length; i++) {
      var c = el.classList[i];
      if (REGISTRY[c]) out.push({ cls: c, meta: REGISTRY[c] });
    }
    return out;
  }

  function chain(el) {
    var found = [], node = el, hops = 0;
    while (node && node !== document.body && hops < 6) {
      var p = parts(node);
      if (p.length) found.push({ el: node, parts: p });
      node = node.parentElement;
      hops++;
    }
    return found;
  }

  function ensureUI() {
    if (panel) return;
    var style = document.createElement("style");
    style.textContent =
      "#ds-ring{position:fixed;pointer-events:none;z-index:2147483646;border:2px solid var(--mint);" +
      "box-shadow:0 0 0 1px var(--paper) inset;transition:all .06s linear}" +
      "#ds-panel{position:fixed;z-index:2147483647;pointer-events:none;max-width:430px;" +
      "background:var(--paper);color:var(--ink);border:1px solid var(--line);border-radius:var(--dk-radius,4px);" +
      "box-shadow:0 24px 60px -22px rgba(0,0,0,.5);padding:14px 16px;font-family:var(--dk-sans);font-size:13px;line-height:1.45}" +
      "#ds-panel .k{font-size:10px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:var(--mut)}" +
      "#ds-panel .h{font-family:var(--dk-serif);font-size:20px;margin:2px 0 2px}" +
      "#ds-panel .n{color:var(--mut);font-size:12px}" +
      "#ds-panel .g{display:grid;grid-template-columns:auto 1fr;gap:3px 12px;margin-top:10px;font-size:12.5px}" +
      "#ds-panel .g b{font-weight:600;color:var(--mut);font-size:10px;letter-spacing:.14em;text-transform:uppercase;align-self:center}" +
      "#ds-panel code{font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:11.5px}" +
      "#ds-panel .anc{margin-top:10px;padding-top:8px;border-top:1px solid var(--line);color:var(--mut);font-size:11.5px}" +
      "#ds-hint{position:fixed;left:18px;bottom:18px;z-index:2147483647;pointer-events:none;background:var(--deep);" +
      "color:var(--paper);padding:7px 12px;border-radius:999px;font-family:var(--dk-sans);font-size:11px;" +
      "letter-spacing:.14em;text-transform:uppercase;font-weight:700}";
    document.head.appendChild(style);
    ring = document.createElement("div");
    ring.id = "ds-ring";
    panel = document.createElement("div");
    panel.id = "ds-panel";
    document.body.appendChild(ring);
    document.body.appendChild(panel);
  }

  function row(label, value) {
    if (!value) return "";
    return "<b>" + label + "</b><span><code>" + value + "</code></span>";
  }

  function describe(el, x, y) {
    var cs = getComputedStyle(el);
    var found = chain(el);
    var head = found[0];
    var self = head && head.el === el ? head : null;
    var meta = self
      ? self.parts[self.parts.length - 1].meta
      : TAGS[el.tagName] || (head ? head.parts[head.parts.length - 1].meta : null);
    var clsList = self
      ? self.parts.map(function (p) { return "." + p.cls; }).join(" ")
      : el.tagName.toLowerCase();

    // Anything the catalogue does not name is reported as a gap, never renamed.
    var unknown = [];
    for (var ci = 0; ci < el.classList.length; ci++) {
      if (!REGISTRY[el.classList[ci]]) unknown.push("." + el.classList[ci]);
    }
    var undoc = !meta;

    var g = "";
    g += row("Text", nameColor(cs.color));
    var bg = cs.backgroundColor, bgi = cs.backgroundImage;
    if (bg && bg !== "rgba(0, 0, 0, 0)") g += row("Fill", nameColor(bg));
    else if (bgi && bgi !== "none") g += row("Fill", bgi.indexOf("repeating") === 0 ? "hatch · --ink tints" : "gradient of tokens");
    if (cs.borderTopWidth !== "0px" || cs.borderLeftWidth !== "0px")
      g += row("Border", nameColor(cs.borderTopColor || cs.borderLeftColor));
    g += row("Type", nameFont(cs.fontFamily) + " · " + Math.round(parseFloat(cs.fontSize)) + "px / " + cs.fontWeight);
    if (cs.letterSpacing !== "normal") g += row("Tracking", cs.letterSpacing);
    if (cs.borderRadius !== "0px") g += row("Radius", cs.borderRadius + " (--dk-radius)");

    var anc = found.slice(self ? 1 : 0).map(function (f) {
      return f.parts[f.parts.length - 1].meta.name;
    });

    panel.innerHTML =
      '<div class="k">' + (undoc ? "Not in the catalogue" : meta.kind) + "</div>" +
      '<div class="h">' + (meta ? meta.name : el.tagName.toLowerCase()) + "</div>" +
      (meta && meta.note ? '<div class="n">' + meta.note + "</div>" : "") +
      (meta && meta.within ? '<div class="n">Used inside <code>.' + meta.within + "</code></div>" : "") +
      '<div class="n"><code>' + clsList + "</code></div>" +
      '<div class="g">' + g + "</div>" +
      (unknown.length
        ? '<div class="anc">Undocumented: <code>' + unknown.join(" ") + "</code> — add it to the class reference</div>"
        : "") +
      (anc.length ? '<div class="anc">In: ' + anc.join(" → ") + "</div>" : "");

    var r = el.getBoundingClientRect();
    ring.style.left = r.left + "px";
    ring.style.top = r.top + "px";
    ring.style.width = r.width + "px";
    ring.style.height = r.height + "px";

    var pw = panel.offsetWidth, ph = panel.offsetHeight;
    var px = Math.min(x + 20, innerWidth - pw - 12);
    var py = Math.min(y + 20, innerHeight - ph - 12);
    panel.style.left = Math.max(12, px) + "px";
    panel.style.top = Math.max(12, py) + "px";
  }

  function onMove(e) {
    if (!on) return;
    var el = e.target;
    if (!el || el.id === "ds-panel" || el.id === "ds-ring") return;
    describe(el, e.clientX, e.clientY);
  }

  function setOn(next) {
    on = next;
    if (on) {
      ensureUI();
      ring.style.display = "block";
      panel.style.display = "block";
      if (!document.getElementById("ds-hint")) {
        var h = document.createElement("div");
        h.id = "ds-hint";
        h.textContent = "Inspect on · press i to exit";
        document.body.appendChild(h);
      }
      addEventListener("mousemove", onMove, true);
    } else {
      removeEventListener("mousemove", onMove, true);
      if (ring) ring.style.display = "none";
      if (panel) panel.style.display = "none";
      var hint = document.getElementById("ds-hint");
      if (hint) hint.remove();
    }
    try { parent.postMessage({ type: "ds-inspect-state", on: on }, "*"); } catch (err) { /* noop */ }
  }

  addEventListener("message", function (e) {
    var d = e.data || {};
    if (d.type === "ds-inspect") setOn(!!d.on);
  });

  addEventListener("keydown", function (e) {
    if (e.key === "i" || e.key === "I") setOn(!on);
    if (e.key === "Escape") setOn(false);
  });
})();
