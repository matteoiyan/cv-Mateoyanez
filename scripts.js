document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".progress");

  // Guardar el ancho final en una variable CSS
  skills.forEach(skill => {
    const finalWidth = skill.style.width; // ejemplo: "70%"
    skill.style.setProperty("--final-width", finalWidth);
    skill.style.width = "0"; // reiniciar
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.style.getPropertyValue("--final-width");
        observer.unobserve(bar); // se ejecuta una sola vez
      }
    });
  }, { threshold: 0.4 });

  skills.forEach(skill => observer.observe(skill));
});
