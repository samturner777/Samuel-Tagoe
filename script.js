const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const typingHeading = document.querySelector(".typing-heading");
if (typingHeading) {
  const typingObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        typingHeading.classList.add("typing-active");
        typingObserver.unobserve(typingHeading);
      }
    },
    { threshold: 0.6 }
  );
  typingObserver.observe(typingHeading);
}

const earlierButton = document.querySelector(".timeline-more");
const earlierExperience = document.querySelector(".earlier-experience");

earlierButton?.addEventListener("click", () => {
  const isOpen = earlierButton.getAttribute("aria-expanded") === "true";
  earlierButton.setAttribute("aria-expanded", String(!isOpen));
  earlierExperience.hidden = isOpen;
  earlierButton.firstChild.textContent = isOpen ? "View earlier experience " : "Hide earlier experience ";
  earlierButton.querySelector("span").textContent = isOpen ? "+" : "−";
});

document.querySelector("#year").textContent = new Date().getFullYear();
