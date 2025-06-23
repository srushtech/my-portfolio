// Sidebar Toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Typing Effect
const typedText = document.getElementById("typed-text");
const roles = ["Redhat Ethusiast", "Linux Enthusiast", "Creative Coder"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = roles[index];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedText.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
