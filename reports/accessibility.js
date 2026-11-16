/* Shared, reversible chart contrast review. Does not alter tax data or PDF tags. */
(function () {
  function luminance(rgb) {
    var v = rgb.map(function (x) { x /= 255; return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); });
    return v[0] * 0.2126 + v[1] * 0.7152 + v[2] * 0.0722;
  }
  function contrast(a, b) {
    var x = luminance(a), y = luminance(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  }
  function foreground(backgrounds, minimum) {
    return [[0, 0, 0], [255, 255, 255]].find(function (c) {
      return backgrounds.every(function (bg) { return contrast(c, bg) >= minimum; });
    }) || null;
  }
  var api = { contrast: contrast, foreground: foreground, defaultOn: true };
  globalThis.ReportAccessibility = api;
  if (typeof document === "undefined") return;
  var root = document.documentElement;
  if (!root.hasAttribute("data-bob-accessibility")) root.setAttribute("data-bob-accessibility", "on");
  var originals = new Map();
  function set(el, property, value) {
    var saved = originals.get(el);
    if (!saved) { saved = {}; originals.set(el, saved); }
    if (!(property in saved)) saved[property] = [el.style.getPropertyValue(property), el.style.getPropertyPriority(property)];
    el.style.setProperty(property, value, "important");
  }
  function restore() {
    originals.forEach(function (props, el) {
      Object.keys(props).forEach(function (p) {
        if (props[p][0]) el.style.setProperty(p, props[p][0], props[p][1]);
        else el.style.removeProperty(p);
      });
    });
    originals.clear();
  }
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  function color(value) {
    if (!ctx || !value || value === "none") return [0, 0, 0, 0];
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = value;
    ctx.fillRect(0, 0, 1, 1);
    return Array.from(ctx.getImageData(0, 0, 1, 1).data);
  }
  function background(el) {
    if (!el) return [255, 255, 255];
    var c = color(getComputedStyle(el).backgroundColor);
    if (c[3] === 255) return c.slice(0, 3);
    var below = background(el.parentElement), alpha = c[3] / 255;
    return below.map(function (x, i) { return x * (1 - alpha) + c[i] * alpha; });
  }
  function css(c) { return "rgb(" + c.join(",") + ")"; }
  function refresh() {
    restore();
    if (root.getAttribute("data-bob-accessibility") !== "on") return;
    /* Inset boundaries preserve the bar's exact measured width/height. */
    document.querySelectorAll(".bkbar, .stack, .stackbar, .bar, .track, .slide div[style*='display:flex']").forEach(function (bar) {
      var parts = Array.from(bar.children).filter(function (el) {
        return el.matches("i, .seg, .room, .hatch") && !el.classList.contains("sw");
      });
      if (parts.length < 2) return;
      var vertical = getComputedStyle(bar).flexDirection === "column";
      for (var i = 1; i < parts.length; i++) {
        var prev = parts[i - 1], el = parts[i];
        var a = background(prev), b = background(el);
        if (contrast(a, b) >= 3) continue;
        var edge = foreground([a, b], 3);
        var shadows = edge
          ? (vertical ? "0 2px 0 " : "2px 0 0 ") + css(edge) + " inset"
          : (vertical ? "0 1px 0 rgb(0,0,0) inset,0 3px 0 rgb(255,255,255) inset" : "1px 0 0 rgb(0,0,0) inset,3px 0 0 rgb(255,255,255) inset");
        set(el, "box-shadow", shadows);
      }
    });
    /* Correct labels on colored chips/bands, without recoloring the series. */
    document.querySelectorAll(".slide *").forEach(function (el) {
      if (el.closest("svg")) return;
      var own = Array.from(el.childNodes).some(function (n) { return n.nodeType === 3 && n.textContent.trim(); });
      if (!own) return;
      var cs = getComputedStyle(el), fg = color(cs.color).slice(0, 3), bg = background(el);
      var size = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight, 10) >= 700;
      var minimum = size >= 24 || (bold && size >= 18.67) ? 3 : 4.5;
      if (contrast(fg, bg) >= minimum) return;
      var surface = el;
      while (surface && surface !== el.closest(".slide") && color(getComputedStyle(surface).backgroundColor)[3] === 0) surface = surface.parentElement;
      if (!surface || surface.classList.contains("slide")) return;
      var replacement = foreground([bg], minimum);
      if (replacement) set(el, "color", css(replacement));
    });
  }
  var timer;
  function schedule() { clearTimeout(timer); timer = setTimeout(refresh, 350); }
  addEventListener("message", function (e) {
    var d = e.data || {};
    if (d.type === "ds-accessibility") {
      root.setAttribute("data-bob-accessibility", d.on ? "on" : "off");
      refresh();
    } else if (["ds-theme", "ds-print", "ds-format", "ds-actions", "ds-strategies", "ds-prd-options"].includes(d.type)) schedule();
  });
  new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  addEventListener("beforeprint", refresh);
  api.refresh = refresh;
  refresh();
})();