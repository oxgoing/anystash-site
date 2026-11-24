(function () {
  function openHashTarget() {
    var id = (location.hash || "").slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === "DETAILS") {
      el.open = true;
    }
    var parent = el.closest("details");
    if (parent) parent.open = true;
  }

  openHashTarget();
  window.addEventListener("hashchange", openHashTarget);
})();
