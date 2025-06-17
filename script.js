const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
const body = document.body;

if (currentTheme === 'dark') {
  body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Optional: Form Submission Placeholder
successMsg.classList.add('show');
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll(".project-card").forEach(card => {
      observer.observe(card);
    });
  });



