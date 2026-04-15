// ===== MENU RESPONSIVE =====
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        menu.classList.remove("active");
    });
});

// ===== FORM A WHATSAPP =====
const form = document.getElementById("form-reserva");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const servicio = document.getElementById("servicio").value;

    const mensaje = `Hola, quiero agendar una cita:
    
Nombre: ${nombre}
Fecha: ${fecha}
Servicio: ${servicio}`;

    const url = `https://wa.me/573000000000?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});