// Update year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scrolling for nav links (within same page)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Change active nav link on scroll
const sections = ["home", "services", "doctors", "contact"]
  .map(id => document.getElementById(id));
const navLinks = document.querySelectorAll(".nav-links a:not(.btn)");

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 80;
  let currentId = "home";

  sections.forEach(sec => {
    if (sec && sec.offsetTop <= fromTop) {
      currentId = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href").slice(1) === currentId
    );
  });
});

// "Random test image" button: calls /predict-random?disease=...
const randomBtn = document.getElementById("random-btn");
if (randomBtn) {
  randomBtn.addEventListener("click", () => {
    const diseaseSelect = document.getElementById("disease");
    const disease = diseaseSelect ? diseaseSelect.value : "pneumonia";
    const url = `/predict-random?disease=${encodeURIComponent(disease)}`;
    window.location.href = url;
  });
}