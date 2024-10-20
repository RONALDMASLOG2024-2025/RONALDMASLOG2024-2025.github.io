window.onload = function () {
  const isDark = localStorage.getItem("darkmode") === "true";
  if (isDark) {
    document.body.classList.add("darkmode");
  }
};

function darkmode() {
  const body = document.body;
  const isDark = body.classList.toggle("darkmode");
  localStorage.setItem("darkmode", isDark);
}

function scrollToSection() {
  const element = document.getElementById("card-contact");
  element.scrollIntoView({ behavior: "smooth" });
}
