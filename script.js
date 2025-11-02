// === Scroll Lock per Section ===
const sections = document.querySelectorAll(".page-section");
let currentSection = 0;
let isScrolling = false;

function goToSection(index) {
  if (index < 0 || index >= sections.length || isScrolling) return;
  isScrolling = true;
  sections[index].scrollIntoView({ behavior: "smooth" });
  currentSection = index;
  setTimeout(() => (isScrolling = false), 1000);
}

// === Scroll event ===
window.addEventListener(
  "wheel",
  (e) => {
    if (isScrolling) return;
    if (e.deltaY > 50) goToSection(currentSection + 1);
    else if (e.deltaY < -50) goToSection(currentSection - 1);
  },
  { passive: false }
);

// === Keyboard navigation ===
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") goToSection(currentSection + 1);
  else if (e.key === "ArrowUp") goToSection(currentSection - 1);
});

// === Navbar click ===
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    goToSection(parseInt(link.dataset.index));
  });
});
