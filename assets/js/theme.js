/* Light/dark toggle. Light is the default; dark is opt-in and remembered.
   Falls back silently when storage is unavailable. */
(function () {
  var KEY = "yd-theme";
  var root = document.documentElement;

  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) { /* private mode, blocked storage */ }

  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest(".theme-toggle");
    if (!btn) return;
    var current = root.getAttribute("data-theme") || "light";
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
  });
})();
