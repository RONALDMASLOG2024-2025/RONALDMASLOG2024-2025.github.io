window.onload = function () {
  const isDark = localStorage.getItem("darkmode") === "true";
  const modeBtn = document.getElementById("mode-btn");

  
  if (isDark) {
    document.body.classList.add("darkmode");
    modeBtn.style.fill = "white"; 
  } else {
    document.body.classList.remove("darkmode");
    modeBtn.style.fill = "black";
  }
};

function darkmode() {
  const body = document.body;
  const modeBtn = document.getElementById("mode-btn");


  const isDark = body.classList.toggle("darkmode");

  if (isDark) {
    modeBtn.style.fill = "white"; 
  } else {
    modeBtn.style.fill = "black"; 
  }

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
