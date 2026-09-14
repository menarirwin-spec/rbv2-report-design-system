/* Slide format switcher.
   Lets the viewer flip every slide between the 16:9 deck format (1600x900)
   and the product page format (1584x1224, landscape A4-ish).
   Driven by postMessage {type:'ds-format', format:'wide'|'page'}. */
(function () {
  var style = document.getElementById("ds-format");
  if (!style) {
    style = document.createElement("style");
    style.id = "ds-format";
    document.head.appendChild(style);
  }

  var current = "wide";

  function apply(format) {
    current = format === "page" ? "page" : "wide";
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

  addEventListener("message", function (e) {
    var d = e.data || {};
    if (d.type === "ds-format") apply(d.format);
    if (d.type === "ds-ping") {
      try {
        parent.postMessage({ type: "ds-format-state", format: current }, "*");
      } catch (err) {
        /* noop */
      }
    }
  });
})();
