// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Handle form submit (quote.html)
const quoteForm = document.querySelector("form");
if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your request has been submitted.");
    quoteForm.reset();
  });
}

// Optional: Mobile navigation toggle (for future use)
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
