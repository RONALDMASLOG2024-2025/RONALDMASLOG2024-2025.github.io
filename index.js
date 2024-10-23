window.onload = function () {
  const isDark = localStorage.getItem("darkmode") === "true";

  if (isDark) {
    document.body.classList.add("darkmode");
    document.getElementById("mode-btn").checked = true;
  } else {
    document.getElementById("mode-btn").checked = false;
  }
};

function darkmode() {
  const body = document.body;
  const modeBtn = document.getElementById("mode-btn");

  const isDark = body.classList.toggle("darkmode");
  modeBtn.checked = isDark;
  localStorage.setItem("darkmode", isDark);
}

function scrollToSection() {
  const element = document.getElementById("card-contact");
  element.scrollIntoView({ behavior: "smooth" });
}


function scrollToSectionH() {
  const element = document.getElementById("home");
  element.scrollIntoView({ behavior: "smooth" });
}
