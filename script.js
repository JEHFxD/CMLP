// Selección correcta según tu HTML
const menuToggle = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
const overlay = document.getElementById("overlay");

// Si los elementos existen
if (menuToggle && nav && overlay) {

    // Abrir / cerrar menú al hacer clic en el botón
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("show");
    });

    // Cerrar menú al hacer clic fuera
    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("show");
    });

    // Cerrar menú al seleccionar un enlace
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            overlay.classList.remove("show");
        });
    });
}
