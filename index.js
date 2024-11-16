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

async function getStoicQuote() {
  const apiUrl = "https://stoic-quotes.com/api/quote";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    displayQuote(data);
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
}

function displayQuote(quote) {
  const quoteContainer = document.getElementById("quote-container");
  quoteContainer.innerHTML = `
      <p>"${quote.text}"</p>
      <h5>— ${quote.author}</h5>
  `;
}

document.addEventListener("DOMContentLoaded", getStoicQuote);


