function setupMenu() {
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const nav = document.querySelector("#nav");


    abrir.addEventListener("click", () => {
        nav.classList.remove("invisible");
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        nav.classList.add("invisible");
    });

}

// Ejecuta el script al cargar la página
document.addEventListener("DOMContentLoaded", setupMenu);

// Reajusta los eventos después de cada transición de página
document.addEventListener("astro:afterRender", setupMenu);

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    });
  
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  }); 
