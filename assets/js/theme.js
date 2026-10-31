/* Light / dark theme toggle — same behaviour as al-folio's theme.js:
   remembers the choice in localStorage and otherwise follows the OS. */
(function () {
  function setTheme(theme) {
    try {
      var html = document.documentElement;
      html.classList.add("transition");
      window.setTimeout(function () { html.classList.remove("transition"); }, 500);
      if (theme === "dark") {
        html.setAttribute("data-theme", "dark");
      } else {
        html.removeAttribute("data-theme");
      }
      localStorage.setItem("theme", theme);
    } catch (e) { /* storage unavailable — ignore */ }
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("light-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        setTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    }

    // mobile hamburger
    var burger = document.querySelector(".navbar-toggler");
    var collapse = document.getElementById("navbarNav");
    if (burger && collapse) {
      burger.addEventListener("click", function () {
        var open = collapse.classList.toggle("show");
        burger.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      collapse.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          collapse.classList.remove("show");
          burger.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }
  });
})();
