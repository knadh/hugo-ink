document.addEventListener("DOMContentLoaded", function(){
  var toggle = document.getElementById("scheme-toggle");

  var scheme = "light";
  var savedScheme = localStorage.getItem("scheme");

  var darkScheme = document.getElementById("dark-scheme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    scheme = "dark";
  }

  if(savedScheme) {
    scheme = savedScheme;
  }

  if(scheme == "dark") {
    darkscheme(toggle, darkScheme);
  } else {
    lightscheme(toggle, darkScheme);
  }

  toggle.addEventListener("click", () => {
    if (toggle.className === "light") {
      darkscheme(toggle, darkScheme);
    } else if (toggle.className === "dark") {
      lightscheme(toggle, darkScheme);
    }
  });
});

function darkscheme(toggle, darkScheme) {
  localStorage.setItem("scheme", "dark");
  toggle.innerHTML = feather.icons.sun.toSvg();
  toggle.className = "dark";
  darkScheme.disabled = false;
}

function lightscheme(toggle, darkScheme) {
  localStorage.setItem("scheme", "light");
  toggle.innerHTML = feather.icons.moon.toSvg();
  toggle.className = "light";
  darkScheme.disabled = true;
}
