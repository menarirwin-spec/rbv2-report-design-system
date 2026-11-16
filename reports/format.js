/* Slide format switcher.
   Lets the viewer flip every slide between the 16:9 deck format (1600x900)
   and the product page format (1584x1224, landscape A4-ish).
   Driven by postMessage {type:'ds-format', format:'wide'|'page'}. */
(function () {
  /* Every deck loads this shared reversible accessibility treatment. */
  var bobScript = document.createElement("script");
  bobScript.src = "/reports/accessibility.js";
  document.head.appendChild(bobScript);
  addEventListener("message", function (e) {
    if (e.data && e.data.type === "ds-accessibility") document.documentElement.setAttribute("data-bob-accessibility", e.data.on ? "on" : "off");
  });
  var style = document.getElementById("ds-format");
  if (!style) {
    style = document.createElement("style");
    style.id = "ds-format";
    document.head.appendChild(style);
  }

  var current = "wide";
  if (!document.documentElement.getAttribute("data-format")) document.documentElement.setAttribute("data-format", "wide");

  function apply(format) {
    current = format === "page" ? "page" : "wide";
    /* expose the format so slide CSS can use the extra height of the page
       format instead of leaving it empty at the bottom */
    document.documentElement.setAttribute("data-format", current);
    style.textContent =
      current === "page"
        ? ".slide{width:1584px!important;height:1224px!important}" +
          "@page{size:1584px 1224px landscape;margin:0}"
        : "";
    try {
      parent.postMessage({ type: "ds-format-state", format: current }, "*");
    } catch (err) {
      /* noop */
    }
  }

  /* Printer-friendly mode: pure white pages on every theme, dark slides
     rendered as light ones, and large tinted fills lightened to save ink.
     Data colors stay so series remain distinguishable. */
  var printStyle = document.createElement("style");
  printStyle.id = "ds-print";
  printStyle.textContent =
    "html[data-print]{--paper:#fff;--cream:#fff;--mixbg:#fff}" +
    "html[data-print],html[data-print] body{background:#fff!important}" +
    "html[data-print] .slide{background:#fff!important;box-shadow:none!important}" +
    "html[data-print] .card,html[data-print] .node,html[data-print] .box,html[data-print] .pnl,html[data-print] .prd-card{background:#fff!important}" +
    "html[data-print] .totalbar{background:#fff!important;color:var(--ink)!important;border:1.5px solid var(--deep)}" +
    "html[data-print] .totalbar *{color:var(--ink)!important}" +
    "html[data-print] .pa-area{fill:color-mix(in srgb,var(--deep) 4%,#fff)}" +
    "html[data-print] .pa-span,html[data-print] .pa-bar-ex{fill:color-mix(in srgb,var(--mint) 12%,#fff)}" +
    "html[data-theme=\"midnight\"][data-print]{--paper:#fff;--cream:#0B1120;--ink:#0B1120;--deep:#14213D;--deeper:#0B1120;--mut:#4A566E;--mint:#1F8A7E;--gold:#8A6D1F;--line:rgba(11,17,32,.16);--lineD:rgba(11,17,32,.16);--mutD:#4A566E}" +
    "html[data-print] .slide[data-was-dark]{--cream:var(--ink);--mutD:var(--mut);--lineD:var(--line);color:var(--ink)}" +
    "html[data-print] .slide[data-was-dark]::before,html[data-print] .slide[data-was-dark]::after{display:none!important}" +
    "html[data-print] .cover-rings,html[data-print] .cover-mark{display:none!important}" +
    "html[data-print] .ds-print-cover-title{max-width:none!important;width:100%}" +
    "html[data-print] .ds-print-cover-title h1{max-width:none!important;white-space:nowrap}" +
    "html[data-print] .ds-print-cover-title h1 br{display:none}" +
    "@media print{html[data-print] *{-webkit-print-color-adjust:exact;print-color-adjust:exact}}";
  document.head.appendChild(printStyle);
  /* The cover has an intentional line break, not just a width constraint.
     Keep it in normal mode; a separating space lets print mode hide it. */
  document.querySelectorAll(".slide h1").forEach(function (title) {
    if (title.textContent.replace(/\s/g, "") !== "TaxPlanningReport") return;
    var container = title.parentElement;
    if (container) container.classList.add("ds-print-cover-title");
    title.querySelectorAll("br").forEach(function (br) {
      br.before(document.createTextNode(" "));
    });
  });
  var printOn = false;
  function applyPrint(on) {
    printOn = !!on;
    var root = document.documentElement;
    if (printOn) root.setAttribute("data-print", "on");
    else root.removeAttribute("data-print");
    document.querySelectorAll(".slide.dark,.slide.deeper,.slide[data-was-dark]").forEach(function (s) {
      if (printOn && !s.hasAttribute("data-was-dark")) {
        s.setAttribute("data-was-dark", (s.classList.contains("dark") ? "dark " : "") + (s.classList.contains("deeper") ? "deeper" : ""));
        s.classList.remove("dark", "deeper");
      } else if (!printOn && s.hasAttribute("data-was-dark")) {
        s.getAttribute("data-was-dark").split(" ").forEach(function (c) { if (c) s.classList.add(c); });
        s.removeAttribute("data-was-dark");
      }
    });
    fixContrast(printOn);
    window.dispatchEvent(new Event("resize"));
  }

  /* After switching to white pages, any text that no longer reaches 4.5:1
     against white (e.g. inline cream/translucent colors written for dark
     slides) is re-colored: to the theme's secondary gray if that passes,
     otherwise to the ink color. The original inline color is restored when
     the mode is turned off. */
  function rgb(c) {
    var m = c.match(/[\d.]+/g);
    if (!m) return null;
    var a = m.length > 3 ? +m[3] : 1;
    return [0, 1, 2].map(function (i) { return +m[i] * a + 255 * (1 - a); });
  }
  function lum(v) {
    v = v.map(function (x) { x /= 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); });
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  }
  function ratio(c) { var v = rgb(c); return v ? 1.05 / (lum(v) + 0.05) : 21; }
  /* Keep the hue (e.g. red "Exceeds", green "Eligible") and darken it just
     enough to reach 4.5:1 on white. Near-gray text (low saturation) falls
     back to the theme gray/ink instead. */
  function darken(c) {
    var v = rgb(c);
    if (!v) return null;
    var mx = Math.max(v[0], v[1], v[2]), mn = Math.min(v[0], v[1], v[2]);
    if (mx - mn < 40) return null;
    for (var k = 0.95; k > 0.2; k -= 0.05) {
      var d = v.map(function (x) { return Math.round(x * k); });
      if (1.05 / (lum(d) + 0.05) >= 4.6) return "rgb(" + d.join(",") + ")";
    }
    return null;
  }
  function fixContrast(on) {
    document.querySelectorAll("[data-print-fixed]").forEach(function (el) {
      el.style.color = el.getAttribute("data-print-fixed");
      el.removeAttribute("data-print-fixed");
    });
    if (!on) return;
    var probe = document.createElement("span");
    document.body.appendChild(probe);
    probe.style.color = "var(--mut)"; var mut = getComputedStyle(probe).color;
    probe.style.color = "var(--ink)"; var ink = getComputedStyle(probe).color;
    probe.remove();
    var fix = ratio(mut) >= 4.5 ? mut : ink;
    var els = document.querySelectorAll(".slide *");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.closest("svg")) continue;
      var own = false;
      for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.nodeValue.trim()) { own = true; break; }
      if (!own) continue;
      var cs = getComputedStyle(el);
      var bgEl = el, bg = null;
      while (bgEl && bgEl.nodeType === 1) {
        var c = getComputedStyle(bgEl).backgroundColor;
        if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") { bg = c; break; }
        if (bgEl.classList.contains("slide")) break;
        bgEl = bgEl.parentElement;
      }
      if (bg && ratio(bg) > 1.6) continue; /* text sits on a colored chip or bar */
      if (ratio(cs.color) >= 4.5) continue;
      el.setAttribute("data-print-fixed", el.style.color || "");
      el.style.color = darken(cs.color) || fix;
    }
  }

  addEventListener("message", function (e) {
    var d = e.data || {};
    if (d.type === "ds-format") apply(d.format);
    if (d.type === "ds-print") applyPrint(d.on);
    if (printOn && (d.type === "ds-theme" || d.type === "ds-format" || d.type === "ds-actions" || d.type === "ds-strategies")) setTimeout(function () { fixContrast(true); }, 300);
    if (d.type === "ds-ping") {
      try {
        parent.postMessage({ type: "ds-format-state", format: current }, "*");
      } catch (err) {
        /* noop */
      }
    }
  });
})();
