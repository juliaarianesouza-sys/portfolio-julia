// Atualiza o ano automaticamente no rodapé.
const yearElement = document.getElementById('currentYear');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Aplica efeito de fade-in quando as seções entram na viewport.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll('.fade-in').forEach((element) => observer.observe(element));
