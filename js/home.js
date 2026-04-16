/* ============================================================
   CASA AURORA — home.js
============================================================ */

window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    if (!intro) return;

    // Mostrar intro con animación, luego fade out
    setTimeout(() => {
        intro.classList.add("fade-out");
    }, 2200);

    setTimeout(() => {
        intro.style.display = "none";
    }, 3200);
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar") || document.querySelector(".navbar");
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});