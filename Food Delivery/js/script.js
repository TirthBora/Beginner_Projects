// ===== Navbar Link Hover Animation =====
document.querySelectorAll("header ul li a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#ffe6e6";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "white";
  });
});

// ===== Fade-in Animation for Hero Section =====
window.addEventListener("scroll", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// ===== Input Animation (Typing Effect) =====
const input = document.querySelector(".hero input");
const placeholders = [
  "Search for restaurants...",
  "Search for cuisines...",
  "Search for dishes...",
];
let i = 0;

setInterval(() => {
  input.placeholder = placeholders[i];
  i = (i + 1) % placeholders.length;
}, 3000);

// ===== Page Load Animation =====
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  hero.classList.add("fade-in", "visible");
});
